import { create } from "zustand";

type RegisterState = {
  open: boolean;
  unit?: string;
  openWith: (unit?: string) => void;
  close: () => void;
};

export const useRegister = create<RegisterState>((set) => ({
  open: false,
  unit: undefined,
  openWith: (unit) => set({ open: true, unit }),
  close: () => set({ open: false }),
}));
