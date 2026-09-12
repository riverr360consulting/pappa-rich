import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Trust } from '@/components/Trust';

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <Services />
      <Trust />
    </>
  );
}
