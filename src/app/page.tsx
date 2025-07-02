"use client";
import Navbar from '../components/Navbar';
import Hero from '@/components/hero/Hero';
import AboutMe from '@/components/aboutMe/AboutMe';

export default function Home() {

  return (
    <div className="grid bg-white-200 ">      
      <Navbar />
      <Hero />
      <AboutMe />
    </div>
  );
}
