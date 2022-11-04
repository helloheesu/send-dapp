import {
  SigningStargateClient,
  StargateClient,
  DeliverTxResponse,
} from "@cosmjs/stargate";
import {
  DirectSecp256k1HdWallet,
  OfflineDirectSigner,
} from "@cosmjs/proto-signing";

import type { NextApiRequest, NextApiResponse } from "next";

const rpc = (process.env.RPC as string) || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { senderMnemonic, receiverAddress, tokenDenom, tokenAmount } = req.body;

  let client: StargateClient;
  try {
    client = await StargateClient.connect(rpc);
  } catch (error) {
    res.status(500).json({ error: "Could not connect to RPC" });
    return;
  }

  let signer: OfflineDirectSigner;
  let signingClient: SigningStargateClient;
  try {
    const getSignerFromMnemonic = async (): Promise<OfflineDirectSigner> => {
      return DirectSecp256k1HdWallet.fromMnemonic(senderMnemonic, {
        prefix: "cosmos",
      });
    };
    signer = await getSignerFromMnemonic();
    signingClient = await SigningStargateClient.connectWithSigner(rpc, signer);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Something went wrong on signing. Check your mnemonic." });
    return;
  }

  let result: DeliverTxResponse;
  try {
    const senderAddress = (await signer.getAccounts())[0].address;

    result = await signingClient.sendTokens(
      senderAddress,
      receiverAddress,
      [{ denom: tokenDenom, amount: tokenAmount.toString() }],
      {
        amount: [{ denom: "uatom", amount: "1000" }],
        gas: "200000",
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error:
        "Something went wrong on sending. Check your balance or recipient's address.",
    });
    return;
  }

  res.status(200).json(result);
}
