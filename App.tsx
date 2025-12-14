import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { UserGuide } from './components/UserGuide';
import { QCGuide } from './components/QCGuide';
import { Chatbot } from './components/Chatbot';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.USER_GUIDE);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.USER_GUIDE:
        return <UserGuide />;
      case Tab.QC_GUIDE:
        return <QCGuide />;
      case Tab.AI_CHAT:
        return <Chatbot />;
      default:
        return <UserGuide />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow w-full">
        <div className="animate-fade-in">
          {renderContent()}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;