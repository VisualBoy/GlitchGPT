import React, { useState, useEffect, useRef } from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Header from './components/Header';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import { getChatCompletion } from './services/openai';
import { SpeechService } from './services/speech';

interface Message {
  text: string;
  isBot: boolean;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const speechService = useRef<SpeechService>();
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      console.log('Browser doesn\'t support speech recognition.');
    }
    speechService.current = new SpeechService();
  }, [browserSupportsSpeechRecognition]);

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      if (transcript) {
        handleSendMessage(transcript);
        resetTranscript();
      }
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  const handleSendMessage = async (text: string) => {
    setMessages(prev => [...prev, { text, isBot: false }]);
    setIsLoading(true);

    try {
      const response = await getChatCompletion(text);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
      
      if (speechService.current) {
        speechService.current.speak(response);
      }
    } catch (error) {
      console.error('Error getting response:', error);
      setMessages(prev => [...prev, { 
        text: 'Sorry, there was an error processing your request.', 
        isBot: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const stopSpeaking = () => {
    if (speechService.current) {
      speechService.current.stop();
    }
  };

  return (
    <div className="min-h-screen bg-[#262626] text-[#4ca7c6]">
      <Header />
      <main className="pt-20 pb-32">
        <div className="max-w-4xl mx-auto">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
              <div className="w-16 h-16 bg-[#009dd1] rounded-full flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#aaaaaa] mb-4">How can I help you today?</h2>
              <p className="text-[#777777] text-center max-w-md">
                Start a conversation or use voice commands to interact with GlitchGPT
              </p>
            </div>
          ) : (
            messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message.text}
                isBot={message.isBot}
              />
            ))
          )}
          {isLoading && (
            <div className="flex items-center justify-center p-6">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-[#009dd1]"></div>
            </div>
          )}
        </div>
      </main>
      <ChatInput
        onSendMessage={handleSendMessage}
        isListening={listening}
        toggleListening={toggleListening}
        onStopSpeaking={stopSpeaking}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;