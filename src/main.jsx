import "./index.css";
import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { ChakraProvider } from "@chakra-ui/react";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  // <ChakraProvider>
    // <StrictMode>
      <App />
    /* </StrictMode> */
  /* </ChakraProvider> */
);
