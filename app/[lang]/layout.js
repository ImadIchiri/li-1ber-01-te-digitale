import { Playfair_Display, Inter } from "next/font/google";
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getDictionary } from "../dictionaries/get-dictionary"; // We need dictionary for header/footer too

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

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.hero.title + " | LiberteDigitale.com", // Example dynamic title
    description: dict.hero.subtitle,
    icons: {
      icon: "/favicon-32x32.png",
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Header dict={dict.header} lang={lang} />
        <main>{children}</main>
        <Footer dict={dict.footer} />
      </body>
    </html>
  );
}
