export const isManufacturerHost =
  window.location.hostname === "manufacturer.somorahorizon.com";

export function mainSiteHref(hash: string) {
  return `${isManufacturerHost ? "https://www.somorahorizon.com" : ""}/#${hash}`;
}

export function currentPage() {
  if (
    isManufacturerHost ||
    window.location.pathname.replace(/\/$/, "") === "/manufacturer"
  ) {
    return "/manufacturer";
  }

  return window.location.hash;
}