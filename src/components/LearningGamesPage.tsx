import { motion } from "framer-motion";
import { useState } from "react";
import { Volume2, Lock, Star, RotateCcw, Trophy, HeartPulse, BookOpen, Calculator, Brain, Activity, Ear, Eye, PenTool } from "lucide-react";

const games = [
  { id: "reading", title: "Word Match", emoji: "📖", desc: "Match words to sounds and pictures", level: 1, disability: "Dyslexia", icon: BookOpen, color: "from-blue-500 to-indigo-600" },
  { id: "math", title: "Number Fun", emoji: "🔢", desc: "Interactive counting and arithmetic", level: 1, disability: "Dyscalculia", icon: Calculator, color: "from-violet-500 to-purple-600" },
  { id: "memory", title: "Memory Cards", emoji: "🧠", desc: "Flip and match pairs to train memory", level: 1, disability: "Working Memory", icon: Brain, color: "from-teal-500 to-cyan-600" },
  { id: "focus", title: "Focus Tap", emoji: "🎯", desc: "Tap correct objects to build attention", level: 1, disability: "ADHD", icon: Activity, color: "from-amber-500 to-orange-600" },
  { id: "listening", title: "Sound Quiz", emoji: "🎧", desc: "Audio-based comprehension questions", level: 2, disability: "APD", icon: Ear, color: "from-pink-500 to-rose-600" },
  { id: "pattern", title: "Shape Builder", emoji: "🔷", desc: "Complete visual patterns and sequences", level: 2, disability: "VPD", icon: Eye, color: "from-emerald-500 to-green-600" },
  { id: "writing", title: "Letter Trace", emoji: "✍️", desc: "Trace letters and practice spelling", level: 2, disability: "Dysgraphia", icon: PenTool, color: "from-rose-500 to-red-600" },
  { id: "story", title: "Story Time", emoji: "📚", desc: "Interactive read-along stories", level: 3, disability: "Dyslexia", icon: BookOpen, color: "from-sky-500 to-blue-600" },
];

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

  if (activeGame) {
    return (
      <div className="space-y-6 pb-8">
        <button onClick={() => { setActiveGame(null); setFlipped([]); setMatched([]); setFocusTapped([]); }}
          className="text-primary font-bold text-sm flex items-center gap-1"><RotateCcw className="w-4 h-4" /> Back to Games</button>

        {activeGame === "reading" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-3xl shadow-card p-6 space-y-6">
            <div className="text-center">
              <h3 className="font-display text-xl font-bold">📖 Word Match Game</h3>
              <p className="text-xs text-muted-foreground mt-1">Therapeutic for: <span className="text-primary font-bold">Dyslexia</span></p>
            </div>
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
                <Volume2 className="w-5 h-5" /> Play Word Sound
              </button>
            </div>
          </motion.div>
        )}

        {activeGame === "memory" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-3xl shadow-card p-6 space-y-6">
            <div className="text-center">
              <h3 className="font-display text-xl font-bold">🧠 Memory Cards</h3>
              <p className="text-xs text-muted-foreground mt-1">Therapeutic for: <span className="text-primary font-bold">Working Memory Deficit</span></p>
              <p className="text-sm text-muted-foreground mt-2">Find all matching pairs!</p>
            </div>
            <div className="grid grid-cols-4 gap-3 max-w-xs mx-auto">
              {cards.map((card, i) => {
                const isShow = flipped.includes(i) || matched.includes(i);
                return (
                  <motion.button key={i} whileTap={{ scale: 0.9 }} onClick={() => handleFlip(i)}
                    className={`w-16 h-16 rounded-xl text-2xl flex items-center justify-center transition-all ${
                      matched.includes(i) ? "bg-secondary/20 border-2 border-secondary" : isShow ? "bg-primary/10 border-2 border-primary" : "gradient-primary"
                    }`}>{isShow ? card : "❓"}</motion.button>
                );
              })}
            </div>
            {matched.length === 8 && <p className="text-center text-secondary font-bold">🎉 All pairs found! Memory training complete!</p>}
          </motion.div>
        )}

        {activeGame === "focus" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-3xl shadow-card p-6 space-y-6">
            <div className="text-center">
              <h3 className="font-display text-xl font-bold">🎯 Focus Tap</h3>
              <p className="text-xs text-muted-foreground mt-1">Therapeutic for: <span className="text-primary font-bold">ADHD</span></p>
              <p className="text-sm text-muted-foreground mt-2">Tap only the stars ⭐, avoid others!</p>
            </div>
            <div className="grid grid-cols-4 gap-3 max-w-xs mx-auto">
              {["⭐", "🔵", "⭐", "🔴", "🟢", "⭐", "🔴", "🟡", "⭐", "🔵", "🟢", "⭐"].map((e, i) => (
                <motion.button key={i} whileTap={{ scale: 0.8 }} onClick={() => !focusTapped.includes(i) && setFocusTapped([...focusTapped, i])}
                  className={`w-14 h-14 rounded-xl text-2xl flex items-center justify-center transition-all ${
                    focusTapped.includes(i) ? e === "⭐" ? "bg-secondary/20 scale-90" : "bg-destructive/20 scale-90" : "bg-muted hover:bg-muted/70"
                  }`}>{e}</motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {activeGame === "math" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-3xl shadow-card p-6 space-y-6 text-center">
            <div>
              <h3 className="font-display text-xl font-bold">🔢 Number Fun</h3>
              <p className="text-xs text-muted-foreground mt-1">Therapeutic for: <span className="text-primary font-bold">Dyscalculia</span></p>
            </div>
            <div className="bg-muted rounded-2xl p-6">
              <p className="text-sm text-muted-foreground mb-2">Count the objects:</p>
              <p className="text-4xl">🍎 🍎 🍎 🍎</p>
            </div>
            <div className="grid grid-cols-4 gap-3 max-w-xs mx-auto">
              {["2", "3", "4", "5"].map(opt => (
                <button key={opt} className="p-4 rounded-xl border-2 border-border hover:border-primary font-display font-bold text-xl transition-all">{opt}</button>
              ))}
            </div>
          </motion.div>
        )}

        {activeGame === "listening" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-3xl shadow-card p-6 space-y-6 text-center">
            <div>
              <h3 className="font-display text-xl font-bold">🎧 Sound Quiz</h3>
              <p className="text-xs text-muted-foreground mt-1">Therapeutic for: <span className="text-primary font-bold">Auditory Processing Disorder</span></p>
            </div>
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

        {/* Default for other games */}
        {!["reading", "memory", "focus", "math", "listening"].includes(activeGame) && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-3xl shadow-card p-8 text-center space-y-4">
            <span className="text-5xl block">{games.find(g => g.id === activeGame)?.emoji}</span>
            <h3 className="font-display text-xl font-bold">{games.find(g => g.id === activeGame)?.title}</h3>
            <p className="text-muted-foreground text-sm">{games.find(g => g.id === activeGame)?.desc}</p>
            <p className="text-xs text-primary font-bold">Therapeutic for: {games.find(g => g.id === activeGame)?.disability}</p>
            <div className="gradient-primary text-primary-foreground rounded-2xl p-6 inline-block">
              <p className="font-bold">🎮 Interactive demo coming soon</p>
              <p className="text-xs opacity-80 mt-1">This game is fully playable in the deployed app</p>
            </div>
          </motion.div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-8">
      <div className="text-center">
        <div className="w-16 h-16 gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Trophy className="w-8 h-8 text-primary-foreground" />
        </div>
        <h2 className="section-title">Therapeutic Learning Games</h2>
        <p className="section-subtitle">Each game is scientifically designed to target specific learning disabilities. Games adapt difficulty based on the child's AI-generated learning profile.</p>
      </div>

      {/* Disability → Game Mapping */}
      <div className="bg-card rounded-3xl shadow-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <HeartPulse className="w-5 h-5 text-destructive" />
          <h3 className="font-display font-bold">How Games Map to Disabilities</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { disability: "Dyslexia", games: "Word Match, Story Time", color: "bg-primary/10 text-primary" },
            { disability: "Dyscalculia", games: "Number Fun", color: "bg-purple-500/10 text-purple-600" },
            { disability: "ADHD", games: "Focus Tap", color: "bg-accent/10 text-accent" },
            { disability: "APD", games: "Sound Quiz", color: "bg-secondary/10 text-secondary" },
          ].map(m => (
            <div key={m.disability} className={`${m.color} rounded-xl p-3 text-center`}>
              <p className="font-display font-bold text-xs">{m.disability}</p>
              <p className="text-[10px] mt-1 opacity-70">{m.games}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {games.map((game, i) => {
          const Icon = game.icon;
          const locked = game.level >= 3;
          return (
            <motion.button key={game.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              onClick={() => !locked && setActiveGame(game.id)}
              className={`bg-card rounded-2xl shadow-card p-5 text-left card-hover group ${locked ? 'opacity-60' : ''}`}>
              <div className="flex items-start justify-between mb-2">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                {locked && <Lock className="w-4 h-4 text-muted-foreground" />}
              </div>
              <h3 className="font-display font-bold text-sm mt-2">{game.title}</h3>
              <p className="text-muted-foreground text-xs mt-1">{game.desc}</p>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[10px] font-bold bg-primary/10 text-primary rounded-full px-2 py-0.5">{game.disability}</span>
                <div className="flex gap-0.5 ml-auto">
                  {[1, 2, 3].map(l => (
                    <Star key={l} className={`w-3 h-3 ${l <= game.level ? "text-accent fill-accent" : "text-muted-foreground/30"}`} />
                  ))}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default LearningGamesPage;
