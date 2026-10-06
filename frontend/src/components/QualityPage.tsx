import qualityBackground from "../assets/Quality Page/quality_bg.png";

export function QualityPage() {
  return (
    <>
      <section
        className="quality-page relative isolate flex min-h-[clamp(390px,32vw,540px)] items-center overflow-hidden bg-[#3d271d]"
        aria-labelledby="quality-title"
      >
        <img
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-75 mix-blend-multiply max-[760px]:object-[65%_center]"
          src={qualityBackground}
          alt="Traditional brass vessel filled with SomoRa ghee"
        />
        <div className="page-container py-12 max-[760px]:py-14">
          <div className="max-w-110 max-[760px]:max-w-75">
            <p className="inline-flex items-center gap-2 text-xs font-bold text-[#e4ad4d]">
              QUALITY &amp; TESTING
              <span className="h-px w-8 bg-[#e4ad4d]" aria-hidden="true" />
            </p>
            <h1
              id="quality-title"
              className="mt-4 font-heading text-[clamp(30px,2.8vw,44px)] font-bold leading-[1.12] text-white"
            >
              Purity You Can See.
              <br />
              Quality You Can Verify.
            </h1>
            <p className="mt-4 max-w-97.5 text-sm font-medium leading-6 text-[#e1e5ee]">
              At SomoRa, quality isn&apos;t just a promise on a label. We
              believe in putting our products through independent testing so you
              know exactly what goes into what you consume.
            </p>
            <a
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-md bg-[linear-gradient(90deg,#B87818_0%,#E4AD4D_100%)] px-5 text-xs font-bold text-white no-underline shadow-[0_6px_14px_rgba(0,0,0,0.18)] transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e4ad4d]"
              href="#test-report"
            >
              VIEW TEST REPORT
              <span
                className="text-xl font-normal leading-none text-white"
                aria-hidden="true"
              >
                &#8594;
              </span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="test-report"
        className="scroll-mt-24 bg-[#fffdf9] py-16 text-[#263b5d] max-[760px]:py-12"
        aria-labelledby="certificate-title"
      >
        <div className="page-container grid items-center gap-10 lg:grid-cols-[1.45fr_1fr] lg:gap-14">
          <div className="border-r border-[#f0d8bf] pr-10 max-[1000px]:border-r-0 max-[1000px]:pr-0">
            <p className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.22em] text-[#cf7415]">
              A2 GHEE CERTIFICATE
              <span className="h-px w-16 bg-[#cf7415]" aria-hidden="true" />
            </p>
            <h2
              id="certificate-title"
              className="mt-4 max-w-212.5 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-[#32160f] max-[760px]:text-3xl"
            >
              Independently Tested
              <br className="max-[600px]:hidden" /> for Your Trust
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#344b70]">
              Our A2 Cow Ghee is tested by Safe Labs, a NABL accredited
              laboratory, to ensure purity and absence of A1 protein.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Tested for A1/A2 protein (Beta-casein analysis)",
                "Ensures purity and safety",
                "Conducted by NABL accredited laboratory",
                "Confirms the authentic Bilona process",
              ].map((item) => (
                <li
                  className="flex items-center gap-3 text-[15px] text-[#3d587b]"
                  key={item}
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e18416] text-sm font-bold text-white shadow-sm"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl bg-[#fbf6ec] px-8 py-9 shadow-[0_8px_30px_rgba(61,39,29,0.04)] sm:px-10">
            <h3 className="font-display text-xl font-semibold leading-[1.2] text-[#32160f]">
              Our Testing Partner
            </h3>
            <div
              className="mt-4 flex items-center gap-2.5 text-[#078de0]"
              aria-label="Safe Labs"
            >
              <svg
                className="h-12 w-10 shrink-0"
                viewBox="0 0 64 76"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M32 3 58 13v20c0 17-10 29-26 39C16 62 6 50 6 33V13L32 3Z"
                  stroke="currentColor"
                  strokeWidth="5"
                />
                <path
                  d="M32 17v42m-14-21h28M22 27l20 20m0-20L22 47m10-23 4 7-4 5-4-5 4-7Zm0 18 4 7-4 5-4-5 4-7Z"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[clamp(30px,2.6vw,40px)] font-extrabold leading-none tracking-[-0.06em]">
                safe labs
              </span>
            </div>
            <p className="mt-2 text-[15px] font-medium text-[#344b70]">
              NABL Accredited Laboratory
            </p>
            <div className="my-5 h-px bg-[#edcda9]" />
            <p className="text-sm leading-6 text-[#3d587b]">
              We work with Safe Labs, a NABL accredited laboratory, known for
              its accurate and reliable food testing services.
            </p>
            <ul className="mt-5 space-y-2">
              {[
                "Accredited by NABL",
                "Follows global testing standards",
                "Ensures product safety and purity",
                "Trusted by leading food brands",
              ].map((item) => (
                <li
                  className="flex items-center gap-3 text-sm text-[#3d587b]"
                  key={item}
                >
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e18416] text-xs font-bold text-white"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
