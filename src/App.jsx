import "./App.css";
import { Game } from "./components/Game";
import { Board } from "./components/Board";
import { prac_file as Prac } from "./components/prac_file";

function App() {
  return (
    <div>
      <>
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
      </>
      <Board />
      <Game />
      {/* <Prac /> */}
    </div>
  );
}

export default App;
