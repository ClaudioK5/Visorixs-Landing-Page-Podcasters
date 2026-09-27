import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PodcastPage from "./pages/PodcastPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PodcastPage />
  </StrictMode>,
);
