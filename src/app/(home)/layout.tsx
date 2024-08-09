import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./Home/Footer";
import Lenis from "lenis";
import MobileButtons from "./components/MobileButtons";
import LenisInitializer from "./components/LenseInit";
import { Metadata } from "next";
import Fav from '@/app/favicon.ico'
export const metadata: Metadata = {
  title:
    "Opus Manpower Service - Premier Recruitment & Staffing Solutions",
  openGraph: {
    title:
      "Opus Manpower Service - Premier Recruitment & Staffing Solutions",
    description:
      "Opus Manpower Service provides top-tier recruitment and staffing solutions, connecting employers with the best talent across industries. Explore our comprehensive services tailored to meet your workforce needs.",
    images: [
      "https://res.cloudinary.com/dgjuuo5ds/image/upload/v1723200930/Screenshot_2024-08-09_at_16-37-51_Opus_Manpower_Service_-_Premier_Recruitment_Staffing_Solutions_cdt2dv.png",
    ],
  },
  description:
    "Opus Manpower Service provides top-tier recruitment and staffing solutions, connecting employers with the best talent across industries. Explore our comprehensive services tailored to meet your workforce needs.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <LenisInitializer/>
        <div className="z-[200] relative">
          <Navbar />
        </div>
        <div>
             {children}
        </div>

        <Footer />
        <div className="z-[999] fixed botom-0">
          <MobileButtons />
        </div>
      </body>
    </html>
  );
  0;
}
