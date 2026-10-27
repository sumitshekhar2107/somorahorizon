import honeyImage from "../assets/Landing_page/honey_img.png";
import gheeImage from "../assets/Landing_page/ghee_new_img.png";
import "./ManufacturerPage.css";

// Remove the exterior black matte, then feather and decontaminate its edge.
// Interior shadows in the jar and bowl remain untouched.
function removeGheeBackground(image: HTMLImageElement) {
  if (image.dataset.backgroundRemoved) return;
  const canvas = document.createElement("canvas");
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const context = canvas.getContext("2d");
  if (!context) return;
  context.drawImage(image, 0, 0);
  const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
  const { data, width, height } = pixels;
  const visited = new Uint8Array(width * height);
  const queue = new Uint32Array(width * height);
  let head = 0;
  let tail = 0;

  const enqueue = (index: number) => {
    if (visited[index]) return;
    visited[index] = 1;
    const offset = index * 4;
    if (Math.max(data[offset], data[offset + 1], data[offset + 2]) <= 70) {
      queue[tail++] = index;
    }
  };

  for (let x = 0; x < width; x++) {
    enqueue(x);
    enqueue((height - 1) * width + x);
  }
  for (let y = 0; y < height; y++) {
    enqueue(y * width);
    enqueue(y * width + width - 1);
  }
  while (head < tail) {
    const index = queue[head++];
    data[index * 4 + 3] = 0;
    const x = index % width;
    if (x > 0) enqueue(index - 1);
    if (x < width - 1) enqueue(index + 1);
    if (index >= width) enqueue(index - width);
    if (index < width * (height - 1)) enqueue(index + width);
  }

  // The source is flattened against black, including its antialiased brush
  // edges. A hard cutout alone leaves a dark halo and isolated black specks.
  const distance = new Uint8Array(width * height).fill(255);
  for (let i = 0; i < tail; i++) distance[queue[i]] = 0;
  head = 0;
  const featherWidth = 40;
  const visitEdge = (index: number, depth: number) => {
    if (distance[index] !== 255) return;
    distance[index] = depth;
    queue[tail++] = index;
  };
  while (head < tail) {
    const index = queue[head++];
    const depth = distance[index];
    if (depth >= featherWidth) continue;
    const x = index % width;
    if (x > 0) visitEdge(index - 1, depth + 1);
    if (x < width - 1) visitEdge(index + 1, depth + 1);
    if (index >= width) visitEdge(index - width, depth + 1);
    if (index < width * (height - 1)) visitEdge(index + width, depth + 1);
  }
  for (let i = 0; i < distance.length; i++) {
    const depth = distance[i];
    if (depth === 0 || depth > featherWidth) continue;
    const offset = i * 4;
    const brightness = Math.max(
      data[offset],
      data[offset + 1],
      data[offset + 2],
    );
    const fade = Math.max(0, (depth - 4) / (featherWidth - 4));
    const edgeOpacity = fade * fade * (3 - 2 * fade);
    const matteOpacity =
      depth <= 8 ? Math.max(0, Math.min(1, (brightness - 90) / 110)) : 1;
    data[offset + 3] = Math.round(
      data[offset + 3] * edgeOpacity * matteOpacity,
    );
  }

  context.putImageData(pixels, 0, 0);
  image.dataset.backgroundRemoved = "true";
  image.src = canvas.toDataURL("image/png");
}

type IconName = "honey" | "cow" | "address" | "document" | "shield" | "mail";

function DetailIcon({ name }: { name: IconName }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "address" && (
        <>
          <path
            d="M25 13c0 7-9 15-9 15S7 20 7 13a9 9 0 1 1 18 0Z"
            fill="currentColor"
            stroke="none"
          />
          <circle cx="16" cy="13" r="3" fill="#fff3d9" stroke="none" />
        </>
      )}
      {name === "document" && (
        <>
          <path d="M9 4h10l5 5v19H9Z" />
          <path d="M18 4v6h6M13 15h7m-7 5h7m-7 4h5" />
        </>
      )}
      {name === "shield" && (
        <>
          <path d="m16 3 11 4v8c0 7-6 12-11 15C11 27 5 22 5 15V7Z" />
          <path d="m11 16 4 4 7-8" />
        </>
      )}
      {name === "mail" && (
        <>
          <rect x="4" y="7" width="24" height="18" rx="2" />
          <path d="m5 9 11 9L27 9" />
        </>
      )}
      {name === "honey" && (
        <>
          <ellipse cx="16" cy="18" rx="4" ry="10" />
          <path d="M12 13h8m-8 5h8m-7 5h6M14 8l-3-5m7 5 3-5M12 12C2 4 0 19 12 17m8-5c10-8 12 7 0 5M12 19C1 17 4 28 13 23m7-4c11-2 8 9-1 4" />
        </>
      )}
      {name === "cow" && (
        <>
          <path d="M9 9C4 10 2 7 4 3m19 6c5 1 7-2 5-6M9 11 3 9l-1 5 8 3m13-6 6-2 1 5-8 3M10 8c3-2 9-2 12 0l-2 12c5 9-13 9-8 0Z" />
          <path d="M13 23h.1m5.9 0h.1M12 13h.1m7.9 0h.1" />
        </>
      )}
    </svg>
  );
}

function BotanicalSprig({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 260"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <path d="M75 260C67 190 101 109 88 8M79 221C47 215 26 188 20 157c30 7 54 28 59 64Zm1-43c35-4 59-24 67-52-31 5-56 24-67 52ZM86 134C56 124 43 98 43 72c27 11 44 31 43 62Zm4-33c27-8 43-30 47-56-26 10-42 28-47 56ZM89 61C73 44 73 18 83 2c13 20 15 38 6 59Z" />
      <path d="m20 157 59 64m1-43 67-52M43 72l43 62m4-33 47-56M83 2l6 59" />
    </svg>
  );
}

const manufacturers = [
  {
    product: "Honey",
    icon: "honey" as const,
    image: honeyImage,
    alt: "Golden honey in a glass jar with honeycomb, blossoms, and a wooden dipper",
    name: "Organic Yellow International Pvt Ltd",
    address:
      "Plot No. 11, KH No. 26K, Shivganga Industrial Area, Roorkee, Bhagwanpur, Haridwar, Uttarakhand – 247661",
    gst: "05AAECO0685Q1ZY",
    fssai: "12624006000003",
  },
  {
    product: "A2 Ghee",
    icon: "cow" as const,
    image: gheeImage,
    alt: "Jar of golden ghee beside a wooden bowl of ghee and green leaves",
    name: "Devlok Food Company",
    address: "Mandi, Himachal Pradesh",
    gst: "02JCCPS7267A1ZN",
    fssai: "10925016000031",
  },
];

export function ManufacturerPage() {
  return (
    <section className="manufacturer-page" aria-labelledby="manufacturer-title">
      <BotanicalSprig className="manufacturer-sprig manufacturer-sprig-top" />
      <BotanicalSprig className="manufacturer-sprig manufacturer-sprig-bottom" />
      <div className="page-container manufacturer-container">
        <header className="manufacturer-intro">
          <p className="manufacturer-eyebrow">Product information</p>
          <h1 id="manufacturer-title">Manufacturer Details</h1>
          <p className="manufacturer-subtitle">
            Find the manufacturing details for SomoRa products.
          </p>
          <span className="manufacturer-gold-rule" aria-hidden="true" />
        </header>
        <div className="manufacturer-grid">
          {manufacturers.map((manufacturer) => (
            <article
              className="manufacturer-card"
              key={manufacturer.product}
              aria-label={`${manufacturer.product} manufacturer`}
            >
              <div className="manufacturer-product-image">
                <img
                  className={
                    manufacturer.icon === "cow"
                      ? "manufacturer-ghee-image"
                      : undefined
                  }
                  src={manufacturer.image}
                  alt={manufacturer.alt}
                  onLoad={
                    manufacturer.icon === "cow"
                      ? (event) => removeGheeBackground(event.currentTarget)
                      : undefined
                  }
                />
              </div>
              <div className="manufacturer-card-content">
                <div className="manufacturer-product-heading">
                  <span className="manufacturer-product-icon">
                    <DetailIcon name={manufacturer.icon} />
                  </span>
                  <div>
                    <h2>{manufacturer.product}</h2>
                    <p className="manufacturer-by">Manufactured by</p>
                    <p className="manufacturer-company">{manufacturer.name}</p>
                    <span
                      className="manufacturer-company-rule"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <dl className="manufacturer-details">
                  {(
                    [
                      ["Address", manufacturer.address, "address"],
                      ["GST Number", manufacturer.gst, "document"],
                      ["FSSAI Number", manufacturer.fssai, "shield"],
                    ] as const
                  ).map(([label, value, icon]) => (
                    <div className="manufacturer-detail" key={label}>
                      <span className="manufacturer-detail-icon">
                        <DetailIcon name={icon} />
                      </span>
                      <div>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
        <aside
          className="manufacturer-assistance"
          aria-labelledby="manufacturer-assistance-title"
        >
          <BotanicalSprig className="manufacturer-assistance-sprig" />
          <div className="manufacturer-assistance-copy">
            <h2 id="manufacturer-assistance-title">Need assistance?</h2>
            <p>
              For product or manufacturer enquiries, contact SomoRa Horizon LLP.
            </p>
          </div>
          <div className="manufacturer-contact">
            <a href="mailto:admin@somorahorizon.com?subject=Manufacturer%20information%20enquiry">
              <DetailIcon name="mail" />
              admin@somorahorizon.com
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
