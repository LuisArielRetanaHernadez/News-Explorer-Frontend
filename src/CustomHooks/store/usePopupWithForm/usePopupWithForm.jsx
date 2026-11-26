import { create } from 'zustand'

export const usePopupLoginForm = create(set => ({
    isOpen: false,
    toggleOpen: () => set(state => ({isOpen: !state.isOpen}))
}))
