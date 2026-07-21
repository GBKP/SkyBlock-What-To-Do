import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES, getGuide } from "@/lib/content";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

const categoryBack: Record<string, { href: string; label: string }> = {
  dungeons:          { href: "/category/dungeons",          label: "Dungeons" },
  slayers:           { href: "/category/slayers",           label: "Slayers" },
  combat:            { href: "/category/combat",            label: "Combat" },
  mining:            { href: "/category/mining",            label: "Mining" },
  farming:           { href: "/category/farming",           label: "Farming" },
  fishing:           { href: "/category/fishing",           label: "Fishing" },
  minions:           { href: "/category/minions",           label: "Minions" },
  "other-skills":    { href: "/category/other-skills",      label: "Other Skills" },
  "foraging-hunting":{ href: "/category/foraging-hunting",  label: "Foraging & Hunting" },
  money:             { href: "/category/money",             label: "Money Making" },
  kuudra:            { href: "/category/kuudra",            label: "Kuudra" },
  ideas:             { href: "/category/ideas",             label: "Ideas" },
};

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const back = categoryBack[guide.category] ?? { href: "/", label: "Home" };

  return (
    <div>
      <div className="mb-6 text-sm text-muted flex flex-wrap items-center gap-1">
        <Link href="/" className="hover:text-teal">Home</Link>
        <span>/</span>
        <Link href={back.href} className="hover:text-teal">{back.label}</Link>
        <span>/</span>
        <span className="text-gray-300">{guide.title}</span>
      </div>
      <div className="rounded-xl border border-border bg-panel p-6 sm:p-8">
        <span className="inline-block rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-semibold text-teal mb-3 uppercase tracking-wide">
          {guide.category.replace("-", " ")}
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-100 mb-1">
          {guide.title}
        </h1>
        <p className="text-muted mb-6">{guide.summary}</p>
        <div className="prose-guide">
          {guide.body.map((paragraph, i) => {
            const isHeading =
              paragraph.length < 45 &&
              !paragraph.endsWith(".") &&
              !paragraph.includes(",");
            return (
              <p key={i} className={isHeading ? "heading" : undefined}>
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
      <div className="mt-6">
        <Link href={back.href} className="text-sm text-teal hover:underline">
          ← Back to {back.label}
        </Link>
      </div>
    </div>
  );
}
