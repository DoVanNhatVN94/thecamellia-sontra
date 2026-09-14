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
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <a href="/" className="opacity-70 hover:opacity-100">
            Trang chủ
          </a>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1">
            <span aria-hidden="true" className="opacity-50">
              /
            </span>
            {item.href ? (
              <a href={item.href} className="opacity-70 hover:opacity-100">
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
