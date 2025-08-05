import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PhotoArchive() {
  const photoCollections = [
    {
      id: 1,
      title: 'Հարսանիքի օր',
      count: 127,
      thumbnail: 'E:\Մենք\Our Story\photo\2023-08-18 16-02-41.JPG',
      googlePhotosUrl: 'https://photos.google.com/share/wedding-collection'
    },
    {
      id: 2,
      title: 'Մեղրամիս',
      count: 89,
      thumbnail: './photo/2025-06-04 15-09-11_1749035421122.JPG',
      googlePhotosUrl: 'https://photos.google.com/share/honeymoon-collection'
    },
    {
      id: 3,
      title: 'Ժամադրությունների գիշերներ',
      count: 156,
      thumbnail: './photo/2023-08-18 16-02-41.JPG',
      googlePhotosUrl: 'https://photos.google.com/share/date-nights-collection'
    },
    {
      id: 4,
      title: 'Արձակուրդներ',
      count: 203,
      thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop',
      googlePhotosUrl: 'https://photos.google.com/share/vacations-collection'
    },
    {
      id: 5,
      title: 'Ամենայնապակ պահեր',
      count: 342,
      thumbnail: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&h=400&fit=crop',
      googlePhotosUrl: 'https://photos.google.com/share/everyday-collection'
    },
    {
      id: 6,
      title: 'Հատուկ առիթներ',
      count: 78,
      thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
      googlePhotosUrl: 'https://photos.google.com/share/special-occasions-collection'
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
        <h1 className="text-3xl font-bold text-rose-800 mb-2">Լուսանկարային հավաքածուներ</h1>
        <p className="text-rose-600">Սեղմեք ցանկացած թղթապանակի վրա՝ ամբողջ հավաքածուն տեսնելու համար</p>
      </motion.div>

      {/* Photo Grid */}
      <div className="px-4">
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          {photoCollections.map((collection, index) => (
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
                
                {/* Folder Icon */}
                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center">
                    <span className="text-rose-600">📁</span>
                  </div>
                </div>
                
                {/* Collection Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-semibold text-sm mb-1">{collection.title}</h3>
                  <p className="text-white/80 text-xs">{collection.count} լուսանկար</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}