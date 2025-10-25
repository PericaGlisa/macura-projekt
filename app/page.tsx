'use client';

import Header from '@/components/navigation/Header';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import VideoShorts from '@/components/sections/VideoShorts';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import BackToTop from '@/components/ui/back-to-top';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <VideoShorts />
      <About />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}