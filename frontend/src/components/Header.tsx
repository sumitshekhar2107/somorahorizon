import { useEffect, useState } from "react";
import somoraLogo from "../assets/Landing_page/somora_newlogo.png";

const navItems = [
  "Home",
  "Shop",
  "Our Story",
  "The Bilona Way",
  "Quality & Testing",
  "Contact Us",
];

export function Header() {
  const [activeHash, setActiveHash] = useState(
    () => window.location.hash.slice(1) || "home",
  );

  useEffect(() => {
    const updateActiveHash = () =>
      setActiveHash(window.location.hash.slice(1) || "home");

    window.addEventListener("hashchange", updateActiveHash);
    return () => window.removeEventListener("hashchange", updateActiveHash);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex w-full items-center gap-[38px] border-b border-[#e8dcc7] bg-[#fffdf8]/95 px-12 pb-2 pt-2 font-primary shadow-[0_8px_24px_rgba(61,39,29,0.07)] backdrop-blur-md max-[1000px]:gap-[18px] max-[1000px]:px-8 max-[760px]:justify-between max-[760px]:px-5 max-[760px]:py-1.5">
        <a
          className="flex h-18 w-21 shrink-0 items-center no-underline max-[760px]:h-16 max-[760px]:w-18"
          href="#home"
          aria-label="SomoRa Horizon home"
        >
          <img
            className="h-full w-full object-contain"
            src={somoraLogo}
            alt="SomoRa Horizon LLP"
          />
        </a>

        <nav
          className="flex flex-1 items-center justify-center gap-[clamp(22px,2.7vw,39px)] whitespace-nowrap max-[1000px]:gap-[18px] max-[760px]:hidden"
          aria-label="Primary navigation"
        >
          {navItems.map((item) =>
            (() => {
              const target =
                item === "Quality & Testing"
                  ? "quality"
                  : item.toLowerCase().replaceAll(" ", "-");
              const isActive = activeHash === target;

              return (
                <a
                  className={`relative inline-flex items-center gap-[7px] pb-2 text-[15px] font-semibold text-[#3d271d] no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-[#e4ad4d] after:transition-transform after:duration-300 hover:text-[#792b35] focus-visible:text-[#792b35] ${isActive ? "after:scale-x-100" : "after:scale-x-0"}`}
                  href={`#${target}`}
                  key={item}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item}
                  {item === "Shop" && (
                    <span
                      className="h-[7px] w-[7px] -translate-y-0.5 rotate-45 border-b-2 border-r-2 border-current"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })(),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-4 max-[760px]:gap-2">
          <button
            className="flex w-10 cursor-pointer flex-col items-center gap-1 border-0 bg-transparent p-0 text-[13px] leading-none text-[#3d271d] hover:text-[#792b35] focus-visible:text-[#792b35] max-[760px]:w-8 max-[760px]:text-[11px]"
            type="button"
            aria-label="Login"
          >
            <svg
              className="h-6 w-6 max-[760px]:h-5 max-[760px]:w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9.5" />
              <circle cx="12" cy="9" r="3" />
              <path d="M6.5 18c.8-2.5 2.8-3.8 5.5-3.8s4.7 1.3 5.5 3.8" />
            </svg>
            <span className="font-medium">Login</span>
          </button>
          <button
            className="flex w-10 cursor-pointer flex-col items-center gap-1 border-0 bg-transparent p-0 text-[13px] leading-none text-[#3d271d] hover:text-[#792b35] focus-visible:text-[#792b35] max-[760px]:w-8 max-[760px]:text-[11px]"
            type="button"
            aria-label="Shopping cart"
          >
            <svg
              className="h-6 w-6 max-[760px]:h-5 max-[760px]:w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 1.9-1.4L21 8H7" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
            <span className="font-medium">Cart</span>
          </button>
        </div>
      </header>
    </>
  );
}
