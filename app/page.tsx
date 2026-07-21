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
          Guide assembled by NeverMoreHelpful, LightStrike07, and 637Glory
        </p>
        <p className="text-xs text-muted/60">
          Website made by 637Glory
        </p>
      </div>
    </div>
  );
}