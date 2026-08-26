import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import 'remixicon/fonts/remixicon.css'
=======
>>>>>>> 64d5550bf50e5fd4512fc43132dccf5015a62180
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
