import qualityBackground from "../assets/Quality Page/quality_bg.png";

export function QualityPage() {
  return (
    <section
      className="quality-page relative isolate flex min-h-[clamp(390px,32vw,540px)] items-center overflow-hidden bg-[#3d271d]"
      aria-labelledby="quality-title"
    >
      <img
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-75 mix-blend-multiply max-[760px]:object-[65%_center]"
        src={qualityBackground}
        alt="Traditional brass vessel filled with SomoRa ghee"
      />
      <div className="mx-auto w-full max-w-360 px-16 py-12 max-[1000px]:px-8 max-[760px]:px-6 max-[760px]:py-14">
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
            At SomoRa, quality isn&apos;t just a promise on a label. We believe
            in putting our products through independent testing so you know
            exactly what goes into what you consume.
          </p>
          <a
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-[6px] bg-[linear-gradient(90deg,#B87818_0%,#E4AD4D_100%)] px-5 text-xs font-bold text-white no-underline shadow-[0_6px_14px_rgba(0,0,0,0.18)] transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e4ad4d]"
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
  );
}
