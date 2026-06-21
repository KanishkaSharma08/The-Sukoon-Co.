/**
 * Global Analytics Utility for tracking events in Google Analytics (GA4)
 */
export const trackEvent = (action: string, category: string, label: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  } else {
    // Log to console in development mode if no analytics is loaded
    if (import.meta.env.DEV) {
      console.log(`[Analytics Event] Action: ${action} | Category: ${category} | Label: ${label}`);
    }
  }
};
