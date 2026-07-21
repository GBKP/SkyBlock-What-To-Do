import { HOME_PATHS } from "@/lib/content";
import { LinkCard } from "@/components/GuideCard";

export default function HomePage() {
  return (
    <div>
      <div className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-100">
          What are you looking for?
        </h1>
        <p className="mt-2 text-muted">
          Pick a path. Everything here is community-written SkyBlock advice.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {HOME_PATHS.map((p) => (
          <LinkCard
            key={p.slug}
            href={`/category/${p.slug}`}
            title={p.title}
            description={p.description}
          />
        ))}
      </div>

      <div className="mt-14 text-center space-y-1">
        <p className="text-sm text-muted">
          Guide made by NeverMoreHelpful{" "}
          <span className="text-xs text-muted/60">(nevermorehopeful_)</span>
          , edited by LightStriker07{" "}
          <span className="text-xs text-muted/60">(lightstriker_07)</span>
          {" "}and 637Glory{" "}
          <span className="text-xs text-muted/60">(7glxry_20694)</span>
        </p>
        <p className="text-xs text-muted/60">
          Website made by 637Glory
        </p>
      </div>
    </div>
  );
}