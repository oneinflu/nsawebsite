'use client';

import Image from 'next/image';
import Link from 'next/link';

const SimpleFooter = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        {/* Top Section with Brand and Quick Links */}
        <div className="border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

              {/* Brand Column */}
              <div className="lg:col-span-2">
                <div className="inline-flex items-center mb-4">
                  <Image src="/logo.svg" alt="NorthStar Academy" width={140} height={40} className="h-10 w-auto" />
                </div>
                <p className="text-gray-300 text-md md:text-lg leading-relaxed mb-6 md:max-w-md">
                  Empowering ambitious finance professionals with world-class certifications and career guidance.
                </p>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-green-400 text-lg">🏆</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">2,00,000+</div>
                      <div className="text-gray-400 text-sm">Students Trained</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-yellow-400 text-lg">⭐</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">4.9/5</div>
                      <div className="text-gray-400 text-sm">Google Reviews</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-medium">Bengaluru, India</div>
                      <div className="text-gray-400 text-sm">Global Headquarters</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-medium">+91 81474 70707</div>
                      <div className="text-gray-400 text-sm">24/7 Support</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-medium">contact@northstaracad.com</div>
                      <div className="text-gray-400 text-sm">General Inquiries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 pb-24 lg:pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">

              {/* Copyright and Legal */}
              <div className="mb-6 lg:mb-0">
                <p className="text-gray-400 text-sm mb-2">
                  © {currentYear} NorthStar Academy. All rights reserved.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </Link>
                  <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Terms & Conditions
                  </Link>
                  <Link href="/refund-policy" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Refund Policy
                  </Link>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm mr-2">Follow us:</span>
                <a
                  href="https://www.linkedin.com/school/northstaracademy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-200 group"
                >
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCVhLjuXs5z5ZYJBxpeRbI1g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-200 group"
                >
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/northstaracad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-200 group"
                >
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/NorthStar_Acad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-red-500 rounded-lg flex items-center justify-center transition-all duration-200 group"
                >
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Certifications & Badges */}
            <div className="mt-8 mb-16 pt-6 border-t border-gray-700/50">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-2">
                    <span className="text-red-400 text-sm">🏛️</span>
                  </div>
                  <span className="text-gray-400 text-sm font-medium">IMA Premium Partner</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2">
                    <span className="text-green-400 text-sm">🔒</span>
                  </div>
                  <span className="text-gray-400 text-sm font-medium">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-2">
                    <span className="text-red-400 text-sm">🏢</span>
                  </div>
                  <span className="text-gray-400 text-sm font-medium">Prometric Authorized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;