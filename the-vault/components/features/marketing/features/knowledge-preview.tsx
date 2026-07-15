import { cn } from '@/lib/utils';

const nodes = [
  {
    title: 'Thermodynamics',
    level: 'primary',
    top: '10%',
    left: '50%',
  },

  {
    title: 'Entropy',
    level: 'secondary',
    top: '30%',
    left: '22%',
  },

  {
    title: 'Enthalpy',
    level: 'secondary',
    top: '30%',
    left: '50%',
  },

  {
    title: 'Heat',
    level: 'secondary',
    top: '30%',
    left: '78%',
  },

  {
    title: 'Heat Transfer',
    level: 'leaf',
    top: '56%',
    left: '16%',
  },

  {
    title: 'Gibbs Energy',
    level: 'leaf',
    top: '56%',
    left: '50%',
  },

  {
    title: 'Efficiency',
    level: 'leaf',
    top: '56%',
    left: '84%',
  },

  {
    title: 'Chemical Eq.',
    level: 'leaf',
    top: '82%',
    left: '50%',
  },
];

export function KnowledgePreview() {
  return (
    <div className="bg-background relative h-80 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Primary connections */}

        <line
          x1="50"
          y1="14"
          x2="22"
          y2="31"
          className="stroke-border/50"
          strokeWidth="0.8"
        />
        <line
          x1="50"
          y1="14"
          x2="50"
          y2="31"
          className="stroke-primary/30"
          strokeWidth="0.9"
        />
        <line
          x1="50"
          y1="14"
          x2="78"
          y2="31"
          className="stroke-border/50"
          strokeWidth="0.8"
        />

        {/* Secondary */}

        <line
          x1="22"
          y1="31"
          x2="16"
          y2="57"
          className="stroke-border/40"
          strokeWidth="0.8"
        />
        <line
          x1="50"
          y1="31"
          x2="50"
          y2="57"
          className="stroke-primary/30"
          strokeWidth="0.9"
        />
        <line
          x1="78"
          y1="31"
          x2="84"
          y2="57"
          className="stroke-border/40"
          strokeWidth="0.8"
        />

        {/* Cross Links */}

        <line
          x1="22"
          y1="31"
          x2="50"
          y2="57"
          className="stroke-border/25"
          strokeWidth="0.8"
        />
        <line
          x1="78"
          y1="31"
          x2="50"
          y2="57"
          className="stroke-border/25"
          strokeWidth="0.8"
        />

        <line
          x1="16"
          y1="57"
          x2="50"
          y2="82"
          className="stroke-border/25"
          strokeWidth="0.8"
        />
        <line
          x1="84"
          y1="57"
          x2="50"
          y2="82"
          className="stroke-border/25"
          strokeWidth="0.8"
        />

        <line
          x1="50"
          y1="57"
          x2="50"
          y2="82"
          className="stroke-primary/30"
          strokeWidth="0.9"
        />

        <line
          x1="16"
          y1="57"
          x2="84"
          y2="57"
          className="stroke-border/15"
          strokeWidth="0.8"
        />
      </svg>

      {nodes.map((node) => (
        <div
          key={node.title}
          style={{
            top: node.top,
            left: node.left,
            transform: 'translate(-50%, -50%)',
          }}
          className={cn(
            'absolute rounded-full transition-all duration-300 hover:scale-105',

            node.level === 'primary' &&
              'bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-lg',

            node.level === 'secondary' &&
              'border-border bg-card border px-4 py-2 text-sm font-medium shadow-sm',

            node.level === 'leaf' &&
              'border-border/60 bg-muted/40 text-muted-foreground border px-3 py-1.5 text-xs'
          )}
        >
          {node.title}
        </div>
      ))}
    </div>
  );
}
