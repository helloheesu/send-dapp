import {
  RecipientInput,
  SendButton,
  SenderInput,
  TokenInput,
} from "@/components/SendForm";
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
