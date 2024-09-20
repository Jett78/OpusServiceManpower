// app/(home)/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import LenisInitializer from "./components/LenseInit";
import MainContent from "../MainContent";
import Staticad from "./components/Staticad";
export const metadata: Metadata = {
  title: "Opus Manpower Service - Premier Recruitment & Staffing Solutions",
  openGraph: {
    title: "Opus Manpower Service - Premier Recruitment & Staffing Solutions",
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
        <LenisInitializer />
        <Staticad/>
        <MainContent>{children}</MainContent>
      </body>
    </html>
  );
}