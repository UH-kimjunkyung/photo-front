import create from "zustand";

interface StoreType {
  showModal: boolean;
  setShowModal: () => void;

  gptresData: string[];
  setGptresData: (gptresData: string[])=> void;
}

const useStore = create<StoreType>((set) => ({
  showModal: false,
  setShowModal: () => set((state) => ({ showModal: !state.showModal })),

  gptresData: [],
  setGptresData: (gptresData)=> set({ gptresData })
}));

export default useStore;
