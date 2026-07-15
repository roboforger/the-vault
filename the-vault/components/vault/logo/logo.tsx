import { LogoMark } from './logo-mark';
import { LogoWordmark } from './logo-wordmark';

interface LogoProps {
  showText?: boolean;
  className?: string;
}

export function Logo({ showText = true, className }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ''}`}>
      <LogoMark />

      {showText && <LogoWordmark />}
    </div>
  );
}
