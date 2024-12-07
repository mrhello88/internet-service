import { createRoot } from "react-dom/client";
import "./index.css";
import {App} from "./App.jsx";
import { InternetProvider } from "./custom-hook/context.jsx";

createRoot(document.getElementById("root")).render(
  <InternetProvider>
    <App />
  </InternetProvider> 
);
