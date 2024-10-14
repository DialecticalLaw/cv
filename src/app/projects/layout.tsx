import { Suspense } from 'react';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <Suspense>{children}</Suspense>;
}
