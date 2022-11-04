import { useSendStore } from "@/stores";
import { useMemo, useState } from "react";
import { Modal } from "../Portal";
import Spinner from "../Spinner";
import styles from "./SendButton.module.css";

const SendButton = () => {
  const mnemonicWords = useSendStore((state) => state.mnemonicWords);
  const recipientAddress = useSendStore((state) => state.recipientAddress);
  const token = useSendStore((state) => state.token);

  const senderMnemonic = useMemo(() => {
    return mnemonicWords.join(" ");
  }, [mnemonicWords]);

  const [isSending, setIsSending] = useState(true);

  const sendTokens = async () => {
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
    console.log(data);
  };

  const onClick = async () => {
    setIsSending(true);
    await sendTokens();
    setIsSending(false);
  };

  return (
    <>
      <button
        className={styles.buttonContainer}
        onClick={onClick}
        disabled={isSending}
      >
        {isSending ? "Sending..." : "Send"}
      </button>
      {isSending && (
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
    </>
  );
};

export default SendButton;
