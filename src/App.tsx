import { useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BotHtmlConsole from './components/BotHtmlConsole';
import TicketModal from './components/TicketModal';
import Footer from './components/Footer';
import { MainTabKey } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<MainTabKey>('kit');
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);

  const handleSelectTab = (tab: MainTabKey) => {
    setActiveTab(tab);
    const element = document.getElementById('bot-html-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-[#e0e2ec] relative flex flex-col selection:bg-purple-600 selection:text-white overflow-x-hidden">
      {/* 1. Animated Interactive Background */}
      <AnimatedBackground />

      {/* 2. Top Navigation Bar */}
      <Navbar 
        activeTab={activeTab} 
        onSelectTab={handleSelectTab} 
      />

      {/* Main Content Area */}
      <main className="flex-1 z-10">
        {/* 3. Hero Section with 4 Interactive Tabs Buttons */}
        <Hero 
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
        />

        {/* 4. Active Interactive Content Panel (Discord / Kit / Rank / Server Info) */}
        <BotHtmlConsole
          activeOption={activeTab}
          onOpenTicket={() => setIsTicketModalOpen(true)}
        />
      </main>

      {/* 5. Full Netherite Kit Ticket Purchase Modal */}
      <TicketModal
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
      />

      {/* 6. Footer with SOON IP & Port */}
      <Footer />
    </div>
  );
}
