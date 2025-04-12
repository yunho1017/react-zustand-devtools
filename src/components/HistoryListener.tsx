import { memo, useEffect, useSyncExternalStore } from "react";
import { StoreApi, useStore } from "zustand";
import { Store, useHistoryStore } from "../store";

const Listener: React.FC<{ api: StoreApi<any>; id: string }> = ({
  api,
  id,
}) => {
  const values = useSyncExternalStore(
    api.subscribe,
    api.getState,
    api.getInitialState
  );
  const pushHistory = useHistoryStore((state) => state.push);

  useEffect(() => {
    pushHistory(id, values);
  }, [values]);

  return null;
};

export const HistoryListener: React.FC = memo(() => {
  const { storeList } = useStore(Store);

  return storeList.map(({ id, ...store }) => (
    <Listener key={id} id={id} api={store} />
  ));
});
