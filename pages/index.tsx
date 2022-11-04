import ReceiverInput from "@/components/ReceiverInput";
import SendButton from "@/components/SendButton";
import SenderInput from "@/components/SenderInput";
import TokenInput from "@/components/TokenInput";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.fullContainer}>
      <main className={styles.container}>
        <SenderInput />
        <ReceiverInput />
        <TokenInput />
        <SendButton />
      </main>
    </div>
  );
}
