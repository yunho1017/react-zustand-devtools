import { createContext } from "react";
import { StoreApi } from "zustand";

export const SelectedStoreApiContext = createContext<
  (StoreApi<any> & { id: string }) | undefined
>(undefined);
