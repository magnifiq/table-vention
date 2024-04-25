import { create } from "zustand"
import createSelectors from "./createSelectors"

export const useThemeStore = create((set) => ({
    theme: "light",
    toggleTheme: () => set((state) => ({ theme: state.theme == "light" ? "dark" : "light" })),
}))

const useThemeStoreSelectors = createSelectors(useThemeStore)

export default useThemeStoreSelectors