import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import ResumeForm from "./components/Form";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ResumeForm />
  </StrictMode>
);
