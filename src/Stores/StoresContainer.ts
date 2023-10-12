import create from "zustand";

interface StoreType {
  showModal: boolean;
  setShowModal: () => void;

  gptresData: string[];
  setGptresData: (gptresData: string[]) => void;

  frameStyle: { data: string; type: string };
  setFrameStyle: (framestyle: { data: string; type: string }) => void;
}

const useStore = create<StoreType>((set) => ({
  showModal: false,
  setShowModal: () => set((state) => ({ showModal: !state.showModal })),

  gptresData: [],
  setGptresData: (gptresData) => set({ gptresData }),

  frameStyle: { data: "#FFFFFF", type: "color" },
  setFrameStyle: (frameStyle) => set({ frameStyle }),
}));

export default useStore;
