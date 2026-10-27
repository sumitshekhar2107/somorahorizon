import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { LandingSections } from "./components/LandingSections";
import { QualityPage } from "./components/QualityPage";
import { ManufacturerPage } from "./components/ManufacturerPage";
import { currentPage } from "./siteNavigation";
import "./index.css";

function App() {
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    const updatePage = () => {
      setPage(currentPage());
      if (["#home", "#quality"].includes(window.location.hash)) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("hashchange", updatePage);
    window.addEventListener("popstate", updatePage);
    return () => {
      window.removeEventListener("hashchange", updatePage);
      window.removeEventListener("popstate", updatePage);
    };
  }, []);

  return (
    <main className="site-shell">
      <Header />
      {page === "/manufacturer" ? (
        <ManufacturerPage />
      ) : page === "#quality" ? (
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
