import { Shell } from '@/components/features/application/shell';

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Shell>{children}</Shell>;
}
