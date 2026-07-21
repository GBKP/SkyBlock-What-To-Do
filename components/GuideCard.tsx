import Link from "next/link";

export function LinkCard({
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
      className="group block rounded-xl border border-border bg-panel p-5 transition-all hover:border-gold/50 hover:bg-panel2 hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(147,51,234,0.2)] active:scale-[0.97] active:brightness-90 active:translate-y-0"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg text-gray-100 group-hover:text-gold transition-colors">
          {title}
        </h3>
        <span className="text-muted group-hover:text-teal transition-colors">
          →
        </span>
      </div>
      {description ? (
        <p className="mt-1.5 text-sm text-muted">{description}</p>
      ) : null}
    </Link>
  );
}