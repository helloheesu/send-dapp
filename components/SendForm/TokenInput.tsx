import { useSendStore } from "@/stores";
import shallow from "zustand/shallow";
import inputStyles from "./Input.module.css";
import styles from "./TokenInput.module.css";

const inputId = "token-amount";

const TokenInput = () => {
  const { token, setToken } = useSendStore(
    (state) => ({
      token: state.token,
      setToken: state.setToken,
    }),
    shallow
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setToken({
      ...token,
      amount: parseInt(event.target.value),
    });

  return (
    <div className={inputStyles.container}>
      <div className={styles.container}>
        <label htmlFor={inputId}>Token Amount</label>
        <p className={styles.amountInput}>
          <input
            id={inputId}
            type="number"
            value={token.amount}
            onChange={onChange}
          />
          <span>{token.denom}</span>
        </p>
      </div>
    </div>
  );
};

export default TokenInput;
