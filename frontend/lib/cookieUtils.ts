// Cookie utility functions

export const CookieUtils = {
  // Set a cookie
  setCookie: (name: string, value: string, days: number = 365) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  },

  // Get a cookie
  getCookie: (name: string): string | null => {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length);
      }
    }
    return null;
  },

  // Check if cookie exists
  hasCookie: (name: string): boolean => {
    return CookieUtils.getCookie(name) !== null;
  },

  // Delete a cookie
  deleteCookie: (name: string) => {
    CookieUtils.setCookie(name, "", -1);
  },

  // Get consent status
  getConsentStatus: (): {
    analytics: boolean;
    marketing: boolean;
    necessary: boolean;
  } => {
    const consent = CookieUtils.getCookie("cookieConsent");
    if (!consent) {
      return { analytics: false, marketing: false, necessary: true };
    }
    try {
      return JSON.parse(consent);
    } catch {
      return { analytics: false, marketing: false, necessary: true };
    }
  },

  // Set consent status
  setConsentStatus: (consent: {
    analytics: boolean;
    marketing: boolean;
    necessary: boolean;
  }) => {
    CookieUtils.setCookie("cookieConsent", JSON.stringify(consent), 365);
  },
};
