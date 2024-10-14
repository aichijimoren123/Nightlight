import { create } from "zustand";

type User = {
    id: string;
    name: string;
    email: string;
    avatar: string;
}


type UserStore = {
    user: User;
    setUser: (user: User) => void;
    
}

export const useUserStore = create<UserStore>((set) => ({
    user: {
        id: "",
        name: "",
        email: "",
        avatar: "",
    },
    setUser: (user) => set({ user }),
}))