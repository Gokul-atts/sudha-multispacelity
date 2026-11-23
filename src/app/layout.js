import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/pages/header/Navbar";
import Footer from "@/pages/footer/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://sudhahospitals.com"),
  title: {
    template: "%s | Sudha Hospitals",
    default: "Sudha Hospitals | Multi-Speciality Hospital in Erode ",
  },
  description:
    "Choose Sudha, the Best Multispecialty hospital in Erode, for world-class treatments, diagnostics, and elite medical care. Schedule a visit today.",
    keywords: [
    "Best Multispecialty hospital in Erode"
  ],
  authors: [{ name: "Sudha Hospitals" }],
  creator: "Sudha Hospitals",
  publisher: "Sudha Hospitals",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sudhahospitals.com",
    languages: {
      "en-US": "https://sudhahospitals.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sudhahospitals.com",
    title: "Sudha Hospitals | Multi-Speciality Hospital in Erode ",
    description:
      "Sudha Multi-Speciality Hospital is a leading healthcare provider in Erode, Tamil Nadu. Providing world-class care in cardiology, orthopaedics, obstetrics & gynaecology, and more.",
    siteName: "Sudha Hospitals",
    images: [
      {
        url: "/Banner.png",
        width: 1200,
        height: 630,
        alt: "Sudha Multi-Speciality Hospital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudha Hospitals | Multi-Speciality Hospital in Erode ",
    description:
      "Sudha Multi-Speciality Hospital is a leading healthcare provider in Erode , Tamil Nadu.",
    images: ["/Banner.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
