import React from 'react';
import { use } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const mock = use(new Promise<boolean>(resolve => setTimeout(() => {
    resolve(true)
  }, 2000)))

  if (!mock) return null;
  
  return (
    <div className="space-y-9">
      <div>{mock && '111'}</div>
      <div className="flex items-center justify-between">
        <div className="text-xl font-medium text-zinc-500">Product</div>
      </div>

      <div>{children}</div>
    </div>
  );
}
