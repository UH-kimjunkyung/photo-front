import create from "zustand";

interface StoreType {
  imgUrl: string[];
  setImgUrl: (imgUrl: string[]) => void;
  gptresData: string[];
  setGptresData: (gptresData: string[]) => void;
}

const useStore = create<StoreType>((set) => ({
  imgUrl: ["eaae7a69-603b-46e3-be33-85a6060d603d", "", "", ""],
  setImgUrl: (imgUrl) => set({ imgUrl }),
  gptresData: [],
  setGptresData: (gptresData) => set({ gptresData }),
}));

export default useStore;
