import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { PhotoArchive } from './components/PhotoArchive';
import { VideoArchive } from './components/VideoArchive';

type PageType = 'home' | 'photos' | 'videos';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'photos':
        return <PhotoArchive />;
      case 'videos':
        return <VideoArchive />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderCurrentPage()}
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
}