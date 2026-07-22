import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import SearchBar from "@/components/SearchBar";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "What Do I Do Next? — Skyblock Guide",
  description:
    "A dynamic poll turned guide for Hypixel Skyblock — progression, money making, and everything in between.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-base min-h-screen">
        {/* SBM brand gradient line at very top */}
        <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, #9333ea, #38bdf8, #d946ef)" }} />
        <header className="border-b border-border bg-panel/90 backdrop-blur sticky top-0 z-20">
          <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <Link href="/" className="shrink-0 flex items-center gap-3">
              <Image
                src="/sbm-logo.png"
                alt="SBM"
                width={40}
                height={40}
                className="rounded-xl shadow-[0_0_12px_rgba(147,51,234,0.5)]"
              />
              <div>
                <span className="sbm-gradient block font-extrabold text-base leading-tight tracking-tight">
                  SkyBlock Maniacs
                </span>
                <span className="block text-xs text-muted leading-tight">
                  What do I do next?
                </span>
              </div>
            </Link>
            <div className="flex-1">
              <SearchBar />
            </div>
          </div>
        </header>

        <main className="bg-grid min-h-[calc(100vh-88px)]">
          <div className="max-w-5xl mx-auto px-4 py-10">
            <PageTransition>{children}</PageTransition>
          </div>
        </main>

        <footer className="border-t border-border py-8 text-center text-xs text-muted">
          <p>
            Guide content by NeverMoreHopeful, edited by LightStriker07. All
            links point to the Cowshed Wiki — in-game is always the best
            source of truth.
          </p>
        </footer>
      </body>
    </html>
  );
}
