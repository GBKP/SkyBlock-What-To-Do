import { notFound } from "next/navigation";
import Link from "next/link";
import GuideCard from "@/components/GuideCard";
import {
  PROGRESSION_SKILLS,
  MONEY_METHODS,
  COMBAT_SUB,
  SLAYER_LIST,
  DUNGEON_LIST,
  getGuidesByCategory,
  getGuide,
} from "@/lib/content";

const DIRECT_GUIDE_SLUGS = ["lazy-money", "flipping", "rift-money"];
const CATEGORY_GROUPS = [
  "mining",
  "farming",
  "fishing",
  "minions",
  "other-skills",
  "foraging-hunting",
];

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === "progression") {
    return (
      <PageShell title="General Progression" back="/">
        <div className="grid sm:grid-cols-2 gap-4">
          {PROGRESSION_SKILLS.map((c) => (
            <GuideCard
              key={c.slug}
              href={`/category/${c.slug}`}
              title={c.title}
              description={c.description}
            />
          ))}
        </div>
      </PageShell>
    );
  }

  if (slug === "money") {
    return (
      <PageShell title="Money Making Methods" back="/">
        <div className="grid sm:grid-cols-2 gap-4">
          {MONEY_METHODS.map((c) => (
            <GuideCard
              key={c.slug}
              href={
                DIRECT_GUIDE_SLUGS.includes(c.slug)
                  ? `/guide/${c.slug}`
                  : `/category/${c.slug}`
              }
              title={c.title}
              description={c.description}
            />
          ))}
        </div>
      </PageShell>
    );
  }

  if (slug === "ideas") {
    const dailies = getGuide("dailies");
    return (
      <PageShell title="Give Me Some Ideas" back="/">
        {dailies && (
          <div className="prose-guide bg-panel border border-border rounded-lg p-6 mb-8">
            <h2 className="text-white font-semibold mb-3">{dailies.title}</h2>
            {dailies.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}
        <div className="grid sm:grid-cols-2 gap-4">
          {PROGRESSION_SKILLS.map((c) => (
            <GuideCard
              key={c.slug}
              href={`/category/${c.slug}`}
              title={c.title}
              description={c.description}
            />
          ))}
        </div>
      </PageShell>
    );
  }

  if (slug === "combat") {
    const earlyGuide = getGuide("combat-early");
    const generalGuide = getGuide("combat-general");
    return (
      <PageShell title="Combat" back="/category/progression">
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {earlyGuide && (
            <GuideCard href="/guide/combat-early" title={earlyGuide.title} description={earlyGuide.summary} />
          )}
          {generalGuide && (
            <GuideCard href="/guide/combat-general" title={generalGuide.title} description={generalGuide.summary} />
          )}
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {COMBAT_SUB.map((c) => (
            <GuideCard key={c.slug} href={`/category/${c.slug}`} title={c.title} description={c.description} />
          ))}
        </div>
      </PageShell>
    );
  }

  if (slug === "slayers") {
    const overview = getGuide("slayer-overview");
    return (
      <PageShell title="Slayers" back="/category/combat">
        {overview && (
          <div className="prose-guide bg-panel border border-border rounded-lg p-6 mb-8">
            {overview.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}
        <div className="grid sm:grid-cols-2 gap-4">
          {SLAYER_LIST.map((c) => (
            <GuideCard key={c.slug} href={`/guide/${c.slug}`} title={c.title} description={c.description} />
          ))}
        </div>
      </PageShell>
    );
  }

  if (slug === "dungeons") {
    return (
      <PageShell title="Dungeons (Catacombs)" back="/category/combat">
        <div className="grid sm:grid-cols-2 gap-4">
          {DUNGEON_LIST.map((c) => (
            <GuideCard key={c.slug} href={`/guide/${c.slug}`} title={c.title} description={c.description} />
          ))}
        </div>
      </PageShell>
    );
  }

  if (slug === "kuudra") {
    const g = getGuide("kuudra");
    if (!g) return notFound();
    return (
      <PageShell title="Kuudra" back="/category/combat">
        <GuideCard href="/guide/kuudra" title={g.title} description={g.summary} />
      </PageShell>
    );
  }

  if (CATEGORY_GROUPS.includes(slug)) {
    const guides = getGuidesByCategory(slug);
    if (guides.length === 0) return notFound();
    const title = slug
      .split("-")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");
    return (
      <PageShell title={title} back="/category/progression">
        <div className="grid sm:grid-cols-2 gap-4">
          {guides.map((g) => (
            <GuideCard key={g.slug} href={`/guide/${g.slug}`} title={g.title} description={g.summary} />
          ))}
        </div>
      </PageShell>
    );
  }

  return notFound();
}

function PageShell({
  title,
  back,
  children,
}: {
  title: string;
  back: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Link href={back} className="text-sm text-teal hover:underline">
        ← Back
      </Link>
      <h1 className="text-2xl sm:text-3xl font-bold text-white mt-4 mb-8">
        {title}
      </h1>
      {children}
    </div>
  );
}
