import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
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
    openGraph: {
      title: dict.hero.title + " | LiberteDigitale.com",
      description: dict.hero.subtitle,
      siteName: 'LiberteDigitale.com',
      images: [
        {
          url: '/social-share-image.png',
          width: 1200,
          height: 630,
        },
      ],
      locale: lang,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.hero.title + " | LiberteDigitale.com",
      description: dict.hero.subtitle,
      images: ['/social-share-image.png'],
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
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="95446c71-cb8b-4dcb-8db7-37a13a15152e"
          strategy="afterInteractive"
        />
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J567Q7W9TL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-J567Q7W9TL');
          `}
        </Script>
        <Header dict={dict.header} lang={lang} />
        <main>{children}</main>
        <Footer dict={dict.footer} />
      </body>
    </html>
  );
}
