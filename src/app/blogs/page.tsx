/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import  { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  
 
 
  Globe, 
  
  Award, 
  Users, 
  
  Clock, 
  Target,
  Briefcase,
 
  DollarSign,
  GraduationCap,
  Building,

 
  
  
  Sparkles,
  
} from 'lucide-react';
import LeadFormButton from '@/components/LeadFormButton';

const GlobalFinanceHub = () => {
  const [, setSelectedPersona] = useState<string | null>(null);
  const [, setActiveCarousel] = useState(0);
  
  const [showPersonalization, setShowPersonalization] = useState(false);

  // Blogs API state
  type BlogItem = {
    title: string;
    slug: string;
    duration?: string;
    views?: string | number;
    thumbnail?: string;
  };
  type Pagination = {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
  type ApiBlogRaw = {
    title?: string;
    name?: string;
    slug?: string;
    id?: string;
    _id?: string;
    readingTime?: string;
    duration?: string;
    views?: string | number;
    view_count?: number;
    popularity?: number;
    thumbnail?: string;
    image?: string;
    cover?: string;
  };
  const isBlogArray = (value: unknown): value is ApiBlogRaw[] => {
    return Array.isArray(value) && value.every(v => typeof v === 'object' && v !== null);
  };
  const isPagination = (value: unknown): value is Pagination => {
    if (typeof value !== 'object' || value === null) return false;
    const v = value as Record<string, unknown>;
    return typeof v.page === 'number' && typeof v.pageSize === 'number' && typeof v.total === 'number' && typeof v.totalPages === 'number';
  };
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState<boolean>(true);
  const [blogsError, setBlogsError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const searchParams = useSearchParams();
  const activePage = Number(searchParams.get('page') || '1') || 1;

  // Auto-rotate hero carousels
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCarousel((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Hero Carousels Data
 

  // Personalization Options
  const personaOptions = [
    {
      id: 'student',
      title: "I'm a B.Com student",
      icon: GraduationCap,
      description: 'Exploring finance career options',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'working',
      title: "I'm working in accounting",
      icon: Briefcase,
      description: 'Looking to advance my career',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'abroad',
      title: "I want to go abroad",
      icon: Globe,
      description: 'Seeking international opportunities',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'confused',
      title: "I'm confused which to choose",
      icon: Target,
      description: 'Need guidance on certifications',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  // Fetch blogs with pagination and flatten to cards
  useEffect(() => {
    const controller = new AbortController();
    const apiBase = 'https://northstarapis-yamqp.ondigitalocean.app/api';
    const withPage = (baseUrl: string): string => {
      if (activePage <= 1) return baseUrl; // first page: no page param
      const u = new URL(baseUrl, apiBase);
      u.searchParams.set('page', String(activePage));
      return u.toString();
    };
    const urlCandidates = [
      withPage(`${apiBase}/blogs`),
      withPage(`${apiBase}/api/blogs`),
      withPage(`${apiBase}/posts`),
    ];

    const normalize = (raw: unknown): BlogItem[] => {
      let arr: ApiBlogRaw[] = [];
      if (isBlogArray(raw)) {
        arr = raw;
      } else if (typeof raw === 'object' && raw !== null) {
        const obj = raw as Record<string, unknown>;
        if (isBlogArray(obj.blogs)) arr = obj.blogs as ApiBlogRaw[];
        else if (isBlogArray(obj.items)) arr = obj.items as ApiBlogRaw[];
        else if (isBlogArray(obj.data)) arr = obj.data as ApiBlogRaw[];
      }
      return arr.map((it): BlogItem => ({
        title: it.title || it.name || 'Untitled',
        slug: it.slug || it.id || it._id || '',
        duration: it.readingTime || it.duration || undefined,
        views: it.views || it.view_count || it.popularity || undefined,
        thumbnail: it.thumbnail || it.image || it.cover || '/api/placeholder/300/200',
      })).filter((b) => !!b.slug);
    };

    const tryFetch = async () => {
      setLoadingBlogs(true);
      setBlogsError(null);
      for (const url of urlCandidates) {
        try {
          const res = await fetch(url, { signal: controller.signal, headers: { 'Accept': 'application/json' } });
          if (!res.ok) continue;
          const json = await res.json();
          const items = normalize(json);
          if (items.length > 0) {
            setBlogs(items);
            // Try to read pagination info from the response
            let pag: Pagination | null = null;
            if (typeof json === 'object' && json !== null && 'pagination' in json) {
              const maybe = (json as { pagination?: unknown }).pagination;
              if (isPagination(maybe)) pag = maybe;
            }
            // Fallback to known totals if API omits pagination
            if (!pag) {
              pag = { page: activePage, pageSize: 9, total: 702, totalPages: 78 };
            }
            setPagination(pag);
            setLoadingBlogs(false);
            return;
          }
        } catch (e: unknown) {
          if (typeof e === 'object' && e && 'name' in e && (e as { name?: string }).name === 'AbortError') return;
          // continue to next candidate
        }
      }
      setLoadingBlogs(false);
      setBlogsError('Unable to load blogs from API');
    };

    tryFetch();
    return () => controller.abort();
  }, [activePage]);

  // Micro Tools Data
 

  // Success Stories Data
  

  const handlePersonaSelect = (personaId: string) => {
    setSelectedPersona(personaId);
    setShowPersonalization(false);
    // Trigger personalized content assembly
  };

 

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Hero Title */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Global Finance Hub
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              Explore. Learn. Decide.
              <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent block">
                Grow Globally.
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              One hub. Every answer. Built for Indian finance aspirants.
            </motion.p>

            {/* Shifting Finance Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center items-center gap-8 mb-12"
            >
              {[Award, Globe, Briefcase, DollarSign, Building].map((Icon, index) => (
                <motion.div
                  key={index}
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-500 rounded-xl flex items-center justify-center"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Hero Carousels */}
        

          {/* Personalization CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <LeadFormButton
              
             formType='general'
             isSendOtp={true}

              className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get in Touch with our counsellors
              <Sparkles className="w-5 h-5 ml-2 inline" />
            </LeadFormButton>
          </motion.div>
        </div>
      </section>

      {/* Personalization Modal */}
      <AnimatePresence>
        {showPersonalization && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowPersonalization(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Choose Your Journey
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {personaOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handlePersonaSelect(option.id)}
                      className="p-6 border-2 border-gray-200 rounded-xl text-left hover:border-red-500 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{option.title}</h4>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Blogs Cards (flat list) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loadingBlogs && (
            <div className="flex justify-center items-center py-10 text-gray-600">
              Loading blogs...
            </div>
          )}
          {blogsError && (
            <div className="flex justify-center items-center py-10 text-red-600">
              {blogsError}
            </div>
          )}
          {!loadingBlogs && !blogsError && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((item, itemIndex) => (
                  <motion.a
                    key={item.slug || itemIndex}
                    href={`/blogs/${item.slug}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.05 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative">
                      {/* Thumbnail placeholder; replace background with image if provided */}
                      {item.thumbnail && (
                        <img src={item.thumbnail} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                      )}
                      {item.duration && (
                        <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                          {item.duration}
                        </div>
                      )}
                      {item.views && (
                        <div className="absolute bottom-4 right-4 bg-white/90 text-gray-900 px-2 py-1 rounded text-sm font-medium">
                          {item.views} views
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        {item.duration && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.duration}
                          </div>
                        )}
                        {item.views && (
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {item.views}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
              {pagination && pagination.totalPages > 1 && (
                <nav className="mt-10 flex justify-center">
                  <ul className="flex flex-wrap items-center gap-2">
                    {/* Previous */}
                    <li>
                      <a
                        href={
                          activePage > 1
                            ? activePage - 1 === 1
                              ? '/blogs'
                              : `/blogs?page=${activePage - 1}`
                            : '#'
                        }
                        aria-disabled={activePage <= 1 ? true : undefined}
                        className={`px-3 py-2 rounded-md border text-sm ${
                          activePage <= 1
                            ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        Previous
                      </a>
                    </li>

                    {activePage === pagination.totalPages ? (
                      // Last page: show 1, …, last-3, last-2, last-1, last
                      <>
                        <li>
                          <a
                            href={'/blogs'}
                            aria-current={activePage === 1 ? 'page' : undefined}
                            className={`px-3 py-2 rounded-md border text-sm ${
                              activePage === 1
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            1
                          </a>
                        </li>
                        {pagination.totalPages > 5 && (
                          <li>
                            <span className="px-2 text-gray-500">…</span>
                          </li>
                        )}
                        {Array.from({ length: 4 }, (_, i) => pagination.totalPages - 3 + i).map((pageNum) => (
                          <li key={`tail-${pageNum}`}>
                            <a
                              href={`/blogs?page=${pageNum}`}
                              aria-current={pageNum === activePage ? 'page' : undefined}
                              className={`px-3 py-2 rounded-md border text-sm ${
                                pageNum === activePage
                                  ? 'bg-blue-600 text-white border-blue-600'
                                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                              }`}
                            >
                              {pageNum}
                            </a>
                          </li>
                        ))}
                      </>
                    ) : (
                      // General: show 1,2,3, current-or-4, …, last
                      <>
                        {Array.from({ length: Math.min(3, pagination.totalPages) }, (_, i) => i + 1).map((pageNum) => {
                          const isActive = pageNum === activePage;
                          const href = pageNum === 1 ? '/blogs' : `/blogs?page=${pageNum}`;
                          return (
                            <li key={pageNum}>
                              <a
                                href={href}
                                aria-current={isActive ? 'page' : undefined}
                                className={`px-3 py-2 rounded-md border text-sm ${
                                  isActive
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                }`}
                              >
                                {pageNum}
                              </a>
                            </li>
                          );
                        })}
                        {pagination.totalPages >= 4 && (() => {
                          const fourth = activePage >= 4 ? Math.min(activePage, pagination.totalPages) : 4;
                          const isActive = fourth === activePage;
                          const href = fourth === 1 ? '/blogs' : `/blogs?page=${fourth}`;
                          return (
                            <li key={`fourth-${fourth}`}>
                              <a
                                href={href}
                                aria-current={isActive ? 'page' : undefined}
                                className={`px-3 py-2 rounded-md border text-sm ${
                                  isActive
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                }`}
                              >
                                {fourth}
                              </a>
                            </li>
                          );
                        })()}
                        {(() => {
                          if (pagination.totalPages < 5) return null;
                          const fourth = activePage >= 4 ? Math.min(activePage, pagination.totalPages) : 4;
                          const showEllipsis = pagination.totalPages > fourth + 1;
                          return showEllipsis ? (
                            <li>
                              <span className="px-2 text-gray-500">…</span>
                            </li>
                          ) : null;
                        })()}
                        {(() => {
                          const last = pagination.totalPages;
                          if (last <= 4) return null;
                          const fourth = activePage >= 4 ? Math.min(activePage, last) : 4;
                          if (last === fourth) return null;
                          const isActive = activePage === last;
                          const href = `/blogs?page=${last}`;
                          return (
                            <li key={last}>
                              <a
                                href={href}
                                aria-current={isActive ? 'page' : undefined}
                                className={`px-3 py-2 rounded-md border text-sm ${
                                  isActive
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                }`}
                              >
                                {last}
                              </a>
                            </li>
                          );
                        })()}
                      </>
                    )}

                    {/* Next */}
                    <li>
                      <a
                        href={
                          activePage < pagination.totalPages
                            ? `/blogs?page=${activePage + 1}`
                            : '#'
                        }
                        aria-disabled={activePage >= pagination.totalPages ? true : undefined}
                        className={`px-3 py-2 rounded-md border text-sm ${
                          activePage >= pagination.totalPages
                            ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              )}
            </>
          )}
        </div>
      </section>

      
    </div>
  );
};

export default GlobalFinanceHub;