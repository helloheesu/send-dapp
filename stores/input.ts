import { StateCreator } from "zustand";

const createSendSlice: StateCreator<Stores.Store, [], [], Stores.InputSlice> = (
  set
) => ({
  recipientAddress: "",
  setRecipientAddress: (address: string) => set({ recipientAddress: address }),

  token: {
    denom: "uatom",
    amount: 0,
  },
  setToken: (token: { denom: string; amount: number }) => set({ token: token }),
});

export default createSendSlice;
