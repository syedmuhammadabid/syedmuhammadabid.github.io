// Lightweight helper to push custom events to the GTM dataLayer.
// In Google Tag Manager you can create triggers on these events
// (event name = "custom_event") and forward them to GA4 as needed.

export const trackEvent = (action, params = {}) => {
  if (typeof window === "undefined") {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "custom_event",
    event_action: action,
    ...params
  });
};

// Observes page sections (any element with an id) and fires a
// "section_view" event the first time each one scrolls into view.
// Returns a cleanup function that disconnects the observer.
export const observeSections = (ids = []) => {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return () => {};
  }

  const seen = new Set();
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !seen.has(entry.target.id)) {
          seen.add(entry.target.id);
          trackEvent("section_view", {section_id: entry.target.id});
        }
      });
    },
    {threshold: 0.4}
  );

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      observer.observe(el);
    }
  });

  return () => observer.disconnect();
};
