import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Headphones, CheckCircle, Circle, Eye, Ear, BookOpen, Shapes } from "lucide-react";
import { useState } from "react";

const assessments = [
  { id: "reading", label: "Reading", icon: BookOpen },
  { id: "memory", label: "Memory", icon: Eye },
  { id: "attention", label: "Attention", icon: Circle },
  { id: "listening", label: "Listening", icon: Ear },
  { id: "pattern", label: "Patterns", icon: Shapes },
];

const AssessmentPage = () => {
  const [active, setActive] = useState("reading");
  const [selected, setSelected] = useState<string | null>(null);
  const [memoryRevealed, setMemoryRevealed] = useState(true);
  const [tappedCircles, setTappedCircles] = useState<number[]>([]);

  return (
    <div className="space-y-6 pb-8">
      <div className="text-center">
        <h2 className="font-display text-2xl font-bold">Assessment Module</h2>
        <p className="text-muted-foreground text-sm mt-1">Interactive learning ability tests</p>
      </div>

      {/* Assessment tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {assessments.map(a => {
          const Icon = a.icon;
          return (
            <button key={a.id} onClick={() => { setActive(a.id); setSelected(null); setTappedCircles([]); setMemoryRevealed(true); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold font-display whitespace-nowrap transition-all ${
                active === a.id ? "gradient-primary text-primary-foreground shadow-soft" : "bg-card text-muted-foreground shadow-card"
              }`}>
              <Icon className="w-4 h-4" />{a.label}
            </button>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <motion.div className="h-full gradient-hero rounded-full" animate={{ width: `${(assessments.findIndex(a => a.id === active) + 1) / assessments.length * 100}%` }} />
        </div>
        <span className="text-xs font-bold text-muted-foreground">{assessments.findIndex(a => a.id === active) + 1}/{assessments.length}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}
          className="bg-card rounded-3xl shadow-card p-6 md:p-8">

          {active === "reading" && (
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-muted-foreground text-sm mb-2">Read the sentence below:</p>
                <div className="bg-muted rounded-2xl p-6">
                  <p className="font-display text-2xl font-bold leading-relaxed">"The <span className="text-primary">cat</span> sat on the <span className="text-secondary">mat</span>"</p>
                </div>
                <button className="mt-4 gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-bold flex items-center gap-2 mx-auto hover:scale-105 transition-transform">
                  <Volume2 className="w-5 h-5" /> Play Audio
                </button>
              </div>
              <div>
                <p className="font-bold text-sm mb-3">What did the cat sit on?</p>
                <div className="grid grid-cols-2 gap-3">
                  {["A chair", "The mat", "A bed", "The floor"].map(opt => (
                    <button key={opt} onClick={() => setSelected(opt)}
                      className={`p-4 rounded-xl font-bold text-sm transition-all border-2 ${
                        selected === opt
                          ? opt === "The mat" ? "border-secondary bg-secondary/10 text-secondary" : "border-destructive bg-destructive/10 text-destructive"
                          : "border-border hover:border-primary/50"
                      }`}>
                      {selected === opt && opt === "The mat" && <CheckCircle className="w-4 h-4 inline mr-1" />}
                      {opt}
                    </button>
                  ))}
                </div>
                {selected === "The mat" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-secondary font-bold mt-4 text-sm">
                    🎉 Great job! That's correct!
                  </motion.p>
                )}
              </div>
            </div>
          )}

          {active === "memory" && (
            <div className="space-y-6 text-center">
              <p className="text-muted-foreground text-sm">Remember these objects:</p>
              <div className="flex justify-center gap-4 flex-wrap">
                {["🍎", "📚", "🌟", "🎈", "🐱"].map((emoji, i) => (
                  <motion.div key={i} animate={{ opacity: memoryRevealed ? 1 : 0, scale: memoryRevealed ? 1 : 0.5 }}
                    className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center text-3xl shadow-card">
                    {emoji}
                  </motion.div>
                ))}
              </div>
              <button onClick={() => setMemoryRevealed(!memoryRevealed)}
                className="gradient-warm text-accent-foreground px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                {memoryRevealed ? "Hide Objects" : "Show Objects"}
              </button>
              {!memoryRevealed && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p className="font-bold text-sm mb-3">Which object was shown?</p>
                  <div className="flex justify-center gap-3 flex-wrap">
                    {["🍎", "🚗", "📚", "🎸", "🌟", "🏀"].map((e, i) => (
                      <button key={i} onClick={() => setSelected(e)}
                        className={`w-14 h-14 rounded-xl text-2xl flex items-center justify-center transition-all border-2 ${
                          selected === e
                            ? ["🍎", "📚", "🌟"].includes(e) ? "border-secondary bg-secondary/10" : "border-destructive bg-destructive/10"
                            : "border-border hover:border-primary/50"
                        }`}>{e}</button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {active === "attention" && (
            <div className="space-y-6 text-center">
              <p className="text-muted-foreground text-sm">Tap only the <span className="text-destructive font-bold">red</span> circles!</p>
              <div className="grid grid-cols-5 gap-3 max-w-xs mx-auto">
                {[0,1,0,1,0, 1,0,0,1,0, 0,1,0,0,1, 1,0,1,0,0].map((isRed, i) => (
                  <motion.button key={i} whileTap={{ scale: 0.85 }}
                    onClick={() => { if (!tappedCircles.includes(i)) setTappedCircles([...tappedCircles, i]); }}
                    className={`w-12 h-12 rounded-full mx-auto transition-all ${
                      tappedCircles.includes(i)
                        ? isRed ? "bg-secondary scale-90" : "bg-destructive/50 scale-90"
                        : isRed ? "bg-destructive" : "bg-primary"
                    }`} />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                {tappedCircles.length > 0 && `${tappedCircles.filter(i => [1,3,5,8,11,14,17].includes(i) ? false : true).length === 0 ? "Perfect!" : `${tappedCircles.length} tapped`}`}
              </p>
            </div>
          )}

          {active === "listening" && (
            <div className="space-y-6 text-center">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto animate-pulse-soft">
                <Headphones className="w-10 h-10 text-primary-foreground" />
              </div>
              <p className="text-muted-foreground text-sm">Listen to the story and answer:</p>
              <button className="gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
                <Volume2 className="w-5 h-5" /> Play Story
              </button>
              <div className="bg-muted rounded-2xl p-5 text-left">
                <p className="font-bold text-sm mb-3">What color was the bird?</p>
                <div className="space-y-2">
                  {["Red", "Blue", "Green", "Yellow"].map(opt => (
                    <button key={opt} onClick={() => setSelected(opt)}
                      className={`w-full p-3 rounded-xl text-sm font-bold text-left transition-all border-2 ${
                        selected === opt
                          ? opt === "Blue" ? "border-secondary bg-secondary/10" : "border-destructive bg-destructive/10"
                          : "border-border hover:border-primary/50"
                      }`}>{opt}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {active === "pattern" && (
            <div className="space-y-6 text-center">
              <p className="text-muted-foreground text-sm">What comes next in the pattern?</p>
              <div className="flex justify-center gap-3 items-center">
                {["🔵", "🔴", "🔵", "🔴", "🔵", "❓"].map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.2 }}
                    className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${i === 5 ? "border-2 border-dashed border-primary bg-muted" : "bg-muted shadow-card"}`}>
                    {s}
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center gap-3">
                {["🔴", "🔵", "🟢", "🟡"].map(opt => (
                  <button key={opt} onClick={() => setSelected(opt)}
                    className={`w-16 h-16 rounded-xl text-3xl flex items-center justify-center transition-all border-2 ${
                      selected === opt
                        ? opt === "🔴" ? "border-secondary bg-secondary/10 scale-110" : "border-destructive bg-destructive/10"
                        : "border-border hover:border-primary/50"
                    }`}>{opt}</button>
                ))}
              </div>
              {selected === "🔴" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-secondary font-bold">
                  🎉 Excellent pattern recognition!
                </motion.p>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AssessmentPage;
