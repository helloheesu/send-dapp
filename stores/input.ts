import { StateCreator } from "zustand";
import type { SenderInputSlice } from "./senderInput";

export interface InputSlice {
  recipientAddress: string;
  setRecipientAddress: (address: string) => void;

  token: {
    denom: string;
    amount: number;
  };
  setToken: (token: { denom: string; amount: number }) => void;
}

const createSendSlice: StateCreator<
  SenderInputSlice & InputSlice,
  [],
  [],
  InputSlice
> = (set) => ({
  recipientAddress: "",
  setRecipientAddress: (address: string) => set({ recipientAddress: address }),

  token: {
    denom: "uatom",
    amount: 0,
  },
  setToken: (token: { denom: string; amount: number }) => set({ token: token }),
});

export default createSendSlice;
