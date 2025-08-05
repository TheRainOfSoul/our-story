import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { PhotoLightbox } from './PhotoLightbox';

export function HomePage() {
  const [selectedPhoto, setSelectedPhoto] = useState<{src: string, alt: string} | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const featuredPhotos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
      alt: 'Գեղեցիկ մայրամուտ'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=600&fit=crop',
      alt: 'Սիրական ընթրիք'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&h=600&fit=crop',
      alt: 'Միասին ընդմիշտ'
    }
  ];

  const featuredVideos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1465311530254-c4f4d0b7b0c4?w=400&h=300&fit=crop',
      title: 'Մեր հարսանիքի օրը'
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop',
      title: 'Տարեդարձի ճանապարհորդություն'
    }
  ];

  const quotes = [
    "Դու իմ այսօրն ես և իմ բոլոր վаղվանները: Քեզ հետ ամեն օր հատուկ է դառնում:",
    "Ամբողջ աշխարհում իմ համար քո նման սիրտ չկա: Դու իմ միակն ես:",
    "Ամեն սիրո պատմություն գեղեցիկ է, բայց մերը՝ իմ ամենասիրելին է:",
    "Դու իմ սիրտը ծիծաղել ես տալիս նույնիսկ ամենադժվար օրերին:"
  ];

  const handlePhotoClick = (photo: {src: string, alt: string}) => {
    setSelectedPhoto(photo);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedPhoto(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 pb-20">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8 px-4"
      >
        <h1 className="text-3xl font-bold text-rose-800 mb-2">Մեր սիրո պատմությունը</h1>
        <p className="text-rose-600">Մեր ամենաթանկարժեք պահերի հավաքածու</p>
      </motion.div>

      {/* Alternating Photos and Quotes */}
      <div className="px-4 space-y-8">
        {featuredPhotos.map((photo, index) => (
          <div key={photo.id}>
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              onClick={() => handlePhotoClick(photo)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-pointer group mb-6"
            >
              <ImageWithFallback
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
              
              {/* Click hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-rose-800 font-medium text-sm">Սեղմեք մեծացման համար</span>
                </div>
              </div>
            </motion.div>

            {/* Quote after each photo (except the last one) */}
            {index < quotes.length && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.1 }}
                className="mb-8"
              >
                <Card className="p-6 bg-white/60 backdrop-blur-sm border-rose-200">
                  <p className="text-rose-800 italic text-center text-lg">"{quotes[index]}"</p>
                  <div className="flex justify-center mt-3">
                    <div className="w-8 h-0.5 bg-rose-300 rounded-full"></div>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Featured Videos */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="px-4 mb-8 mt-12"
      >
        <h2 className="text-xl font-semibold text-rose-800 mb-4">Հատուկ տեսանյութեր</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featuredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-rose-200">
                <div className="relative aspect-video">
                  <ImageWithFallback
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <span className="text-rose-600 text-xl">▶</span>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-rose-800 font-medium">{video.title}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Final romantic message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="px-4 mt-8"
      >
        <Card className="p-8 bg-gradient-to-r from-rose-100/80 to-pink-100/80 backdrop-blur-sm border-rose-200">
          <p className="text-rose-800 text-center text-xl italic mb-4">
            "Դու իմ սիրտը ծիծաղել ես տալիս ամեն օր"
          </p>
          <div className="flex justify-center">
            <span className="text-rose-400 text-2xl">💖</span>
          </div>
        </Card>
      </motion.div>

      {/* Photo Lightbox */}
      <PhotoLightbox
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        photo={selectedPhoto}
      />
    </div>
  );
}