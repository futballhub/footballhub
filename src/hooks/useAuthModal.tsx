
import { create } from 'zustand';

type AuthModalStore = {
  isOpen: boolean;
  defaultTab: 'login' | 'register';
  openModal: (tab?: 'login' | 'register') => void;
  closeModal: () => void;
};

export const useAuthModal = create<AuthModalStore>((set) => ({
  isOpen: false,
  defaultTab: 'login',
  openModal: (tab = 'login') => set({ isOpen: true, defaultTab: tab }),
  closeModal: () => set({ isOpen: false }),
}));
