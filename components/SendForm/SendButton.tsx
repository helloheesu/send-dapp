import { useSendStore } from "@/stores";
import { useMemo, useState } from "react";
import { Modal } from "../Portal";
import Spinner from "../Spinner";
import styles from "./SendButton.module.css";

type SendingState = "idle" | "sending" | "sent" | "error";
interface SendResult {
  txHash: string;
  gasUsed: number;
}

const SendButton = () => {
  const mnemonicWords = useSendStore((state) => state.mnemonicWords);
  const recipientAddress = useSendStore((state) => state.recipientAddress);
  const token = useSendStore((state) => state.token);
  const resetSendInputs = useSendStore((state) => state.resetSendInputs);

  const senderMnemonic = useMemo(() => {
    return mnemonicWords.join(" ");
  }, [mnemonicWords]);

  const [sendingState, setSendingState] = useState<SendingState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [sendResult, setSendResult] = useState<SendResult>();

  const sendTokens = async (): Promise<SendResult> => {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderMnemonic,
        recipientAddress,
        tokenAmount: token.amount,
        tokenDenom: token.denom,
      }),
    });
    const data = await response.json();

    if (response.status !== 200) {
      throw new Error(data.error);
    }

    return {
      txHash: data.transactionHash,
      gasUsed: data.gasUsed,
    };
  };

  const onClickSendButton = async () => {
    setSendingState("sending");
    try {
      const sendResult = await sendTokens();
      setSendResult(sendResult);
    } catch (error) {
      setSendingState("error");
      setErrorMessage((error as Error).message);
      return;
    }
    setSendingState("sent");
  };

  const onClickCloseButton = () => {
    setSendingState("idle");
    setErrorMessage("");
    setSendResult(undefined);

    resetSendInputs();
  };

  return (
    <>
      <button
        className={styles.buttonContainer}
        onClick={onClickSendButton}
        disabled={
          sendingState !== "idle" ||
          !token.amount ||
          !recipientAddress ||
          !senderMnemonic
        }
      >
        {sendingState === "idle" ? "Send" : "Sending..."}
      </button>
      {sendingState === "sending" && (
        <Modal>
          <h2>Sending Tokens...</h2>
          <p>
            from: <input value={senderMnemonic} disabled />
          </p>
          <p>
            to: <input value={recipientAddress} disabled />
          </p>
          <p>
            amount: <input value={token.amount} disabled /> {token.denom}
          </p>
          <Spinner />
        </Modal>
      )}
      {sendingState === "sent" && sendResult && (
        <Modal>
          <h2>Success!</h2>
          <p>txHash: {sendResult.txHash}</p>
          <p>gasUsed: {sendResult.gasUsed}</p>
          <button onClick={onClickCloseButton}>Close</button>
        </Modal>
      )}
      {sendingState === "error" && (
        <Modal>
          <h2>Error!</h2>
          <p>{errorMessage}</p>
          <button onClick={onClickCloseButton}>Close</button>
        </Modal>
      )}
    </>
  );
};

export default SendButton;
