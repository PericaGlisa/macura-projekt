'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '../ui/button';

interface VideoShort {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail?: string;
}

const videoShorts: VideoShort[] = [
  {
    id: '1',
    title: 'Moderni enterijer',
    description: 'Savremeni pristup dizajnu',
    videoUrl: '/videos/short1.mp4'
  },
  {
    id: '2',
    title: 'Luksuzni detalji',
    description: 'Pažnja posvećena svakom detalju',
    videoUrl: '/videos/short2.mp4'
  },
  {
    id: '3',
    title: 'Arhitektonska vizija',
    description: 'Inovativna rešenja prostora',
    videoUrl: '/videos/short3.mp4'
  },
  {
    id: '4',
    title: 'Elegantni prostori',
    description: 'Harmonija forme i funkcije',
    videoUrl: '/videos/short4.mp4'
  }
];

interface VideoPlayerProps {
  video: VideoShort;
  index: number;
}

function VideoPlayer({ video, index }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group overflow-hidden rounded-2xl bg-black shadow-2xl hover:shadow-3xl transition-all duration-500"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="relative aspect-[9/16] overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          onEnded={() => setIsPlaying(false)}
          onError={() => console.log('Video failed to load:', video.videoUrl)}
        >
          <source src={video.videoUrl} type="video/mp4" />
          Vaš browser ne podržava video reprodukciju.
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Video Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: !isPlaying ? 1 : (showControls ? 1 : 0) }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Button
            onClick={togglePlay}
            size="lg"
            className="luxury-gradient hover:scale-110 transition-all duration-300 shadow-lg w-16 h-16 rounded-full backdrop-blur-sm border border-yellow-400/20"
          >
            <div className="flex items-center justify-center w-full h-full text-black text-sm font-bold px-2" style={{color: '#000000', fontSize: '12px', fontWeight: '700'}}>
              {isPlaying ? 'Pauziraj' : 'Pokreni'}
            </div>
          </Button>
        </motion.div>
        
        {/* Mute Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showControls ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4"
        >
          <Button
            onClick={toggleMute}
            size="sm"
            variant="outline"
            className="bg-black/50 border-white/20 text-white hover:bg-black/70 backdrop-blur-sm"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </Button>
        </motion.div>
        
        {/* Video Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-2">{video.title}</h3>
            <p className="text-white/80 text-sm">{video.description}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function VideoShorts() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6">
            Video <span className="text-gradient">galerija</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Kratak uvid u moje najnovije projekte kroz dinamične video prezentacije
            koje prikazuju suštinu modernog arhitektonskog dizajna.
          </p>
        </motion.div>
        
        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {videoShorts.map((video, index) => (
            <VideoPlayer key={video.id} video={video} index={index} />
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
              Želite da vidite više mojih radova?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Istražite moj kompletan portfolio i otkrijte kako mogu da oživim vašu arhitektonsku viziju.
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const portfolioSection = document.getElementById('portfolio');
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="luxury-gradient text-black font-semibold px-8 py-4 rounded-lg transition-transform shadow-xl"
              >
                Kompletan portfolio
              </motion.button>
            </div>
           </div>
         </motion.div>
       </div>
     </section>
   );
 }