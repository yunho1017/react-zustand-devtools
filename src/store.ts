import { StoreApi, createStore, create } from "zustand";

export const Store = createStore<{
  storeList: (StoreApi<any> & { id: string })[];
  push: (store: StoreApi<any>, id: string) => void;
  delete: (id: string) => void;
}>((set) => ({
  storeList: [],
  push: (store, id) => {
    set((state) => ({
      storeList: [...state.storeList, { ...store, id: id }],
    }));
  },

  delete: (id) => {
    set((state) => ({
      storeList: state.storeList.filter((store) => store.id !== id),
    }));
  },
}));
export const useHistoryStore = create<{
  history: Record<string, { state: any; date: number }[]>;
  push: (id: string, state: any) => void;
}>((set) => ({
  history: {},
  push: (id, state) => {
    set((storeState) => ({
      history: {
        ...storeState.history,
        [id]: [...(storeState.history[id] || []), { state, date: Date.now() }],
      },
    }));
  },
}));
