import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import ClientEffects from "@/components/effects/ClientEffects";
import { Locale } from "@/lib/dictionary";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-fikrirahmansyah510.vercel.app"),
  title: {
    default: "Fikri Rahmansyah | Fullstack Developer",
    template: "%s | Fikri Rahmansyah",
  },
  description:
    "Website portofolio personal Fullstack Developer yang colorful dan interaktif.",
  openGraph: {
    title: "Fikri Rahmansyah | Fullstack Developer",
    description: "Portofolio interaktif dan modern dari seorang Fullstack Developer.",
    url: "/",
    siteName: "Fikri Rahmansyah",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Fikri Rahmansyah Portfolio Thumbnail",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fikri Rahmansyah | Fullstack Developer",
    description: "Portofolio interaktif dan modern dari seorang Fullstack Developer.",
    images: ["/images/hero.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${plusJakartaSans.className} bg-brand-bg text-brand-text antialiased selection:bg-brand-pink selection:text-white`}
      >
        <Preloader />
        <ClientEffects />

        {/* Navbar dipatenkan menggunakan bahasa 'id' (Indonesia) agar desainnya tidak rusak */}
        <Navbar locale={"id" as Locale} />

        <main className="pt-14 min-h-screen px-6 md:px-12 max-w-6xl mx-auto w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
