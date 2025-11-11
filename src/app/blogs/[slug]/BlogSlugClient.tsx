/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import LeadFormButton from "@/components/LeadFormButton";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  slug: string;
};

type BlogPayload = {
  blog: {
    id: number;
    title: string;
    h2?: string | null;
    initial_content: string;
    excerpt?: string | null;
    image?: string | null;
    date?: string | null;
    category_id?: number | null;
    slug: string;
    author?: string | null;
    status?: string | null;
    approved_by?: string | null;
    approved_on?: string | null;
    feedback?: string | null;
    keywords?: string | null;
    votes?: number | null;
    alt_tag?: string | null;
    author_name?: string | null;
    schema_markup?: string | null;
  };
  sections: Array<{
    id: number;
    blog_id: number;
    section: string;
    content: string;
    cta?: string | null;
  }>;
  faqs: Array<{
    id: number;
    blog_id: number;
    question: string;
    answer: string;
  }>;
};

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// Strip specific mojibake sequences the user wants removed entirely
function stripMojibake(input: string): string {
  const patterns: RegExp[] = [
    /â€”/g,        // broken em dash
    /ðŸ’¬/g,      // broken speech balloon emoji
    /ðŸ‘‰/g,      // broken pointing hand emoji
    /â€œHiâ€/g,    // broken quoted phrase example
    /â€œ/g,        // broken opening quote
    /â€/g,        // broken closing quote fragment
    /âœ/g,        // broken check glyph
  ];
  let out = input || "";
  for (const p of patterns) out = out.replace(p, "");
  return out;
}

function sanitizeHtml(html: string): string {
  const container = document.createElement("div");
  container.innerHTML = stripMojibake(html || "");
  // Remove script tags
  container.querySelectorAll("script").forEach((el) => el.remove());
  // Remove inline event handlers and add rel noopener to anchors
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT);
  while (walker.nextNode()) {
    const el = walker.currentNode as HTMLElement;
    // Remove on* attributes
    [...el.attributes].forEach((attr) => {
      if (/^on/i.test(attr.name)) {
        el.removeAttribute(attr.name);
      }
    });
    // Add lazyloading to images inside content
    if (el.tagName === "IMG") {
      if (!el.hasAttribute("loading")) el.setAttribute("loading", "lazy");
      el.setAttribute("decoding", "async");
    }
    if (el.tagName === "A") {
      const anchor = el as HTMLAnchorElement;
      anchor.setAttribute("rel", "noopener noreferrer");
      anchor.setAttribute("target", "_blank");
    }
  }
  // Allow-list basic tags by serializing back; DOMParser already removed scripts
  return container.innerHTML;
}

function buildCloudinarySrcSet(src?: string | null): string | undefined {
  if (!src) return undefined;
  // Very basic: replace "/upload/" with width transforms if Cloudinary URL
  if (!/res\.cloudinary\.com/.test(src)) return undefined;
  const widths = [640, 1024, 1600];
  const entries = widths
    .map((w) => {
      const transformed = src.replace("/upload/", `/upload/w_${w}/`);
      return `${transformed} ${w}w`;
    })
    .join(", ");
  return entries;
}

// Format date as "DD MMM, YY" (e.g., 25 Mar, 25)
function formatDateDDMMMYY(input?: string | null): string | null {
  if (!input) return null;
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return null;
  const day = d.toLocaleString('en-GB', { day: '2-digit' });
  const mon = d.toLocaleString('en-GB', { month: 'short' });
  const year = d.toLocaleString('en-GB', { year: '2-digit' });
  return `${day} ${mon}, ${year}`;
}

type CourseKey = 'cpa' | 'cma' | 'acca' | 'ea' | 'cia' | 'cfa' | 'default';
const COURSE_THEME: Record<CourseKey, {
  primaryText: string;
  lightBg: string;
  hoverBgLight: string;
  ring: string;
  progress: string;
  gradFrom: string;
  gradTo: string;
  prose: string;
  gradientTo: string;
  solidBg: string;
  hoverSolidBg: string;
}> = {
  acca: {
    primaryText: 'text-red-700',
    lightBg: 'bg-red-50',
    hoverBgLight: 'hover:bg-red-100',
    ring: 'ring-red-200',
    progress: 'bg-red-600',
    gradFrom: 'from-red-600',
    gradTo: 'to-rose-600',
    prose: 'prose-red',
    gradientTo: 'to-red-50/40',
    solidBg: 'bg-red-600',
    hoverSolidBg: 'hover:bg-red-700',
  },
  cma: {
    primaryText: 'text-emerald-700',
    lightBg: 'bg-emerald-50',
    hoverBgLight: 'hover:bg-emerald-100',
    ring: 'ring-emerald-200',
    progress: 'bg-emerald-600',
    gradFrom: 'from-emerald-600',
    gradTo: 'to-teal-600',
    prose: 'prose-emerald',
    gradientTo: 'to-emerald-50/40',
    solidBg: 'bg-emerald-600',
    hoverSolidBg: 'hover:bg-emerald-700',
  },
  cpa: {
    primaryText: 'text-indigo-700',
    lightBg: 'bg-indigo-50',
    hoverBgLight: 'hover:bg-indigo-100',
    ring: 'ring-indigo-200',
    progress: 'bg-indigo-600',
    gradFrom: 'from-indigo-600',
    gradTo: 'to-blue-600',
    prose: 'prose-indigo',
    gradientTo: 'to-indigo-50/40',
    solidBg: 'bg-indigo-600',
    hoverSolidBg: 'hover:bg-indigo-700',
  },
  ea: {
    primaryText: 'text-amber-700',
    lightBg: 'bg-amber-50',
    hoverBgLight: 'hover:bg-amber-100',
    ring: 'ring-amber-200',
    progress: 'bg-amber-600',
    gradFrom: 'from-amber-600',
    gradTo: 'to-orange-600',
    prose: 'prose-amber',
    gradientTo: 'to-amber-50/40',
    solidBg: 'bg-amber-600',
    hoverSolidBg: 'hover:bg-amber-700',
  },
  cia: {
    primaryText: 'text-teal-700',
    lightBg: 'bg-teal-50',
    hoverBgLight: 'hover:bg-teal-100',
    ring: 'ring-teal-200',
    progress: 'bg-teal-600',
    gradFrom: 'from-teal-600',
    gradTo: 'to-cyan-600',
    prose: 'prose-teal',
    gradientTo: 'to-teal-50/40',
    solidBg: 'bg-teal-600',
    hoverSolidBg: 'hover:bg-teal-700',
  },
  cfa: {
    primaryText: 'text-cyan-700',
    lightBg: 'bg-cyan-50',
    hoverBgLight: 'hover:bg-cyan-100',
    ring: 'ring-cyan-200',
    progress: 'bg-cyan-600',
    gradFrom: 'from-cyan-600',
    gradTo: 'to-sky-600',
    prose: 'prose-cyan',
    gradientTo: 'to-cyan-50/40',
    solidBg: 'bg-cyan-600',
    hoverSolidBg: 'hover:bg-cyan-700',
  },
  default: {
    primaryText: 'text-blue-700',
    lightBg: 'bg-blue-50',
    hoverBgLight: 'hover:bg-blue-100',
    ring: 'ring-blue-200',
    progress: 'bg-blue-600',
    gradFrom: 'from-blue-600',
    gradTo: 'to-indigo-600',
    prose: 'prose-blue',
    gradientTo: 'to-blue-50/40',
    solidBg: 'bg-blue-600',
    hoverSolidBg: 'hover:bg-blue-700',
  },
};

function detectCourse(blog: BlogPayload['blog']): CourseKey {
  const s = (blog.slug || '').toLowerCase();
  if (s.includes('acca')) return 'acca';
  if (s.includes('cma')) return 'cma';
  if (s.includes('cpa')) return 'cpa';
  if (s.includes('enrolled-agent') || s.split('-').includes('ea')) return 'ea';
  if (s.includes('cia')) return 'cia';
  if (s.includes('cfa')) return 'cfa';
  return 'default';
}

export default function BlogSlugClient({ slug }: Props) {
  const [data, setData] = useState<BlogPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [showMobileCTA, setShowMobileCTA] = useState<boolean>(false);
  const [showMobileTOC, setShowMobileTOC] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const articleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        const res = await fetch(`https://northstarapis-yamqp.ondigitalocean.app/api/blogs/slug/${slug}/full`);
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const json: BlogPayload = await res.json();
        if (!cancelled) {
          setData(json);
          setLoading(false);
        }
        console.log("Blog API response:", json);
      } catch (err: any) {
        if (!cancelled) {
          setError(String(err?.message || err));
          setLoading(false);
        }
        console.error("Blog API fetch error:", err);
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  useEffect(() => {
    const container = articleRef.current;
    if (!container) return;
    const onScroll = () => {
      const total = container.scrollHeight - container.clientHeight;
      const current = container.scrollTop;
      const pct = total > 0 ? Math.min(100, Math.max(0, (current / total) * 100)) : 0;
      setProgress(pct);
      setShowMobileCTA(pct >= 40);
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [articleRef.current]);

  useEffect(() => {
    // IntersectionObserver to highlight current section and reveal animations
    const container = articleRef.current;
    if (!container) return;
    const sectionEls = container.querySelectorAll('[data-section-id]');
    const observer = new IntersectionObserver(
      (entries) => {
        // Update active section (most visible)
        const visibleSorted = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleSorted[0]?.target) {
          const id = (visibleSorted[0].target as HTMLElement).dataset.sectionId || null;
          setActiveSection(id);
        }
        // Track revealed sections for fade-in
        setVisibleSections((prev) => {
          const next = new Set(prev);
          entries.forEach((e) => {
            const id = (e.target as HTMLElement).dataset.sectionId;
            if (e.isIntersecting && id) next.add(id);
          });
          return next;
        });
      },
      { root: container, threshold: [0.15, 0.35, 0.65] }
    );
    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [data, articleRef.current]);

  useEffect(() => {
    // Close mobile TOC on Escape key
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowMobileTOC(false);
    };
    if (showMobileTOC) {
      document.addEventListener('keydown', onKeyDown);
    }
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [showMobileTOC]);

  const tocItems = useMemo(() => {
    const items: { id: string; title: string }[] = [];
    if (data?.sections) {
      for (const s of data.sections) {
        const id = slugify(s.section);
        items.push({ id, title: s.section });
      }
    }
    // Anchor to FAQs
    if (data?.faqs?.length) items.push({ id: "faqs", title: "FAQs" });
    return items;
  }, [data]);

  const handleTOCClick = (id: string) => {
    const container = articleRef.current;
    if (!container) return;
    const el = container.querySelector(`[data-section-id="${id}"]`) as HTMLElement | null;
    if (el) {
      const top = el.offsetTop;
      container.scrollTo({ top, behavior: "smooth" });
      setActiveSection(id);
      // Update URL hash for deep-linking
      const url = new URL(window.location.href);
      url.hash = id;
      history.replaceState(null, "", url.toString());
    }
  };

  const copyLink = (id: string) => {
    const url = new URL(window.location.href);
    url.hash = id;
    navigator.clipboard.writeText(url.toString());
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto py-12 px-4">Loading…</div>
    );
  }
  if (error || !data) {
    return (
      <div className="max-w-6xl mx-auto py-12 px-4 text-red-600">Error loading blog.</div>
    );
  }

  const { blog, sections, faqs } = data;
  const heroSrcSet = buildCloudinarySrcSet(blog.image);
  const heroSizes = "(max-width: 768px) 100vw, 50vw";
  const theme = COURSE_THEME[detectCourse(blog)];

  return (
    <div className={`relative bg-gradient-to-b from-white ${theme.gradientTo}`}>
      {/* Skip to content for accessibility */}
      <a href="#article" className={`sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white ${theme.primaryText} px-3 py-2 rounded shadow`}>Skip to content</a>

      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-40">
        <div className={`h-full ${theme.progress} transition-all duration-300`} style={{ width: `${progress}%` }} />
      </div>

      {/* Layout grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Hero */}
        <section className="pt-8 md:pt-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl bg-white/70 backdrop-blur p-6 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">{blog.title}</h1>
            {blog.h2 && (
              <p className="mt-2 text-lg text-gray-700">{blog.h2}</p>
            )}
            {blog.excerpt && (
              <p className="mt-3 text-gray-600">{blog.excerpt}</p>
            )}
          </div>
          {blog.image && (
            <div className="md:justify-self-end">
              <img
                src={blog.image}
                alt={blog.alt_tag || blog.title}
                srcSet={heroSrcSet}
                sizes={heroSizes}
                className="w-full h-auto rounded-2xl shadow-md ring-1 ring-black/5"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          )}
        </section>

        {/* Meta row */}
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600 items-center">
          {blog.author_name && <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-gray-100">👤 {blog.author_name}</span>}
          {!blog.author_name && blog.author && <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-gray-100">👤 {blog.author}</span>}
          {blog.date && (
            <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-gray-100">📅 {formatDateDDMMMYY(blog.date) ?? blog.date}</span>
          )}
          {typeof blog.votes === "number" && (
            <button className={`ml-auto px-3 py-1 rounded-full ${theme.lightBg} ${theme.primaryText} ${theme.hoverBgLight} transition-colors`} aria-label="Upvote">
              👍 {blog.votes}
            </button>
          )}
        </div>

        <div className="mt-6 grid md:grid-cols-[1fr_minmax(280px,360px)] gap-8">
         
          {/* Article container + content */}
         
          <div id="article" ref={articleRef} className="relative max-h-[70vh] overflow-y-auto pr-2 scroll-smooth rounded-xl bg-white/80 backdrop-blur-sm p-4 shadow-inner">
            {/* Initial content */}
            <article
              className={`prose ${theme.prose} max-w-none`}
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(blog.initial_content) }}
            />

            {/* Sections */}
            {sections?.map((s) => {
              const id = slugify(s.section);
              return (
                <section
                  key={s.id}
                  data-section-id={id}
                  className={`mt-10 transition-all duration-500 ease-out ${visibleSections.has(id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                >
                  <div className="flex items-center gap-2">
                    <h2 id={id} className="text-2xl font-semibold tracking-tight">{s.section}</h2>
                    <button
                      className="text-xs px-2 py-1 border rounded hover:bg-gray-50 transition-colors"
                      onClick={() => copyLink(id)}
                      aria-label={`Copy link to ${s.section}`}
                    >#</button>
                  </div>
                  <div
                    className={`prose ${theme.prose} max-w-none mt-3`}
                    dangerouslySetInnerHTML={{ __html: sanitizeHtml(s.content) }}
                  />
                  {s.cta && (
                    <div className="mt-4">
                      <button className={`px-4 py-2 bg-gradient-to-r ${theme.gradFrom} ${theme.gradTo} text-white rounded shadow transition-all hover:brightness-110 hover:-translate-y-0.5 active:scale-95`}>
                        {s.cta}
                      </button>
                    </div>
                  )}
                </section>
              );
            })}

            {/* FAQs */}
            {faqs?.length ? (
              <section id="faqs" data-section-id="faqs" className="mt-12">
                <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
                <div className="mt-4 space-y-3">
                  {faqs.map((f) => (
                    <details
                      key={f.id}
                      className={`group rounded-xl border bg-white/80 backdrop-blur-sm shadow-sm transition-colors ${theme.ring} group-open:ring-1`}
                    >
                      <summary className="list-none px-4 py-3 cursor-pointer flex items-center justify-between hover:bg-gray-50 rounded-xl">
                        <span className={`font-medium ${theme.primaryText}`}>{f.question}</span>
                        <svg className="h-5 w-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                        </svg>
                      </summary>
                      <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] px-4 pb-4 transition-all duration-300">
                        <div className={`overflow-hidden prose ${theme.prose} max-w-none`} dangerouslySetInnerHTML={{ __html: sanitizeHtml(f.answer) }} />
                      </div>
                    </details>
                  ))}
                </div>
                {/* JSON-LD for FAQPage */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      '@context': 'https://schema.org',
                      '@type': 'FAQPage',
                      mainEntity: faqs.map((f) => ({
                        '@type': 'Question',
                        name: f.question,
                        acceptedAnswer: {
                          '@type': 'Answer',
                          text: f.answer,
                        },
                      })),
                    }),
                  }}
                />
              </section>
            ) : null}
          </div>

          {/* Sticky TOC (desktop, right sidebar) */}
          <aside className="hidden md:block sticky top-24 self-start">
            <div className="border rounded-xl p-4 bg-white/70 backdrop-blur shadow-sm">
              <h3 className="text-xs uppercase tracking-wide text-gray-500 mb-2">Table of Contents</h3>
              <nav className="space-y-1">
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleTOCClick(item.id)}
                    className={`block text-left w-full px-3 py-2 rounded-lg transition-colors ${activeSection === item.id ? `${theme.lightBg} ${theme.primaryText} ring-1 ${theme.ring}` : 'hover:bg-gray-50'}`}
                    aria-current={activeSection === item.id ? 'true' : 'false'}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>

      {/* Sticky bottom CTA (mobile) */}
      {showMobileCTA && (
        <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white/95 border-t p-3 z-40 transition-transform duration-300">
          <div className="flex items-center gap-3">
            <LeadFormButton  className="flex-1 px-4 py-2 bg-gradient-to-r from-red-600 to-indigo-600 text-white rounded shadow hover:from-blue-500 hover:to-indigo-500 transition-all active:scale-95">Get full course</LeadFormButton>
            <button className="px-3 py-2 border rounded hover:bg-gray-50 transition-colors" onClick={() => setShowMobileCTA(false)} aria-label="Hide CTA">✕</button>
          </div>
        </div>
      )}

      {/* Mobile floating TOC button and overlay */}
      {tocItems.length > 0 && (
        <div className="md:hidden">
          <button
            className={`fixed bottom-20 right-4 z-50 rounded-full px-4 py-3 shadow-lg ${theme.solidBg} text-white ${theme.hoverSolidBg} active:scale-95 transition-all`}
            onClick={() => setShowMobileTOC(true)}
            aria-label="Open table of contents"
            aria-expanded={showMobileTOC ? 'true' : 'false'}
          >
            TOC
          </button>
          {showMobileTOC && (
            <>
              <div
                className="fixed inset-0 z-50 bg-black/20"
                onClick={() => setShowMobileTOC(false)}
                aria-hidden="true"
              />
              <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-xl transition-transform duration-300">
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="text-sm font-semibold">Table of Contents</span>
                  <button
                    className="px-3 py-2 border rounded hover:bg-gray-50 transition-colors"
                    onClick={() => setShowMobileTOC(false)}
                    aria-label="Close TOC"
                  >
                    ✕
                  </button>
                </div>
                <nav className="max-h-[50vh] overflow-y-auto p-2">
                  {tocItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => { handleTOCClick(item.id); setShowMobileTOC(false); }}
                      className={`block text-left w-full px-3 py-2 rounded-lg transition-colors ${activeSection === item.id ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-200' : 'hover:bg-gray-50'}`}
                      aria-current={activeSection === item.id ? 'true' : 'false'}
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}