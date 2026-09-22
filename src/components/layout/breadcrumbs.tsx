import { cn } from "@/lib/utils";

export function Breadcrumbs({
  items,
  className,
}: {
  items: { label: string; href?: string }[];
  className?: string;
}) {
  return (
    <nav aria-label="Đường dẫn" className={cn("text-[0.7rem] tracking-wide", className)}>
      <ol className="flex flex-wrap items-center gap-x-0.5 gap-y-1">
        <li>
          <a
            href="/"
            className="inline-flex min-h-11 items-center px-1.5 opacity-70 hover:opacity-100"
          >
            Trang chủ
          </a>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-0.5">
            <span aria-hidden="true" className="opacity-50">
              /
            </span>
            {item.href ? (
              <a
                href={item.href}
                className="inline-flex min-h-11 items-center px-1.5 opacity-70 hover:opacity-100"
              >
                {item.label}
              </a>
            ) : (
              <span className="inline-flex min-h-11 items-center px-1.5">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
