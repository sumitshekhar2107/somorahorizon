import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { LandingSections } from "./components/LandingSections";
import { QualityPage } from "./components/QualityPage";
import "./index.css";

function App() {
  const [isQualityPage, setIsQualityPage] = useState(
    () => window.location.hash === "#quality",
  );

  useEffect(() => {
    const updatePage = () =>
      setIsQualityPage(window.location.hash === "#quality");

    window.addEventListener("hashchange", updatePage);
    return () => window.removeEventListener("hashchange", updatePage);
  }, []);

  return (
    <main className="site-shell">
      <Header />
      {isQualityPage ? (
        <QualityPage />
      ) : (
        <>
          <HeroSection />
          <LandingSections />
        </>
      )}
      <Footer />
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
