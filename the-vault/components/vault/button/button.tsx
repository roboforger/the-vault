import { Button as UIButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ButtonProps = React.ComponentProps<typeof UIButton>;

export function Button({ className, ...props }: ButtonProps) {
  return (
    <UIButton
      className={cn(
        'h-11 rounded-xl px-5 font-medium transition-all duration-200',
        'shadow-sm hover:shadow-md',
        'active:scale-[0.98]',
        className
      )}
      {...props}
    />
  );
}
