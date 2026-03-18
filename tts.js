// tts.js - Text-to-Speech Utility for Hive Learning

const TTS = {
  synth: window.speechSynthesis,
  isEnabled: function() {
    return localStorage.getItem('tts_enabled') === 'true';
  },
  speak: function(text) {
    if (!this.isEnabled()) return;
    
    this.stop(); // Stop any currently playing audio
    
    if (text && text.trim() !== '') {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      
      // Try to find a good English voice
      const voices = this.synth.getVoices();
      const enVoices = voices.filter(v => v.lang.startsWith('en'));
      
      if (enVoices.length > 0) {
        // Prefer nicely sounding voices if available
        const preferred = enVoices.find(v => v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Premium'));
        utterance.voice = preferred || enVoices[0];
      }
      
      this.synth.speak(utterance);
    }
  },
  stop: function() {
    if (this.synth.speaking || this.synth.pending) {
      this.synth.cancel();
    }
  }
};

// Ensure voices load if not already
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = () => {
    // Just forcing the browser to load the voices into memory
    TTS.synth.getVoices();
  };
}
