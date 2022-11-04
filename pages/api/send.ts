import type { NextApiRequest, NextApiResponse } from "next";

const rpc = (process.env.RPC as string) || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { senderMnemonic, receiverAddress, tokenDenom, tokenAmount } = req.body;

  res
    .status(200)
    .json({ senderMnemonic, receiverAddress, tokenDenom, tokenAmount });
}
