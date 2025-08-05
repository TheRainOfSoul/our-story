import { motion } from 'motion/react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X } from 'lucide-react';

interface PhotoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  photo: {
    src: string;
    alt: string;
  } | null;
}

export function PhotoLightbox({ isOpen, onClose, photo }: PhotoLightboxProps) {
  if (!photo) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-black/90 backdrop-blur-md">
        {/* Accessibility components - visually hidden */}
        <DialogTitle className="sr-only">
          Լուսանկարի դիտում՝ {photo.alt}
        </DialogTitle>
        <DialogDescription className="sr-only">
          Լուսանկարի լիաէկրան դիտում: Սեղմեք Escape կամ փակման կոճակը՝ դուրս գալու համար:
        </DialogDescription>
        
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Custom Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="Փակել լուսանկարի դիտումը"
          >
            <X size={20} />
          </motion.button>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-full max-h-full"
          >
            <ImageWithFallback
              src={photo.src}
              alt={photo.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Gradient Overlay for Aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 pointer-events-none" />
        </div>
      </DialogContent>
    </Dialog>
  );
}