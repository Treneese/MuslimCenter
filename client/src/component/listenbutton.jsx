import { speakText } from "../utils/speech";

export default function ListenButton({
  text,
  label = "Listen",
  className = "",
  voiceName = "Samantha",
  rate = 0.95,
}) {
  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    speakText(text, { voiceName, rate });
  }

  return (
    <button
      type="button"
      className={`listenButton ${className}`}
      onClick={handleClick}
      aria-label={label}
      title={label}
    >
      🔊 <span>{label}</span>
    </button>
  );
}