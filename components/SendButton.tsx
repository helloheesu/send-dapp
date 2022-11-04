import { useSendStore } from "@/stores";
import styles from "./SendButton.module.css";

const SendButton = () => {
  const mnemonicWords = useSendStore((state) => state.mnemonicWords);
  const receiverAddress = useSendStore((state) => state.receiverAddress);
  const token = useSendStore((state) => state.token);

  const onClick = async () => {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderMnemonic: mnemonicWords.join(" "),
        receiverAddress,
        tokenAmount: token.amount,
        tokenDenom: token.denom,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <button className={styles.buttonContainer} onClick={onClick}>
      Send
    </button>
  );
};

export default SendButton;
