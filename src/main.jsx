import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'remixicon/fonts/remixicon.css'
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom"
import './assets/css/style.css'
import './assets/fonts/font-style.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
