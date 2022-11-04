import create from "zustand";

interface SendStore {
  senderMnemonic: string;
  receiverAddress: string;
  token: {
    denom: string;
    amount: number;
  };
  setSenderMnemonic: (mnemonic: string) => void;
  setReceiverAddress: (address: string) => void;
  setToken: (token: { denom: string; amount: number }) => void;
}

export const useSendStore = create<SendStore>()((set) => ({
  senderMnemonic: "",
  receiverAddress: "",
  token: {
    denom: "",
    amount: 0,
  },
  setSenderMnemonic: (mnemonic: string) => set({ senderMnemonic: mnemonic }),
  setReceiverAddress: (address: string) => set({ receiverAddress: address }),
  setToken: (token: { denom: string; amount: number }) => set({ token: token }),
}));
