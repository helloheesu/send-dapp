import create from "zustand";
import createInputSlice, { InputSlice } from "./input";
import createSenderInputSlice, { SenderInputSlice } from "./senderInput";

export const useSendStore = create<InputSlice & SenderInputSlice>()((...a) => ({
  ...createInputSlice(...a),
  ...createSenderInputSlice(...a),
}));
