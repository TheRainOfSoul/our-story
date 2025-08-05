import { motion } from 'motion/react';

interface NavigationProps {
  currentPage: 'home' | 'photos' | 'videos';
  onPageChange: (page: 'home' | 'photos' | 'videos') => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const pages = [
    { id: 'home', label: 'Գլխավոր', icon: '🏠' },
    { id: 'photos', label: 'Լուսանկարներ', icon: '📸' },
    { id: 'videos', label: 'Տեսանյութեր', icon: '🎬' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-rose-200 z-50">
      <div className="flex justify-around items-center py-2 px-4 max-w-md mx-auto">
        {pages.map((page) => (
          <motion.button
            key={page.id}
            onClick={() => onPageChange(page.id as any)}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all duration-200 ${
              currentPage === page.id
                ? 'text-rose-600 bg-rose-50'
                : 'text-gray-600 hover:text-rose-500'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg">{page.icon}</span>
            <span className="text-xs font-medium">{page.label}</span>
          </motion.button>
        ))}
      </div>
    </nav>
  );
}