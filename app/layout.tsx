import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import SearchBar from "@/components/SearchBar";

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
        <header className="border-b border-border bg-panel/80 backdrop-blur sticky top-0 z-20">
          <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <Link href="/" className="shrink-0">
              <span className="text-teal font-bold text-lg tracking-tight">
                What do I do next?
              </span>
              <span className="block text-xs text-muted">
                a Hypixel Skyblock guide
              </span>
            </Link>
            <div className="flex-1">
              <SearchBar />
            </div>
          </div>
        </header>

        <main className="bg-grid min-h-[calc(100vh-88px)]">
          <div className="max-w-5xl mx-auto px-4 py-10">{children}</div>
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
