(() => {
  "use strict";
  // Replace with the private GA4 web stream ID supplied by the owner (format G-XXXXXXXXXX).
  const measurementId = "";
  const enabled = /^G-[A-Z0-9]+$/.test(measurementId);
  window.mbaTrack = (name, parameters = {}) => {
    if (!enabled || typeof window.gtag !== "function") return;
    const safe = Object.fromEntries(Object.entries(parameters).flatMap(([key, value]) => {
      if (["string", "number", "boolean"].includes(typeof value)) return [[key, value]];
      if (key === "items" && Array.isArray(value)) {
        return [[key, value.map(item => Object.fromEntries(Object.entries(item).filter(([, field]) => ["string", "number", "boolean"].includes(typeof field))))]];
      }
      return [];
    }));
    window.gtag("event", name, safe);
  };
  if (!enabled) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { anonymize_ip: true });
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
  document.head.appendChild(script);

  const page = document.querySelector("#app")?.dataset.page || "professional";
  const query = new URLSearchParams(location.search);
  if (page === "product") {
    window.mbaTrack("view_item", { item_category: query.get("type") || "unknown", item_id: query.get("design") || "unknown" });
  } else if (page === "cart") {
    window.mbaTrack("view_cart");
  } else if (page === "category" || page === "shop") {
    window.mbaTrack("view_item_list", { item_list_name: page === "shop" ? "Boutique" : document.querySelector("#app")?.dataset.type || "Collection" });
  }

  document.addEventListener("click", event => {
    const link = event.target.closest("a");
    if (!link) return;
    let url;
    try { url = new URL(link.href, location.href); } catch (_) { return; }
    if (url.hostname === "wa.me") {
      const professional = location.pathname.endsWith("professionnels.html") || /professionnel/i.test(url.searchParams.get("text") || "");
      window.mbaTrack(professional ? "professional_lead" : "whatsapp_click", { link_location: location.pathname.split("/").pop() || "index.html" });
    }
  }, true);
})();
