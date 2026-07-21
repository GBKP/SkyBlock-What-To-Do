import Link from "next/link";

export default function GuideCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description?: string;
}) {
  return (
    <Link
      href={href}
      className="block bg-panel border border-border rounded-lg p-5 hover:border-teal hover:shadow-[0_0_0_1px_rgba(61,218,215,0.3)] transition-all group"
    >
      <h3 className="text-white font-semibold group-hover:text-teal transition-colors">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-muted mt-1">{description}</p>
      )}
    </Link>
  );
}
