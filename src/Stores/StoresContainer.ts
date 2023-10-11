import create from "zustand";

interface StoreType {
  showModal: boolean;
  setShowModal: () => void;
}

const useStore = create<StoreType>((set) => ({
  showModal: false,

  setShowModal: () => set((state) => ({ showModal: !state.showModal })),
}));
export default useStore;
