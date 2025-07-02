"use client";
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '@/components/hero/Hero';
import AboutMe from '@/components/aboutMe/AboutMe';

export default function Home() {

  const heightRef = useRef<HTMLDivElement>(null);

  return (
    <div className="grid bg-white-200 ">      
      <Navbar heightRef={heightRef} />
      <Hero heightRef={heightRef} />
      <AboutMe />
    </div>
  );
}
