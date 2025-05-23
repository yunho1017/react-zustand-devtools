import { cloneElement, createElement, useState } from "react";
import { StateCreator } from "zustand";
import { setup } from "goober";

import { Store } from "./store";
import { Layout } from "./layout";
import { GlobalStyles } from "./globalStyle";
import { HistoryListener } from "./components/HistoryListener";
import { generateId } from "./helpers/generateId";
import { CurrentState } from "./components/CurrentState";
import { Details } from "./components/Details";
import { Actions } from "./components/Actions";
import { History } from "./layout/components/History";

setup(createElement);

export const ZustandDevtools: React.FC<{
  children: JSX.Element;
}> = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <GlobalStyles />
      <HistoryListener />
      {show && (
        <Layout onClose={() => setShow(false)}>
          <Layout.Left>
            <CurrentState />
          </Layout.Left>
          <Layout.Right>
            <Details />
            <Actions />
            <History />
          </Layout.Right>
        </Layout>
      )}

      {cloneElement(children, {
        ...children.props,
        onClick: (e: React.MouseEvent) => {
          setShow((_show) => !_show);
          children.props.onClick?.(e);
        },
      })}
    </>
  );
};

export function devtools<T>(
  fn: StateCreator<T>,
  id: string = generateId()
): StateCreator<T> {
  return (set, get, api) => {
    if (Store.getState().storeList.find((store) => store.id === id)) {
      Store.getState().delete(id);
    }
    Store.getState().push(api, id);
    return fn(set, get, api);
  };
}
