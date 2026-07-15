import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  preview: ReactNode;
  footer: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  preview,
  footer,
}: FeatureCardProps) {
  return (
    <div className="group border-border bg-card overflow-hidden rounded-[28px] border transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
      <div className="p-8">
        <div className="flex items-start gap-5">
          <div className="bg-primary/10 text-primary flex h-14 w-14 items-center justify-center rounded-2xl">
            {icon}
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>

            <p className="text-muted-foreground mt-3 leading-7">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-muted/10 overflow-hidden">{preview}</div>

      <div className="px-8 py-5">
        <p className="text-muted-foreground text-sm">{footer}</p>
      </div>
    </div>
  );
}
