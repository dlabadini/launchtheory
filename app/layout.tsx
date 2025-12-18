import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://launchtheory.com"),
  title: {
    default: "Launch Theory - Reach Escape Velocity",
    template: "%s | Launch Theory",
  },
  description: "Empowering companies to survive and thrive in a post-AI world. AI products, agentic workflows, AI automation, and vibe coding solutions for the next generation of business.",
  keywords: [
    "AI products",
    "agentic workflow",
    "AI automation",
    "vibe coding",
    "AI strategy",
    "AI consulting",
    "agentic AI",
    "workflow automation",
    "AI development",
    "AI implementation",
    "post-AI world",
    "digital transformation",
    "organizational change",
    "business strategy",
    "AI-native products",
    "intelligent automation",
  ],
  authors: [{ name: "Launch Theory" }],
  creator: "Launch Theory",
  publisher: "Launch Theory",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Launch Theory",
    title: "Launch Theory - Reach Escape Velocity",
    description: "Empowering companies to survive and thrive in a post-AI world. AI products, agentic workflows, AI automation, and vibe coding solutions for the next generation of business.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Launch Theory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Launch Theory - Reach Escape Velocity",
    description: "Empowering companies to survive and thrive in a post-AI world. AI products, agentic workflows, and AI automation.",
    images: ["/og-image.png"],
    creator: "@launchtheory",
  },
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
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", type: "image/svg+xml" },
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#0a0a0a",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Launch Theory",
    description: "Empowering companies to survive and thrive in a post-AI world. AI products, agentic workflows, AI automation, and vibe coding solutions.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://launchtheory.com",
    email: "hello@launchtheory.com",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@launchtheory.com",
      contactType: "Business Inquiries",
    },
  };

  return (
    <html lang="en" className={figtree.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}

