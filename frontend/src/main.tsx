import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <section className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Somora Horizon
        </p>
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          A fresh horizon starts here.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          Your React, Vite, TypeScript, and Tailwind frontend is ready for the
          next idea.
        </p>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
