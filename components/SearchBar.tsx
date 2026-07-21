"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { searchGuides } from "@/lib/content";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const results = searchGuides(query);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder="Search guides (e.g. slayer, powder, kuudra)..."
        className="w-full bg-panel2 border border-border rounded-md px-4 py-2 text-sm text-white placeholder:text-muted focus:outline-none focus:border-teal transition-colors"
      />
      {open && query.trim() && (
        <div className="absolute mt-1 w-full bg-panel2 border border-border rounded-md shadow-lg overflow-hidden z-30 max-h-80 overflow-y-auto">
          {results.length === 0 ? (
            <div className="px-4 py-3 text-sm text-muted">No guides found.</div>
          ) : (
            results.map((g) => (
              <button
                key={g.slug}
                onClick={() => {
                  setOpen(false);
                  setQuery("");
                  router.push(`/guide/${g.slug}`);
                }}
                className="w-full text-left px-4 py-3 hover:bg-panel border-b border-border last:border-0 transition-colors"
              >
                <div className="text-sm font-medium text-white">{g.title}</div>
                <div className="text-xs text-muted truncate">{g.summary}</div>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
