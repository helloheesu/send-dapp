import ReceiverInput from "@/components/ReceiverInput";
import SendButton from "@/components/SendButton";
import SenderInput from "@/components/SenderInput";

export default function Home() {
  return (
    <main>
      <SenderInput />
      <ReceiverInput />
      <SendButton />
    </main>
  );
}
