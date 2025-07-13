'use client';

import { motion } from 'framer-motion';
import { Building, Home, Palette, Settings, Lightbulb, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

const services = [
  {
    icon: <Building className="w-8 h-8" />,
    title: 'Komercijalna arhitektura',
    description: 'Kreiram izuzetne komercijalne prostore koji pokreću poslovni uspeh i razvoj zajednice.',
    features: ['Poslovne zgrade', 'Trgovinski prostori', 'Mešoviti kompleksi', 'Korporativne centrale']
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: 'Stambeni dizajn',
    description: 'Luksuzni domovi i stambeni kompleksi koji redefinišu moderne standarde življenja.',
    features: ['Prilagođeni domovi', 'Luksuzni stanovi', 'Stambeni kompleksi', 'Urbanističko planiranje']
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Dizajn enterijera',
    description: 'Sofisticirana rešenja enterijera koja se harmonično uklapaju sa arhitektonskom vizijom.',
    features: ['Planiranje prostora', 'Izbor materijala', 'Dizajn osvetljenja', 'Prilagođeni nameštaj']
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Razvoj koncepta',
    description: 'Inovativni dizajnerski koncepti koji pomeraju granice i inspirišu maštu.',
    features: ['Dizajnerska strategija', 'Konceptualno planiranje', 'Studije izvodljivosti', 'Razvoj vizije']
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Upravljanje projektima',
    description: 'Sveobuhvatan nadzor projekata koji obezbeđuje besprekorno izvršavanje od koncepta do završetka.',
    features: ['Upravljanje gradnjom', 'Koordinacija rokova', 'Kontrola kvaliteta', 'Upravljanje budžetom']
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Održivi dizajn',
    description: 'Ekološki svesna arhitektura koja balansira luksuz sa odgovornošću prema životnoj sredini.',
    features: ['Zelena sertifikacija', 'Energetska efikasnost', 'Održivi materijali', 'Uticaj na životnu sredinu']
  }
];

export default function Services() {
  const { scrollToElement } = useSmoothScroll();

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6">
            Moje <span className="text-gradient">usluge</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Kompletna arhitektonska rešenja koja pretvaraju vaše najsmelije snove u 
            spektakularne prostore koji nadmašuju sva očekivanja i ostavljaju trajni utisak.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-[#C4A572]/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <motion.div 
                    className="luxury-gradient p-4 rounded-lg inline-flex mb-6 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 5 }}
                  >
                    <div className="text-black">
                      {service.icon}
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-white/60 text-sm"
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 luxury-gradient rounded-full mr-3"
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-3xl font-serif font-bold mb-4 text-gradient">
              Spremni da započnete svoj projekat?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Hajde da sarađujemo kako bismo oživeli vašu arhitektonsku viziju. 
              Od koncepta do završetka, tu sam da kreiram nešto izuzetno.
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToElement('#contact')}
                className="luxury-gradient text-black font-semibold px-8 py-4 rounded-lg transition-transform shadow-xl"
              >
                Zakaži konsultaciju
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}