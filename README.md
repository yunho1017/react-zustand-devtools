# react-zustand-devtools

[![npm](https://img.shields.io/npm/v/react-zustand-devtools)](https://www.npmjs.com/package/react-zustand-devtools)
[![size](https://img.shields.io/bundlephobia/minzip/react-zustand-devtools)](https://bundlephobia.com/result?p=react-zustand-devtools)

use React Context with selector

## Introduction

Zustand Devtools uses Redux devtools.
Redux Devtools is great, but you can't debug multiple zustand stores.

Using this library, you can debug multiple stores

## Install

This package has peer dependencies, which you need to install by yourself.

```bash
// npm
npm install react-zustand-devtools react zustand

// yarn
yarn add react-zustand-devtools react zustand
```

## Usage

```ts
// store.ts
import { create } from "zustand";
import { devtools } from "react-zustand-devtools";

const useStore = create(
  devtools((set) => ({
    ...Store,
  }))
);
```

```ts
// component.tsx
import { ZustandDevtools } from "react-zustand-devtools";

const Component = () => {
  return (
    <ZustandDevtools>
      <button>open devtools</button>
    </ZustandDevtools>
  );
};
```
