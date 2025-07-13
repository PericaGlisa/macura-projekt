'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

const navigation = [
  { name: 'Početna', href: '#home' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Galerija', href: '#gallery' },
  { name: 'O meni', href: '#about' },
  { name: 'Usluge', href: '#services' },
  { name: 'Blog', href: '#blog' },
  { name: 'Kontakt', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToElement } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToElement(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gradient-to-br from-gray-900/95 to-black/95 border-b border-gray-800' : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick('#home')}
          >
            <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center p-2">
              <img
                src="/MP logotip.png"
                alt="Macura Projekt Logo"
                className="w-full h-full object-contain drop-shadow-2xl filter brightness-110"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                whileHover={{ y: -2 }}
                className="relative text-sm font-medium text-white/80 hover:text-white transition-colors group"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#C4A572] to-[#D4B886] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              className="luxury-gradient text-black font-semibold hover:scale-105 transition-transform"
              onClick={() => handleNavClick('#contact')}
            >
              Započni projekat
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden transition-colors ${
              isMobileMenuOpen ? 'bg-[#C4A572] hover:bg-[#C4A572]/90 text-black' : 'text-[#C4A572] hover:bg-[#C4A572]/10 hover:text-[#D4B886]'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-4"
            >
              <div className="flex flex-col space-y-4">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white/80 hover:text-white transition-colors text-left"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <Button 
                  className="luxury-gradient text-black font-semibold w-full mt-4 lg:hidden"
                  onClick={() => handleNavClick('#contact')}
                >
                  Započni projekat
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}