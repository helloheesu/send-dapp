const inputId = "sender-mnemonic";

const SenderInput = () => {
  return (
    <div>
      <label htmlFor={inputId}>Sender Mnemonic</label>
      <textarea id={inputId} />
    </div>
  );
};

export default SenderInput;
