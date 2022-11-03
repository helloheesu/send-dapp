import { useSendStore } from "@/stores";
import shallow from "zustand/shallow";

const inputId = "sender-mnemonic";

const SenderInput = () => {
  const { senderMnemonic, setSenderMnemonic } = useSendStore(
    (state) => ({
      senderMnemonic: state.senderMnemonic,
      setSenderMnemonic: state.setSenderMnemonic,
    }),
    shallow
  );

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setSenderMnemonic(event.target.value);

  return (
    <div>
      <label htmlFor={inputId}>Sender Mnemonic</label>
      <textarea id={inputId} value={senderMnemonic} onChange={onChange} />
    </div>
  );
};

export default SenderInput;
