import { useContext, useSyncExternalStore } from "react";
import { SelectedStoreApiContext } from "../../context";
import { Section } from "../../../components/Section";
import { JSONRenderer } from "../../../components/JSONRenderer";

export const CurrentState: React.FC = () => {
  const api = useContext(SelectedStoreApiContext);
  const state = useSyncExternalStore<any>(
    api!.subscribe,
    api!.getState,
    api!.getInitialState
  );

  return (
    <Section title="Current State" style={{ gridArea: "currentState" }}>
      <JSONRenderer state={state} onEdit={(state) => api?.setState(state)} />
    </Section>
  );
};
