import GuideCard from "@/components/GuideCard";
import { HOME_PATHS } from "@/lib/content";

export default function Home() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          What do I <span className="text-teal">do</span> next?
        </h1>
        <p className="text-muted max-w-lg mx-auto">
          A guide for Hypixel Skyblock. Pick a path below to get started.
        </p>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {HOME_PATHS.map((c) => (
          <GuideCard
            key={c.slug}
            href={`/category/${c.slug}`}
            title={c.title}
            description={c.description}
          />
        ))}
      </div>
    </div>
  );
}
