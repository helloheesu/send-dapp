import { useSendStore } from "@/stores";
import shallow from "zustand/shallow";

const inputId = "receiver-address";

const ReceiverInput = () => {
  const { receiverAddress, setReceiverAddress } = useSendStore(
    (state) => ({
      receiverAddress: state.receiverAddress,
      setReceiverAddress: state.setReceiverAddress,
    }),
    shallow
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setReceiverAddress(event.target.value);

  return (
    <div>
      <label htmlFor={inputId}>Receiver Address</label>
      <input id={inputId} value={receiverAddress} onChange={onChange} />
    </div>
  );
};

export default ReceiverInput;
