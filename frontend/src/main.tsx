import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import "./index.css";

function App() {
  return (
    <main className="site-shell">
      <Header />
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
