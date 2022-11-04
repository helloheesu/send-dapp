import { useSendStore } from "@/stores";
import shallow from "zustand/shallow";
import inputStyles from "./Input.module.css";

const inputId = "recipient-address";

const RecipientInput = () => {
  const { recipientAddress, setRecipientAddress } = useSendStore(
    (state) => ({
      recipientAddress: state.recipientAddress,
      setRecipientAddress: state.setRecipientAddress,
    }),
    shallow
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setRecipientAddress(event.target.value);

  return (
    <div className={inputStyles.container}>
      <label htmlFor={inputId}>Recipient Address</label>
      <input id={inputId} value={recipientAddress} onChange={onChange} />
    </div>
  );
};

export default RecipientInput;
