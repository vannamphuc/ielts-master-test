import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="min-w-0">
            <span className="block font-heading text-xl font-semibold leading-none tracking-tight">
              IELTS Master
            </span>
          </span>
        </Link>

        <p className="flex items-center justify-center gap-2 rounded-full border bg-card py-1 px-2 text-xs font-semibold shadow-sm">
          <span className="tabular-nums">Học viên S01</span>
        </p>
      </div>
    </header>
  );
}
