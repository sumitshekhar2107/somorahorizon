export function ManufacturerPage() {
  return (
    <section
      className="bg-[#fbf7ef] py-16 max-[760px]:py-10"
      aria-labelledby="manufacturer-title"
    >
      <div className="page-container">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#792b35]">
            Product information
          </p>
          <h1
            id="manufacturer-title"
            className="mt-4 font-heading text-[clamp(32px,4vw,52px)] font-bold leading-tight"
          >
            Manufacturer Details
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#665247]">
            Thank you for scanning our QR code. This page is the dedicated
            destination for manufacturer information for SomoRa products.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <article className="rounded-2xl border border-[#e8dcc7] bg-[#fffdf8] p-8 max-[760px]:p-6">
            <h2 className="font-heading text-2xl font-bold">
              Manufacturing information
            </h2>
            <p className="mt-4 leading-7 text-[#665247]">
              Verified manufacturer details have not been published yet. Please
              refer to your product label for the manufacturer name, address,
              licence number, and batch information.
            </p>
            <p className="mt-5 rounded-xl bg-[#fbf7ef] p-4 text-sm leading-6 text-[#665247]">
              For information about a specific product, contact us with the
              product name and batch number printed on its packaging.
            </p>
          </article>

          <aside className="rounded-2xl bg-[#3d271d] p-8 text-[#fffdf8] max-[760px]:p-6">
            <h2 className="font-heading text-2xl font-bold">
              Need assistance?
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#eadfce]">
              Contact SomoRa Horizon LLP for manufacturer or product enquiries.
            </p>
            <a
              className="mt-6 inline-flex min-h-11 items-center break-all rounded-lg bg-[#e4ad4d] px-4 py-3 text-sm font-bold text-[#3d271d] no-underline hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e4ad4d]"
              href="mailto:admin@somorahorizon.com?subject=Manufacturer%20information%20enquiry"
            >
              admin@somorahorizon.com
            </a>
          </aside>
        </div>

        <a
          className="mt-8 inline-flex min-h-11 items-center text-sm font-bold text-[#792b35] underline underline-offset-4"
          href="/#home"
        >
          <span aria-hidden="true">←&nbsp;</span> Back to home
        </a>
      </div>
    </section>
  );
}
