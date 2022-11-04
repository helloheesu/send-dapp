import { useSendStore } from "@/stores";
import type { MnemonicLength } from "stores/senderInput";

const inputId = "sender-mnemonic";
const lengthId = "mnemonic-length";

const SenderInput = () => {
  const mnemonicWords = useSendStore((state) => state.mnemonicWords);
  const setMnemonicWord = useSendStore((state) => state.setMnemonicWord);

  const mnemonicLength = useSendStore((state) => state.mnemonicLength);
  const setMnemonicLength = useSendStore((state) => state.setMnemonicLength);

  const focusedInputIndex = useSendStore((state) => state.focusedInputIndex);
  const setFocusedInputIndex = useSendStore(
    (state) => state.setFocusedInputIndex
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const words = event.target.value.split(/\s/);
    words.forEach((word, index) => {
      setMnemonicWord(word, index + focusedInputIndex);
    });
  };

  return (
    <div>
      <label htmlFor={lengthId}>length:</label>
      <select
        id={lengthId}
        value={mnemonicLength}
        onChange={(event) => {
          setMnemonicLength(Number(event.target.value) as MnemonicLength);
        }}
      >
        <option value={12}>12</option>
        <option value={24}>24</option>
      </select>
      <label htmlFor={inputId}>Sender Mnemonic</label>
      {mnemonicWords.map((word, index) => (
        <input
          key={index}
          id={inputId}
          type="text"
          value={word}
          onChange={onChange}
          onFocus={() => {
            setFocusedInputIndex(index);
          }}
        />
      ))}
      <div>{mnemonicWords.join(" ")}</div>
    </div>
  );
};

export default SenderInput;
