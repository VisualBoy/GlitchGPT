import React, { useState } from 'react';
import { Mic, Send, StopCircle, Paperclip, Share2, RotateCcw, Volume2, VolumeX } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isListening: boolean;
  toggleListening: () => void;
  onStopSpeaking: () => void;
  isLoading: boolean;
}

export default function ChatInput({ 
  onSendMessage, 
  isListening, 
  toggleListening,
  onStopSpeaking,
  isLoading 
}: ChatInputProps) {
  const [message, setMessage] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleStopSpeaking = () => {
    setIsSpeaking(false);
    onStopSpeaking();
  };

  return (
    <div className="fixed bottom-0 w-full bg-[#242424] border-t border-[#393939] p-4">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="relative flex items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message GlitchGPT..."
            className="w-full bg-[#1d1d1d] text-[#4ca7c6] rounded-lg pl-4 pr-40 py-4 focus:outline-none focus:ring-2 focus:ring-[#009dd1]"
            disabled={isLoading}
          />
          <div className="absolute right-2 flex items-center space-x-2">
            <button
              type="button"
              onClick={toggleListening}
              className={`p-2 rounded-lg ${
                isListening ? 'text-red-500 hover:bg-red-500/10' : 'text-[#7aaebf] hover:bg-[#393939]'
              }`}
              disabled={isLoading}
            >
              {isListening ? <StopCircle className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>
            <button
              type="button"
              onClick={isSpeaking ? handleStopSpeaking : undefined}
              className="p-2 text-[#7aaebf] hover:bg-[#393939] rounded-lg"
            >
              {isSpeaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <button
              type="button"
              className="p-2 text-[#7aaebf] hover:bg-[#393939] rounded-lg"
              disabled={isLoading}
            >
              <Paperclip className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="p-2 text-[#7aaebf] hover:bg-[#393939] rounded-lg"
              disabled={isLoading}
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="p-2 text-[#7aaebf] hover:bg-[#393939] rounded-lg"
              disabled={isLoading}
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button
              type="submit"
              className={`p-2 text-[#009dd1] hover:bg-[#393939] rounded-lg ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isLoading}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}