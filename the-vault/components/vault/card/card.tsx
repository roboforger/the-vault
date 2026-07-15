import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'border-border/60 bg-card rounded-3xl border',
        'shadow-sm transition-all duration-300',
        'hover:shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
