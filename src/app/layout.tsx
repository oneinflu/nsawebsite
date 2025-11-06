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
import LeadFormModal from "@/components/LeadFormModal";
import { LoadScript } from "@react-google-maps/api";
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
  // Use exact '/a' or '/a/*' to avoid matching '/acca-uk'
  const isASection = pathname === "/a" || pathname.startsWith("/a/");

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} font-inter antialiased`}
      >
        {/* Global preloader overlay */}
        <GlobalPreloader />
        <LeadFormProvider>
           <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "AIzaSyAOPCNlHy1wcVmr7Srt_1ic9EqEStBSMm4"}
          libraries={["places"]}
        >
          {!isSuper300Page && !isASection && <AnnouncementBar />}
          {!isSuper300Page && !isASection && <Header />}
      
          {children}
          {/* Mount global lead form modal so it can open from anywhere */}
          <LeadFormModal />
          
         
         
          {!isSuper300Page && !isASection && <Footer />}
          </LoadScript>
        </LeadFormProvider>
      </body>
    </html>
  );
}
