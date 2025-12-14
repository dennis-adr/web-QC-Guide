import React from 'react';
import { Tab } from '../types';
import { BookOpen, ShieldCheck, MessageSquareText, Menu } from 'lucide-react';

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: Tab.USER_GUIDE, label: 'User Guide', icon: BookOpen },
    { id: Tab.QC_GUIDE, label: 'QC Guide', icon: ShieldCheck },
    { id: Tab.AI_CHAT, label: 'AI Assistant', icon: MessageSquareText },
  ];

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="font-bold text-white">TC</span>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-none">Technocenter</h1>
              <p className="text-xs text-slate-400 font-medium tracking-wide">QUALITY ASSURANCE HUB</p>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === item.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Icon (Placeholder functionality) */}
          <button className="md:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile Tab Bar (Bottom fixed for mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 pb-safe">
        <div className="flex justify-around p-2">
           {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center p-2 rounded-md text-xs font-medium ${
                  activeTab === item.id
                    ? 'text-blue-400'
                    : 'text-slate-500'
                }`}
              >
                <item.icon className="w-5 h-5 mb-1" />
                <span>{item.label}</span>
              </button>
            ))}
        </div>
      </div>
    </header>
  );
};