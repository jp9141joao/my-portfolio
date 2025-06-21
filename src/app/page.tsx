import Navbar from '../components/Navbar';
import Hero from '@/components/hero/Hero';

export default function Home() {
  return (
    <div className="grid gap-y-3 bg-white-200">
      <Navbar />
      <Hero />
    </div>
  );
}
