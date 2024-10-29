import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

export default function ChatMessage({ message, isBot }: ChatMessageProps) {
  return (
    <div className={`flex items-start space-x-4 p-6 ${isBot ? 'bg-[#1d1d1d]' : ''}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        isBot ? 'bg-[#009dd1]' : 'bg-[#4ca7c6]'
      }`}>
        {isBot ? <Bot className="w-5 h-5 text-white" /> : <User className="w-5 h-5 text-white" />}
      </div>
      <div className="flex-1">
        <p className="text-[#4ca7c6] leading-relaxed">{message}</p>
      </div>
    </div>
  );
}