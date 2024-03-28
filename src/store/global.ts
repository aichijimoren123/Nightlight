import { create } from "zustand";

type GlobalConfigs = {
  theme: "light" | "dark";
  locale: string;
  toggleTheme: () => void;
};

export const useGlobalStore = create<GlobalConfigs>()((set) => ({
  theme: "light",
  locale: "en",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));
