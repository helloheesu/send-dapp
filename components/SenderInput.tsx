import { useSendStore } from "@/stores";
import { MnemonicLength, mnemonicLengths } from "stores/senderInput";
import styles from "./SenderInput.module.css";

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
    <div className={styles.container}>
      <div className={styles.header}>
        <label htmlFor={inputId}>Sender Mnemonic</label>
        <div className={styles.length}>
          <select
            id={lengthId}
            value={mnemonicLength}
            onChange={(event) => {
              setMnemonicLength(Number(event.target.value) as MnemonicLength);
            }}
          >
            {mnemonicLengths.map((length) => (
              <option value={length}>{length} words</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.words}>
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
      </div>
      <div>{mnemonicWords.join(" ")}</div>
    </div>
  );
};

export default SenderInput;
