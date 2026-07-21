import { notFound } from "next/navigation";
import Link from "next/link";
import { getGuide, GUIDES } from "@/lib/content";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return notFound();

  return (
    <article>
      <Link href="/" className="text-sm text-teal hover:underline">
        ← Back home
      </Link>
      <h1 className="text-2xl sm:text-3xl font-bold text-white mt-4 mb-2">
        {guide.title}
      </h1>
      <p className="text-muted mb-8">{guide.summary}</p>
      <div className="prose-guide bg-panel border border-border rounded-lg p-6 sm:p-8">
        {guide.body.map((para, i) => (
          <p key={i} className={para.length < 45 && !para.endsWith(".") ? "heading" : ""}>
            {para}
          </p>
        ))}
      </div>
    </article>
  );
}
