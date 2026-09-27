import productScene from "../assets/Landing_page/hero_section_image.png";
import storyImage from "../assets/Quality Page/quality_bg.png";

type MarkName =
  | "milk"
  | "curd"
  | "churn"
  | "flame"
  | "purity"
  | "craft"
  | "care"
  | "tested";

function Mark({
  name,
  className = "",
}: {
  name: MarkName;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "milk" && (
        <>
          <path d="M18 8h12l-2 8 7 8v15H13V24l7-8-2-8Z" />
          <path d="M18 8h12M18 27h17M24 16l-4 7h8l-4 7" />
        </>
      )}
      {name === "curd" && (
        <>
          <path d="M13 18h22l-2 22H15l-2-22Z" />
          <path d="M11 18h26M18 13c2-3 4-4 7-4s5 1 7 4M21 26c2-2 5-2 7 0" />
        </>
      )}
      {name === "churn" && (
        <>
          <path d="M15 18h18l-2 21H17l-2-21Z" />
          <path d="M24 7v23m-7-16 7 5 7-5m-7 5-7 5m7-5 7 5" />
          <path d="M19 11h10" />
        </>
      )}
      {name === "flame" && (
        <>
          <path d="M24 6c5 8 10 12 10 21a10 10 0 1 1-20 0c0-5 3-9 7-13 0 5 2 7 4 8 2-5 2-10-1-16Z" />
          <path d="M24 26c3 3 4 5 4 8a4 4 0 0 1-8 0c0-2 1-4 4-8Z" />
        </>
      )}
      {name === "purity" && (
        <>
          <path d="m24 6 14 6v10c0 9-6 15-14 20-8-5-14-11-14-20V12l14-6Z" />
          <path d="m17 24 5 5 10-11" />
        </>
      )}
      {name === "craft" && (
        <>
          <path d="M11 38V21l13-12 13 12v17H11Z" />
          <path d="M19 38V26h10v12M8 21l16-14 16 14" />
          <path d="M17 18h.1m13 0h.1" />
        </>
      )}
      {name === "care" && (
        <>
          <path d="M24 39s-15-8-15-20a8 8 0 0 1 15-4 8 8 0 0 1 15 4c0 12-15 20-15 20Z" />
          <path d="M17 25h4l3-6 4 10 3-4h4" />
        </>
      )}
      {name === "tested" && (
        <>
          <path d="M18 7h12M21 7v13L11 36h26L27 20V7" />
          <path d="M16 29h16M21 24h6" />
          <path d="m21 33 2 2 5-5" />
        </>
      )}
    </svg>
  );
}

const processSteps: {
  number: string;
  title: string;
  copy: string;
  mark: MarkName;
}[] = [
  {
    number: "01",
    title: "Fresh A2 milk",
    copy: "Made from carefully sourced cow milk.",
    mark: "milk",
  },
  {
    number: "02",
    title: "Curd, set slowly",
    copy: "Milk is cultured and allowed to set naturally.",
    mark: "curd",
  },
  {
    number: "03",
    title: "Traditionally churned",
    copy: "Curd is hand-churned using the Bilona method.",
    mark: "churn",
  },
  {
    number: "04",
    title: "Gently clarified",
    copy: "Butter is slowly heated into fragrant golden ghee.",
    mark: "flame",
  },
];

const values: { title: string; copy: string; mark: MarkName }[] = [
  {
    title: "A2 Cow Milk",
    copy: "Made with the goodness of carefully sourced cow milk.",
    mark: "milk",
  },
  {
    title: "Traditional Bilona",
    copy: "A time-honoured process, crafted patiently in small steps.",
    mark: "craft",
  },
  {
    title: "Pure by Nature",
    copy: "No preservatives or additives—just honest ghee.",
    mark: "purity",
  },
  {
    title: "Made with Care",
    copy: "Every jar reflects our respect for quality and tradition.",
    mark: "care",
  },
];

export function LandingSections() {
  return (
    <>
      <section
        id="shop"
        className="bg-[#fbf7ef] px-6 py-24 text-[#3d271d] max-[760px]:pb-16 max-[760px]:pt-3"
      >
        <div
          id="all-products"
          className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[0.9fr_1.1fr] max-[760px]:gap-9"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b6b2e]">
              The SomoRa signature
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-[#3d271d] max-[760px]:text-3xl">
              A little golden goodness, made the traditional way.
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#705c4b]">
              Discover SomoRa A2 Cow Ghee: slowly prepared with the Bilona
              method for a rich aroma, comforting flavour, and a place at every
              family table.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-xs font-semibold text-[#5f4535]">
              <span className="rounded-full border border-[#d8bd8b] px-4 py-2">
                500 ml jar
              </span>
              <span className="rounded-full border border-[#d8bd8b] px-4 py-2">
                Traditional Bilona
              </span>
              <span className="rounded-full border border-[#d8bd8b] px-4 py-2">
                No additives
              </span>
            </div>
            <a
              className="mt-8 inline-flex items-center gap-3 rounded-[6px] bg-[linear-gradient(90deg,#B87818_0%,#E4AD4D_100%)] px-6 py-3 text-xs font-bold tracking-[0.15em] text-white no-underline shadow-[0_8px_20px_rgba(61,39,29,0.12)] transition hover:brightness-105"
              href="#contact-us"
            >
              ENQUIRE ABOUT SOMORA{" "}
              <span
                className="text-xl font-normal leading-none text-white"
                aria-hidden="true"
              >
                &#8594;
              </span>
            </a>
          </div>
          <div className="relative min-h-[470px] overflow-hidden rounded-[2rem] bg-[#e8dcc7] shadow-[0_24px_70px_rgba(61,39,29,0.14)] max-[760px]:min-h-[340px]">
            <img
              className="absolute inset-0 h-full w-full object-cover object-[54%_center]"
              src={productScene}
              alt="SomoRa A2 Cow Ghee jar presented with a bowl of golden ghee"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3d271d]/85 via-[#3d271d]/30 to-transparent px-7 pb-7 pt-24 text-[#fffdf8]">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#f0c774]">
                Made with tradition
              </span>
              <p className="mt-2 font-display text-2xl font-semibold leading-[1.2]">
                SomoRa A2 Cow Ghee
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="the-bilona-way"
        className="border-y border-[#e9ddc9] bg-[#f2eadb] px-6 py-24 text-[#3d271d] max-[760px]:py-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b6b2e]">
              The Bilona way
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.12] max-[760px]:text-3xl">
              Patience you can taste.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#705c4b]">
              Rooted in an old Indian tradition, every step is given the time
              and care it deserves.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article
                className="relative rounded-2xl border border-[#dfcfb2] bg-[#fffdf8] p-6 shadow-[0_10px_30px_rgba(61,39,29,0.04)]"
                key={step.number}
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-2xl font-semibold leading-[1.2] text-[#c18a37]">
                    {step.number}
                  </span>
                  <Mark name={step.mark} className="h-10 w-10 text-[#9b6b2e]" />
                </div>
                <h3 className="mt-7 font-display text-xl font-semibold leading-[1.2]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#796454]">
                  {step.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#3d271d] px-6 py-24 text-[#fffdf8] max-[760px]:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e4ad4d]">
                Why SomoRa
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.12] max-[760px]:text-3xl">
                Tradition, with nothing to hide.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#eadfce]">
              Simple ingredients, a thoughtful process, and the quality your
              family deserves.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                className="rounded-2xl border border-[#e4ad4d]/25 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.08]"
                key={value.title}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e4ad4d]/50 bg-[#e4ad4d]/10">
                  <Mark name={value.mark} className="h-7 w-7 text-[#e4ad4d]" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold leading-[1.2] text-[#f2cb7e]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#eadfce]">
                  {value.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="our-story"
        className="bg-[#fffdf8] px-6 py-24 text-[#3d271d] max-[760px]:py-16"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] max-[760px]:min-h-[300px]">
            <img
              className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
              src={storyImage}
              alt="Traditional brass vessel and golden ghee, reflecting Indian culinary heritage"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3d271d]/30 to-transparent" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b6b2e]">
              Our story
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.12] max-[760px]:text-3xl">
              A heritage worth keeping alive.
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-[#705c4b]">
              SomoRa brings together the wisdom of traditional Indian
              food-making and a modern promise of thoughtful quality. Our A2 Cow
              Ghee is an invitation to slow down, savour the moment, and share
              something honest around the table.
            </p>
            <a
              className="mt-7 inline-flex items-center gap-3 border-b border-[#c18a37] pb-2 text-xs font-bold tracking-[0.15em] text-[#3d271d] no-underline hover:text-[#792b35]"
              href="#the-bilona-way"
            >
              EXPLORE OUR METHOD{" "}
              <span className="text-[#b77c2c]" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 text-[#3d271d] max-[760px]:pb-14">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 rounded-[2rem] bg-[#efe2ca] px-10 py-11 md:flex-row md:items-center md:px-14">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8c5d27]">
              A note from SomoRa
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.15] max-[760px]:text-2xl">
              Good things are worth sharing.
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#705c4b]">
              Get in touch for SomoRa updates, product enquiries, and
              distribution information.
            </p>
          </div>
          <a
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-[6px] bg-[linear-gradient(90deg,#B87818_0%,#E4AD4D_100%)] px-7 py-4 text-xs font-bold tracking-[0.14em] text-white no-underline shadow-[0_8px_20px_rgba(61,39,29,0.12)] transition hover:brightness-105"
            href="mailto:admin@somorahorizon.com?subject=SomoRa%20updates"
          >
            STAY IN TOUCH{" "}
            <span
              className="text-xl font-normal leading-none text-white"
              aria-hidden="true"
            >
              &#8594;
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
