import { useState, useEffect } from "react";

export default function EscapeRoomGame() {
  const [gameState, setGameState] = useState("start");
  const [hint, setHint] = useState("");
  const [listening, setListening] = useState(false);
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  recognition.continuous = false;
  recognition.lang = "en-US";
  recognition.interimResults = false;

  const commands = {
    "look around": "You see a locked door, a table with a key, and a bookshelf.",
    "pick up key": "You picked up the key. Maybe it unlocks something...",
    "open door": "The door is locked. You need a key!",
    "use key": "You unlocked the door! You escaped!", 
    "hint": "Try using the key on the door!"
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    setListening(false);
    handleVoiceCommand(transcript);
  };

  recognition.onerror = () => {
    setListening(false);
    alert("Voice recognition error. Try again.");
  };

  const startListening = () => {
    setListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setListening(false);
    recognition.stop();
  };

  const handleVoiceCommand = (command) => {
    if (commands[command]) {
      setGameState(commands[command]);
    } else {
      setGameState("I didn't understand that. Try again.");
    }
  };

  return (
    <div className="p-6 text-center bg-gray-900 text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Voice-Controlled Escape Room</h1>
      <p className="mb-6">{gameState}</p>
      <button
        onClick={startListening}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        disabled={listening}
      >
        {listening ? "Listening..." : "Speak a Command"}
      </button>
      <button onClick={() => setHint(commands["hint"])} className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg">
        Get a Hint
      </button>
      {hint && <p className="mt-4 text-yellow-400">Hint: {hint}</p>}
    </div>
  );
}

