'use client';

import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const testimonials = [
  {
    id: 1,
    name: 'Marko Petrović',
    position: 'CEO, Petrović Group',
    company: 'Petrović Group',
    rating: 5,
    text: 'Macura Projekt je transformisao našu viziju u stvarnost koja je prevazišla sva naša očekivanja. Njena pažnja prema detaljima i inovativni pristup su nenadmašni.',
    project: 'Korporativna kula'
  },
  {
    id: 2,
    name: 'Ana Jovanović',
    position: 'Osnivač',
    company: 'Jovanović Art Gallery',
    rating: 5,
    text: 'Raditi sa Macura Projekt je bilo izuzetno iskustvo. Ona ne samo da kreira prostore, već kreira emocije i iskustva koja traju zauvek.',
    project: 'Umetnička galerija'
  },
  {
    id: 3,
    name: 'Stefan Nikolić',
    position: 'Vlasnik',
    company: 'Privatni Klijent',
    rating: 5,
    text: 'Naš novi dom je pravo čudo arhitekture. Svaki detalj je savršeno osmišljen i realizovan. Preporučujem Macura Projekt svima koji traže vrhunsku arhitekturu.',
    project: 'Moderna vila'
  },
  {
    id: 4,
    name: 'Milica Stojanović',
    position: 'Direktor Razvoja',
    company: 'Luxury Hotels International',
    rating: 5,
    text: 'Profesionalizam, kreativnost i posvećenost kvalitetu čine Macura Projekt našim partnerom poverenja za sve buduće projekte.',
    project: 'Luksuzni hotel'
  }
];

export default function Testimonials() {
  const { ref: parallaxRef, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section 
      className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black"
      ref={parallaxRef}
    >

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 sm:mb-6">
            Šta kažu <span className="text-gradient">klijenti</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            Svaki projekat je priča o transformaciji snova u stvarnost. Evo kako su moji klijenti doživeli tu magiju.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-[#C4A572]/50 transition-all duration-300">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#C4A572] flex-shrink-0 mt-1" />
                    <p className="text-white/90 leading-relaxed italic text-base sm:text-lg">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full ring-2 ring-[#C4A572]/30 flex-shrink-0 luxury-gradient flex items-center justify-center">
                      <User className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-base sm:text-lg truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-white/70 text-xs sm:text-sm truncate">
                        {testimonial.position}
                      </p>
                      <p className="text-[#C4A572] text-xs sm:text-sm font-medium truncate">
                        {testimonial.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end flex-shrink-0">
                      <div className="flex gap-0.5 sm:gap-1 mb-1 sm:mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-[#C4A572] text-[#C4A572]" />
                        ))}
                      </div>
                      <span className="text-white/60 text-xs text-right">
                        {testimonial.project}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}