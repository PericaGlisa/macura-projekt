'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

const footerLinks = {
  projects: [
    { name: 'Početna', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Galerija', href: '#gallery' },
  ],
  about: [
    { name: 'O nama', href: '#about' },
    { name: 'Usluge', href: '#services' },
    { name: 'Blog', href: '#blog' },
  ],
  collaboration: [
    { name: 'Kontakt', href: '#contact' },
  ],
};

const socialLinks = [
  { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/macura.projekt/' },
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/angelina-macura-53b54518a/' },
];

export default function Footer() {
  const { scrollToElement } = useSmoothScroll();

  const handleNavClick = (href: string) => {
    if (href.startsWith('#') && href !== '#') {
      scrollToElement(href);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sm:col-span-2 md:col-span-3 lg:col-span-2"
          >
            <div className="flex justify-center md:justify-start mb-6 md:mb-8">
              <div 
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 flex items-center justify-center p-4 cursor-pointer"
                onClick={() => handleNavClick('#home')}
              >
                <img
                  src="/MP logotip.png"
                  alt="Macura Projekt Logo"
                  className="w-full h-full object-contain drop-shadow-2xl filter brightness-110 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <p className="text-white/70 mb-4 md:mb-6 leading-relaxed text-center md:text-left text-sm md:text-base">
              Transformišem snove u spektakularne prostore koji redefinišu način na koji živite, 
              radite i doživljavate arhitekturu.
            </p>
            
            <div className="space-y-2 md:space-y-3 text-xs md:text-sm text-white/60">
              <div className="flex items-center justify-start space-x-3">
                <Phone className="w-4 h-4 text-[#C4A572]" />
                <a href="tel:+381644123944" className="hover:text-[#C4A572] transition-colors">+381 64 4123944</a>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <Mail className="w-4 h-4 text-[#C4A572]" />
                <a href="mailto:info@arhitektamacura.rs" className="hover:text-[#C4A572] transition-colors">info@arhitektamacura.rs</a>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C4A572]" />
                <span>Surčinska 227, Novi Beograd</span>
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">
                {category === 'projects' ? 'Projekti' : 
                 category === 'about' ? 'O Macura Projekt' : 'Saradnja'}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-white/60 hover:text-[#C4A572] transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 md:mt-10 lg:mt-12 pt-6 md:pt-8 flex flex-col sm:flex-row-reverse sm:justify-between items-center"
        >
          <div className="flex items-center space-x-4 sm:space-x-6 mb-3 sm:mb-0">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-white/60 hover:text-[#C4A572] transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          
          <p className="text-white/60 text-xs sm:text-sm">
            © 2025 Macura Projekt. Sva prava zadržana.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}