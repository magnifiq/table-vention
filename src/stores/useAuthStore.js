import { create } from "zustand"

import createSelectors from "./createSelectors"

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const useAuthStore = create((set) => ({
    user: null,
    isFetching: true,
    setUser: (user) => set({ user }),
    setIsFetching: (isFetching) => set({ isFetching }),
    initialize: () => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            set({ user, isFetching: false });
        });
        return unsubscribe;
    }
}))

const useAuthStoreSelectors = createSelectors(useAuthStore)

export default useAuthStoreSelectors