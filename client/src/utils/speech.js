let voices = [];

function loadVoices() {
  if (!("speechSynthesis" in window)) return [];
  voices = window.speechSynthesis.getVoices();
  return voices;
}

if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    loadVoices();
  };
}

export function stopSpeech() {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
}

export function pauseSpeech() {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.pause();
}

export function resumeSpeech() {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.resume();
}

function getBestVoice(preferredName) {
  const availableVoices = voices.length ? voices : loadVoices();

  if (preferredName) {
    const exact = availableVoices.find((voice) =>
      voice.name.toLowerCase().includes(preferredName.toLowerCase())
    );
    if (exact) return exact;
  }

  const priorityVoices = [
    "Google US English",
    "Samantha",
    "Karen",
    "Moira",
    "Microsoft Aria",
    "Microsoft Jenny",
    "Daniel",
  ];

  for (const preferred of priorityVoices) {
    const found = availableVoices.find((voice) =>
      voice.name.toLowerCase().includes(preferred.toLowerCase())
    );
    if (found) return found;
  }

  return (
    availableVoices.find((voice) => voice.lang === "en-US") ||
    availableVoices.find((voice) => voice.lang?.startsWith("en")) ||
    null
  );
}

export function speakText(text, options = {}) {
  if (!("speechSynthesis" in window) || !text) return;

  const {
    voiceName = "",
    rate = 0.95,
    pitch = 1,
    volume = 1,
  } = options;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = rate;
  utterance.pitch = pitch;
  utterance.volume = volume;

  const bestVoice = getBestVoice(voiceName);
  if (bestVoice) utterance.voice = bestVoice;

  window.speechSynthesis.speak(utterance);
}