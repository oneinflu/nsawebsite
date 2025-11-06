/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Clock, 
  Heart, 
  Bookmark, 
  Share2, 
  MessageSquare, 
  Download, 
  Copy, 
  Check, 
  Menu, 
  X, 
  ExternalLink,
  Eye,
  ThumbsUp,
  Flag,
  ChevronLeft,
  ChevronDown,
  MessageCircle,
  Star,
 
  MapPin,
  Linkedin,
  Twitter,
 
  FileText,
  Target,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Calculator,
  DollarSign,
  Globe,
  
  ArrowRight,
  Users,
 
  BookOpen,
 
  Calendar,
 
} from 'lucide-react';

interface ArticlePageProps {
  article: {
    id: string;
    title: string;
    dek: string;
    content: string;
    image?: string;
    author: {
      name: string;
      avatar: string;
      role: string;
      bio: string;
      socialLinks: {
        linkedin?: string;
        twitter?: string;
        youtube?: string;
      };
      pinnedGuides: Array<{
        title: string;
        slug: string;
        readTime: string;
      }>;
      stats: {
        followers: number;
        articles: number;
        views: number;
      };
      officeHours?: string;
      featuredIn: string[];
      reviews: Array<{
        name: string;
        text: string;
        rating: number;
      }>;
    };
    publishDate: string;
    readTime: string;
    category: string;
    tags: string[];
    series?: {
      name: string;
      position: number;
      total: number;
      prevArticle?: { title: string; slug: string };
      nextArticle?: { title: string; slug: string };
    };
    relatedArticles: Array<{
      title: string;
      slug: string;
      readTime: string;
      category: string;
    }>;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
    stats: {
      views: number;
      likes: number;
      saves: number;
      comments: number;
    };
  };
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowingAuthor, setIsFollowingAuthor] = useState(false);
  const [isFollowingTopic, setIsFollowingTopic] = useState(false);
  const [showTOC, setShowTOC] = useState(false);
  const [activeSection, ] = useState('');
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showStickyActions, setShowStickyActions] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [newComment, setNewComment] = useState('');
  const [showAuthorProfile, setShowAuthorProfile] = useState(false);
  const [, ] = useState('all');
  const [comments, setComments] = useState([
    {
      id: '1',
      author: 'Sarah Chen',
      avatar: '/api/placeholder/40/40',
      content: 'This guide really helped me understand the CPA requirements. The state board comparison was particularly useful!',
      timestamp: '2 hours ago',
      likes: 12,
      replies: 3,
      isLiked: false,
      isSolved: false
    },
    {
      id: '2',
      author: 'Michael Rodriguez',
      avatar: '/api/placeholder/40/40',
      content: 'Question: Do I need to complete all 150 credit hours before taking the exam, or can I sit for it with 120 hours?',
      timestamp: '5 hours ago',
      likes: 8,
      replies: 1,
      isLiked: false,
      isSolved: true
    }
  ]);

  // Table of Contents generation
  const tableOfContents = [
    { id: 'overview', title: 'CPA Overview', level: 2 },
    { id: 'requirements', title: 'Education Requirements', level: 2 },
    { id: 'state-boards', title: 'State Board Differences', level: 2 },
    { id: 'exam-structure', title: 'Exam Structure', level: 2 },
    { id: 'fees-costs', title: 'Fees & Costs', level: 2 },
    { id: 'career-prospects', title: 'Career Prospects', level: 2 },
    { id: 'study-tips', title: 'Study Tips', level: 2 },
    { id: 'faqs', title: 'Frequently Asked Questions', level: 2 }
  ];

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
      
      // Show sticky actions after 20% scroll
      setShowStickyActions(progress > 20);
      
      // Show lead magnet after 25% scroll
      if (progress > 25 && !showLeadMagnet) {
        setShowLeadMagnet(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showLeadMagnet]);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.dek,
        url: window.location.href,
      });
    } else {
      copyToClipboard(window.location.href, 'share-url');
    }
  };

  const handleWhatsAppShare = () => {
    const text = `Check out this CPA guide: ${article.title} ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const addComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now().toString(),
        author: 'You',
        avatar: '/api/placeholder/40/40',
        content: newComment,
        timestamp: 'Just now',
        likes: 0,
        replies: 0,
        isLiked: false,
        isSolved: false
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-red-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <img src="/logo.svg" alt="NorthStar" className="h-8 w-auto" />
              
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm text-gray-500">
                <a href="/blogs" className="hover:text-red-600 transition-colors">Learn</a>
                <ChevronRight className="w-4 h-4" />
                <span className="text-red-600 font-medium">{article.category}</span>
              </nav>
            </div>

            {/* Mobile TOC Toggle */}
            <button
              onClick={() => setShowTOC(!showTOC)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Table of Contents - Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-red-600" />
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm py-2 px-3 rounded-lg transition-all duration-200 ${
                        activeSection === item.id
                          ? 'bg-red-50 text-red-700 font-medium border-l-2 border-red-600'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                      style={{ paddingLeft: `${item.level * 8 + 12}px` }}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6">
            <article className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              {/* Hero Image */}
              {article.image && (
                <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              )}
              
              {/* Article Header */}
              <div className="p-8 pb-6 border-b border-gray-100">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                  {article.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light" style={{ maxWidth: '76ch' }}>
                  {article.dek}
                </p>

                {/* Author & Meta Info */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setShowAuthorProfile(true)}
                      className="flex items-center space-x-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="w-12 h-12 rounded-full ring-2 ring-gray-100"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900">{article.author.name}</h3>
                          <span className="text-sm text-gray-400">•</span>
                          <span className="text-sm text-red-600 font-medium">{article.author.role}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{article.publishDate}</span>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{article.stats.views.toLocaleString()} views</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setIsFollowingAuthor(!isFollowingAuthor)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isFollowingAuthor
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          : 'bg-red-600 text-white hover:bg-red-700 shadow-sm'
                      }`}
                    >
                      {isFollowingAuthor ? 'Following' : 'Follow Author'}
                    </button>
                    <button
                      onClick={() => setIsFollowingTopic(!isFollowingTopic)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isFollowingTopic
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          : 'bg-green-600 text-white hover:bg-green-700 shadow-sm'
                      }`}
                    >
                      {isFollowingTopic ? 'Following Topic' : 'Follow Topic'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Article Body */}
              <div className="p-8">
                <div className="prose prose-lg max-w-none" style={{ maxWidth: '76ch' }}>
                  {/* Overview Section */}
                  <section id="overview" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">CPA Overview</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      The Certified Public Accountant (CPA) designation is one of the most prestigious 
                      and valuable credentials in the accounting and finance industry. This comprehensive 
                      guide will walk you through everything you need to know about becoming a CPA, 
                      from education requirements to career prospects.
                    </p>

                    {/* Key Takeaways Callout */}
                    <div className="bg-gradient-to-r from-red-50 to-indigo-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-red-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-red-900 mb-3">Key Takeaways</h4>
                          <ul className="space-y-2 text-red-800">
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mt-1 mr-2 text-red-600 flex-shrink-0" />
                              CPA license requires 150 credit hours of education
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mt-1 mr-2 text-red-600 flex-shrink-0" />
                              Pass rate for CPA exam is approximately 50%
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mt-1 mr-2 text-red-600 flex-shrink-0" />
                              Average salary increase of 25-30% after CPA certification
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mt-1 mr-2 text-red-600 flex-shrink-0" />
                              License must be maintained through continuing education
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Requirements Section */}
                  <section id="requirements" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Education Requirements</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      To become a CPA, you must meet specific education requirements that vary by state. 
                      Most states require 150 semester hours of college education, which is 30 hours 
                      more than a typical bachelor&apos;s degree.
                    </p>

                    {/* Data Visual */}
                    <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-6 text-center">Credit Hour Requirements by State</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-lg text-center shadow-sm border border-gray-100">
                          <div className="text-3xl font-bold text-red-600 mb-2">42</div>
                          <div className="text-sm text-gray-600 font-medium">States require 150 hours</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg text-center shadow-sm border border-gray-100">
                          <div className="text-3xl font-bold text-green-600 mb-2">6</div>
                          <div className="text-sm text-gray-600 font-medium">States require 120 hours</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg text-center shadow-sm border border-gray-100">
                          <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                          <div className="text-sm text-gray-600 font-medium">States have special requirements</div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-4 text-center italic">
                        Data as of 2024. Requirements may vary by state board.
                      </p>
                    </div>

                    {/* Pro Tips Callout */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
                      <div className="flex items-start">
                        <Target className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-green-900 mb-3">Pro Tips</h4>
                          <ul className="space-y-2 text-green-800">
                            <li className="flex items-start">
                              <ArrowRight className="w-4 h-4 mt-1 mr-2 text-green-600 flex-shrink-0" />
                              Consider a Master&apos;s in Accounting to meet the 150-hour requirement
                            </li>
                            <li className="flex items-start">
                              <ArrowRight className="w-4 h-4 mt-1 mr-2 text-green-600 flex-shrink-0" />
                              Some states allow work experience to substitute for education credits
                            </li>
                            <li className="flex items-start">
                              <ArrowRight className="w-4 h-4 mt-1 mr-2 text-green-600 flex-shrink-0" />
                              Plan your coursework to include required accounting and business subjects
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Code/Formula Block Example */}
                  <section id="exam-structure" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Exam Structure</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      The CPA exam consists of four sections, each with a specific focus and scoring methodology.
                    </p>

                    <div className="bg-gray-900 rounded-xl p-6 my-8 relative overflow-hidden">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-300 text-sm font-medium flex items-center">
                          <Calculator className="w-4 h-4 mr-2" />
                          CPA Exam Scoring Formula
                        </span>
                        <button
                          onClick={() => copyToClipboard('Score = (MCQ × 0.5) + (TBS × 0.5)', 'scoring-formula')}
                          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors bg-gray-800 px-3 py-1 rounded-lg"
                        >
                          {copiedCode === 'scoring-formula' ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                          <span className="text-sm">Copy</span>
                        </button>
                      </div>
                      <code className="text-green-400 font-mono text-sm block">
                        <div className="mb-2">Score = (MCQ × 0.5) + (TBS × 0.5)</div>
                        <div className="text-gray-400 mb-2">Where: MCQ = Multiple Choice Questions, TBS = Task-Based Simulations</div>
                        <div className="text-yellow-400">Passing Score: 75 (on a scale of 0-99)</div>
                      </code>
                    </div>
                  </section>

                  {/* Common Mistakes Callout */}
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                    <div className="flex items-start">
                      <AlertCircle className="w-6 h-6 text-red-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-red-900 mb-3">Common Mistakes</h4>
                        <ul className="space-y-2 text-red-800">
                          <li className="flex items-start">
                            <X className="w-4 h-4 mt-1 mr-2 text-red-600 flex-shrink-0" />
                            Not checking state-specific requirements before starting
                          </li>
                          <li className="flex items-start">
                            <X className="w-4 h-4 mt-1 mr-2 text-red-600 flex-shrink-0" />
                            Underestimating study time needed (typically 300-400 hours)
                          </li>
                          <li className="flex items-start">
                            <X className="w-4 h-4 mt-1 mr-2 text-red-600 flex-shrink-0" />
                            Taking sections too far apart (18-month window to complete all four)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Context Links */}
                  <div className="bg-gradient-to-r from-red-50 to-indigo-50 rounded-xl p-6 my-8 border border-red-200">
                    <h4 className="font-semibold text-red-900 mb-4 flex items-center">
                      <Globe className="w-5 h-5 mr-2" />
                      Related CPA Resources
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a href="/cpa-us/fees" className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:bg-red-50 transition-all duration-200 border border-red-100 hover:border-red-300 group">
                        <DollarSign className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
                        <div className="flex-1">
                          <div className="font-medium text-red-900">CPA Fees & ROI</div>
                          <div className="text-sm text-red-700">Complete cost breakdown</div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      <a href="/cpa-us/state-boards" className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:bg-red-50 transition-all duration-200 border border-red-100 hover:border-red-300 group">
                        <MapPin className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
                        <div className="flex-1">
                          <div className="font-medium text-red-900">State Board Requirements</div>
                          <div className="text-sm text-red-700">Find your state&apos;s rules</div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lead Magnet - Appears after 25% scroll */}
              <AnimatePresence>
                {showLeadMagnet && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mx-8 mb-8"
                  >
                    <div className="bg-gradient-to-r from-red-600 via-purple-600 to-red-700 rounded-xl p-6 text-white relative overflow-hidden">
                      <div className="absolute inset-0 bg-black opacity-10"></div>
                      <div className="relative flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 flex items-center">
                            <Download className="w-6 h-6 mr-2" />
                            Download the Complete CPA Syllabus (PDF)
                          </h3>
                          <p className="text-red-100 mb-4">Get the detailed breakdown of all four exam sections, study timeline, and recommended resources.</p>
                          <div className="flex items-center space-x-4 text-sm text-red-200">
                            <span className="flex items-center">
                              <CheckCircle className="w-4 h-4 mr-1" />
                              40+ pages
                            </span>
                            <span className="flex items-center">
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Updated 2024
                            </span>
                            <span className="flex items-center">
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Free download
                            </span>
                          </div>
                        </div>
                        <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                          <Download className="w-5 h-5" />
                          <span>Download Free</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* FAQ Section */}
              <section id="faqs" className="p-8 border-t border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {article.faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                      <button className="w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        </div>
                      </button>
                      <div className="px-4 pb-4 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Author Box */}
              <div className="p-8 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-red-50">
                <div className="flex items-start space-x-6">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-20 h-20 rounded-full ring-4 ring-white shadow-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{article.author.name}</h3>
                      <button
                        onClick={() => setIsFollowingAuthor(!isFollowingAuthor)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isFollowingAuthor
                            ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            : 'bg-red-600 text-white hover:bg-red-700 shadow-sm'
                        }`}
                      >
                        {isFollowingAuthor ? 'Following' : 'Follow'}
                      </button>
                    </div>
                    <p className="text-red-600 font-medium mb-2">{article.author.role}</p>
                    <p className="text-gray-700 mb-4 leading-relaxed">{article.author.bio}</p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {article.author.stats.followers.toLocaleString()} followers
                      </span>
                      <span className="flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        {article.author.stats.articles} articles
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {article.author.stats.views.toLocaleString()} total views
                      </span>
                    </div>

                    <div className="flex items-center space-x-4">
                      {article.author.socialLinks.linkedin && (
                        <a href={article.author.socialLinks.linkedin} className="text-gray-600 hover:text-red-600 transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {article.author.socialLinks.twitter && (
                        <a href={article.author.socialLinks.twitter} className="text-gray-600 hover:text-red-400 transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {article.author.officeHours && (
                        <a href={article.author.officeHours} className="text-sm text-red-600 hover:text-red-800 font-medium transition-colors flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Book Office Hours →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Series Navigation */}
              {article.series && (
                <div className="p-8 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    {article.series.prevArticle ? (
                      <a href={`/blog/${article.series.prevArticle.slug}`} className="flex items-center space-x-2 text-red-600 hover:text-red-800 transition-colors group">
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <div>
                          <div className="text-sm text-gray-500">Previous</div>
                          <div className="font-medium">{article.series.prevArticle.title}</div>
                        </div>
                      </a>
                    ) : (
                      <div></div>
                    )}
                    
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Part {article.series.position} of {article.series.total}</div>
                      <div className="font-medium text-gray-900">{article.series.name}</div>
                    </div>

                    {article.series.nextArticle ? (
                      <a href={`/blog/${article.series.nextArticle.slug}`} className="flex items-center space-x-2 text-red-600 hover:text-red-800 text-right transition-colors group">
                        <div>
                          <div className="text-sm text-gray-500">Next</div>
                          <div className="font-medium">{article.series.nextArticle.title}</div>
                        </div>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              )}

              {/* Related Articles */}
              <div className="p-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-red-600" />
                  Related Reads
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {article.relatedArticles.map((related, index) => (
                    <a
                      key={index}
                      href={`/blog/${related.slug}`}
                      className="block p-4 border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all duration-200 group"
                    >
                      <div className="text-sm text-red-600 font-medium mb-1">{related.category}</div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{related.title}</h4>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {related.readTime}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Comments Section */}
              <div className="p-8 border-t border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2 text-red-600" />
                    Comments ({comments.length})
                  </h3>
                  <select
                    className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="all">All Comments</option>
                    <option value="questions">Questions Only</option>
                    <option value="solved">Solved</option>
                  </select>
                </div>

                {/* Add Comment */}
                <div className="mb-8">
                  <div className="flex space-x-4">
                    <img src="/api/placeholder/40/40" alt="You" className="w-10 h-10 rounded-full ring-2 ring-gray-100" />
                    <div className="flex-1">
                      <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Share your thoughts or ask a question..."
                        className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        rows={3}
                      />
                      <div className="flex items-center justify-between mt-2">
                        <div className="text-sm text-gray-500">
                          Be respectful and constructive in your comments.
                        </div>
                        <button
                          onClick={addComment}
                          disabled={!newComment.trim()}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Post Comment</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-4">
                      <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full ring-2 ring-gray-100" />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold text-gray-900">{comment.author}</span>
                          <span className="text-sm text-gray-500">{comment.timestamp}</span>
                          {comment.isSolved && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Solved
                            </span>
                          )}
                        </div>
                        <p className="text-gray-700 mb-3 leading-relaxed">{comment.content}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <button className="flex items-center space-x-1 text-gray-500 hover:text-red-600 transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            <span>{comment.likes}</span>
                          </button>
                          <button className="text-gray-500 hover:text-red-600 transition-colors">Reply</button>
                          {comment.replies > 0 && (
                            <span className="text-gray-500">{comment.replies} replies</span>
                          )}
                          <button className="text-gray-500 hover:text-red-600 transition-colors">
                            <Flag className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Floating Action Rail - Desktop */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="space-y-3">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`w-full flex items-center justify-center space-x-2 p-3 rounded-lg transition-all duration-200 ${
                      isLiked
                        ? 'bg-red-50 text-red-600 border border-red-200'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    <span>{article.stats.likes + (isLiked ? 1 : 0)}</span>
                  </button>

                  <button
                    onClick={() => setIsSaved(!isSaved)}
                    className={`w-full flex items-center justify-center space-x-2 p-3 rounded-lg transition-all duration-200 ${
                      isSaved
                        ? 'bg-red-50 text-red-600 border border-red-200'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                    <span>Save</span>
                  </button>

                  <button
                    onClick={handleShare}
                    className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200 transition-all duration-200"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>

                  <button
                    onClick={handleWhatsAppShare}
                    className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 border border-green-200 transition-all duration-200"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    onClick={() => window.print()}
                    className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200 transition-all duration-200"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Print</span>
                  </button>
                </div>

                {/* Article Stats */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Article Stats</h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        Views
                      </span>
                      <span className="font-medium">{article.stats.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        Likes
                      </span>
                      <span className="font-medium">{article.stats.likes}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Bookmark className="w-4 h-4 mr-1" />
                        Saves
                      </span>
                      <span className="font-medium">{article.stats.saves}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Comments
                      </span>
                      <span className="font-medium">{article.stats.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile TOC Overlay */}
      <AnimatePresence>
        {showTOC && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
            onClick={() => setShowTOC(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="bg-white h-full w-80 p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-red-600" />
                  Table of Contents
                </h3>
                <button
                  onClick={() => setShowTOC(false)}
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setShowTOC(false)}
                    className="block text-sm py-2 px-3 rounded text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    style={{ paddingLeft: `${item.level * 12}px` }}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Side CTA */}
      <AnimatePresence>
        {showStickyActions && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 lg:hidden"
          >
            <div className="bg-green-600 text-white p-4 rounded-xl shadow-lg">
              <div className="text-sm font-medium mb-2">Need Help?</div>
              <button
                onClick={handleWhatsAppShare}
                className="bg-white text-green-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Talk to CPA Advisor</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exit Intent Modal */}
      <AnimatePresence>
        {showExitIntent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl"
            >
              <div className="text-center">
                <Bookmark className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Save This Guide & Get the Checklist
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Don&apos;t lose this valuable information. Save it to your reading list and get our 
                  CPA preparation checklist sent to your email.
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Save & Get Checklist</span>
                  </button>
                  <button
                    onClick={() => setShowExitIntent(false)}
                    className="w-full text-gray-600 hover:text-gray-900 transition-colors py-2"
                  >
                    No thanks, continue reading
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Author Profile Modal */}
      <AnimatePresence>
        {showAuthorProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowAuthorProfile(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Author Profile Header */}
              <div className="relative">
                <div className="h-32 bg-gradient-to-r from-red-600 to-purple-600"></div>
                <button
                  onClick={() => setShowAuthorProfile(false)}
                  className="absolute top-4 right-4 p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute -bottom-12 left-8">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-24 h-24 rounded-full ring-4 ring-white shadow-lg"
                  />
                </div>
              </div>

              <div className="pt-16 p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{article.author.name}</h2>
                    <p className="text-red-600 font-medium text-lg">{article.author.role}</p>
                  </div>
                  <button
                    onClick={() => setIsFollowingAuthor(!isFollowingAuthor)}
                    className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isFollowingAuthor
                        ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        : 'bg-red-600 text-white hover:bg-red-700'
                    }`}
                  >
                    {isFollowingAuthor ? 'Following' : 'Follow'}
                  </button>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{article.author.bio}</p>

                {/* Author Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{article.author.stats.followers.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Followers</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{article.author.stats.articles}</div>
                    <div className="text-sm text-gray-600">Articles</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{article.author.stats.views.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Total Views</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4 mb-6">
                  {article.author.socialLinks.linkedin && (
                    <a href={article.author.socialLinks.linkedin} className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  )}
                  {article.author.socialLinks.twitter && (
                    <a href={article.author.socialLinks.twitter} className="p-2 text-gray-600 hover:text-red-400 transition-colors">
                      <Twitter className="w-6 h-6" />
                    </a>
                  )}
                  {article.author.officeHours && (
                    <a href={article.author.officeHours} className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                      <Calendar className="w-5 h-5" />
                      <span>Book Office Hours</span>
                    </a>
                  )}
                </div>

                {/* Pinned Guides */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Pinned Guides</h3>
                  <div className="space-y-3">
                    {article.author.pinnedGuides.map((guide, index) => (
                      <a
                        key={index}
                        href={`/blog/${guide.slug}`}
                        className="block p-3 border border-gray-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-all"
                      >
                        <div className="font-medium text-gray-900">{guide.title}</div>
                        <div className="text-sm text-gray-500 flex items-center mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {guide.readTime}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Featured In */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Featured In</h3>
                  <div className="flex flex-wrap gap-3">
                    {article.author.featuredIn.map((company, index) => (
                      <div key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {company}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Student Reviews */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Student Reviews</h3>
                  <div className="space-y-4">
                    {article.author.reviews.map((review, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 font-medium text-gray-900">{review.name}</span>
                        </div>
                        <p className="text-gray-700 text-sm">{review.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArticlePage;