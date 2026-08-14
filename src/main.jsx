import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import 'remixicon/fonts/remixicon.css'
import "./index.css";
=======
>>>>>>> 40535739d585f6fff2e90d4f7f05688ba2f48dee
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom"
import './assets/css/style.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
