"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback } from "react";

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

const MINING_GUIDES: NavItem[] = [
  { label: "Beginning", href: "/guide/mining-early" },
  { label: "Early Game", href: "/guide/mining-earlygame" },
  { label: "Mithril Powder", href: "/guide/mining-powder-mithril" },
  { label: "Gemstone Powder", href: "/guide/mining-powder-gemstone" },
  { label: "Glacite Powder", href: "/guide/mining-powder-glacite" },
  { label: "Late Game", href: "/guide/mining-lategame" },
];

const FARMING_GUIDES: NavItem[] = [
  { label: "Starting Out", href: "/guide/farming-intro" },
  { label: "Tools", href: "/guide/farming-tools" },
  { label: "Rushing", href: "/guide/farming-rushing" },
  { label: "How to Farm", href: "/guide/farming-how-to" },
  { label: "Pest Hunting", href: "/guide/farming-pests" },
];

const FISHING_GUIDES: NavItem[] = [
  { label: "Beginning (0–19)", href: "/guide/fishing-beginning" },
  { label: "Mid-Game (19+)", href: "/guide/fishing-midgame" },
  { label: "Trophy Fishing", href: "/guide/fishing-trophy" },
];

const SLAYER_GUIDES: NavItem[] = [
  { label: "Overview", href: "/guide/slayer-overview" },
  { label: "Zombie", href: "/guide/slayer-zombie" },
  { label: "Spider", href: "/guide/slayer-spider" },
  { label: "Wolf", href: "/guide/slayer-wolf" },
  { label: "Enderman", href: "/guide/slayer-enderman" },
  { label: "Vampire", href: "/guide/slayer-vampire" },
  { label: "Blaze", href: "/guide/slayer-blaze" },
];

const DUNGEON_GUIDES: NavItem[] = [
  { label: "What is Catacombs?", href: "/guide/dungeons-intro" },
  { label: "F1–F3: Starting Out", href: "/guide/dungeons-starting" },
  { label: "F4–F6: Early-Mid", href: "/guide/dungeons-early-mid" },
  { label: "Floor 7", href: "/guide/dungeons-f7" },
  { label: "MM Floor 1", href: "/guide/dungeons-m1" },
  { label: "MM Floor 2", href: "/guide/dungeons-m2" },
  { label: "MM Floor 3", href: "/guide/dungeons-m3" },
  { label: "MM Floor 4", href: "/guide/dungeons-m4" },
  { label: "MM Floor 5", href: "/guide/dungeons-m5" },
  { label: "MM Floor 6", href: "/guide/dungeons-m6" },
  { label: "MM Floor 7", href: "/guide/dungeons-m7" },
];

const COMBAT_GUIDES: NavItem[] = [
  { label: "Beginning the Game", href: "/guide/combat-early" },
  { label: "General Combat", href: "/guide/combat-general" },
  { label: "Slayers", href: "/category/slayers", children: SLAYER_GUIDES },
  { label: "Dungeons", href: "/category/dungeons", children: DUNGEON_GUIDES },
  { label: "Kuudra", href: "/guide/kuudra" },
];

const FORAGING_GUIDES: NavItem[] = [
  { label: "Foraging", href: "/guide/foraging-hunting" },
  { label: "Hunting", href: "/guide/hunting" },
  { label: "Best Shards", href: "/guide/hunting-shards" },
  { label: "Why Hunt?", href: "/guide/hunting-why" },
];

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "General Progression",
    href: "/category/progression",
    children: [
      { label: "Mining", href: "/category/mining", children: MINING_GUIDES },
      { label: "Farming", href: "/category/farming", children: FARMING_GUIDES },
      { label: "Fishing", href: "/category/fishing", children: FISHING_GUIDES },
      { label: "Combat", href: "/category/combat", children: COMBAT_GUIDES },
      { label: "Minions", href: "/category/minions" },
      { label: "Other Skills", href: "/category/other-skills" },
      { label: "Foraging & Hunting", href: "/category/foraging-hunting", children: FORAGING_GUIDES },
    ],
  },
  {
    label: "Money Making",
    href: "/category/money",
    children: [
      { label: "Mining", href: "/category/mining", children: MINING_GUIDES },
      { label: "Farming", href: "/category/farming", children: FARMING_GUIDES },
      { label: "Fishing", href: "/category/fishing", children: FISHING_GUIDES },
      { label: "Combat / Mobs", href: "/category/combat", children: COMBAT_GUIDES },
      { label: "Lazy / AFK", href: "/guide/lazy-money" },
      { label: "Flipping", href: "/guide/flipping" },
      { label: "The Rift", href: "/guide/rift-money" },
    ],
  },
  { label: "Give Me Some Ideas", href: "/category/ideas" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function isAncestor(items: NavItem[], target: string): boolean {
  for (const item of items) {
    if (item.href === target) return true;
    if (item.children && isAncestor(item.children, target)) return true;
  }
  return false;
}

function initExpanded(items: NavItem[], pathname: string): Set<string> {
  const open = new Set<string>();
  function walk(nodes: NavItem[], parentKey: string) {
    for (const node of nodes) {
      const key = parentKey + ">" + node.label;
      if (node.children) {
        if (isAncestor(node.children, pathname)) {
          open.add(key);
        }
        walk(node.children, key);
      }
    }
  }
  walk(items, "");
  // Always open top-level sections by default
  open.add(">General Progression");
  open.add(">Money Making");
  return open;
}

// ─── NavItems ────────────────────────────────────────────────────────────────

function NavItems({
  items,
  pathname,
  expanded,
  onToggle,
  depth = 0,
  onNav,
  parentKey = "",
}: {
  items: NavItem[];
  pathname: string;
  expanded: Set<string>;
  onToggle: (key: string) => void;
  depth?: number;
  onNav: () => void;
  parentKey?: string;
}) {
  return (
    <>
      {items.map((item) => {
        const key = parentKey + ">" + item.label;
        const active = pathname === item.href;
        const hasChildren = !!item.children?.length;
        const open = expanded.has(key);

        const indent =
          depth === 0 ? "px-3" : depth === 1 ? "pl-5 pr-2" : depth === 2 ? "pl-8 pr-2" : "pl-11 pr-2";

        return (
          <div key={key}>
            <div className="flex items-center gap-0.5">
              <Link
                href={item.href}
                onClick={onNav}
                className={[
                  "flex-1 flex items-center gap-1 rounded-lg py-1.5 text-sm transition-colors truncate",
                  indent,
                  depth === 0 ? "font-semibold" : "",
                  active
                    ? "bg-gold/10 text-gold"
                    : "text-muted hover:text-white hover:bg-white/5",
                ].join(" ")}
              >
                {depth > 0 && (
                  <span className="text-[9px] opacity-25 shrink-0">▸</span>
                )}
                <span className="truncate">{item.label}</span>
              </Link>

              {hasChildren && (
                <button
                  onClick={() => onToggle(key)}
                  className="shrink-0 p-1 mr-1 rounded text-muted hover:text-white hover:bg-white/5 transition-colors"
                  aria-label={open ? "Collapse" : "Expand"}
                >
                  <span
                    className={`inline-block text-xs transition-transform duration-150 ${
                      open ? "rotate-90" : ""
                    }`}
                  >
                    ›
                  </span>
                </button>
              )}
            </div>

            {hasChildren && open && (
              <div className="mt-0.5">
                <NavItems
                  items={item.children!}
                  pathname={pathname}
                  expanded={expanded}
                  onToggle={onToggle}
                  depth={depth + 1}
                  onNav={onNav}
                  parentKey={key}
                />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

const ASIDE =
  "border-r border-border bg-panel overflow-y-auto transition-all duration-200 flex-shrink-0";

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(() =>
    initExpanded(NAV, pathname)
  );

  const toggle = useCallback((key: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }, []);

  const closeNav = useCallback(() => setMobileOpen(false), []);

  const navContent = (
    <nav className="p-2 space-y-0.5">
      <NavItems
        items={NAV}
        pathname={pathname}
        expanded={expanded}
        onToggle={toggle}
        onNav={closeNav}
      />
    </nav>
  );

  return (
    <>
      {/* ── Desktop sidebar ─────────────────────────────────── */}
      <aside
        className={`hidden lg:flex flex-col sticky top-[67px] h-[calc(100vh-67px)] ${ASIDE} ${
          collapsed ? "w-10" : "w-72"
        }`}
      >
        {/* Collapse toggle button */}
        <button
          onClick={() => setCollapsed((c) => !c)}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className={`flex items-center justify-center py-2.5 border-b border-border text-muted hover:text-white hover:bg-white/5 transition-colors shrink-0 ${
            collapsed ? "w-full" : "self-end w-8 mr-1 mt-1 rounded-lg border-0"
          }`}
        >
          <span
            className={`text-sm transition-transform duration-200 ${
              collapsed ? "" : "rotate-180"
            }`}
          >
            ›
          </span>
        </button>

        {!collapsed && <div className="overflow-y-auto flex-1">{navContent}</div>}
      </aside>

      {/* ── Mobile: floating toggle ──────────────────────────── */}
      <button
        onClick={() => setMobileOpen(true)}
        aria-label="Open navigation"
        className="lg:hidden fixed bottom-5 right-5 z-50 rounded-full bg-panel border border-border p-3.5 shadow-lg text-white text-base leading-none"
      >
        ☰
      </button>

      {/* ── Mobile: backdrop ─────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Mobile: drawer ───────────────────────────────────── */}
      <aside
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-80 ${ASIDE} transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
          <span className="text-sm font-semibold text-white">Navigation</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-muted hover:text-white leading-none"
          >
            ✕
          </button>
        </div>
        <div className="overflow-y-auto flex-1">{navContent}</div>
      </aside>
    </>
  );
}
