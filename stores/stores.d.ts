namespace Stores {
  type Store = InputSlice & SenderInputSlice;

  interface InputSlice {
    recipientAddress: string;
    setRecipientAddress: (address: string) => void;

    token: {
      denom: string;
      amount: number;
    };
    setToken: (token: { denom: string; amount: number }) => void;
  }

  interface SenderInputSlice {
    mnemonicLength: MnemonicLength;
    setMnemonicLength: (length: MnemonicLength) => void;

    mnemonicWords: string[];
    setMnemonicWord: (word: string, index: number) => void;

    focusedInputIndex: number;
    setFocusedInputIndex: (index: number) => void;
  }
}
