import { create } from "zustand";


type PermissionStore = {
    permissions: string[];
    setPermissions: (permissions: string[]) => void;
}

export const usePermissionStore = create<PermissionStore>((set) => ({
    permissions: [],
    setPermissions: (permissions) => set({ permissions }),

}))