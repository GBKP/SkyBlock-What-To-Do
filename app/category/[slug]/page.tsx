import Link from "next/link";
import { notFound } from "next/navigation";
import {
  HOME_PATHS,
  PROGRESSION_SKILLS,
  COMBAT_SUB,
  MONEY_METHODS,
  SLAYER_LIST,
  DUNGEON_LIST,
  GUIDES,
  getGuidesByCategory,
} from "@/lib/content";
import { LinkCard } from "@/components/GuideCard";

function Crumbs({ items }: { items: { href: string; label: string }[] }) {
  return (
    <div className="mb-6 text-sm text-muted flex flex-wrap gap-1">
      {items.map((it, i) => (
        <span key={it.href} className="flex items-center gap-1">
          {i > 0 && <span>/</span>}
          <Link href={it.href} className="hover:text-teal">
            {it.label}
          </Link>
        </span>
      ))}
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: "progression" },
    { slug: "money" },
    { slug: "ideas" },
    { slug: "mining" },
    { slug: "farming" },
    { slug: "fishing" },
    { slug: "combat" },
    { slug: "minions" },
    { slug: "other-skills" },
    { slug: "foraging-hunting" },
    { slug: "slayers" },
    { slug: "dungeons" },
    { slug: "kuudra" },
  ];
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === "progression") {
    return (
      <div>
        <Crumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/category/progression", label: "General Progression" },
          ]}
        />
        <h1 className="text-2xl font-bold mb-6 text-gray-100">
          What skill do you want to progress?
        </h1>
        <div className="grid gap-4 sm:grid-cols-2">
          {PROGRESSION_SKILLS.map((s) => (
            <LinkCard
              key={s.slug}
              href={`/category/${s.slug}`}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </div>
    );
  }

  if (slug === "money") {
    return (
      <div>
        <Crumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/category/money", label: "Money Making Methods" },
          ]}
        />
        <h1 className="text-2xl font-bold mb-6 text-gray-100">
          What money making method interests you?
        </h1>
        <div className="grid gap-4 sm:grid-cols-2">
          {MONEY_METHODS.map((s) =>
            s.slug === "combat" ||
            s.slug === "mining" ||
            s.slug === "farming" ||
            s.slug === "fishing" ||
            s.slug === "foraging-hunting" ? (
              <LinkCard
                key={s.slug}
                href={`/category/${s.slug}`}
                title={s.title}
                description={s.description}
              />
            ) : (
              <LinkCard
                key={s.slug}
                href={`/guide/${s.slug}`}
                title={s.title}
                description={s.description}
              />
            )
          )}
        </div>
      </div>
    );
  }

  if (slug === "ideas") {
    const dailies = GUIDES.find((g) => g.slug === "dailies");
    return (
      <div>
        <Crumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/category/ideas", label: "Give Me Some Ideas" },
          ]}
        />
        <h1 className="text-2xl font-bold mb-4 text-gray-100">
          Not sure what to do today?
        </h1>
        {dailies && (
          <div className="mb-8 rounded-xl border border-border bg-panel p-5">
            <h2 className="font-bold text-gold mb-2">{dailies.title}</h2>
            <div className="prose-guide">
              {dailies.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        )}
        <h2 className="text-lg font-bold mb-4 text-gray-100">
          Or browse everything:
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ...PROGRESSION_SKILLS,
            {
              slug: "rift-money-cat",
              title: "The Rift",
              description: "20-50m/hr, minimal setup.",
            },
          ].map((s) => (
            <LinkCard
              key={s.slug}
              href={
                s.slug === "rift-money-cat"
                  ? "/guide/rift-money"
                  : `/category/${s.slug}`
              }
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </div>
    );
  }

  if (slug === "combat") {
    return (
      <div>
        <Crumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/category/combat", label: "Combat" },
          ]}
        />
        <h1 className="text-2xl font-bold mb-6 text-gray-100">
          Where do you want to go next?
        </h1>
        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          <LinkCard
            href="/guide/combat-early"
            title="Beginning the Game"
            description="Mercenary Armor to the Void Sword."
          />
          <LinkCard
            href="/guide/combat-general"
            title="General Combat"
            description="Armor sets, weapons, Mythological Ritual."
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {COMBAT_SUB.map((s) => (
            <LinkCard
              key={s.slug}
              href={`/category/${s.slug}`}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </div>
    );
  }

  if (slug === "slayers") {
    return (
      <div>
        <Crumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/category/combat", label: "Combat" },
            { href: "/category/slayers", label: "Slayers" },
          ]}
        />
        <h1 className="text-2xl font-bold mb-6 text-gray-100">
          All 6 Slayers
        </h1>
        <div className="mb-6">
          <LinkCard
            href="/guide/slayer-overview"
            title="Slayer Overview"
            description="The basics before you pick a boss."
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {SLAYER_LIST.map((s) => (
            <LinkCard
              key={s.slug}
              href={`/guide/${s.slug}`}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </div>
    );
  }

  if (slug === "dungeons") {
    return (
      <div>
        <Crumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/category/combat", label: "Combat" },
            { href: "/category/dungeons", label: "Dungeons" },
          ]}
        />
        <h1 className="text-2xl font-bold mb-6 text-gray-100">
          What piece of the Catacombs are you interested in?
        </h1>
        <div className="grid gap-4 sm:grid-cols-2">
          {DUNGEON_LIST.map((s) => (
            <LinkCard
              key={s.slug}
              href={`/guide/${s.slug}`}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </div>
    );
  }

  if (slug === "kuudra") {
    return (
      <div>
        <Crumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/category/combat", label: "Combat" },
            { href: "/category/kuudra", label: "Kuudra" },
          ]}
        />
        <h1 className="text-2xl font-bold mb-6 text-gray-100">Kuudra</h1>
        <div className="grid gap-4 sm:grid-cols-2">
          <LinkCard
            href="/guide/kuudra"
            title="Kuudra Guide"
            description="5 tiers, brief gear breakdown per role."
          />
        </div>
      </div>
    );
  }

  const simpleCategories: Record<string, string> = {
    mining: "Mining",
    farming: "Farming",
    fishing: "Fishing",
    minions: "Minions",
    "other-skills": '"Other" Skills',
    "foraging-hunting": "Foraging / Hunting",
  };

  if (simpleCategories[slug]) {
    const guides = getGuidesByCategory(slug);
    return (
      <div>
        <Crumbs
          items={[
            { href: "/", label: "Home" },
            { href: `/category/${slug}`, label: simpleCategories[slug] },
          ]}
        />
        <h1 className="text-2xl font-bold mb-6 text-gray-100">
          {simpleCategories[slug]}
        </h1>
        <div className="grid gap-4 sm:grid-cols-2">
          {guides.map((g) => (
            <LinkCard
              key={g.slug}
              href={`/guide/${g.slug}`}
              title={g.title}
              description={g.summary}
            />
          ))}
        </div>
      </div>
    );
  }

  notFound();
}