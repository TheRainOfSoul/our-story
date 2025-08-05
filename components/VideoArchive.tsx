import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function VideoArchive() {
  const videoCollections = [
    {
      id: 1,
      title: 'Հարսանիքի արարողություն',
      count: 12,
      duration: '2ժ 15ր',
      thumbnail: 'https://images.unsplash.com/photo-1465311530254-c4f4d0b7b0c4?w=400&h=400&fit=crop',
      googlePhotosUrl: 'https://photos.google.com/share/wedding-videos'
    },
    {
      id: 2,
      title: 'Տարեդարձի տոնակատարություններ',
      count: 8,
      duration: '45ր',
      thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
      googlePhotosUrl: 'https://photos.google.com/share/anniversary-videos'
    },
    {
      id: 3,
      title: 'Ճանապարհորդական արկածներ',
      count: 24,
      duration: '3ժ 30ր',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      googlePhotosUrl: 'https://photos.google.com/share/travel-videos'
    },
    {
      id: 4,
      title: 'Ժամադրությունների զվարճություն',
      count: 15,
      duration: '1ժ 20ր',
      thumbnail: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop',
      googlePhotosUrl: 'https://photos.google.com/share/date-night-videos'
    },
    {
      id: 5,
      title: 'Ամենայնապակ կյանք',
      count: 67,
      duration: '4ժ 45ր',
      thumbnail: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&h=400&fit=crop',
      googlePhotosUrl: 'https://photos.google.com/share/daily-life-videos'
    },
    {
      id: 6,
      title: 'Հատուկ հաղորդագրություններ',
      count: 5,
      duration: '25ր',
      thumbnail: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=400&fit=crop',
      googlePhotosUrl: 'https://photos.google.com/share/special-messages'
    }
  ];

  const handleFolderClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 pb-20">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8 px-4"
      >
        <h1 className="text-3xl font-bold text-rose-800 mb-2">Տեսանյութային հավաքածուներ</h1>
        <p className="text-rose-600">Սեղմեք ցանկացած թղթապանակի վրա՝ ամբողջ հավաքածուն տեսնելու համար</p>
      </motion.div>

      {/* Video Grid */}
      <div className="px-4">
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          {videoCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleFolderClick(collection.googlePhotosUrl)}
              className="cursor-pointer group"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                <ImageWithFallback
                  src={collection.thumbnail}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <span className="text-rose-600 text-xl ml-1">▶</span>
                  </div>
                </div>
                
                {/* Video Icon */}
                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center">
                    <span className="text-rose-600">🎬</span>
                  </div>
                </div>
                
                {/* Collection Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-semibold text-sm mb-1">{collection.title}</h3>
                  <div className="flex justify-between text-white/80 text-xs">
                    <span>{collection.count} տեսանյութ</span>
                    <span>{collection.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}