import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import "./index.css";

function App() {
  return (
    <main className="site-shell">
      <Header />
      <HeroSection />
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
