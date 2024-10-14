import { create } from "zustand";

type SystemStore = {
    theme: "light" | "dark";
    setTheme: (theme: "light" | "dark") => void;

    
}

export const useSystemStore = create<SystemStore>((set) => ({
    theme: "light",
    setTheme: (theme) => set({ theme }),
}))