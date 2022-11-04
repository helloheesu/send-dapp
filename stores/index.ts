import create from "zustand";
import createInputSlice from "./input";
import createSenderInputSlice from "./senderInput";

export const useSendStore = create<Stores.Store>()((...a) => ({
  ...createInputSlice(...a),
  ...createSenderInputSlice(...a),
}));
