import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "LiberteDigitale.com — Premium Domain For Sale",
  description:
    "Acquire LiberteDigitale.com — a premium, brandable domain built for e-learning, digital coaching, and online education platforms. 18 months of development, ready for your brand.",
  keywords: [
    "premium domain",
    "domain for sale",
    "LiberteDigitale",
    "e-learning domain",
    "digital coaching",
    "online education",
    "brandable domain",
  ],
  openGraph: {
    title: "LiberteDigitale.com — Premium Domain For Sale",
    description:
      "Acquire a premium, brandable domain built for the next era of online education and coaching.",
    type: "website",
    url: "http://libertedigitale.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "LiberteDigitale.com — Premium Domain For Sale",
    description:
      "Acquire a premium, brandable domain built for the next era of online education and coaching.",
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
