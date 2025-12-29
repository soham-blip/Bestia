
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SectionHero from './components/SectionHero';
import SectionMenu from './components/SectionMenu';
import SectionAbout from './components/SectionAbout';
import SectionReservations from './components/SectionReservations';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';
import MenuPage from './components/MenuPage';
import EventsPage from './components/EventsPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'menu' | 'events'>('home');

  useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash;
      if (hash === '#/menu') {
        setCurrentView('menu');
        window.scrollTo(0, 0);
      } else if (hash === '#/events') {
        setCurrentView('events');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleNavigation);
    handleNavigation(); // Initial check on load

    return () => window.removeEventListener('hashchange', handleNavigation);
  }, []);

  const navigateTo = (view: 'home' | 'menu' | 'events') => {
    if (view === 'menu') window.location.hash = '/menu';
    else if (view === 'events') window.location.hash = '/events';
    else window.location.hash = '/';
  };

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={navigateTo} />
      <main>
        {currentView === 'home' && (
          <>
            <SectionHero onMenuClick={() => navigateTo('menu')} />
            <SectionAbout />
            <SectionMenu onExpand={() => navigateTo('menu')} />
            <SectionReservations onEventsClick={() => navigateTo('events')} />
          </>
        )}
        {currentView === 'menu' && <MenuPage />}
        {currentView === 'events' && <EventsPage />}
      </main>
      <Footer />
      <AIConsultant />
    </div>
  );
};

export default App;
