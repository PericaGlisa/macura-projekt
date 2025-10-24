'use client';

import { motion } from 'framer-motion';
import { Building, Home, Palette, Settings, Lightbulb, Shield, X, FileCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Dizajn enterijera',
    description: 'Kreiramo jedinstvene dizajne enterijera koji odražavaju vašu ličnost i potrebe. Kombinujemo funkcionalnost i estetiku za stvaranje harmoničnih prostora.',
    fullDescription: 'Dizajn enterijera je umetnost transformacije prostora. Smatramo da svako zaslužuje jedinstven izgled privatnog ili poslovnog prostora koji odiše njegovom energijom i senzibilitetom. Zbog toga uređenje enterijera posmatramo kao saradnju koja, kroz našu ekspertizu, a osluškivanje vaših ideja i želja, za rezultat ima savršena rešenja za svaki tip i veličinu prostorije.\n\nKada su potrebne usluge dizajnera enterijera?\nUselili ste se u novu kuću i nedostaje vam inspiracija za uređenje enterijera? Želite da iskoristite maksimum od malog stana ili možda imate i previše inspiracije za dizajn enterijera, ali treba vam pomoć pri odabiru stila koji će se najbolje uklopiti uz ostatak vašeg doma?\n\nDeluje kao da vam pomoć profesionalaca može biti od koristi. Kroz dizajniranje enterijera od strane profesionalca uštedećete sebi vreme i garantovano dobiti zadovoljavajući finalni izgled enterijera.\n\nAko vas muči mala kvadratura prostora, dobra vest je da dizajner enterijera može optimizovati i iskoristiti svaki centimetar prostora, neovisno o njegovoj veličini. Bićete oduševljeni kada shvatite koliko pametan dizajn može poboljšati efikasnost i funkcionalnost prostora, obezbeđujući da svaka površina ima svrhu i da svaki element služi praktičnom cilju.\n\nKao jednako važan faktor, tu je i estetika. Dizajn enterijera donosi harmoniju boja, tekstura i dekorativnih elemenata koji poboljšavaju vizuelni apel svakog prostora. Ovo može stvoriti prijatan ambijent koji vas inspiriše i opušta.',
    features: ['Izrada projekta enterijera i 3D modela', 'Osmišljavanje funkcionalnosti prostora', 'Izbor boja, materijala i tkanina', 'Definisanje rasvete i osvetljenja'],
    hasEnergyChart: false
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Energetska efikasnost',
    description: 'Projektujemo objekte koji štede energiju kroz pametno pozicioniranje, kvalitetnu izolaciju i efikasne sisteme grejanja, uz očuvanje komfora.',
    fullDescription: 'Energetska efikasnost podrazumeva niz mera koje preduzimamo u cilju smanjenja potrošnje energije, a koje pri tome ne narušavaju uslove rada i života.\n\nVeoma često pojam energetske efikasnosti se doživljava i smatra nečim što nam može smanjiti nivo kvaliteta života. Međutim, energetska efikasnost podrazumeva brigu o načinu na koji trošimo energiju uz zadržavanje istog nivoa komfora života ili čak u nekim slučajevima i povećanje nivoa udobnosti.\n\nPored značajnog doprinosa očuvanju životne sredine, energetska efikasnost se ogleda i u finansijskim uštedama svakog pojedinca.\n\nDa bi jedan objekat učinili energetski efikasnim, prilikom projektovanja moramo voditi računa o nizu faktora koji utiču na krajnji rezultat u pogledu smanjenja potrošnje energije.\n\nNa samom početku procesa projekotvanja moramo voditi računa o orjentaciji objekta, položaju na parceli, pozicioniranju funkcionalnih celina i otvora. Ovim želimo postići da što više energije "uštedimo prirodnim putem". Pravilno orjentisan objekat koristi sunčevu energiju za grejanje zimi, dok se adekvatnim elementima u zoni otvora štiti od preteranog zagrevanja leti. Takođe, pravilno orjentisani otvori mogu omogućiti prirodnu ventilaciju koja je itekako korisna sa aspekta energetske efikasnosti i udobonosti života.\n\nKao što vidite, vodeći računa o elementarnim pravilima projektovanja, bez ikakvog novčanog izdatka, može se daleko odmaći u pogledu energetske efikasnosti objekta.\n\nOno što pored navedenog doprinosi energetskoj efikasnosti jeste i adekvatna izolacija objekta, eliminisanje "hladnih mostova", odabir prozora i vrata koja imaju adekvatne karakteristike u pogledu provodljivosti toplote, odabir prikladnog sistema grejanja za predmetni objekat, primena toplotnih pumpi, korišćenja solarne energije, korišćenje kišnice itd.\n\nDa bi se definisala I "ocenila" energetska efikasnost objekta, sastavni deo tehničke dokumentacije jeste i Elaborate energetske efikasnosti.\n\nAnalizom gore pomenutih parametara, definiše se energetski razred objekta, koji u skladu sa zakonom mora biti minimum „C".',
    features: ['Elaborat energetske efikasnosti', 'Optimizacija orjentacije objekta', 'Adekvatna izolacija', 'Izbor efikasnih sistema grejanja'],
    hasEnergyChart: true
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: 'Ozakonjenje objekata',
    description: 'Pružamo kompletnu podršku u procesu ozakonjenja nelegalno izgrađenih objekata, od izrade elaborata do podnošenja zahteva, u skladu sa zakonima.',
    fullDescription: 'Legalizacija objekata (ozakonjenje objekta) odnosi se na proces ozakonjenja nelegalno izgrađenih objekata, odnosno objekata koji su izgrađeni bez potrebne građevinske dozvole. Ovaj proces uređuje Zakon o ozakonjenju objekata i neophodan je korak koji svaki vlasnik nekretnine mora obaviti. Kontaktirajte naš arhitektonski biro za detaljnu podršku u procesu legalizacije.\n\nŠta je legalizacija objekata?\nLegalizacija ili ozakonjenje objekta podrazumeva naknadno izdavanje građevinske ili upotrebne dozvole za objekte ili njihove delove za koje te dozvole nisu prethodno postojale.\n\nKoji objekti se ne moraju legalizovati?\nZakonski gledano, svi tipovi objekata moraju biti legalizovani. Legalizacija objekta nije stvar izbora, već obaveza svakog građanina Srbije. Međutim, kuće sagrađene pre 1961. godine, kao i pomoćni objekti na selu izgrađeni do 1973. godine, ne podležu novom zakonu o legalizaciji, jer su u vreme njihove izgradnje važili drugačiji propisi koji nisu zahtevali građevinsku dozvolu.\n\nVlasnici tih objekata mogu ih direktno uknjižiti u katastar nepokretnosti. Svi objekti izgrađeni nakon tih datuma moraju proći kroz proces ozakonjenja.\n\nKoji su objekti koji moraju biti legalizovani?\nZakon o ozakonjenju precizno definiše koji objekti moraju biti legalizovani. U pitanju su objekti koji su u potpunosti građevinski završeni, ali to mogu biti i zgrade na kojima su izvedeni samo osnovni konstruktivni građevinski radovi kao što su temelj, stubovi sa gredama, armirano-betonska tavanica, krovna konstrukcija i slično, bez obzira da li imaju završenu fasadu.\n\nStambeni objekti – kuće, stanovi, vikendice i slični objekti za koje vlasnici nisu imali građevinsku dozvolu u vreme izgradnje.\nKomercijalni objekti – prodavnice, radionice, skladišta i drugi objekti koji se koriste za poslovne svrhe, a izgrađeni su bez dozvole.\nPomoćni objekti – garaže, ostave i drugi pomoćni objekti izgrađeni bez dozvole.\nObjekti izgradjeni na osnovu ranijih zakona – objekti za koje je podnet zahtev za legalizaciju prema ranijim zakonima, ali postupak nije završen do stupanja na snagu novog zakona, takođe moraju biti legalizovani prema aktuelnim propisima.\n\nZa ostale objekte koji su predmet ozakonjenja, stepen završenosti se procenjuje prema vrsti i nameni objekta.',
    features: ['Izrada elaborata geodetskih radova', 'Izveštaj o zatečenom stanju', 'Prikupljanje dokumentacije', 'Podnošenje zahteva za ozakonjenje'],
    hasEnergyChart: false
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Parcelacija i preparcelacija parcela',
    description: 'Sprovodimo procese promene granica parcela kroz parcelaciju (cepanje) i preparcelaciju (spajanje), uz poštovanje vlasničke strukture i zakonskih procedura.',
    fullDescription: 'Parcelacija i preparcelacija predstavljaju procese promene granica parcele, a krajnji cilj je da se te promene zavedu u katastru nepokretnosti. Parcelacija predstavlja proces cepanja jedne parcele na dva ili više delova, odnosno stvaranja novih manjih parcela od jedne parcele. Preparcelacija predstavlja proces spajanja dve ili više parcela u jednu ili više parcela, odnosno menjanje granica više parcela.\n\nIako su ova dva procesa različita, za oba važi isto pravilo - vlasnička struktura mora biti ista, i ako postoji više suvlasnika, svi moraju biti saglasni sa promenama. Za bilo kakvu promenu granica parcela potrebna je saglasnost svih vlasnika/suvlasnika parcela obuhvaćenih procesom.\n\nZa uspešno sprovođenje parcelacije ili preparcelacije, neophodno je izraditi odgovarajuću dokumentaciju koja uključuje katastarsko-topografski plan, projekat parcelacije ili preparcelacije, kao i projekat geodetskog obeležavanja. Ova dokumentacija mora biti izrađena od strane ovlašćenih geodetskih organizacija i projektanata.\n\nNakon izrade potrebne dokumentacije, sledi procedura podnošenja zahteva nadležnim organima i sprovođenje promena u katastru nepokretnosti. Ceo proces zahteva stručno vođenje i poznavanje zakonskih propisa, kako bi se izbegle eventualne komplikacije i osiguralo uspešno sprovođenje željenih promena granica parcela.\n\nNaš tim stručnjaka pruža kompletnu podršku tokom celog procesa, od inicijalnih konsultacija i izrade potrebne dokumentacije, do podnošenja zahteva i praćenja procedure do uspešnog završetka i upisa promena u katastar nepokretnosti.',
    features: ['Izrada katastrarsko-topografskog plana', 'Izrada projekta geodetskog obeležavanja', 'Izrada projekta parcelacije', 'Obeležavanje novih granica parcela'],
    hasEnergyChart: false
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: 'Projekti kuća',
    description: 'Kreiramo jedinstvene projekte kuća po vašoj meri, od inicijalnih konsultacija do završnih detalja, sa fokusom na funkcionalnost i estetiku.',
    fullDescription: 'Projekti kuća su kompleksni procesi koji zahtevaju pažljivo planiranje i stručnost kako bi se ostvarili zadovoljavajući rezultati. U trenutku kada donesete odluku da se upustite u avanturu projektovanja sopstvene kuće, jedan od najvažnijih koraka jeste izbor pravog arhitekte jer, bez obzira na veličinu i ambicije vašeg projekta, trebaće vam pouzdan saradnik. Kontaktirajte naš studio za profesionalnu izradu visokokvalitetnih projekata.\n\nKako nastaje idejni projekat kuće?\nNaš proces projektovanja kuće počinje pažljivim slušanjem klijentovih želja i potreba. Zatim se te informacije pažljivo pretvaraju u kvalitetan dizajn koji se ističe po estetici, funkcionalnosti i održivosti. Imamo samo jedan cilj: da stvorimo jedinstvenu kuću koja odražava klijentovu viziju, istovremeno pružajući visok nivo udobnosti i održivosti, čime se postiže potpuno zadovoljstvo klijenta.\n\nProjektovanje kuće Beograd – korak po korak\nProjektovanje kuće je kompleksan proces koji zahteva pažljivu analizu i timski rad. Naš arhitektonski tim prolazi kroz sledeće korake za stvaranje savršenog doma za naše klijente:\n\nInicijalna konsultacija – naš prvi korak je slušanje klijenta. Razgovaramo s vama o vašim potrebama, željama i budžetu. Želimo razumeti vašu viziju kako bismo je najbolje preneli na projekat. Za kuće manje površine možemo vam ponuditi dizajne koji akcenat stavljaju na funkcionalnost dok za velike kuće fokus pri izradi projekta može biti na budućoj uštedi energije.\n\nAnaliza lokacije – kao drugi korak istražujemo zemljište na vašoj lokaciji, topografiju, klimatske uslove i zakonske zahteve koji mogu uticati na dizajn.\n\nKonceptualni dizajn – naš kreativni tim radi na prvim skicama i konceptima, uzimajući u obzir estetiku, funkcionalnost i održivost.\n\nDetaljni dizajn – nakon što se usaglase koncepti, radimo na detaljnom projektu sa tehničkim crtežima i planovima za svaku fazu izgradnje.\n\nOdrživost i energija – integrišemo održive elemente kako bismo smanjili uticaj na okolinu i troškove energije.\n\nGrađevinske dozvole – pomažemo u dobijanju potrebnih dozvola i administrativnim detaljima. Svi projekti našeg biroa se u potpunosti izrađuju po važećim zakonima i propisima Republike Srbije i pokriveni su validnom licencom.\n\nIzbor izvođača radova – preporučujemo pouzdane izvođače radova i pratimo izvođenje kako bismo osigurali kvalitet.\n\nPraćenje projekta – koordiniramo aspektima izgradnje kako bismo osigurali da projekt teče glatko i unutar budžeta.\n\nZavršetak projekta – nakon završetka izgradnje, naše arhitekte iz Beograda vrše poslednje provere kako bismo osigurali da je sve u skladu s vašim očekivanjima.\n\nIzrada projekta za kuću – cena\nCena projekta za kuću može varirati pod uticajem mnogo različitih faktora, ali budite uvereni da je u potpunosti usklađena sa kvalitetom usluge koju dobijate od našeg studia kao i potrebama klijenata. Za sve dodatne informacije budite slobodni da nas kontaktirate putem forme na dnu strane.',
    features: ['Inicijalna konsultacija', 'Analiza lokacije', 'Konceptualni i detaljni dizajn', 'Pomoć pri dobijanju građevinskih dozvola'],
    hasEnergyChart: false
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: 'Projekti zgrada',
    description: 'Razvijamo sveobuhvatne projekte zgrada koji balansiraju funkcionalnost, estetiku i održivost, uz poštovanje propisa i prilagođavanje urbanističkom kontekstu.',
    fullDescription: 'Projekti zgrada i njihova izrada veoma su kompleksni jer obuhvataju čitav niz skica, elaborata, ideja i pažljivo planiranje. Naš tim eksperata pružiće vam sveža, autentična i pouzdana arhitektonska rešenja, prilagođena lokaciji, željenoj estetici i svim vašim zahtevima. Pogledajte naše prethodne projekte i kontaktirajte nas za projektovanje stambenih zgrada po vašoj meri.\n\nŠta sve projektovanje zgrada podrazumeva?\nSvaki put kada započnemo projektovanje zgrade, kao arhitektonski biro, imamo mnogo faktora u vidu kako bismo vam obezbedili prostor koji će udovoljiti vašim potrebama i željama. Evo nekoliko ključnih aspekata koje razmatramo:\n\nFunkcionalnost – vaš prostor treba da odražava potrebe stanara. Stvaramo raspored prostorija tako da odgovara različitim načinima života ili poslovanja. Vaša funkcionalnost i udobnost su naš prioritet.\nEstetika – znamo koliko je važan prvi utisak i važno nam je da vaša zgrada izgleda lepo. Radimo na kreiranju estetskog izraza koji će odražavati vaš stil i želje. Možemo zajedno razmotriti stil, boje, materijale i detalje kako bismo postigli skladan izgled.\nOdrživost – radimo na što većoj primeni ekološki prihvatljivih materijala gde god je to moguće, kao i na smanjenju potrošnje energije i drugim merama zaštite okoline.\nTehnički aspekti – pravilno razumemo tehničke aspekte poput statike, inženjeringa sistema, materijala i izolacije kako bismo obezbedili trajnost i funkcionalnost zgrade.\nTroškovi – znamo koliko je budžet važan. Trudimo se da pronađemo balans između vaših želja i realnih troškova. Pri dnu strane nalaze se svi naši reprezentativni projekti zgrada u Beogradu i drugim gradovima, a kada izaberete koncept koji vam se dopada, možemo ga prilagoditi vašem budžetu, željama u potrebama.\nPristupačnost – brinemo o tome da svi, uključujući osobe sa invaliditetom, mogu lako pristupiti i koristiti prostor buduće zgrade.\nKlimatski uslovi – svaka lokacija ima svoje specifične klimatske uslove, pa razmatramo kako da iskoristimo prirodne faktore poput sunčeve svetlosti i vetra za poboljšanje energetske efikasnosti.\nKontekst i sredina – vaša zgrada neće postojati izolovano, već je deo veće celine. U zavisnosti od lokacije skice i idejno rešenje treba prilagoditi i ambijentu. Mi uvek razmišljamo o tome kako će se zgrada uklopiti u urbanistički kontekst i kulturnu okolinu.\n\nProjektovanje stambenih zgrada u Beogradu i zakoni\nStručnjaci iz oblasti arhitekture ne samo što moraju imati viziju i fleksibilnost prilagođavanja željama klijenata već biti upoznati i sa važećim propisima i zakonima Republike Srbije vezanim za gradnju. Naše arhitekte iz Beograda pri izradi projekta zgrade poštuju sve lokalne i nacionalne građevinske regulative i standarde. Bilo da je u pitanju projektovanje stambenih zgrada ili poslovnih kompleksa.\n\nRecite nam ideje koje imate i pokažite primere koji vam se sviđaju jer uz naše talentovane arhitekte vaša vizija postaje stvarnost!\n\nCena projektovanja zgrade\nCena za projekat zgrade može varirati od raznih faktora, ali budite sigurni da su cene usluga naših arhitekti u potpunom skladu sa njihovim kvalitetom i dugogodišnjom ekspertizom. Za detaljnije informacije, pogledajte naše prethodne projekte i kontaktirajte nas putem forme na dnu strane.',
    features: ['Funkcionalnost i estetika', 'Održivost i energetska efikasnost', 'Poštovanje propisa i zakona', 'Prilagođavanje urbanističkom kontekstu'],
    hasEnergyChart: false
  }
];

// Komponenta za prikaz grafikona energetskih razreda
const EnergyChart = () => {
  const energyClasses = [
    { class: 'A+', color: '#00A651', efficiency: '≤ 15 kWh/(m²a)' },
    { class: 'A', color: '#50B848', efficiency: '≤ 25 kWh/(m²a)' },
    { class: 'B', color: '#BFD730', efficiency: '≤ 50 kWh/(m²a)' },
    { class: 'C', color: '#FFF200', efficiency: '≤ 100 kWh/(m²a)' },
    { class: 'D', color: '#FCAF17', efficiency: '≤ 150 kWh/(m²a)' },
    { class: 'E', color: '#F15A29', efficiency: '≤ 200 kWh/(m²a)' },
    { class: 'F', color: '#ED1C24', efficiency: '≤ 250 kWh/(m²a)' },
    { class: 'G', color: '#A2191F', efficiency: '> 250 kWh/(m²a)' }
  ];

  return (
    <div className="mt-4 space-y-2">
      <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Energetski razredi za stambene objekte</h4>
      <div className="space-y-1">
        {energyClasses.map((item) => (
          <div key={item.class} className="flex items-center">
            <div 
              className="w-10 sm:w-12 h-7 sm:h-8 flex items-center justify-center text-black font-bold rounded-l-md text-xs sm:text-sm"
              style={{ backgroundColor: item.color }}
            >
              {item.class}
            </div>
            <div className="bg-gray-800 h-7 sm:h-8 flex-grow rounded-r-md flex items-center px-2 sm:px-3">
              <span className="text-white/80 text-xs sm:text-sm">{item.efficiency}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Services() {
  const { scrollToElement } = useSmoothScroll();
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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
            <span className="text-gradient">Usluge</span>
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
                  
                  <ul className="space-y-2 mb-6">
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
                  
                  <Button 
                    onClick={() => setSelectedService(service)}
                    className="w-full mt-auto luxury-gradient text-black hover:opacity-90"
                  >
                    Saznaj više
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Dialog za prikaz detaljnijih informacija */}
        <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
          <DialogContent className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 text-white max-w-[95vw] sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto h-[80vh] sm:h-auto overflow-y-auto rounded-lg sm:rounded-xl">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-serif font-bold flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <div className="luxury-gradient p-2 sm:p-3 rounded-lg inline-flex">
                  <div className="text-black">
                    {selectedService?.icon}
                  </div>
                </div>
                <span className="text-gradient text-center sm:text-left">{selectedService?.title}</span>
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
              <DialogDescription className="text-white/80 text-sm sm:text-base leading-relaxed">
                {selectedService?.fullDescription}
              </DialogDescription>
              
              {selectedService?.hasEnergyChart && (
                <div className="mt-4 sm:mt-6">
                  <EnergyChart />
                </div>
              )}
              
              <div className="mt-6">
                <h4 className="text-xl font-serif font-bold mb-4 text-white">Ključne karakteristike</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService?.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-white/80">
                      <div className="w-2 h-2 luxury-gradient rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        
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