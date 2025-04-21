import "./App.css";
import { Board } from "./components/Board";
// import { useState } from "react";
// import { Flex } from "@chakra-ui/react";
// import { Counter } from "./components/Counter";

function App() {
  // const [count, setCount] = useState(0);

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
      {/* <Flex direction="column"> */}
      <Board />
      {/* </Flex> */}
    </div>
  );
}

export default App;
