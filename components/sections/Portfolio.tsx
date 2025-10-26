'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Modal } from '@/components/ui/modal';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const projects = [
  {
    id: 1,
    title: 'Barajevo',
    category: 'Enterijer',
    year: '2024',
    location: 'Barajevo',
    image: '/projects/barajevo/1.webp',
    images: [
      '/projects/barajevo/1.webp',
      '/projects/barajevo/2.webp',
      '/projects/barajevo/3.webp',
      '/projects/barajevo/4.webp',
      '/projects/barajevo/5.webp',
      '/projects/barajevo/6.webp',
      '/projects/barajevo/7.webp',
      '/projects/barajevo/8.webp',
      '/projects/barajevo/9.webp',
      '/projects/barajevo/10.webp'
    ],
    description: 'Moderan enterijer koji spaja funkcionalnost i estetiku kroz pažljivo odabrane materijale i detalje.',
    fullDescription: 'Ovaj projekat predstavlja savršenu harmoniju između modernog dizajna i praktičnosti. Enterijer karakterišu čiste linije, neutralne boje sa akcentima tirkizne, i pažljivo osmišljen prostor koji maksimalno koristi prirodno osvetljenje. Posebna pažnja je posvećena funkcionalnosti i organizaciji prostora, stvarajući udoban i elegantan ambijent za svakodnevni život.',
    specifications: {
      'Površina': '120 m²',
      'Prostorije': 'Dnevna soba, kuhinja, trpezarija, predsoblje',
      'Stil': 'Moderan',
      'Materijali': 'Drvo, mermer, staklo',
      'Osvetljenje': 'LED i prirodno'
    },
    size: 'large'
  },
  {
    id: 2,
    title: 'Blok 45',
    category: 'Enterijer',
    year: '2024',
    location: 'Novi Beograd',
    image: '/projects/blok45/1.webp',
    images: [
      '/projects/blok45/1.webp',
      '/projects/blok45/2.webp',
      '/projects/blok45/3.webp',
      '/projects/blok45/4.webp',
      '/projects/blok45/5.webp',
      '/projects/blok45/6.webp',
      '/projects/blok45/7.webp',
      '/projects/blok45/8.webp',
      '/projects/blok45/9.webp',
      '/projects/blok45/10.webp',
      '/projects/blok45/11.webp',
      '/projects/blok45/12.webp',
      '/projects/blok45/13.webp',
      '/projects/blok45/14.webp',
      '/projects/blok45/15.webp',
      '/projects/blok45/16.webp',
      '/projects/blok45/17.webp',
      '/projects/blok45/18.webp',
      '/projects/blok45/19.webp',
      '/projects/blok45/20.webp',
      '/projects/blok45/21.webp',
      '/projects/blok45/22.webp'
    ],
    description: 'Luksuzni enterijer sa mermernim akcentima i savremenim dizajnerskim rešenjima.',
    fullDescription: 'Projekat u Bloku 45 predstavlja spoj luksuza i funkcionalnosti. Karakteristični mermerni zidovi, moderno osvetljenje i pažljivo odabran nameštaj stvaraju sofisticiran ambijent. Poseban akcenat je stavljen na radni prostor i biblioteku, koji kombinuju estetiku sa praktičnošću.',
    specifications: {
      'Površina': '115 m²',
      'Prostorije': 'Dnevna soba, spavaća soba, radni prostor, kupatilo',
      'Stil': 'Luksuzan moderan',
      'Materijali': 'Mermer, drvo, staklo, metal',
      'Osvetljenje': 'LED plafonske lampe, zidna rasveta'
    },
    size: 'large'
  },
  {
    id: 3,
    title: 'Elixir Garden',
    category: 'Enterijer',
    year: '2024',
    location: 'Beograd',
    image: '/projects/neda/1.webp',
    images: [
      '/projects/neda/1.webp',
      '/projects/neda/2.webp',
      '/projects/neda/3.webp',
      '/projects/neda/4.webp',
      '/projects/neda/5.webp',
      '/projects/neda/6.webp',
      '/projects/neda/7.webp',
      '/projects/neda/8.webp',
      '/projects/neda/9.webp'
    ],
    description: 'Elegantan enterijer koji kombinuje savremeni dizajn sa toplinom doma.',
    fullDescription: 'Projekat Elixir Garden u Beogradu predstavlja savršen spoj modernog dizajna i udobnosti. Pažljivo odabrani materijali i detalji stvaraju harmoničan prostor koji odražava sofisticiranost i funkcionalnost. Svaka prostorija je osmišljena da pruži maksimalan komfor uz očuvanje estetske vrednosti.',
    specifications: {
      'Površina': '25 m²',
      'Prostorije': 'Dnevna soba, kuhinja, spavaća soba, kupatilo',
      'Stil': 'Savremen',
      'Materijali': 'Drvo, staklo, prirodni kamen',
      'Osvetljenje': 'LED rasveta, prirodno osvetljenje'
    },
    size: 'large'
  },
  {
    id: 4,
    title: 'Novi Sad 1',
    category: 'Enterijer',
    year: '2024',
    location: 'Novi Sad',
    image: '/projects/novisad1/1.webp',
    images: [
      '/projects/novisad1/1.webp',
      '/projects/novisad1/2.webp',
      '/projects/novisad1/3.webp',
      '/projects/novisad1/4.webp',
      '/projects/novisad1/5.webp',
      '/projects/novisad1/6.webp',
      '/projects/novisad1/7.webp',
      '/projects/novisad1/8.webp',
      '/projects/novisad1/9.webp',
      '/projects/novisad1/10.webp',
      '/projects/novisad1/11.webp',
      '/projects/novisad1/12.webp',
      '/projects/novisad1/13.webp',
      '/projects/novisad1/14.webp',
      '/projects/novisad1/15.webp',
      '/projects/novisad1/16.webp',
      '/projects/novisad1/17.webp',
      '/projects/novisad1/18.webp',
      '/projects/novisad1/19.webp'
    ],
    description: 'Moderan enterijer sa fokusom na dečiju sobu i luksuzna kupatila.',
    fullDescription: 'Projekat Novi Sad 1 predstavlja spoj nežnosti i luksuza. Dečija soba u roze tonovima sa posebno dizajniranim elementima poput baldahina i mesečeve lampe stvara magičan prostor za najmlađe. Kupatila kombinuju zelene detalje sa zlatnim elementima i prirodnim kamenom, dok predsoblje karakterišu mermerni detalji koji doprinose elegantnom ambijentu. Projekat takođe uključuje modernu kuhinju, dnevnu sobu i spavaću sobu, svaka sa svojim jedinstvenim karakteristikama i pažljivo odabranim detaljima.',
    specifications: {
      'Površina': '110 m²',
      'Prostorije': 'Dečija soba, kupatila, predsoblje, kuhinja, dnevna soba, spavaća soba',
      'Stil': 'Moderan luksuzni',
      'Materijali': 'Mermer, drvo, prirodni kamen, zlato',
      'Osvetljenje': 'LED rasveta, dekorativna rasveta'
    },
    size: 'large'
  },
  {
    id: 5,
    title: 'Novi Sad 2',
    category: 'Enterijer',
    year: '2024',
    location: 'Novi Sad',
    image: '/projects/novisad2/1.webp',
    images: [
      '/projects/novisad2/1.webp',
      '/projects/novisad2/2.webp',
      '/projects/novisad2/3.webp',
      '/projects/novisad2/4.webp',
      '/projects/novisad2/5.webp',
      '/projects/novisad2/6.webp',
      '/projects/novisad2/7.webp'
    ],
    description: 'Savremeni enterijer sa živopisnim akcentima i modernim pristupom dizajnu.',
    fullDescription: 'Projekat Novi Sad 2 predstavlja inovativni pristup modernom dizajnu enterijera. Karakterišu ga živi tirkizni, zeleni, žuti, ljubičasti i crveni akcenti koji stvaraju dinamičan i energičan ambijent. Svaka prostorija ima svoju jedinstvenu paletu boja koja doprinosi celokupnoj harmoniji prostora. Dnevna soba sa tirkiznim zidovima, kuhinja sa zelenim akcentima, spavaća soba u toplim žutim tonovima, kupatilo sa ljubičastim detaljima i radni prostor sa crvenim akcentima čine ovaj projekat posebnim i nezaboravnim.',
    specifications: {
      'Površina': '45 m²',
      'Prostorije': 'Dnevna soba, kuhinja, spavaća soba, kupatilo, radni prostor',
      'Stil': 'Savremeni sa živopisnim akcentima',
      'Materijali': 'Drvo, staklo, prirodni materijali',
      'Osvetljenje': 'LED rasveta, prirodno osvetljenje'
    },
    size: 'large'
  },
  {
    id: 6,
    title: 'Novi Sad 3',
    category: 'Enterijer',
    year: '2024',
    location: 'Novi Sad',
    image: '/projects/novisad3/1.webp',
    images: [
        '/projects/novisad3/1.webp',
        '/projects/novisad3/2.webp',
        '/projects/novisad3/3.webp',
        '/projects/novisad3/4.webp',
        '/projects/novisad3/5.webp',
        '/projects/novisad3/6.webp',
        '/projects/novisad3/7.webp',
        '/projects/novisad3/8.webp',
        '/projects/novisad3/9.webp',
        '/projects/novisad3/10.webp'
      ],
    description: 'Luksuzni enterijer sa mermernim detaljima, toplim tonovima i elegantnim nameštajem.',
    fullDescription: 'Projekat Novi Sad 3 predstavlja vrhunac luksuza i sofisticiranosti u modernom dizajnu enterijera. Karakterišu ga bogati mermerni zidovi, topli bež i zlatni tonovi, kao i pažljivo odabrani nameštaj koji stvara harmoničan i elegantan ambijent. Kuhinja sa mermernim detaljima i bakarnim akcentima, prostrana dnevna soba sa velikim sofom u bež tonovima, otvoreni prostor koji spaja kuhinju sa trpezarijom, i luksuzna TV zona sa mermernim zidovima čine ovaj projekat izuzetnim primerom savremenog luksuza.',
    specifications: {
      'Površina': '130 m²',
      'Prostorije': 'Kuhinja, dnevna soba, trpezarija, TV zona',
      'Stil': 'Luksuzni savremeni',
      'Materijali': 'Mermer, drvo, bakar, prirodni kamen',
      'Osvetljenje': 'Pletene lampe, LED rasveta, prirodno osvetljenje'
    },
    size: 'large'
  },
  {
    id: 7,
    title: 'Penthaus',
    category: 'Enterijer',
    year: '2024',
    location: 'Beograd',
    image: '/projects/penthaus/1.webp',
    images: [
        '/projects/penthaus/1.webp',
        '/projects/penthaus/2.webp',
        '/projects/penthaus/3.webp',
        '/projects/penthaus/4.webp',
        '/projects/penthaus/5.webp',
        '/projects/penthaus/6.webp',
        '/projects/penthaus/7.webp',
        '/projects/penthaus/8.webp',
        '/projects/penthaus/9.webp',
        '/projects/penthaus/10.webp',
        '/projects/penthaus/11.webp',
        '/projects/penthaus/12.webp',
        '/projects/penthaus/13.webp',
        '/projects/penthaus/14.webp',
        '/projects/penthaus/15.webp',
        '/projects/penthaus/16.webp',
        '/projects/penthaus/17.webp'
      ],
    description: 'Luksuzni penthaus sa mermernim detaljima, tamnim akcentima i modernim dizajnom.',
    fullDescription: 'Projekat Penthaus predstavlja vrhunac luksuza i sofisticiranosti u savremenom dizajnu enterijera. Karakterišu ga bogati mermerni zidovi, elegantna kombinacija svetlih i tamnih tonova, kao i pažljivo odabrani nameštaj koji stvaraju harmoničan i elegantan ambijent. Prostrana dnevna soba sa mermernim zidovima i belim nameštajem, elegantan garderober sa tamnim i svetlim detaljima, luksuzna kupatila sa mermernim površinama i bakarnim akcentima, kao i impresivne stepenice čine ovaj projekat izuzetnim primerom savremenog luksuza.',
    specifications: {
      'Površina': '280 m²',
      'Prostorije': 'Dnevna soba, garderober, kupatila, stepenice',
      'Stil': 'Savremeni luksuz',
      'Materijali': 'Mermer, drvo, bakar, staklo',
      'Osvetljenje': 'LED rasveta, prirodno osvetljenje'
    },
    size: 'large'
  },
  {
    id: 8,
    title: 'Surčin',
    category: 'Enterijer',
    year: '2024',
    location: 'Surčin',
    image: '/projects/surcin/1.webp',
    images: [
        '/projects/surcin/1.webp',
        '/projects/surcin/2.webp',
        '/projects/surcin/3.webp',
        '/projects/surcin/4.webp',
        '/projects/surcin/5.webp',
        '/projects/surcin/6.webp',
        '/projects/surcin/7.webp',
        '/projects/surcin/8.webp',
        '/projects/surcin/9.webp',
        '/projects/surcin/10.webp',
        '/projects/surcin/11.webp',
        '/projects/surcin/12.webp',
        '/projects/surcin/13.webp',
        '/projects/surcin/14.webp',
        '/projects/surcin/15.webp'
      ],
    description: 'Moderni enterijer sa sivim tonovima, drvenim akcentima i narandžastim detaljima.',
    fullDescription: 'Projekat Surčin predstavlja savršen spoj modernog dizajna i toplih tonova. Karakterišu ga sivi tonovi kao osnova, drveni akcenti koji donose prirodnost i narandžasti detalji koji stvaraju toplu i savremenu atmosferu. Svaka prostorija je pažljivo osmišljena da pruži maksimalan komfor uz očuvanje estetske vrednosti i funkcionalnosti.',
    specifications: {
      'Površina': '55 m²',
      'Prostorije': 'Dnevna soba, kuhinja, spavaće sobe, kupatilo',
      'Stil': 'Moderni',
      'Materijali': 'Drvo, staklo, tekstil',
      'Osvetljenje': 'LED rasveta, prirodno osvetljenje'
    },
    size: 'large'
  },
  {
    id: 9,
    title: 'Vračar',
    category: 'Enterijer',
    year: '2024',
    location: 'Beograd',
    image: '/projects/vracar/1.webp',
    images: [
        '/projects/vracar/1.webp',
        '/projects/vracar/2.webp',
        '/projects/vracar/3.webp',
        '/projects/vracar/4.webp',
        '/projects/vracar/5.webp',
        '/projects/vracar/6.webp',
        '/projects/vracar/7.webp'
      ],
    description: 'Elegantan enterijer sa toplim tonovima, drvenim akcentima i zlatnim detaljima.',
    fullDescription: 'Projekat Vračar predstavlja savršen spoj elegancije i funkcionalnosti u srcu Beograda. Karakterišu ga topli tonovi koji stvaraju udobnu atmosferu, drveni akcenti koji donose prirodnost i sofisticiranost, kao i pažljivo odabrani sivi elementi koji doprinose modernom izgledu. Zlatni detalji dodaju luksuzni dodir celokupnom ambijentu. Svaka prostorija je osmišljena da pruži maksimalan komfor uz očuvanje estetske vrednosti.',
    specifications: {
      'Površina': '78 m²',
      'Prostorije': 'Dnevna soba, kuhinja, spavaća soba, kupatilo',
      'Stil': 'Elegantan moderan',
      'Materijali': 'Drvo, mermer, staklo, zlato',
      'Osvetljenje': 'LED rasveta, prirodno osvetljenje, zlatne lampe'
    },
    size: 'large'
  },
  {
    id: 10,
    title: 'Zvezdara',
    category: 'Enterijer',
    year: '2024',
    location: 'Beograd',
    image: '/projects/zvezdara/1.webp',
    images: [
        '/projects/zvezdara/1.webp',
        '/projects/zvezdara/2.webp',
        '/projects/zvezdara/3.webp',
        '/projects/zvezdara/4.webp',
        '/projects/zvezdara/5.webp',
        '/projects/zvezdara/6.webp'
      ],
    description: 'Moderan enterijer sa elegantnim dizajnom, toplim tonovima i funkcionalnim rešenjima.',
    fullDescription: 'Projekat Zvezdara predstavlja savršen spoj modernog dizajna i funkcionalnosti u srcu Beograda. Karakterišu ga topli tonovi koji stvaraju udobnu atmosferu, drveni akcenti koji donose prirodnost i sofisticiranost, kao i pažljivo odabrani sivi elementi koji doprinose savremenom izgledu. Svaka prostorija je osmišljena da pruži maksimalan komfor uz očuvanje estetske vrednosti, od prostrane dnevne sobe sa elegantnim nameštajem, preko moderne kuhinje sa funkcionalnim rešenjima, do mirne spavaće sobe i luksuznog kupatila.',
    specifications: {
      'Površina': '75 m²',
      'Prostorije': 'Dnevna soba, kuhinja, spavaća soba, kupatilo, radni prostor',
      'Stil': 'Moderan',
      'Materijali': 'Drvo, mermer, staklo, prirodni materijali',
      'Osvetljenje': 'LED rasveta, prirodno osvetljenje, dekorativna rasveta'
    },
    size: 'large'
  }
];

const categories = ['Sve', 'Enterijer'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('Sve');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ref: parallaxRef, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  const filteredProjects = selectedCategory === 'Sve' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getGridClass = (size: string, index: number) => {
    switch (size) {
      case 'large':
        return 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2';
      case 'medium':
        return 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1';
      case 'small':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const openProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  return (
    <section 
      id="portfolio"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black"
      ref={parallaxRef}
    >
        {/* Background image that barely shows through */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/portfolio-5.jpg")',
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
            <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Verujemo u moć prostora koji pokreće emociju, ovako to izgleda kada se savremena arhitektura susretne sa životom.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? 'luxury-gradient text-black'
                  : 'border-[#C4A572]/50 text-white hover:border-[#C4A572] hover:bg-[#C4A572]/10'
              } transition-all`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[320px] lg:auto-rows-[300px]"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={getGridClass(project.size, index)}
              >
                <Card 
                  className="group relative h-full overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-[#C4A572]/50 transition-all duration-300 cursor-pointer"
                  onClick={() => openProject(project)}
                >
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  </div>
                  
                  <CardContent className="relative z-10 p-4 md:p-6 h-full flex flex-col justify-end">
                    {/* Dark background for text content */}
                    <div className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-gray-800/50 rounded-lg p-3 md:p-4">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="text-[#C4A572] text-sm font-medium mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="text-lg md:text-xl font-serif font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-white/80 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-white/70">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {project.year}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {project.location}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                      <ExternalLink className="w-5 h-5 text-[#C4A572]" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>


      </div>

      {/* Project Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        size="full"
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-8 p-3 sm:p-4 lg:p-6">
            {/* Image Gallery */}
            <div className="relative order-1 lg:order-1">
              <div className="aspect-video sm:aspect-[4/3] lg:aspect-video relative overflow-hidden rounded-lg">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-black/90 text-white p-1.5 sm:p-2 rounded-full transition-colors touch-manipulation"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-black/90 text-white p-1.5 sm:p-2 rounded-full transition-colors touch-manipulation"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/75 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>
              
              {/* Thumbnail Navigation */}
              <div className="flex gap-1.5 sm:gap-2 mt-3 sm:mt-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                {selectedProject.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition-colors touch-manipulation ${
                      index === currentImageIndex ? 'border-[#C4A572]' : 'border-gray-600'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <span className="text-[#C4A572] font-medium text-sm sm:text-base">{selectedProject.category}</span>
                  <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      {selectedProject.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      {selectedProject.location}
                    </div>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Specifications */}
              <div>
                <h4 className="text-base sm:text-lg font-serif font-bold text-white mb-3 sm:mb-4">Specifikacije</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {Object.entries(selectedProject.specifications).map(([key, value]) => (
                    <div key={key} className="border-b border-gray-700 pb-2">
                      <div className="text-white/60 text-xs sm:text-sm">{key}</div>
                      <div className="text-white font-medium text-sm sm:text-base">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex pt-3 sm:pt-4">
                <Button 
                  className="luxury-gradient text-black font-semibold flex-1 h-10 sm:h-11 text-sm sm:text-base touch-manipulation"
                  onClick={() => {
                    setSelectedProject(null);
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Zatraži ponudu
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}