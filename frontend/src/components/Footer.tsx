import somoraLogo from "../assets/Landing_page/somora_newlogo.png";

const footerGroups = [
  {
    title: "SHOP",
    links: ["All Products", "Pure Cow Ghee", "Bulk Orders", "Gift Packs"],
  },
  {
    title: "COMPANY",
    links: ["Our Story", "The Bilona Way", "Quality", "Blog", "Contact Us"],
  },
  {
    title: "HELP",
    links: ["FAQs", "Shipping Policy", "Return Policy", "Terms & Conditions"],
  },
];

const socialLinks = [
  { label: "Facebook", icon: "facebook" },
  { label: "Instagram", icon: "instagram" },
  { label: "WhatsApp", icon: "whatsapp" },
  { label: "YouTube", icon: "youtube" },
];

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "facebook") {
    return (
      <path
        d="M13.4 20v-7h2.35l.35-2.73H13.4V8.53c0-.8.22-1.33 1.37-1.33h1.46V4.76c-.25-.03-1.12-.11-2.13-.11-2.1 0-3.54 1.28-3.54 3.64v1.98H8.2V13h2.36v7h2.84Z"
        fill="currentColor"
        stroke="none"
      />
    );
  }

  if (icon === "instagram") {
    return (
      <>
        <rect x="6.5" y="6.5" width="11" height="11" rx="3.2" />
        <circle cx="12" cy="12" r="2.65" />
        <circle cx="15.8" cy="8.3" r=".7" fill="currentColor" stroke="none" />
      </>
    );
  }

  if (icon === "whatsapp") {
    return (
      <>
        <path d="M12 5.2a6.78 6.78 0 0 0-5.76 10.37L5.3 18.8l3.33-.87A6.8 6.8 0 1 0 12 5.2Z" />
        <path
          d="M9.45 8.55c.15-.35.3-.36.5-.36h.42c.14 0 .32.05.37.32.06.27.42 1.42.45 1.52.04.1.06.22 0 .34-.06.12-.1.2-.2.3-.1.1-.2.22-.28.3-.1.1-.2.2-.08.39.12.2.54.9 1.17 1.46.8.7 1.46.92 1.67 1.02.2.1.33.08.45-.05.12-.13.52-.6.66-.8.13-.2.27-.16.45-.1.18.06 1.15.54 1.35.63.2.1.33.15.38.23.04.08.04.5-.12.98-.15.47-.9.9-1.23.95-.32.05-.73.07-1.18-.08-.28-.1-.65-.2-1.12-.4-.48-.2-2-.73-3.43-2.25-1.1-1.17-1.74-2.6-1.94-3.04-.2-.44-.02-.68.14-.9Z"
          fill="currentColor"
          stroke="none"
        />
      </>
    );
  }

  return (
    <path
      d="M18.4 9.1a1.9 1.9 0 0 0-1.34-1.34C15.87 7.45 12 7.45 12 7.45s-3.87 0-5.06.31A1.9 1.9 0 0 0 5.6 9.1C5.3 10.3 5.3 12 5.3 12s0 1.7.3 2.9a1.9 1.9 0 0 0 1.34 1.34c1.19.31 5.06.31 5.06.31s3.87 0 5.06-.31a1.9 1.9 0 0 0 1.34-1.34c.3-1.2.3-2.9.3-2.9s0-1.7-.3-2.9ZM10.73 14.06V9.94L14.3 12l-3.57 2.06Z"
      fill="currentColor"
      stroke="none"
    />
  );
}

export function Footer() {
  return (
    <footer
      id="contact-us"
      className="scroll-mt-28 bg-[#3d271d] px-8 pb-5 pt-12 text-[#fffdf8] max-[760px]:px-6 max-[760px]:pb-6 max-[760px]:pt-10"
    >
      <div className="mx-auto grid max-w-310 grid-cols-[1.35fr_repeat(4,1fr)] gap-x-10 gap-y-10 max-[1000px]:grid-cols-[1.1fr_repeat(3,1fr)] max-[760px]:grid-cols-2 max-[760px]:gap-x-7 max-[760px]:gap-y-8">
        <div className="max-[760px]:col-span-2">
          <a
            className="inline-flex items-center"
            href="#home"
            aria-label="SomoRa Horizon home"
          >
            <img
              className="h-24 w-28 object-contain max-[760px]:h-22 max-[760px]:w-26"
              src={somoraLogo}
              alt="SomoRa Horizon LLP"
            />
          </a>
          <p className="mt-2 text-xs font-semibold tracking-wide text-[#eadfce]">
            Sourcing Quality. Delivering Value.
          </p>
          <div className="mt-5 flex gap-3" aria-label="Social media links">
            {socialLinks.map((social) => (
              <a
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fffdf8] text-[#3d271d] transition hover:bg-[#e4ad4d] hover:text-[#3d271d]"
                href="#home"
                key={social.label}
                aria-label={social.label}
              >
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <SocialIcon icon={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-sm font-bold text-[#e4ad4d]">
              {group.title} <span aria-hidden="true">›</span>
            </h2>
            <ul className="mt-3 space-y-2 text-[13px] font-medium leading-snug text-[#f0e8da]">
              {group.links.map((link) => (
                <li key={link}>
                  <a
                    className="no-underline transition hover:text-[#e4ad4d]"
                    href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="max-[1000px]:col-span-4 max-[1000px]:grid max-[1000px]:grid-cols-2 max-[1000px]:gap-4 max-[760px]:col-span-2 max-[760px]:grid-cols-1">
          <h2 className="text-sm font-bold text-[#e4ad4d]">CONTACT</h2>
          <address className="mt-3 space-y-2 text-[13px] not-italic leading-snug text-[#f0e8da] max-[1000px]:mt-0">
            <a
              className="block no-underline transition hover:text-[#e4ad4d]"
              href="mailto:admin@somorahorizon.com"
            >
              admin@somorahorizon.com
            </a>
            <p>Bengaluru, Karnataka, India</p>
          </address>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-310 items-center justify-center border-t border-[#e4ad4d]/25 pt-4 text-center text-xs font-medium text-[#eadfce]">
        © 2025 SomoRa Horizon LLP. All Rights Reserved.
      </div>
    </footer>
  );
}
