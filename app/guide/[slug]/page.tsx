import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES, getGuide } from "@/lib/content";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <div>
      <div className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-teal">
          Home
        </Link>
        <span className="mx-1">/</span>
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
        <Link href="/" className="text-sm text-teal hover:underline">
          ← Back to start
        </Link>
      </div>
    </div>
  );
}