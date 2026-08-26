import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom"
import './assets/css/style.css'
import './assets/fonts/font-style.css'
import AppRoutes from "./routes/AppRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <AppRoutes/>
    </BrowserRouter>
  </StrictMode>
);
