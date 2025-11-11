/* eslint-disable @typescript-eslint/no-require-imports */
'use client';


import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";

import Footer from "@/components/Footer";
// import FloatingCalendarBadge from "@/components/FloatingCalendarBadge";
// // import ExitIntentPopup from "@/components/ExitIntentPopup";
// import ScrollLeadCapture from "@/components/ScrollLeadCapture";
// import SmartLeadMagnetBanner from "@/components/SmartLeadMagnetBanner";
// import { usePathname } from "next/navigation";
// import ExitIntentPopup from "@/components/ExitIntentPopup";
import { LeadFormProvider } from "@/context/LeadFormContext";
import { ToolsModalProvider, useToolsModal } from "@/context/ToolsModalContext";
import LeadFormModal from "@/components/LeadFormModal";
import { usePathname } from "next/navigation";
import GlobalPreloader from "@/components/GlobalPreloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  // Check if this is the Super300 page
  const isSuper300Page = pathname.includes("/super300");
  // Check if this is under the simplified "a" section
  // Use exact '/a' or '/a/*' to avoid matching '/acca-course-details-uk'
  const isASection = pathname === "/lp" || pathname.startsWith("/lp/");

  return (
    <html lang="en">
      <head>
        {/* Set site favicon to the JPEG in public */}
        <link rel="icon" href="/favicon.jpeg" type="image/jpeg" />
        
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-inter antialiased`}
      >
        {/* Global preloader overlay */}
        <GlobalPreloader />
        <LeadFormProvider>
        <ToolsModalProvider>
          {!isSuper300Page && !isASection && <AnnouncementBar />}
          {!isSuper300Page && !isASection && <Header />}
      
          {children}
          {/* Mount global lead form modal so it can open from anywhere */}
          <LeadFormModal />
          {/* Mount calculators modals portal */}
          <GlobalToolsModalPortal />
          
          
          
          {!isSuper300Page && !isASection && <Footer />}
        </ToolsModalProvider>
        </LeadFormProvider>
      </body>
    </html>
  );
}

// Lightweight portal component to render calculators modals globally
function GlobalToolsModalPortal() {
  const { activeTool, closeTool } = useToolsModal();
  const SalaryModal = require("@/components/tools/SalaryCalculatorModal").default;
  const RoiModal = require("@/components/tools/RoiCalculatorModal").default;
  const QuizModal = require("@/components/tools/CareerFitQuizModal").default;
  return (
    <>
      <SalaryModal isOpen={activeTool === "salary"} onClose={closeTool} />
      <RoiModal isOpen={activeTool === "roi"} onClose={closeTool} />
      <QuizModal isOpen={activeTool === "quiz"} onClose={closeTool} />
    </>
  );
}
