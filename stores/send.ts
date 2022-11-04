import { StateCreator } from "zustand";
import type { SenderInputSlice } from "./senderInput";

export interface SendSlice {
  receiverAddress: string;
  setReceiverAddress: (address: string) => void;

  token: {
    denom: string;
    amount: number;
  };
  setToken: (token: { denom: string; amount: number }) => void;
}

const createSendSlice: StateCreator<
  SenderInputSlice & SendSlice,
  [],
  [],
  SendSlice
> = (set, get, store) => ({
  receiverAddress: "",
  setReceiverAddress: (address: string) => set({ receiverAddress: address }),

  token: {
    denom: "uatom",
    amount: 0,
  },
  setToken: (token: { denom: string; amount: number }) => set({ token: token }),
});

export default createSendSlice;
