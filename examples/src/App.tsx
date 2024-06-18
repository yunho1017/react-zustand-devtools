import "./App.css";
import { create } from "zustand";
import { ZustandDevtools, devtools } from "react-zustand-devtools";

const counter1 = create<{ count: number; increment(): void }>(
  devtools(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    "counter1"
  )
);
const counter2 = create<{ count: number; increment(): void }>(
  devtools(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    "counter2"
  )
);
function App() {
  const { increment, count } = counter1();
  const { increment: increment2, count: count2 } = counter2();

  return (
    <>
      <h1>React Zustand Devtools</h1>
      <div className="card">
        <p>this is counter1</p>
        <button onClick={increment}>count is {count}</button>
      </div>
      <div className="card">
        <p>this is counter2</p>
        <button onClick={increment2}>count is {count2}</button>
      </div>
      <div className="card">
        <ZustandDevtools>
          <button>Open Devtools</button>
        </ZustandDevtools>
      </div>
    </>
  );
}

export default App;
