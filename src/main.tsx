import { createRoot } from "react-dom/client";
import "./index.css";
import RouterUrl from "./router";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <RouterUrl />
    </BrowserRouter>
);
