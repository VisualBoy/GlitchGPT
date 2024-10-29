import React from 'react';
import { Settings, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#242424] p-4 flex items-center justify-between fixed top-0 w-full z-50">
      <div className="flex items-center space-x-2">
        <h1 className="text-white text-xl font-semibold">GlitchGPT</h1>
        <ChevronDown className="w-5 h-5 text-white/80" />
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-[#393939] text-[#009dd1] px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#393939]/80 transition-colors">
          <span>Settings</span>
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
