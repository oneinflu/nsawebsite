/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { useLeadForm } from "@/context/LeadFormContext";
import { useRouter, usePathname } from "next/navigation";
import BrandingPanel from "./lead-form/BrandingPanel";
import DetailsForm from "./lead-form/DetailsForm";
import OtpForm from "./lead-form/OtpForm";
import { formConfigs, FormType, FormConfig } from "./lead-form/formConfigs";

// formConfigs now imported from ./lead-form/formConfigs for easy editing and reuse
// Helper: safely resolve config for a potentially untyped formType
const FORM_TYPES: readonly FormType[] = [
  "general",
  "download-syllabus",
  "download-placement-report",
  "download-hackdoc",
  "book-webinar",
] as const;

const isFormType = (t: string): t is FormType => {
  return (FORM_TYPES as readonly string[]).includes(t);
};

const getConfigFor = (t: string): FormConfig => {
  return formConfigs[isFormType(t) ? t : "general"];
};

const LeadFormModal = () => {
  const {
    isOpen,
    closeLeadForm,
    formData,
    updateFormData,
    formStep,
    setFormStep,
    formType,
    isSendOtp,
    isCourseLocked,
    setIsCourseLocked,
    suppressThankYouOnOtp,
    afterOtpAction,
  } = useLeadForm();
  const router = useRouter();
  const pathname = usePathname();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [leadId, setLeadId] = useState<string | null>(null);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [editPhoneValue, setEditPhoneValue] = useState("");
  const [editDialCode, setEditDialCode] = useState("91");
  const inputRef = useRef<HTMLInputElement>(null);
  const [ipAddress, setIpAddress] = useState("");
  const [sessionReferrer, setSessionReferrer] = useState("");
  const [otpNotice, setOtpNotice] = useState<string>("");
  const [locationData, setLocationData] = useState<{
    country: string;
    region: string;
    city: string;
    pin_code: string;
  }>({ country: "", region: "", city: "", pin_code: "" });
  const entryTimeRef = useRef<Date | null>(null);
  const lastUrlRef = useRef<string>("");

  // Persist UTM params from URL to localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const keys = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
        "utm_id",
        "utm_source_platform",
        "utm_creative_format",
        "utm_audience",
        "utm_ad_id",
        "gclid",
        "fblid",
        // Additional ad/utm params to capture
        "utm_adgroup",
        "utm_adname",
        "sitelink",
        "matchtype",
        "category",
        "device",
        "network",
        "promotion",
        "placement",
        "geo",
      ];
      const params = new URLSearchParams(window.location.search);
      keys.forEach((k) => {
        const v = params.get(k);
        if (v) localStorage.setItem(k, v);
      });
    } catch (err) {
      console.warn("Failed to parse UTM params from URL", err);
    }
  }, []);

  // Ensure visitor_id exists in localStorage (session_id is created via backend API)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const VISITOR_KEY = "nsa_visitor_id";
    try {
      if (!localStorage.getItem(VISITOR_KEY)) {
        const vid =
          crypto && "randomUUID" in crypto
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
        localStorage.setItem(VISITOR_KEY, vid);
      }
    } catch (err) {
      console.warn("Failed to initialize visitor ID", err);
    }
  }, []);

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchIp();
    // Use full current URL as session_referrer per requirement
    if (typeof window !== "undefined") {
      setSessionReferrer(window.location.href);
    } else {
      setSessionReferrer("direct");
    }
  }, []);

  // Fetch coarse geolocation data based on IP
  useEffect(() => {
    const fetchGeo = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        if (!res.ok) return;
        const data = await res.json();
        console.log("Geolocation data:", data);
        setLocationData({
          country: data?.country_name || "",
          region: data?.region || data?.region_code || "",
          city: data?.city || "",
          pin_code: data?.postal || "",
        });
      } catch (e) {
        // Swallow errors silently; location data is optional
      }
    };
    fetchGeo();
  }, []);

  // Initialize session tracking and finalize visits on unload/route changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Set entry time for the current page
    entryTimeRef.current = new Date();
    // Store full absolute URL (protocol + host + path + query + hash)
    lastUrlRef.current = window.location.href;

    const finalizePage = async () => {
      try {
        const now = new Date();
        const entryTime = entryTimeRef.current || now;
        const exitTime = now;
        const time_spent_seconds = Math.max(
          1,
          Math.round((exitTime.getTime() - entryTime.getTime()) / 1000)
        );
        const pageEntry = {
          url: lastUrlRef.current || window.location.href,
          title: typeof document !== "undefined" ? document.title : "",
          time_spent_seconds,
          entry_time: entryTime.toISOString(),
          exit_time: exitTime.toISOString(),
        };

        const SESSION_KEY = "nsa_session_id";
        const TIMES_KEY = "nsa_session_times";
        const existingSessionId = localStorage.getItem(SESSION_KEY) || "";
        const visitorId = localStorage.getItem("nsa_visitor_id") || "";

        // Build UTM data from URL first, then localStorage fallback (POST only)
        const params = new URLSearchParams(window.location.search);
        const getUtm = (k: string) =>
          params.get(k) || localStorage.getItem(k) || "";
        const utm_data = {
          utm_source: getUtm("utm_source"),
          utm_medium: getUtm("utm_medium"),
          utm_campaign: getUtm("utm_campaign"),
          utm_term: getUtm("utm_term"),
          utm_content: getUtm("utm_content"),
          utm_id: getUtm("utm_id"),
          utm_source_platform: getUtm("utm_source_platform"),
          utm_creative_format: getUtm("utm_creative_format"),
          utm_audience: getUtm("utm_audience"),
          utm_ad_id: getUtm("utm_ad_id"),
          gclid: getUtm("gclid"),
          fblid: getUtm("fblid"),
          utm_adgroup: getUtm("utm_adgroup"),
          utm_adname: getUtm("utm_adname"),
          sitelink: getUtm("sitelink"),
          matchtype: getUtm("matchtype"),
          category: getUtm("category"),
          device: getUtm("device"),
          network: getUtm("network"),
          promotion: getUtm("promotion"),
          placement: getUtm("placement"),
          geo: getUtm("geo"),
        };

        if (!existingSessionId) {
          const times = 1;
          const payload = {
            ip_address: ipAddress,
            location_data: {
              country: locationData.country || "",
              region: locationData.region || "",
              city: locationData.city || "",
              pin_code: locationData.pin_code || "",
            },
            utm_data,
            session_referrer: window.location.href,
            pages_visited: [pageEntry],
            times,
          };
          try {
            const resp = await fetch("https://api.starforze.com/api/session", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });
            if (resp.ok) {
              const result = await resp.json();
              const sid = result?.data?._id || result?.data?.id || "";
              if (sid) {
                localStorage.setItem(SESSION_KEY, sid);
                const total_visits = result?.data?.total_visits;
                localStorage.setItem(TIMES_KEY, String(total_visits ?? times));
              }
            }
          } catch (err) {
            // Ignore network errors; do not block navigation
          }
        } else {
          const prevTimes = parseInt(
            localStorage.getItem(TIMES_KEY) || "1",
            10
          );
          const times = isNaN(prevTimes) ? 1 : prevTimes + 1;
          const payload = {
            pages_visited: [pageEntry],
            times,
            session_referrer: window.location.href,
            utm_data,
          };
          try {
            const resp = await fetch(
              `https://api.starforze.com/api/session/${existingSessionId}`,
              {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              }
            );
            if (resp.ok) {
              const result = await resp.json();
              const total_visits = result?.data?.total_visits;
              localStorage.setItem(TIMES_KEY, String(total_visits ?? times));
            }
          } catch (err) {
            // Ignore network errors; do not block navigation
          }
        }
      } catch (e) {
        // Swallow errors silently; we don't want to break page exit
      }
    };
    const onBeforeUnload = () => {
      finalizePage();
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
      // Do not auto-finalize on dependency changes; beforeunload and route-change handle it
    };
  }, [ipAddress, locationData]);

  // Finalize the previous page visit when the route changes, then start a new entry time
  useEffect(() => {
    if (typeof window === "undefined") return;
    const finalizePrev = async () => {
      // Call the same logic as beforeunload to record the previous page
      try {
        const now = new Date();
        const entryTime = entryTimeRef.current || now;
        const exitTime = now;
        const time_spent_seconds = Math.max(
          1,
          Math.round((exitTime.getTime() - entryTime.getTime()) / 1000)
        );
        const pageEntry = {
          url: lastUrlRef.current || window.location.href,
          title: typeof document !== "undefined" ? document.title : "",
          time_spent_seconds,
          entry_time: entryTime.toISOString(),
          exit_time: exitTime.toISOString(),
        };

        const SESSION_KEY = "nsa_session_id";
        const TIMES_KEY = "nsa_session_times";
        const existingSessionId = localStorage.getItem(SESSION_KEY) || "";

        if (!existingSessionId) {
          // If a session doesn't exist yet, create it on the first route change using minimal data
          const times = 1;
          const params = new URLSearchParams(window.location.search);
          const getUtm = (k: string) =>
            params.get(k) || localStorage.getItem(k) || "";
          const utm_data = {
            utm_source: getUtm("utm_source"),
            utm_medium: getUtm("utm_medium"),
            utm_campaign: getUtm("utm_campaign"),
            utm_term: getUtm("utm_term"),
            utm_content: getUtm("utm_content"),
            utm_id: getUtm("utm_id"),
            utm_source_platform: getUtm("utm_source_platform"),
            utm_creative_format: getUtm("utm_creative_format"),
            utm_audience: getUtm("utm_audience"),
            utm_ad_id: getUtm("utm_ad_id"),
            gclid: getUtm("gclid"),
            fblid: getUtm("fblid"),
            utm_adgroup: getUtm("utm_adgroup"),
            utm_adname: getUtm("utm_adname"),
            sitelink: getUtm("sitelink"),
            matchtype: getUtm("matchtype"),
            category: getUtm("category"),
            device: getUtm("device"),
            network: getUtm("network"),
            promotion: getUtm("promotion"),
            placement: getUtm("placement"),
            geo: getUtm("geo"),
          };
          const payload = {
            ip_address: ipAddress,
            location_data: {
              country: locationData.country || "",
              region: locationData.region || "",
              city: locationData.city || "",
              pin_code: locationData.pin_code || "",
            },
            utm_data,
            session_referrer: window.location.href,
            pages_visited: [pageEntry],
            times,
          };
          try {
            const resp = await fetch("https://api.starforze.com/api/session", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });
            if (resp.ok) {
              const result = await resp.json();
              const sid = result?.data?._id || result?.data?.id || "";
              if (sid) {
                localStorage.setItem(SESSION_KEY, sid);
                const total_visits = result?.data?.total_visits;
                localStorage.setItem(TIMES_KEY, String(total_visits ?? times));
              }
            }
          } catch {}
        } else {
          const prevTimes = parseInt(
            localStorage.getItem(TIMES_KEY) || "1",
            10
          );
          const times = isNaN(prevTimes) ? 1 : prevTimes + 1;
          // Build UTM data for PATCH updates as well
          const params2 = new URLSearchParams(window.location.search);
          const getUtm2 = (k: string) =>
            params2.get(k) || localStorage.getItem(k) || "";
          const utm_data = {
            utm_source: getUtm2("utm_source"),
            utm_medium: getUtm2("utm_medium"),
            utm_campaign: getUtm2("utm_campaign"),
            utm_term: getUtm2("utm_term"),
            utm_content: getUtm2("utm_content"),
            utm_id: getUtm2("utm_id"),
            utm_source_platform: getUtm2("utm_source_platform"),
            utm_creative_format: getUtm2("utm_creative_format"),
            utm_audience: getUtm2("utm_audience"),
            utm_ad_id: getUtm2("utm_ad_id"),
            gclid: getUtm2("gclid"),
            fblid: getUtm2("fblid"),
            utm_adgroup: getUtm2("utm_adgroup"),
            utm_adname: getUtm2("utm_adname"),
            sitelink: getUtm2("sitelink"),
            matchtype: getUtm2("matchtype"),
            category: getUtm2("category"),
            device: getUtm2("device"),
            network: getUtm2("network"),
            promotion: getUtm2("promotion"),
            placement: getUtm2("placement"),
            geo: getUtm2("geo"),
          };
          const payload = {
            pages_visited: [pageEntry],
            times,
            session_referrer: window.location.href,
            utm_data,
          };
          try {
            const resp = await fetch(
              `https://api.starforze.com/api/session/${existingSessionId}`,
              {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              }
            );
            if (resp.ok) {
              const result = await resp.json();
              const total_visits = result?.data?.total_visits;
              localStorage.setItem(TIMES_KEY, String(total_visits ?? times));
            }
          } catch {}
        }
      } catch {}
    };

    // Finalize previous page visit
    finalizePrev();
    // Start timing for the new page
    entryTimeRef.current = new Date();
    // Update the stored URL to the full absolute URL
    lastUrlRef.current = window.location.href;
  }, [pathname, ipAddress, locationData]);

  useEffect(() => {
    if (
      pathname.startsWith("/thank-you") ||
      pathname.startsWith("/a/thank-you")
    ) {
      closeLeadForm();
    }
  }, [pathname, closeLeadForm]);

  // Prefill course_id based on URL unless base "/" (show selector)
  useEffect(() => {
    if (!isOpen) return;
    if (formData.course) return; // already set via button or prior state
    const path = pathname || "/";
    if (path === "/") return; // base URL -> selector visible
    const lower = path.toLowerCase();
    // Do NOT auto-detect course on blog pages; always show selector there
    if (lower.startsWith("/blogs")) return;
    let detected: string | null = null;
    if (lower.includes("cpa")) detected = "CPA";
    else if (lower.includes("cma")) detected = "CMA USA";
    else if (lower.includes("acca")) detected = "ACCA";
    else if (lower.includes("enrolled-agent") || lower.includes("ea"))
      detected = "EA";
    else if (lower.includes("cfa-us") || lower.includes("cfa"))
      detected = "CFA";
    else if (lower.includes("cia")) detected = "CIA";
    if (detected) {
      updateFormData({ course: detected });
      setIsCourseLocked(true);
    }
  }, [isOpen, pathname, formData.course, updateFormData, setIsCourseLocked]);

  useEffect(() => {
    if (isOpen) {
      const getLS = (k: string) => localStorage.getItem(k) || "";
      updateFormData({
        utm_source: getLS("utm_source"),
        utm_medium: getLS("utm_medium"),
        utm_campaign: getLS("utm_campaign"),
        utm_term: getLS("utm_term"),
        utm_content: getLS("utm_content"),
        utm_id: getLS("utm_id"),
        utm_source_platform: getLS("utm_source_platform"),
        utm_creative_format: getLS("utm_creative_format"),
        utm_audience: getLS("utm_audience"),
        utm_ad_id: getLS("utm_ad_id"),
        gclid: getLS("gclid"),
        fblid: getLS("fblid"),
        utm_adgroup: getLS("utm_adgroup"),
        utm_adname: getLS("utm_adname"),
        sitelink: getLS("sitelink"),
        matchtype: getLS("matchtype"),
        category: getLS("category"),
        device: getLS("device"),
        network: getLS("network"),
        promotion: getLS("promotion"),
        placement: getLS("placement"),
        geo: getLS("geo"),
        // Full URL
        full_url: typeof window !== "undefined" ? window.location.href : "",
      });
    }
  }, [isOpen, updateFormData]);

  // Google Places autocomplete removed: manual input or IP-based detection handled in DetailsForm

  const handlePhoneChange = (
    value: string,
    country?: { dialCode?: string }
  ) => {
    const digitsOnly = (value || "").replace(/\D/g, "");
    const dial = (country?.dialCode || formData.country_code || "").replace(
      /\D/g,
      ""
    );
    // Derive local number for validation
    const local = digitsOnly.startsWith(dial)
      ? digitsOnly.slice(dial.length)
      : digitsOnly;
    // Basic validation: for India (91), enforce 10-digit local number
    if ((dial || "91") === "91" && local.length !== 10) {
      setPhoneError("Please enter a valid 10-digit Indian mobile number");
    } else {
      setPhoneError("");
    }
    updateFormData({ phone: digitsOnly, country_code: dial || "91" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate phone before submission
    const countryCode =
      (formData.country_code || "").replace(/\D/g, "") || "91";
    const fullDigits = (formData.phone || "").replace(/\D/g, "");
    const localPhoneForCheck = fullDigits.startsWith(countryCode)
      ? fullDigits.slice(countryCode.length)
      : fullDigits;
    if (countryCode === "91" && localPhoneForCheck.length !== 10) {
      setPhoneError("Please enter a valid 10-digit Indian mobile number");
      return;
    }
    if (!localPhoneForCheck) {
      setPhoneError("Please enter your phone number");
      return;
    }
    if (phoneError) {
      return;
    }
    setIsSubmitting(true);

    // config resolved via getConfigFor(formType) if needed

    // Derive country_code and local phone number (without country code)
    const localPhone = fullDigits.startsWith(countryCode)
      ? fullDigits.slice(countryCode.length)
      : fullDigits;

    // Gather tracking fields
    const visitorId =
      typeof window !== "undefined"
        ? localStorage.getItem("nsa_visitor_id") || ""
        : "";
    const sessionId =
      typeof window !== "undefined"
        ? localStorage.getItem("nsa_session_id") || ""
        : "";
    const leadSource = (() => {
      if (typeof window === "undefined")
        return { Source: "organic", SubSource: "Website" };
      const title =
        (typeof document !== "undefined" ? document.title : "") || "";
      const path =
        pathname ||
        (typeof window !== "undefined" ? window.location.pathname : "");
      const ref = typeof document !== "undefined" ? document.referrer : "";
      const refHost = (() => {
        try {
          return ref ? new URL(ref).hostname : "";
        } catch {
          return "";
        }
      })();

      const params = new URLSearchParams(window.location.search);
      const utmKeys = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
        "utm_id",
        "utm_source_platform",
        "utm_creative_format",
        "utm_audience",
        "utm_ad_id",
        "gclid",
        "fblid",
        "utm_adgroup",
        "utm_adname",
        "sitelink",
        "matchtype",
        "category",
        "device",
        "network",
        "promotion",
        "placement",
        "geo",
      ];
      const hasAnyUtm = utmKeys.some((k) => !!params.get(k));

      const toTitle = (s: string) => s.replace(/\s+/g, " ").trim();

      const mapCoursePage = () => {
        if (path.startsWith("/cpa-course-details"))
          return "Website | CPA US Course Page";
        if (path.startsWith("/cma-usa-course-details"))
          return "Website | CMA US Course Page";
        if (path.startsWith("/enrolled-agent-course-details"))
          return "Website | EA Course Page";
        if (path.startsWith("/acca-course-details"))
          return "Website | ACCA Course Page";
        if (path.startsWith("/cfa-us")) return "Website | CFA US Course Page";
        if (path.startsWith("/cia")) return "Website | CIA Course Page";
        return null;
      };

      const subSourceOrganic = (() => {
        if (path.startsWith("/blogs")) return "Website | Blogs";
        if (path.startsWith("/contact")) return "Website | Contact Us";
        const courseLabel = mapCoursePage();
        if (courseLabel) return courseLabel;
        if (refHost.includes("instagram.com")) return "Instagram";
        if (refHost.includes("whatsapp.com") || refHost.includes("wa.me"))
          return "Whatsapp";
        const sameHost =
          typeof window !== "undefined" ? window.location.hostname : "";
        if (ref && refHost && sameHost && refHost !== sameHost) {
          return "Referral";
        }
        return `Website`;
      })();

      const utmSource = (params.get("utm_source") || "").toLowerCase();
      const utmMedium = (params.get("utm_medium") || "").toLowerCase();
      const utmCampaign = (params.get("utm_campaign") || "").toLowerCase();
      const subSourcePaid = (() => {
        const s = utmSource;
        if (s.includes("google") || s.includes("adwords") || s.includes("gads"))
          return "Google";
        if (s.includes("facebook") || s.includes("meta") || s.includes("fb"))
          return "Facebook";
        if (s.includes("instagram") || s.includes("ig")) return "Instagram";
        if (s.includes("quora")) return "Quora";
        if (s.includes("whatsapp") || utmMedium.includes("whatsapp"))
          return "Whatsapp";
        if (utmCampaign.includes("webinar")) return "Webinars";
        if (
          utmMedium.includes("influencer") ||
          utmCampaign.includes("influencer")
        )
          return "Influencer";
        if (path.startsWith("/lp/")) return "Landing Page";
        return s ? s.charAt(0).toUpperCase() + s.slice(1) : "Paid";
      })();

      return {
        Source: hasAnyUtm || path.includes("/lp") ? "paid" : "organic",
        SubSource: hasAnyUtm ? subSourcePaid : subSourceOrganic,
      };
    })();
    const fullUrl =
      typeof window !== "undefined" ? window.location.href : sessionReferrer;
    const leadOrigin = `${formData.course || ""}|${formType}`;
    const params =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : undefined;
    const getUtmParam = (key: string): string => {
      if (!params) return "";
      const fromUrl = params.get(key) || "";
      if (fromUrl) return fromUrl;
      if (typeof window !== "undefined") {
        const fromStorage = localStorage.getItem(key) || "";
        if (fromStorage) return fromStorage;
      }
      return "";
    };

    const utmExtras = {
      utm_id: getUtmParam("utm_id"),
      utm_source_platform: getUtmParam("utm_source_platform"),
      utm_creative_format: getUtmParam("utm_creative_format"),
      utm_audience: getUtmParam("utm_audience"),
      utm_ad_id: getUtmParam("utm_ad_id"),
      gclid: getUtmParam("gclid"),
      fblid: getUtmParam("fblid"),
    };

    const leadData = {
      form_id: "7e68ae1a-5765-489c-9b62-597b478c0fa0", // Hardcoded for now
      // Per requirement: use session ID as visitor_id in lead payload
      visitor_id: sessionId,
      session_id: sessionId,
      leadSource,
      leadOrigin,
      isSendOtp: isSendOtp,
      answers: {
        full_name: formData.name,
        // Send phone_number without country code and add country_code separately
        phone_number: localPhone,
        country_code: countryCode,
        email_address: formData.email,
        dob: formData.dob,
        gender: formData.gender,
        education: formData.education,
        professional: formData.professional,
        course_id: formData.course,
        study_mode: formData.studyMode || "Online",
        accept_terms: formData.agreeToTerms,
        dynamic_fields: {
          how_did_you_hear_about_us: formData.howHeard,
          page_title: typeof document !== "undefined" ? document.title : "",
        },
      },
      // Do not re-send UTM data here; it is captured in session
      location_data: {
        country: "India", // Hardcoded for now
        state: "", // To be implemented with location services
        city: formData.location,
        pin_code: locationData.pin_code || "",
      },
      session_referrer: fullUrl,
      ip_address: ipAddress,
    };

    try {
      const response = await fetch("https://api.starforze.com/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      });

      if (response.ok) {
        const result = await response.json();
        // Log the full lead creation response for debugging
        console.log("Lead created successfully:", result);
        const id = result?.data?._id ?? result?.data?.id ?? null;
        setLeadId(id);
        console.log("Captured leadId:", id);
        setFormStep("otp");
      } else {
        const errorData = await response.json();
        console.error("Form submission failed:", response.status, errorData);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOtpVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadId) {
      setOtpError("Lead ID not found. Please try again.");
      return;
    }

    if (otp.length !== 4) {
      setOtpError("OTP must be 4 digits.");
      return;
    }

    setIsSubmitting(true);
    setOtpError("");
    console.log("Verifying OTP with leadId:", leadId, "otp:", otp);

    try {
      const response = await fetch(
        `https://api.starforze.com/api/leads/${leadId}/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ otp }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("OTP verification success:", result);
        // If calculators gating is active, suppress thank-you and run custom action
        if (suppressThankYouOnOtp) {
          try {
            afterOtpAction && afterOtpAction();
          } finally {
            closeLeadForm();
          }
        } else {
          const inASection = pathname.startsWith("/a");
          const courseId = (formData.course || "").trim();
          const courseIdToSlug = (id: string): string => {
            switch (id) {
              case "CPA":
                return "cpa-us";
              case "CMA USA":
                return "cma-usa";
              case "ACCA":
                return "acca-uk";
              case "CIA":
                return "cia";
              case "CFA":
                return "cfa-us";
              case "EA":
                return "enrolled-agent";
              default: {
                const lower = pathname.toLowerCase();
                if (lower.includes("cma-usa")) return "cma-usa";
                if (lower.includes("cpa-us")) return "cpa-us";
                if (lower.includes("acca-uk")) return "acca-uk";
                if (lower.includes("cia")) return "cia";
                if (lower.includes("cfa-us")) return "cfa-us";
                return "cma-usa";
              }
            }
          };
          const courseSlug = courseIdToSlug(courseId);
          const target = inASection
            ? `/a/thank-you/${courseSlug}`
            : `/thank-you/${courseSlug}`;
          router.push(target);
          // Close the lead form modal so the navigation is visible
          closeLeadForm();
        }
      } else {
        const errorData = await response.json();
        console.error("OTP verification failed:", response.status, errorData);
        setOtpError(errorData.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      setOtpError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendOtp = async () => {
    if (!leadId) {
      setOtpError("No lead found. Please submit the form again.");
      return;
    }
    setIsSubmitting(true);
    setOtpError("");
    try {
      const response = await fetch(
        `https://api.starforze.com/api/leads/${leadId}/send-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log("Resent OTP for lead:", result);
        setOtp("");
        setOtpNotice("OTP resent");
      } else {
        const err = await response.json();
        setOtpError(err?.message || "Failed to resend OTP.");
      }
    } catch (error) {
      console.error("Resend OTP error:", error);
      setOtpError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChangeNumber = async () => {
    setIsEditingPhone(true);
    // Prefill from API if leadId exists
    if (!leadId) {
      // Fallback to current formData.phone
      setEditDialCode("91");
      setEditPhoneValue(formData.phone || "");
      return;
    }
    try {
      const response = await fetch(
        `https://api.starforze.com/api/leads/${leadId}`
      );
      if (response.ok) {
        const result = await response.json();
        const mobile = result?.data?.mobile || result?.data?.phone_number || "";
        const ccode =
          result?.data?.countryCode || result?.data?.dialCode || "91";
        setEditDialCode(String(ccode));
        // Combine for PhoneInput controlled value: dialCode + mobile
        const combined = mobile
          ? `${ccode}${String(mobile).replace(/\D/g, "")}`
          : formData.phone;
        setEditPhoneValue(combined || "");
      } else {
        setEditDialCode("91");
        setEditPhoneValue(formData.phone || "");
      }
    } catch (error) {
      console.error("Fetch lead details error:", error);
      setEditDialCode("91");
      setEditPhoneValue(formData.phone || "");
    }
  };

  const handleEditPhoneChange = (value: string, dialCode?: string) => {
    setEditPhoneValue(value);
    if (dialCode) setEditDialCode(String(dialCode));
  };

  const handleEditPhoneCancel = () => {
    setIsEditingPhone(false);
  };

  const handleEditPhoneSubmit = async () => {
    if (!leadId) {
      setOtpError("No lead found to update.");
      return;
    }
    setIsSubmitting(true);
    setOtpError("");
    // Parse mobile from combined value (dialCode + mobile)
    const dialLen = editDialCode.length;
    const digitsOnly = editPhoneValue.replace(/\D/g, "");
    const mobile = digitsOnly.slice(dialLen);
    try {
      const updateResp = await fetch(
        `https://api.starforze.com/api/leads/${leadId}/update-mobile`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mobile, countryCode: editDialCode }),
        }
      );
      if (!updateResp.ok) {
        const err = await updateResp.json();
        setOtpError(err?.message || "Failed to update mobile.");
        setIsSubmitting(false);
        return;
      }
      // Update local form data phone
      updateFormData({ phone: `${editDialCode}${mobile}` });
      // Do not call send-otp again; updating mobile triggers OTP automatically
      setOtp("");
      setIsEditingPhone(false);
      setOtpNotice("Mobile number updated and OTP sent");
    } catch (error) {
      console.error("Update mobile/send OTP error:", error);
      setOtpError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Deprecated: old change-number handler removed in favor of inline edit flow

  if (!isOpen) return null;

  const config = getConfigFor(formType);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeLeadForm}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-auto overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close (X) button */}
            <button
              type="button"
              aria-label="Close"
              onClick={closeLeadForm}
              className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M6 18L18 6"
                />
              </svg>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left side - Branding and Info (hidden on mobile) */}
              <BrandingPanel
                title={config.title}
                description={config.description}
                features={config.features}
              />

              {/* Right side - Form */}
              <div className="p-8">
                {formStep === "details" && (
                  <DetailsForm
                    formTitle={config.formTitle}
                    submitButtonText={config.submitButtonText}
                    formData={formData}
                    updateFormData={updateFormData}
                    handleSubmit={handleSubmit}
                    handlePhoneChange={handlePhoneChange}
                    phoneError={phoneError}
                    isSubmitting={isSubmitting}
                    inputRef={
                      inputRef as unknown as React.RefObject<HTMLInputElement | null>
                    }
                    isCourseLocked={isCourseLocked}
                  />
                )}

                {formStep === "otp" && (
                  <OtpForm
                    phone={formData.phone}
                    otp={otp}
                    setOtp={setOtp}
                    otpError={otpError}
                    isSubmitting={isSubmitting}
                    onVerify={handleOtpVerification}
                    onChangeNumber={handleChangeNumber}
                    onResend={handleResendOtp}
                    notice={otpNotice}
                    isEditingPhone={isEditingPhone}
                    editPhoneValue={editPhoneValue}
                    onEditPhoneChange={handleEditPhoneChange}
                    onEditPhoneSubmit={handleEditPhoneSubmit}
                    onEditPhoneCancel={handleEditPhoneCancel}
                  />
                )}

                {formStep === "thankyou" && (
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Thank You!
                    </h2>
                    <p className="text-gray-600">
                      Your submission has been received.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeadFormModal;
