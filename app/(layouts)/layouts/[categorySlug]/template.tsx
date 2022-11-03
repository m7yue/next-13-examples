import { Boundary } from '@/ui/Boundary';
import React from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  return <>
    <div style={{color: '#fff', marginBottom: 20}}>CategorySlug template</div>
    <Boundary>{children}</Boundary>
  </>;
}
