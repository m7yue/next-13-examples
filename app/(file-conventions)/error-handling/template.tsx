import { Boundary } from '@/ui/Boundary';

export default function Page({ children }: { children: React.ReactNode }) {
  return <>
    <div style={{color: '#fff', marginBottom: 20}}>error template</div>
    <Boundary>{children}</Boundary>
  </>;
}
