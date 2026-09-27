import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import PodcastPage from "./pages/PodcastPage.tsx";

const path = window.location.pathname.replace(/\/+$/, "") || "/";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {path === "/podcasts" ? <PodcastPage /> : <App />}
  </StrictMode>,
);
