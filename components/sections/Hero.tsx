'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const Hero = () => {
  const { scrollToElement } = useSmoothScroll();
  
  // Portfolio images with descriptions
  const portfolioSlides = [
    {
      image: '/portfolio-1.jpg',
      title: 'Moderni enterijer',
      description: 'Elegantan dizajn dnevne sobe sa minimalističkim pristupom'
    },
    {
      image: '/portfolio-2.jpg', 
      title: 'Luksuzni apartman',
      description: 'Sofisticiran enterijer sa toplim tonovima i modernim akcentima'
    },
    {
      image: '/portfolio-3.jpg',
      title: 'Kreativni prostor',
      description: 'Inovativan dizajn koji spaja funkcionalnost i estetiku'
    },
    {
      image: '/portfolio-4.jpg',
      title: 'Elegantna kuhinja',
      description: 'Savremena kuhinja sa čistim linijama i premium materijalima'
    },
    {
      image: '/portfolio-5.jpg',
      title: 'Prostrana dnevna soba',
      description: 'Svetao i prostran dizajn sa prirodnim materijalima i toplim akcentima'
    },
    {
      image: '/portfolio-6.jpg',
      title: 'Luksuzno kupatilo',
      description: 'Spa-inspirisano kupatilo sa premium materijalima i elegantnim detaljima'
    },
    {
      image: '/portfolio-7.jpg',
      title: 'Moderna spavaća soba',
      description: 'Sofisticiran dizajn spavaće sobe sa umirujućim tonovima i luksuznim tekstilima'
    },
    {
      image: '/portfolio-9.jpg',
      title: 'Otvoreni koncept',
      description: 'Inovativni otvoreni koncept koji spaja kuhinju, trpezariju i dnevni boravak'
    },
    {
      image: '/portfolio-10.jpg',
      title: 'Savremeni dizajn',
      description: 'Moderan pristup dizajnu enterijera sa fokusom na funkcionalnost i estetiku'
    },
    {
      image: '/portfolio-11.jpg',
      title: 'Elegantni detalji',
      description: 'Pažljivo odabrani detalji koji stvaraju sofisticiran i luksuzan ambijent'
    }
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % portfolioSlides.length);
  }, [portfolioSlides.length]);
  
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + portfolioSlides.length) % portfolioSlides.length);
  }, [portfolioSlides.length]);
  
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);
  
  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);
  
  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Enhanced Animated Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ 
              duration: 0.8,
              ease: "easeInOut"
            }}
          >
            <Image
              src={portfolioSlides[currentSlide].image}
              alt={portfolioSlides[currentSlide].title}
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Enhanced gradient overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-10" />
        {/* Subtle branding color overlay for enhanced readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C4A572]/20 via-transparent to-[#C4A572]/10 z-10" />
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content - Takes up most of the space */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 flex-1 flex items-center justify-center pt-20 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-2xl"
          >
            Arhitektonska
            <span className="block text-gradient">izvrsnost</span>
          </motion.h1>
          
          {/* Current Slide Info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-6 sm:mb-8"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#C4A572] mb-2 drop-shadow-lg">
                {portfolioSlides[currentSlide].title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg px-4">
                {portfolioSlides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto luxury-gradient text-black font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-transform shadow-2xl"
              onClick={() => scrollToElement('#portfolio')}
            >
              Pogledaj portfolio
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-[#C4A572] text-[#C4A572] hover:bg-[#C4A572] hover:text-black transition-all group backdrop-blur-sm bg-black/20 shadow-xl text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              onClick={() => scrollToElement('#about')}
            >
              Saznaj više
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="relative z-20 flex justify-center mb-4"
      >
        <div className="flex space-x-3 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
          {portfolioSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-[#C4A572] scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative z-20 pb-6 sm:pb-8 flex justify-center"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToElement('#portfolio')}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors cursor-pointer group"
        >
          <span className="text-xs sm:text-sm mb-2 drop-shadow-lg group-hover:text-[#C4A572] transition-colors">
            Skroluj za dalje
          </span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-lg group-hover:text-[#C4A572] transition-colors" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;