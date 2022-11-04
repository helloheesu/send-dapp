import { fillArray } from "utils";
import { StateCreator } from "zustand";
import type { SendSlice } from "./send";

export const mnemonicLengths = [12, 24] as const;
const initialMnemonicLength = mnemonicLengths[0];
export type MnemonicLength = typeof mnemonicLengths[number];

export const getNextMnemonicLength = (length: number) => {
  if (length <= 12) {
    return 12;
  }
  return 24;
};

export interface SenderInputSlice {
  mnemonicLength: MnemonicLength;
  setMnemonicLength: (length: MnemonicLength) => void;

  mnemonicWords: string[];
  setMnemonicWord: (word: string, index: number) => void;

  focusedInputIndex: number;
  setFocusedInputIndex: (index: number) => void;
}

const createSenderInputSlice: StateCreator<
  SenderInputSlice & SendSlice,
  [],
  [],
  SenderInputSlice
> = (set, get) => ({
  mnemonicLength: initialMnemonicLength,
  setMnemonicLength: (length) => {
    const mnemonicWords = fillArray(length, get().mnemonicWords);
    set({ mnemonicLength: length, mnemonicWords });
  },

  mnemonicWords: new Array(initialMnemonicLength).fill(""),
  setMnemonicWord: (word, index) => {
    set((state) => {
      if (index >= state.mnemonicLength) {
        return { mnemonicWords: state.mnemonicWords };
      }

      const words = [...state.mnemonicWords];
      words[index] = word;

      return { mnemonicWords: words };
    });
  },

  focusedInputIndex: 0,
  setFocusedInputIndex: (index) => set({ focusedInputIndex: index }),
});

export default createSenderInputSlice;
