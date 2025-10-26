'use client';

import { motion } from 'framer-motion';
import { Award, Users, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const stats = [
  { number: '35+', label: 'Završenih projekata' },
  { number: '5+', label: 'Godina iskustva' },
  { number: '98%', label: 'Zadovoljstvo klijenata' },
];

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Vizija',
    description: 'Zamišljam prostore koji prevazilaze obično, kreirajući okruženja koja inspirišu i uzdižu ljudsko iskustvo.'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Inovacija',
    description: 'Pomeram granice dizajna kroz najsavremeniju tehnologiju i napredna arhitektonska rešenja.'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Izvrsnost',
    description: 'Beskompromisna posvećenost kvalitetu i preciznosti u svakom detalju mojih arhitektonskih kreacija.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Saradnja',
    description: 'Gradim trajna partnerstva sa klijentima kroz transparentnu komunikaciju i zajedničku kreativnu viziju.'
  },
];

export default function About() {
  const { ref: parallaxRef, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section 
      id="about"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black"
      ref={parallaxRef}
    >
        {/* Background image that barely shows through */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/portfolio-6.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.01
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6">
            O <span className="text-gradient">nama</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Oblikujemo arhitektonske snove u stvarnosti, kreirajući prostore po meri koji ne samo da zadovoljavaju očekivanja, već ih nadmašuju i ostavljaju trajni utisak.
          </p>
        </motion.div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif font-bold mb-6 text-gradient">Moja priča</h3>
            <div className="space-y-4 text-white/80">
              <p>
                Iz duboke strasti prema transformativnoj moći arhitekture, arhitekta Angelina Macura započela je putovanje koje je od vizije preraslo u studio prepoznat po stvaranju sofisticiranih i bezvremenskih prostora.
              </p>
              <p>
                "Moja posvećenost svakom projektu ogleda se u verovanju da arhitektura ne gradi samo zidove, već oblikuje iskustva i živote koji se u njima odvijaju. Ono što je započelo kao moja vizija, preraslo je u studio koji okuplja stručnjake i saradnike sa dugogodišnjim iskustvom u oblasti arhitekture i dizajna enterijera. Zajedno gradimo prostore u kojima se prepliću inovacija, održivost i bezvremenska elegancija. Naš tim posvećeno radi na tome da svaki projekat bude više od prostora, da postane prepoznatljiva priča o kvalitetu, poverenju, savršenstvu i iskustvu koje traje zauvek."
              </p>
              <p className="text-right font-serif italic">
                Arhi. Angelina Macura
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/about-image.jpg"
                alt="Luksuzni enterijer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 md:grid-cols-3 gap-8 mb-20 mx-auto max-w-4xl"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-gradient mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-serif font-bold mb-4">Moje osnovne vrednosti</h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Fundamentalne vrednosti koje transformišu svaku viziju u arhitektonsko remek delo koje ostavlja trajni utisak.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-[#C4A572]/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <motion.div 
                    className="luxury-gradient p-3 rounded-lg inline-flex mb-4 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 5 }}
                  >
                    <div className="text-black">
                      {value.icon}
                    </div>
                  </motion.div>
                  <h4 className="text-xl font-serif font-bold mb-3 text-white">
                    {value.title}
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}