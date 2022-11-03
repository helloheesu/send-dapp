const inputId = "receiver-address";

const ReceiverInput = () => {
  return (
    <div>
      <label htmlFor={inputId}>Receiver Address</label>
      <input id={inputId} />
    </div>
  );
};

export default ReceiverInput;
