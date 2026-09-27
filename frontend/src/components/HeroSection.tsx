import heroImage from "../assets/Landing_page/hero_section_updated.png";
import aromaIcon from "../assets/Landing_page/aroma_icon.png";
import bilonaIcon from "../assets/Landing_page/bilona_icon.png";
import cowIcon from "../assets/Landing_page/cow_icon.png";
import handicraftIcon from "../assets/Landing_page/handicraft.png";
import labTestedIcon from "../assets/Landing_page/lab_tested_icon.png";
import noAdditivesIcon from "../assets/Landing_page/no_additives_icon.png";
import nutrientIcon from "../assets/Landing_page/nutrient.png";
import pureIcon from "../assets/Landing_page/pure_icon.png";

const benefits = [
  {
    label: "Made from\nCow Milk",
    icon: <img src={cowIcon} alt="" />,
  },
  {
    label: "Bilona\nMethod",
    icon: <img src={bilonaIcon} alt="" />,
  },
  {
    label: "Rich in\nAroma & Taste",
    icon: <img src={aromaIcon} alt="" />,
  },
  {
    label: "No Preservatives\nNo Additives",
    icon: <img src={noAdditivesIcon} alt="" />,
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

const trustIcons = [pureIcon, handicraftIcon, nutrientIcon, labTestedIcon];

export function HeroSection() {
  return (
    <section
      id="home"
      className="hero-section relative isolate mb-0 overflow-hidden bg-[#fbf7ef]"
      aria-labelledby="hero-title"
    >
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_center] max-[760px]:object-[66%_center]"
        src={heroImage}
        alt="SomoRa pure cow ghee jar made from the Bilona method"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#fbf7ef_0%,rgba(251,247,239,0.97)_33%,rgba(251,247,239,0.76)_48%,rgba(251,247,239,0)_68%)] max-[760px]:bg-[linear-gradient(180deg,rgba(251,247,239,0.98)_0%,rgba(251,247,239,0.92)_38%,rgba(251,247,239,0.24)_75%,rgba(251,247,239,0.04)_100%)]" />

      <div className="hero-content mx-auto flex w-full max-w-[1440px] items-center px-16 pb-32 pt-8 max-[1000px]:px-8 max-[760px]:items-start max-[760px]:px-6 max-[760px]:pb-72 max-[760px]:pt-9">
        <div className="relative -translate-y-8 max-w-[610px] text-[#3d271d] max-[760px]:translate-y-0 max-[760px]:max-w-[calc(100vw-48px)]">
          <p className="hero-fade-up hero-fade-up-heading inline-flex items-center gap-2 rounded-full border border-[#e4ad4d]/60 bg-[#fffdf8]/85 px-4 py-2 font-secondary text-[11px] font-bold tracking-[0.08em] text-[#6d4825] max-[760px]:text-[9px]">
            TRADITIONALLY CRAFTED{" "}
            <span className="text-[#792b35]" aria-hidden="true">
              ✦
            </span>{" "}
            THOUGHTFULLY DISTRIBUTED
          </p>
          <h1
            id="hero-title"
            className="hero-fade-up hero-fade-up-heading mt-5 font-display text-[clamp(38px,3.8vw,56px)] font-semibold leading-[1.12] tracking-[-0.035em] text-[#3d271d] max-[1000px]:text-[44px] max-[760px]:mt-4 max-[760px]:text-[28px]"
          >
            <span className="block whitespace-nowrap">Pure Tradition.</span>
            <span className="block whitespace-nowrap text-[#792b35]">
              Delivered with Trust.
            </span>
          </h1>
          <p className="hero-fade-up hero-fade-up-description mt-5 max-w-[420px] text-[16px] font-medium leading-7 text-[#6b5648] max-[760px]:max-w-[330px] max-[760px]:text-sm max-[760px]:leading-6">
            Introducing Somora A2 Cow Ghee, made using the traditional Bilona
            method and brought to retailers and distribution partners with care.
          </p>

          <div className="hero-fade-up hero-fade-up-features mt-7 flex max-w-[480px] divide-x divide-[#c9a46a]/45 max-[760px]:mt-6 max-[760px]:grid max-[760px]:grid-cols-2 max-[760px]:divide-x-0 max-[760px]:gap-y-4">
            {benefits.map((benefit) => (
              <div
                className="w-[120px] px-3 first:pl-0 max-[760px]:w-auto max-[760px]:px-2 max-[760px]:first:pl-0"
                key={benefit.label}
              >
                <div className="h-9 w-9 [&>img]:h-full [&>img]:w-full [&>img]:object-contain">
                  {benefit.icon}
                </div>
                <p className="mt-2 whitespace-pre-line text-[11px] font-semibold leading-4 text-[#5f493b]">
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
            className="hero-fade-up hero-fade-up-cta relative mt-7 inline-flex h-12 min-w-44 items-center justify-center gap-3 rounded-[6px] bg-[linear-gradient(90deg,#B87818_0%,#E4AD4D_100%)] px-7 text-[13px] font-bold tracking-[0.12em] text-white no-underline shadow-[0_8px_20px_rgba(61,39,29,0.18)] transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d271d]"
            href="#shop"
          >
            SHOP NOW
            <span
              className="text-xl font-normal leading-none text-white"
              aria-hidden="true"
            >
              &#8594;
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 z-10 grid h-[92px] w-[calc(100%-128px)] max-w-[1312px] -translate-x-1/2 grid-cols-4 rounded-t-2xl border border-b-0 border-[#eadcc3] bg-[#fffdf8]/95 px-8 shadow-[0_-8px_30px_rgba(61,39,29,0.09)] backdrop-blur-md max-[1000px]:w-[calc(100%-64px)] max-[1000px]:max-w-none max-[760px]:h-auto max-[760px]:w-[calc(100%-32px)] max-[760px]:grid-cols-2 max-[760px]:gap-y-3 max-[760px]:rounded-t-xl max-[760px]:px-4 max-[760px]:py-4">
        {trustItems.map((item, index) => (
          <div
            className="flex items-center gap-3 px-5 first:pl-0 last:pr-0 [&:not(:first-child)]:border-l [&:not(:first-child)]:border-[#eadfcf] max-[760px]:px-2 max-[760px]:[&:not(:first-child)]:border-l-0"
            key={item.title}
          >
            <img
              className="h-12 w-12 shrink-0 object-contain"
              src={trustIcons[index]}
              alt=""
            />
            <div>
              <p className="text-sm font-bold text-[#3d271d]">{item.title}</p>
              <p className="mt-0.5 text-[11px] font-medium text-[#796454]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
