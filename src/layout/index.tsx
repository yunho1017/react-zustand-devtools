import { useMemo, useState } from "react";
import { useStore } from "zustand";
import { styled } from "goober";
import { SelectedStoreApiContext } from "./context";
import { Store } from "../store";
import { Tabs } from "../components/Tabs";
import { Details } from "./components/Details";
import { Actions } from "./components/Actions";
import { CurrentState } from "./components/CurrentState";
import { History } from "./components/History";
import { CloseButton } from "./components/CloseButton";

const Wrapper = styled("section")`
  width: 100%;
  height: 80vh;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--zd-bg-gray-800);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Content = styled("div")`
  width: 100%;
  flex: 1;
  min-height: 0;
  padding: 16px;
  box-sizing: border-box;
  gap: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content max-content max-content 1fr;
  grid-template-areas:
    "currentState details"
    "currentState actions"
    "currentState history"
    "currentState history";
`;

const _Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { storeList } = useStore(Store);
  const [selected, setSelected] = useState(storeList[0]?.id);
  const api = storeList.find((store) => store.id === selected);

  const tabs = useMemo(() => {
    return storeList.map((store) => ({
      key: store.id,
      label: store.id,
    }));
  }, [storeList]);

  return (
    <Wrapper>
      <Tabs tabs={tabs} onChangeTab={setSelected} selected={selected} />
      <Content>
        <SelectedStoreApiContext.Provider value={api}>
          {children}
        </SelectedStoreApiContext.Provider>
      </Content>
    </Wrapper>
  );
};

type CompoundedComponent = typeof _Layout & {
  Details: typeof Details;
  Actions: typeof Actions;
  CurrentState: typeof CurrentState;
  History: typeof History;
  CloseButton: typeof CloseButton;
};

const Layout = _Layout as CompoundedComponent;

Layout.Details = Details;
Layout.Actions = Actions;
Layout.CurrentState = CurrentState;
Layout.History = History;
Layout.CloseButton = CloseButton;

export { Layout };
