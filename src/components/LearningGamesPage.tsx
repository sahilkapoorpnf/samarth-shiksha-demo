import { motion } from "framer-motion";
import { useState } from "react";
import { Volume2, Lock, Star, RotateCcw, Trophy } from "lucide-react";

const LearningGamesPage = () => {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [focusTapped, setFocusTapped] = useState<number[]>([]);

  const cards = ["🍎", "📚", "🌟", "🎈", "🍎", "📚", "🌟", "🎈"];
  const handleFlip = (i: number) => {
    if (flipped.length === 2 || flipped.includes(i) || matched.includes(i)) return;
    const newFlipped = [...flipped, i];
    setFlipped(newFlipped);
    if (newFlipped.length === 2) {
      if (cards[newFlipped[0]] === cards[newFlipped[1]]) {
        setMatched([...matched, ...newFlipped]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 800);
      }
    }
  };

  const games = [
    { id: "reading", title: "Word Match", emoji: "📖", desc: "Match words and sounds", level: 1 },
    { id: "memory", title: "Memory Cards", emoji: "🧠", desc: "Flip and match pairs", level: 1 },
    { id: "focus", title: "Focus Tap", emoji: "🎯", desc: "Tap correct objects", level: 1 },
    { id: "listening", title: "Sound Quiz", emoji: "🎧", desc: "Audio-based questions", level: 2 },
  ];

  if (activeGame) {
    return (
      <div className="space-y-6 pb-8">
        <button onClick={() => { setActiveGame(null); setFlipped([]); setMatched([]); setFocusTapped([]); }}
          className="text-primary font-bold text-sm flex items-center gap-1"><RotateCcw className="w-4 h-4" /> Back to Games</button>

        {activeGame === "reading" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-3xl shadow-card p-6 space-y-6">
            <h3 className="font-display text-xl font-bold text-center">Match the Word & Sound</h3>
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              {[{ word: "Apple", emoji: "🍎" }, { word: "Book", emoji: "📚" }, { word: "Star", emoji: "⭐" }, { word: "Cat", emoji: "🐱" }].map(item => (
                <button key={item.word} className="bg-muted hover:bg-primary/10 border-2 border-border hover:border-primary rounded-2xl p-5 text-center transition-all hover:scale-105">
                  <span className="text-3xl block mb-2">{item.emoji}</span>
                  <span className="font-display font-bold text-sm">{item.word}</span>
                </button>
              ))}
            </div>
            <div className="text-center">
              <button className="gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-bold flex items-center gap-2 mx-auto">
                <Volume2 className="w-5 h-5" /> Play Word
              </button>
            </div>
          </motion.div>
        )}

        {activeGame === "memory" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-3xl shadow-card p-6 space-y-6">
            <h3 className="font-display text-xl font-bold text-center">Memory Cards</h3>
            <p className="text-center text-muted-foreground text-sm">Find all matching pairs!</p>
            <div className="grid grid-cols-4 gap-3 max-w-xs mx-auto">
              {cards.map((card, i) => {
                const isShow = flipped.includes(i) || matched.includes(i);
                return (
                  <motion.button key={i} whileTap={{ scale: 0.9 }} onClick={() => handleFlip(i)}
                    className={`w-16 h-16 rounded-xl text-2xl flex items-center justify-center transition-all ${
                      matched.includes(i) ? "bg-secondary/20 border-2 border-secondary" : isShow ? "bg-primary/10 border-2 border-primary" : "gradient-primary"
                    }`}>
                    {isShow ? card : "❓"}
                  </motion.button>
                );
              })}
            </div>
            {matched.length === 8 && <p className="text-center text-secondary font-bold">🎉 All pairs found!</p>}
          </motion.div>
        )}

        {activeGame === "focus" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-3xl shadow-card p-6 space-y-6">
            <h3 className="font-display text-xl font-bold text-center">Tap the Stars ⭐</h3>
            <p className="text-center text-muted-foreground text-sm">Tap only the stars, avoid the others!</p>
            <div className="grid grid-cols-4 gap-3 max-w-xs mx-auto">
              {["⭐", "🔵", "⭐", "🔴", "🟢", "⭐", "🔴", "🟡", "⭐", "🔵", "🟢", "⭐"].map((e, i) => (
                <motion.button key={i} whileTap={{ scale: 0.8 }} onClick={() => !focusTapped.includes(i) && setFocusTapped([...focusTapped, i])}
                  className={`w-14 h-14 rounded-xl text-2xl flex items-center justify-center transition-all ${
                    focusTapped.includes(i)
                      ? e === "⭐" ? "bg-secondary/20 scale-90" : "bg-destructive/20 scale-90"
                      : "bg-muted hover:bg-muted/70"
                  }`}>{e}</motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {activeGame === "listening" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-3xl shadow-card p-6 space-y-6 text-center">
            <h3 className="font-display text-xl font-bold">Sound Quiz 🎧</h3>
            <div className="w-24 h-24 gradient-hero rounded-full flex items-center justify-center mx-auto animate-pulse-soft">
              <Volume2 className="w-12 h-12 text-primary-foreground" />
            </div>
            <button className="gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg mx-auto flex items-center gap-2">
              <Volume2 className="w-5 h-5" /> Play Sound
            </button>
            <p className="font-bold text-sm">What animal makes this sound?</p>
            <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
              {["🐱 Cat", "🐶 Dog", "🐮 Cow", "🐔 Hen"].map(opt => (
                <button key={opt} className="p-4 rounded-xl border-2 border-border hover:border-primary font-bold text-sm transition-all">{opt}</button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-8">
      <div className="text-center">
        <h2 className="font-display text-2xl font-bold">Learning Games</h2>
        <p className="text-muted-foreground text-sm mt-1">Therapeutic game-based learning</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {games.map((game, i) => (
          <motion.button key={game.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            onClick={() => setActiveGame(game.id)}
            className="bg-card rounded-2xl shadow-card p-5 text-left hover:shadow-elevated transition-all hover:scale-[1.02] group">
            <span className="text-4xl block mb-3">{game.emoji}</span>
            <h3 className="font-display font-bold text-sm">{game.title}</h3>
            <p className="text-muted-foreground text-xs mt-1">{game.desc}</p>
            <div className="flex items-center gap-1 mt-3">
              {[1, 2, 3].map(l => (
                <span key={l} className={`text-xs font-bold px-2 py-0.5 rounded-full ${l <= game.level ? "bg-secondary/20 text-secondary" : "bg-muted text-muted-foreground"}`}>
                  {l <= game.level ? `Lv${l}` : <Lock className="w-3 h-3 inline" />}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default LearningGamesPage;
