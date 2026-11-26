import { create } from 'zustand';


export const useCardsNews = create(set => ({
  cards: [],
  status: {
    isError: false,
    status: '', 
    message: ''
  },
  isPreloader: false,
  getCardsNews: (cardsFind) => set({cards: cardsFind}),
  resetEmaptyCardsNews: () => set({cards: []}),
  setStatus: (status) => set({status}),
  setIsPreloader: (isPreloader) => set({isPreloader}),
}))