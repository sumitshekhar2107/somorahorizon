import heroImage from "../assets/Landing_page/hero_new_desktop.png";

const benefits = [
  {
    label: "Made from\nCow Milk",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <path d="M7 18c3-5 8-6 14-5l5 2 6-1 2 4-3 4v7l-4 3-3-4H13l-2 4-4-3v-7l-3-3 3-4Z" />
        <path d="M21 13v15M10 17l-3-5m20 3 4-4M15 28v5m11-5v5" />
      </svg>
    ),
  },
  {
    label: "Bilona\nMethod",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <path d="M14 5c8 6 9 10 1 15 8 5 7 9-1 15M26 5c-8 6-9 10-1 15-8 5-7 9 1 15" />
        <path d="M11 7h18M11 33h18M15 20h10" />
      </svg>
    ),
  },
  {
    label: "Rich in\nAroma & Taste",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <path d="M30 6C17 7 10 14 10 25c0 5 3 9 8 9 11 0 17-13 12-28Z" />
        <path d="M11 32c4-7 8-12 15-17M18 23c1 0 3 .5 4 2M20 18c1 0 3 .5 4 2" />
      </svg>
    ),
  },
  {
    label: "No Preservatives\nNo Additives",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="13" />
        <path d="m11 11 18 18M25 12c-2 3-3 6-3 8 0 2 1 4 3 5M15 28c2-3 3-6 3-8 0-2-1-4-3-5" />
      </svg>
    ),
  },
];

const trustItems = [
  {
    title: "100% Pure",
    description: "No chemicals or preservatives",
  },
  {
    title: "Handcrafted",
    description: "Using traditional Bilona method",
  },
  {
    title: "Nutrient Rich",
    description: "Goodness of A2 Cow Milk",
  },
  {
    title: "Lab Tested",
    description: "For purity and quality",
  },
];

export function HeroSection() {
  return (
    <section
      className="hero-section relative isolate overflow-hidden bg-[#f8f5ee]"
      aria-labelledby="hero-title"
    >
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center max-[760px]:object-[54%_center]"
        src={heroImage}
        alt="SomoRa pure cow ghee jar made from the Bilona method"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(253,252,249,1)_0%,rgba(253,252,249,0.9)_35%,rgba(253,252,249,0.12)_48%,rgba(253,252,249,0)_56%)] max-[760px]:bg-[linear-gradient(90deg,rgba(253,252,249,0.97)_0%,rgba(253,252,249,0.86)_55%,rgba(253,252,249,0)_100%)]" />

      <div className="hero-content mx-auto flex w-full max-w-[1440px] items-center px-16 pb-14 pt-8 max-[1200px]:pb-10 max-[1000px]:px-8 max-[760px]:items-start max-[760px]:px-6 max-[760px]:pt-10">
        <div className="relative -translate-y-12 max-w-[445px] text-[#071b45] max-[760px]:translate-y-0 max-[760px]:max-w-[330px]">
          <p className="inline-flex rounded-md border border-[#c99751] px-2 py-1 font-secondary text-xs font-bold tracking-wide text-[#a26017] max-[760px]:text-[11px]">
            MADE FROM BILONA METHOD
          </p>
          <h1
            id="hero-title"
            className="mt-6 font-secondary text-[48px] font-bold leading-[1.2] text-[#061b45] max-[1200px]:text-[42px] max-[760px]:mt-4 max-[760px]:text-[34px]"
          >
            PURE.
            <br />
            TRADITIONAL.
            <br />
            NOURISHING.
          </h1>
          <p className="mt-4 max-w-[350px] text-[16px] font-medium leading-7 text-[#203255] max-[1200px]:text-[15px] max-[760px]:text-sm max-[760px]:leading-6">
            SomoRa Pure Cow Ghee is crafted using the traditional Bilona method
            from fresh cow milk. Rich in aroma, nutrients and purity.
          </p>

          <div className="mt-10 flex max-w-[470px] divide-x divide-[#d8c8ae] max-[1200px]:mt-8 max-[760px]:mt-7 max-[760px]:grid max-[760px]:grid-cols-2 max-[760px]:divide-x-0 max-[760px]:gap-y-5">
            {benefits.map((benefit) => (
              <div
                className="w-[112px] px-3 first:pl-0 max-[1200px]:w-[104px] max-[760px]:w-auto max-[760px]:px-2 max-[760px]:first:pl-0"
                key={benefit.label}
              >
                <div className="h-10 w-10 text-[#bc741b]">{benefit.icon}</div>
                <p className="mt-2 whitespace-pre-line text-[12px] font-semibold leading-5 text-[#213557] max-[760px]:text-[11px]">
                  {benefit.label === "No Preservatives\nNo Additives" ? (
                    <>
                      <span className="block whitespace-nowrap">
                        No Preservatives
                      </span>
                      <span className="block whitespace-nowrap">
                        No Additives
                      </span>
                    </>
                  ) : (
                    benefit.label
                  )}
                </p>
              </div>
            ))}
          </div>

          <a
            className="relative mt-7 inline-flex h-14 min-w-48 items-center justify-center gap-4 rounded-md bg-[linear-gradient(90deg,#B00000_0%,#F43905_100%)] px-7 text-sm font-bold text-white no-underline shadow-[0_6px_14px_rgba(211,16,9,0.22)] transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d41009] max-[760px]:h-12"
            href="#shop"
          >
            COMING SOON
            <span
              className="text-2xl font-normal leading-none"
              aria-hidden="true"
            >
              &#8594;
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 z-10 grid h-[82px] w-[calc(100%-128px)] max-w-[1312px] -translate-x-1/2 grid-cols-4 rounded-t-[22px] bg-white/95 px-8 shadow-[0_-4px_18px_rgba(7,27,69,0.08)] max-[1000px]:w-[calc(100%-64px)] max-[1000px]:max-w-none max-[760px]:h-auto max-[760px]:w-[calc(100%-48px)] max-[760px]:grid-cols-2 max-[760px]:gap-y-3 max-[760px]:rounded-t-xl max-[760px]:px-4 max-[760px]:py-4">
        {trustItems.map((item, index) => (
          <div
            className="flex items-center gap-3 px-5 first:pl-0 last:pr-0 [&:not(:first-child)]:border-l [&:not(:first-child)]:border-[#eadfcf] max-[760px]:px-2 max-[760px]:[&:not(:first-child)]:border-l-0"
            key={item.title}
          >
            <svg
              className="h-7 w-7 shrink-0 text-[#c47b1f]"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              {index === 0 && (
                <>
                  <path d="M7 20c0-6 4-10 9-10s9 4 9 10" />
                  <path d="M10 20v5h12v-5M13 10V7h6v3" />
                  <path d="M12 25c0-3 2-5 4-5s4 2 4 5" />
                </>
              )}
              {index === 1 && (
                <>
                  <path d="M9 14c0-5 3-8 7-8s7 3 7 8v10H9V14Z" />
                  <path d="M12 14h8M13 10l-2-3m8 3 2-3M12 24c1-4 7-4 8 0" />
                </>
              )}
              {index === 2 && (
                <>
                  <path d="M16 5c7 3 10 8 8 15-1 5-5 7-8 7s-7-2-8-7C6 13 9 8 16 5Z" />
                  <path d="M11 16h10M13 12h6M13 21h6" />
                </>
              )}
              {index === 3 && (
                <>
                  <path d="M16 5c4 5 6 8 6 12a6 6 0 0 1-12 0c0-4 2-7 6-12Z" />
                  <path d="M12 25h8M16 21v4M13 13h6" />
                </>
              )}
            </svg>
            <div>
              <p className="text-xs font-bold text-[#162a50]">{item.title}</p>
              <p className="mt-0.5 text-[10px] font-medium text-[#455775]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
