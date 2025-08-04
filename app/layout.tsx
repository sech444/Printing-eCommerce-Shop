import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header, StructuredData } from "@/components";
import SessionProvider from "@/utils/SessionProvider";
import Providers from "@/Providers";
import { getServerSession } from "next-auth";
import 'svgmap/dist/svgMap.min.css';




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "La'Moniega Integrated Services Ltd - Professional Printing Services",
    template: "%s | La'Moniega Printing Services"
  },
  description: "Professional printing services including business cards, banners, books, custom merchandise, embroidery, and digital printing. Quality printing solutions for businesses and individuals.",
  keywords: [
    "printing services",
    "business card printing",
    "banner printing",
    "book printing",
    "custom merchandise",
    "embroidery services",
    "digital printing",
    "commercial printing",
    "professional printing",
    "print shop",
    "custom printing",
    "promotional products"
  ],
  authors: [{ name: "La'Moniega Integrated Services Ltd" }],
  creator: "La'Moniega Integrated Services Ltd",
  publisher: "La'Moniega Integrated Services Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.lamoneiqa.ng/',
  },
  openGraph: {
    title: "La'Moniega Integrated Services Ltd - Professional Printing Services",
    description: "Professional printing services including business cards, banners, books, custom merchandise, embroidery, and digital printing. Quality printing solutions for businesses and individuals.",
    url: 'https://www.lamoneiqa.ng',
    siteName: "La'Moniega Printing Services",
    images: [
      {
        url: 'https://www.lamoneiqa.ng/logo v1.png',
        width: 1200,
        height: 630,
        alt: "La'Moniega Integrated Services Ltd Logo",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "La'Moniega Integrated Services Ltd - Professional Printing Services",
    description: "Professional printing services including business cards, banners, books, custom merchandise, embroidery, and digital printing.",
    images: ['/logo v1.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession();
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
      <SessionProvider session={session}>
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <Header />
        <Providers>
        {children}
        </Providers>
        <Footer />
      </SessionProvider>
        </body>
    </html>
  );
}
