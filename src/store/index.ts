import { create } from "zustand";
interface Appstore {
  loading: boolean;
  confirmBooking: boolean;
  setLoading: (value: boolean) => void;
  setConfirmBooking: (value: boolean) => void;
}

export const useAppStore = create<Appstore>()((set) => ({
  loading: false,
  confirmBooking: false,
  setLoading: (value: boolean) => set({ loading: value }),
  setConfirmBooking: (value: boolean) => set({ confirmBooking: value }),
}));
