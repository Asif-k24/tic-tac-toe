import "./App.css";
import { Board } from "./components/Board";

function App() {
  return (
    <div>
      {/* <>
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
        </button>
        <p>
        Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        </div>
        <div>
        <Counter />
        
        </div>
      </> */}
      <Board />
    </div>
  );
}

export default App;
