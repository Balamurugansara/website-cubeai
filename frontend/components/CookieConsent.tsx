"use client";

import { useEffect, useState, ReactNode } from "react";
import { CookieUtils } from "@/lib/cookieUtils";
import { X, ChevronDown } from "lucide-react";
import "./cookieConsent.css";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

interface ConsentStatus {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent(): ReactNode {
  const [showConsent, setShowConsent] = useState(false);
  const [expandedSettings, setExpandedSettings] = useState(false);
  const [consent, setConsent] = useState<ConsentStatus>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already given consent
    if (!CookieUtils.hasCookie("cookieConsent")) {
      setShowConsent(true);
    } else {
      const savedConsent = CookieUtils.getConsentStatus();
      setConsent(savedConsent);
      // Load analytics scripts based on saved consent
      if (savedConsent.analytics || savedConsent.marketing) {
        loadAnalytics(savedConsent);
      }
    }
  }, []);

  const loadAnalytics = (consentData: ConsentStatus): void => {
    if (consentData.analytics) {
      loadGoogleAnalytics();
    }
    if (consentData.marketing) {
      loadMarketingScripts();
    }
  };

  const loadGoogleAnalytics = (): void => {
    try {
      // Initialize Google Analytics tag manager
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID";
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];

      function gtag(...args: any[]): void {
        window.dataLayer.push(args);
      }

      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", "GA_MEASUREMENT_ID");
    } catch (error) {
      console.warn("Failed to load Google Analytics:", error);
    }
  };

  const loadMarketingScripts = (): void => {
    try {
      // Add your marketing scripts here (Facebook Pixel, etc.)
      // Example:
      // const fbScript = document.createElement("script");
      // fbScript.src = "https://connect.facebook.net/en_US/fbevents.js";
      // document.head.appendChild(fbScript);
    } catch (error) {
      console.warn("Failed to load marketing scripts:", error);
    }
  };

  const handleAcceptAll = (): void => {
    const allConsent: ConsentStatus = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    CookieUtils.setConsentStatus(allConsent);
    setConsent(allConsent);
    loadAnalytics(allConsent);
    setShowConsent(false);
  };

  const handleRejectAll = (): void => {
    const minimalConsent: ConsentStatus = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    CookieUtils.setConsentStatus(minimalConsent);
    setConsent(minimalConsent);
    setShowConsent(false);
  };

  const handleSavePreferences = (): void => {
    CookieUtils.setConsentStatus(consent);
    loadAnalytics(consent);
    setShowConsent(false);
  };

  const handleToggleConsent = (type: "analytics" | "marketing"): void => {
    setConsent((prevConsent) => ({
      ...prevConsent,
      [type]: !prevConsent[type],
    }));
  };

  if (!showConsent) return null;

  return (
    <div className="cookie-consent-container">
      <div className="cookie-consent-banner">
        <div className="cookie-consent-header">
          <h3>Cookie Consent</h3>
          <button
            onClick={() => setShowConsent(false)}
            className="cookie-close-btn"
            aria-label="Close cookie consent"
          >
            <X size={20} />
          </button>
        </div>

        <p className="cookie-consent-text">
          We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
        </p>

        {/* Settings Section */}
        <div className="cookie-settings">
          <button
            className="cookie-settings-toggle"
            onClick={() => setExpandedSettings(!expandedSettings)}
          >
            <span>Manage Preferences</span>
            <ChevronDown
              size={18}
              className={`transition-transform ${
                expandedSettings ? "rotate-180" : ""
              }`}
            />
          </button>

          {expandedSettings && (
            <div className="cookie-preferences">
              {/* Necessary Cookies */}
              <div className="cookie-preference-item">
                <div className="cookie-preference-header">
                  <label className="cookie-checkbox">
                    <input
                      type="checkbox"
                      checked={consent.necessary}
                      disabled
                      readOnly
                    />
                    <span className="checkmark"></span>
                  </label>
                  <div className="cookie-preference-info">
                    <h4>Necessary Cookies</h4>
                    <p>
                      Essential for website functionality. Cannot be disabled.
                    </p>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="cookie-preference-item">
                <div className="cookie-preference-header">
                  <label className="cookie-checkbox">
                    <input
                      type="checkbox"
                      checked={consent.analytics}
                      onChange={() => handleToggleConsent("analytics")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <div className="cookie-preference-info">
                    <h4>Analytics Cookies</h4>
                    <p>
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="cookie-preference-item">
                <div className="cookie-preference-header">
                  <label className="cookie-checkbox">
                    <input
                      type="checkbox"
                      checked={consent.marketing}
                      onChange={() => handleToggleConsent("marketing")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <div className="cookie-preference-info">
                    <h4>Marketing Cookies</h4>
                    <p>
                      Used to track visitors across websites for personalized ads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="cookie-consent-actions">
          <button
            onClick={handleRejectAll}
            className="cookie-btn cookie-btn-secondary"
          >
            Reject All
          </button>
          {expandedSettings && (
            <button
              onClick={handleSavePreferences}
              className="cookie-btn cookie-btn-secondary"
            >
              Save Preferences
            </button>
          )}
          <button
            onClick={handleAcceptAll}
            className="cookie-btn cookie-btn-primary"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
