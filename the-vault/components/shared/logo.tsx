import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 font-semibold tracking-tight"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-700 text-white shadow-lg ring-1 ring-black/10 dark:from-white dark:via-neutral-200 dark:to-neutral-300 dark:text-black">
        <span className="text-lg font-bold tracking-tight">V</span>
      </div>

      <span className="text-lg">The Vault</span>
    </Link>
  );
}
