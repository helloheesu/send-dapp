import create from "zustand";
import createSendSlice, { SendSlice } from "./send";
import createSenderInputSlice, { SenderInputSlice } from "./senderInput";

export const useSendStore = create<SendSlice & SenderInputSlice>()((...a) => ({
  ...createSendSlice(...a),
  ...createSenderInputSlice(...a),
}));
