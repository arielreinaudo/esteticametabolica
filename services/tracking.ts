
import { CONFIG } from '../constants';

export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  console.log(`[Tracking Event]: ${eventName}`, params);
  
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
};

// Initialize GA4 script dynamically if ID is provided
export const initGA = () => {
  if (CONFIG.GA_MEASUREMENT_ID && CONFIG.GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${CONFIG.GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(inlineScript);
  }
};
