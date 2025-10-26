'use client';

import { Calendar, Clock, ArrowRight, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const blogPosts = [
  {
    id: 1,
    title: 'Budućnost održive arhitekture',
    excerpt: 'Istraživanje kako zelene tehnologije i ekološki svesni materijali oblikuju arhitekturu budućnosti.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
    author: 'Macura Projekt',
    date: '15. decembar 2024',
    readTime: '5 min čitanja',
    category: 'Održivost',
    content: {
      intro: 'U eri klimatskih promena i rastuće ekološke svesnosti, arhitektura se nalazi na prekretnici. Održiva arhitektura nije više opcija - to je imperativ koji oblikuje budućnost naših gradova i načina života.',
      sections: [
        {
          title: 'Zeleni materijali kao temelj',
          text: 'Korišćenje recikliranih i obnovljivih materijala postaje standard u modernom projektovanju. Bambus, reciklirani beton, i lokalno dostupni prirodni materijali ne samo da smanjuju ugljeni otisak, već i stvaraju autentične, toplije prostore koji se harmonično uklapaju u okolinu.'
        },
        {
          title: 'Energetska efikasnost kroz dizajn',
          text: 'Pametno pozicioniranje zgrade, optimalno korišćenje prirodnog svetla i ventilacije, kao i integracija solarnih panela i geotermalne energije, čine zgrade koje proizvode više energije nego što troše. Ovo nije samo ekološki odgovorno, već i ekonomski opravdano.'
        },
        {
          title: 'Biofilija u arhitekturi',
          text: 'Integracija prirode u arhitektonski dizajn kroz zelene krovove, vertikalne bašte i prirodne materijale ne samo da poboljšava kvalitet vazduha, već i pozitivno utiče na mentalno zdravlje i produktivnost korisnika prostora.'
        }
      ],
      conclusion: 'Održiva arhitektura predstavlja sintezu inovacije, odgovornosti i lepote. Kroz pažljivo planiranje i korišćenje najnovijih tehnologija, možemo kreirati prostore koji ne samo da zadovoljavaju naše potrebe, već i čuvaju planetu za buduće generacije.'
    }
  },
  {
    id: 2,
    title: 'Minimalistički dizajn u modernoj arhitekturi',
    excerpt: 'Kako princip "manje je više" kreira prostore koji su istovremeno funkcionalni i estetski zadivljujući.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    author: 'Macura Projekt',
    date: '10. decembar 2024',
    readTime: '7 min čitanja',
    category: 'Dizajn',
    content: {
      intro: 'Minimalizam u arhitekturi nije samo estetski izbor - to je filozofija koja stavlja funkcionalnost i čistoću forme u centar dizajna. Ovaj pristup kreira prostore koji "dišu" i omogućavaju korisnicima da se fokusiraju na ono što je zaista važno.',
      sections: [
        {
          title: 'Čiste linije i geometrijske forme',
          text: 'Minimalističku arhitekturu karakterišu jednostavne, geometrijske forme bez nepotrebnih ukrasa. Svaki element ima svoju svrhu, a lepota nastaje iz savršene proporcije i harmonije između različitih delova strukture.'
        },
        {
          title: 'Prirodno svetlo kao glavni element',
          text: 'Veliki prozori, staklene površine i pametno pozicioniranje otvora omogućavaju prirodnom svetlu da postane glavni "dekorativni" element prostora. Svetlo menja karakter prostora tokom dana, stvarajući dinamičnu, ali mirnu atmosferu.'
        },
        {
          title: 'Materijali koji govore sami za sebe',
          text: 'Beton, drvo, staklo i čelik koriste se u svojoj prirodnoj formi, bez skrivanja ili imitacije. Ova autentičnost materijala stvara iskrene prostore koji odišu kvalitetom i trajnošću.'
        },
        {
          title: 'Funkcionalnost kao lepota',
          text: 'U minimalističkom dizajnu, svaki element mora da opravda svoje postojanje kroz funkciju. Ova disciplina rezultuje prostorima koji su ne samo lepi, već i izuzetno praktični za svakodnevni život.'
        }
      ],
      conclusion: 'Minimalističku arhitekturu dokazuje da je istinska elegancija u jednostavnosti. Kroz pažljivo uklanjanje svega nepotrebnog, otkrivamo esenciju prostora i kreiramo okruženja koja inspirišu mir i fokus.'
    }
  },
  {
    id: 3,
    title: 'Integracija tehnologije u arhitektonski dizajn',
    excerpt: 'Pametni domovi i zgrade: kako tehnologija menja način na koji projektujemo i koristimo prostore.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    author: 'Macura Projekt',
    date: '5. decembar 2024',
    readTime: '6 min čitanja',
    category: 'Tehnologija',
    content: {
      intro: 'Digitalna revolucija transformiše arhitekturu na načine koje smo tek počeli da razumemo. Pametne zgrade nisu više naučna fantastika - one su realnost koja menja način na koji intereagujemo sa našim prostorima.',
      sections: [
        {
          title: 'IoT i povezani prostori',
          text: 'Internet stvari (IoT) omogućavaju zgradama da "misle" i reaguju na potrebe korisnika. Senzori za temperaturu, vlažnost, kvalitet vazduha i prisustvo ljudi omogućavaju automatsko prilagođavanje uslova, optimizujući komfor i energetsku efikasnost.'
        },
        {
          title: 'Adaptivni fasadni sistemi',
          text: 'Moderne fasade mogu da se prilagođavaju vremenskim uslovima i potrebama korisnika. Automatske roletne, ventilirani fasadni sistemi i dinamičko staklo koje menja transparentnost predstavljaju budućnost arhitektonske "kože" zgrade.'
        },
        {
          title: 'Virtuelna i proširena realnost u dizajnu',
          text: 'VR i AR tehnologije revolucionišu proces projektovanja, omogućavajući arhitektama i klijentima da "hodaju" kroz prostore pre nego što su izgrađeni. Ovo drastično poboljšava komunikaciju i smanjuje greške u projektovanju.'
        },
        {
          title: 'Održivost kroz tehnologiju',
          text: 'Pametni sistemi upravljanja energijom, automatska kontrola osvetljenja i grejanja, kao i sistemi za recikliranje vode, čine zgrade ne samo pametnijim, već i odgovornijim prema životnoj sredini.'
        }
      ],
      conclusion: 'Integracija tehnologije u arhitekturu nije samo dodavanje gedžeta, to je kreiranje prostora koji se prilagođavaju, uče i evoluiraju sa svojim korisnicima. Budućnost arhitekture je u harmoniji između digitalnog i fizičkog sveta.'
    }
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openPost = (post: typeof blogPosts[0]) => {
    setSelectedPost(post);
    setIsOpen(true);
  };

  const closePost = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSelectedPost(null);
    }, 300); // Delay to allow animation to complete
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/portfolio-7.jpg"
          alt="Background"
          fill
          className="object-cover object-center opacity-[0.01]"
          priority
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6">
            Arhitektonski <span className="text-gradient">uvidi</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            Zaronite u svet vizionarskih ideja i otkrijte kako se rađaju prostori koji menjaju način na koji živimo i radimo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
            >
              <Card 
                className="group h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-[#C4A572]/50 transition-all duration-300 cursor-pointer"
                onClick={() => openPost(post)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 text-xs sm:text-sm text-white/60">
                    <span className="text-[#C4A572] font-medium text-sm">{post.category}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">{post.date}</span>
                      <span className="sm:hidden">15. Dec</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">{post.readTime}</span>
                      <span className="sm:hidden">5 min</span>
                    </div>
                  </div>
                  
                  <h3 
                    className="text-lg sm:text-xl font-serif font-bold text-white mb-3 group-hover:text-[#C4A572] transition-colors line-clamp-2 cursor-pointer"
                    onClick={() => openPost(post)}
                  >
                    {post.title}
                  </h3>
                  
                  <p className="text-white/70 mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
                      <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">{post.author}</span>
                      <span className="sm:hidden">MP</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#C4A572] hover:text-white hover:bg-[#C4A572]/20 p-1 sm:p-2 text-xs sm:text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        openPost(post);
                      }}
                    >
                      <span className="hidden sm:inline">Pročitaj</span>
                      <span className="sm:hidden">Pročitaj</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Modal - Implementacija sa shadcn/ui Dialog komponentom */}
        <Dialog open={isOpen} onOpenChange={(open) => {
          if (!open) closePost();
        }}>
          {selectedPost && (
            <DialogContent className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg shadow-2xl max-w-4xl w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-h-[90vh] p-0 overflow-hidden" hideCloseButton>
              {/* Header */}
              <div className="relative">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-48 sm:h-64 object-cover rounded-t-lg"
                />
                <DialogClose className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-1">
                  <X className="w-6 h-6" />
                </DialogClose>
              </div>

              {/* Content - Dodana max-h-[calc(90vh-16rem)] za skrol */}
              <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-16rem)] sm:max-h-[calc(90vh-18rem)]">
                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-white/60">
                  <span className="text-[#C4A572] font-medium">{selectedPost.category}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{selectedPost.author}</span>
                  </div>
                </div>

                {/* Title */}
                <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 sm:mb-6">
                  {selectedPost.title}
                </DialogTitle>

                {/* Introduction */}
                <DialogDescription className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed">
                  {selectedPost.content.intro}
                </DialogDescription>

                {/* Sections */}
                {selectedPost.content.sections.map((section, index) => (
                  <div key={index} className="mb-6 sm:mb-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-[#C4A572] mb-3 sm:mb-4">
                      {section.title}
                    </h2>
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                ))}

                {/* Conclusion */}
                <div className="border-t border-gray-800 pt-6 sm:pt-8">
                  <p className="text-base sm:text-lg text-white/80 leading-relaxed font-medium">
                    {selectedPost.content.conclusion}
                  </p>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}