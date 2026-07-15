interface LogoWordmarkProps {
  className?: string;
}

export function LogoWordmark({ className }: LogoWordmarkProps) {
  return (
    <span className={`text-xl font-semibold tracking-tight ${className ?? ''}`}>
      The Vault
    </span>
  );
}
