import create from "zustand";

interface StoreType {
  imgUrl: any[];
  aiImgUrl: any[];
  visible: boolean;
  setVisible: (visible: boolean) => void;
  setAiImgUrl: (aiImgUrl: string[]) => void;
  setImgUrl: (imgUrl: string[]) => void;
  preview: any[];
  setPreview: (preview: string[]) => void;
  gptresData: string;
  setGptresData: (gptresData: string) => void;

  frameStyle: { data: string; type: string };
  setFrameStyle: (framestyle: { data: string; type: string }) => void;
}

const useStore = create<StoreType>((set) => ({
  imgUrl: [],
  aiImgUrl: [],
  preview: [],
  visible: true,
  setVisible: (visible) => set({ visible }),
  setPreview: (preview) => set({ preview }),

  setAiImgUrl: (aiImgUrl) => set({ aiImgUrl }),
  setImgUrl: (imgUrl) => set({ imgUrl }),
  gptresData: "",
  setGptresData: (gptresData) => set({ gptresData }),

  frameStyle: { data: "#FFFFFF", type: "color" },
  setFrameStyle: (frameStyle) => set({ frameStyle }),
}));

export default useStore;
