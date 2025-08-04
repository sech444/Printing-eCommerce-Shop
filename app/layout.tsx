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
  robots: {
    index: true,
    follow: true,
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
      <head>
        <link rel="canonical" href="https://www.lamoneiqa.ng/" />
        <meta property="og:title" content="La'Moniega Integrated Services Ltd - Professional Printing Services" />
        <meta property="og:description" content="Professional printing services including business cards, banners, books, custom merchandise, embroidery, and digital printing." />
        <meta property="og:url" content="https://www.lamoneiqa.ng" />
        <meta property="og:site_name" content="La'Moniega Printing Services" />
        <meta property="og:image" content="https://www.lamoneiqa.ng/logo v1.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="La'Moniega Integrated Services Ltd Logo" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="La'Moniega Integrated Services Ltd - Professional Printing Services" />
        <meta name="twitter:description" content="Professional printing services including business cards, banners, books, custom merchandise, embroidery, and digital printing." />
        <meta name="twitter:image" content="https://www.lamoneiqa.ng/logo v1.png" />
        
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
      </head>
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