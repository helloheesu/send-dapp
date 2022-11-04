import create from "zustand";

interface SendStore {
  senderMnemonic: string;
  setSenderMnemonic: (mnemonic: string) => void;

  receiverAddress: string;
  setReceiverAddress: (address: string) => void;

  token: {
    denom: string;
    amount: number;
  };
  setToken: (token: { denom: string; amount: number }) => void;
}

export const useSendStore = create<SendStore>()((set) => ({
  senderMnemonic: "",
  setSenderMnemonic: (mnemonic: string) => set({ senderMnemonic: mnemonic }),

  receiverAddress: "",
  setReceiverAddress: (address: string) => set({ receiverAddress: address }),

  token: {
    denom: "",
    amount: 0,
  },
  setToken: (token: { denom: string; amount: number }) => set({ token: token }),
}));
