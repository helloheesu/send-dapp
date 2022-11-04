import RecipientInput from "@/components/RecipientInput";
import SendButton from "@/components/SendButton";
import SenderInput from "@/components/SenderInput";
import TokenInput from "@/components/TokenInput";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.fullContainer}>
      <main className={styles.container}>
        <SenderInput />
        <RecipientInput />
        <TokenInput />
        <SendButton />
      </main>
    </div>
  );
}
