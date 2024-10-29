export class SpeechService {
  private synthesis: SpeechSynthesis;
  private voices: SpeechSynthesisVoice[];
  private preferredVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    this.synthesis = window.speechSynthesis;
    this.voices = [];
    this.loadVoices();
  }

  private loadVoices(): void {
    const loadVoicesCallback = () => {
      this.voices = this.synthesis.getVoices();
      this.preferredVoice = this.voices.find(voice => 
        voice.lang.startsWith('en') && voice.name.includes('Google')
      ) || this.voices[0];
    };

    if (this.synthesis.addEventListener) {
      this.synthesis.addEventListener('voiceschanged', loadVoicesCallback);
    }
    
    loadVoicesCallback();
  }

  speak(text: string): void {
    // Cancel any ongoing speech
    this.synthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    if (this.preferredVoice) {
      utterance.voice = this.preferredVoice;
    }
    
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    this.synthesis.speak(utterance);
  }

  stop(): void {
    this.synthesis.cancel();
  }
}