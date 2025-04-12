import { useContext, useSyncExternalStore } from "react";
import { SelectedStoreApiContext } from "../../layout/context";
import { Section } from "../ui/Section";
import { JSONRenderer } from "../ui/JSONRenderer";

export const CurrentState: React.FC = () => {
  const api = useContext(SelectedStoreApiContext);
  const state = useSyncExternalStore<any>(
    api!.subscribe,
    api!.getState,
    api!.getInitialState
  );

  return (
    <Section
      title="Current State"
      icon={
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z"
            fill="currentColor"
          />
          <path
            d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z"
            fill="currentColor"
          />
        </svg>
      }
      style={{ gridArea: "currentState", height: "100%" }}
    >
      <JSONRenderer state={state} onEdit={(state) => api?.setState(state)} />
    </Section>
  );
};
