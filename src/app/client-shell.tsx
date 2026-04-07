'use client';

import type { ReactNode } from 'react';
import { LenisProvider } from '@/components/shared/LenisProvider';
import { GrainOverlay } from '@/components/shared/GrainOverlay';
import { Nav } from '@/components/shared/Nav';
import { ScrollProgress } from '@/components/shared/ScrollProgress';
import { SectionLabel } from '@/components/shared/SectionLabel';

export function ClientShell({ children }: { children: ReactNode }) {
  return (
    <LenisProvider>
      <GrainOverlay />
      <ScrollProgress />
      <Nav />
      <SectionLabel />
      {children}
    </LenisProvider>
  );
}
