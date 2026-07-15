import { cn } from '@/lib/utils';

interface BackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function Background({ children, className }: BackgroundProps) {
  return (
    <div
      className={cn(
        'bg-background relative min-h-screen overflow-hidden',
        className
      )}
    >
      {/* Subtle Grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial Glow */}
      <div
        aria-hidden
        className="bg-primary/8 absolute top-0 left-1/2 h-175 w-175 -translate-x-1/2 rounded-full blur-[140px]"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
