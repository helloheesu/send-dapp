import { useSendStore } from "@/stores";
import { useMemo, useState } from "react";
import { Modal } from "../Portal";
import styles from "./SendButton.module.css";

const SendButton = () => {
  const mnemonicWords = useSendStore((state) => state.mnemonicWords);
  const recipientAddress = useSendStore((state) => state.recipientAddress);
  const token = useSendStore((state) => state.token);

  const senderMnemonic = useMemo(() => {
    return mnemonicWords.join(" ");
  }, [mnemonicWords]);

  const [isSending, setIsSending] = useState(false);

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
      {isSending && <Modal>Sending..!</Modal>}
    </>
  );
};

export default SendButton;
