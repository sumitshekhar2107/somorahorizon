import brandMark from "../assets/Landing_page/logo1_nobg.png";
import wordmark from "../assets/Landing_page/logo_nobg.png";

const navItems = [
  "Home",
  "Shop",
  "Our Story",
  "The Bilona Way",
  "Blog",
  "Contact Us",
];

export function Header() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-10 flex h-[104px] w-full items-center gap-[38px] bg-[#fdfcf9] px-12 pb-2.5 pt-3 font-primary shadow-[0_2px_10px_rgba(1,17,59,0.06)] max-[1000px]:gap-[18px] max-[1000px]:px-8 max-[760px]:h-[84px] max-[760px]:justify-between max-[760px]:px-5 max-[760px]:py-2">
        <a
          className="flex h-[84px] w-[278px] items-center no-underline max-[1000px]:w-[230px] max-[760px]:w-[204px]"
          href="#home"
          aria-label="SomoRa Horizon home"
        >
          <img
            className="h-[82px] w-[82px] object-contain max-[1000px]:h-[66px] max-[1000px]:w-[66px] max-[760px]:h-[57px] max-[760px]:w-[57px]"
            src={brandMark}
            alt=""
          />
          <img
            className="-ml-2.5 h-auto w-[190px] object-contain max-[1000px]:w-[166px] max-[760px]:w-[154px]"
            src={wordmark}
            alt="SomoRa Horizon LLP"
          />
        </a>

        <nav
          className="flex flex-1 items-center justify-center gap-[clamp(22px,2.7vw,39px)] whitespace-nowrap max-[1000px]:gap-[18px] max-[760px]:hidden"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              className="inline-flex items-center gap-[7px] text-base font-semibold text-[#081b45] no-underline hover:text-[#c00d12] focus-visible:text-[#c00d12]"
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              key={item}
            >
              {item}
              {item === "Shop" && (
                <span
                  className="h-[7px] w-[7px] -translate-y-0.5 rotate-45 border-b-2 border-r-2 border-current"
                  aria-hidden="true"
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-4 max-[760px]:gap-2">
          <button
            className="flex w-10 cursor-pointer flex-col items-center gap-1 border-0 bg-transparent p-0 text-[13px] leading-none text-[#081b45] hover:text-[#c00d12] focus-visible:text-[#c00d12] max-[760px]:w-8 max-[760px]:text-[11px]"
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
            className="flex w-10 cursor-pointer flex-col items-center gap-1 border-0 bg-transparent p-0 text-[13px] leading-none text-[#081b45] hover:text-[#c00d12] focus-visible:text-[#c00d12] max-[760px]:w-8 max-[760px]:text-[11px]"
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
