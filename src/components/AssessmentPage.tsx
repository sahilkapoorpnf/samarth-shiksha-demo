import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Headphones, CheckCircle, Circle, Eye, Ear, BookOpen, Shapes, ClipboardCheck, Brain, Sparkles, BarChart3, ArrowRight } from "lucide-react";
import { useState } from "react";

const assessments = [
  { id: "reading", label: "Reading", icon: BookOpen },
  { id: "memory", label: "Memory", icon: Eye },
  { id: "attention", label: "Attention", icon: Circle },
  { id: "listening", label: "Listening", icon: Ear },
  { id: "pattern", label: "Patterns", icon: Shapes },
];

const flowSteps = [
  { icon: ClipboardCheck, title: "Start Assessment", desc: "Child begins a fun, game-like test session", color: "from-blue-500 to-indigo-500", emoji: "📋", detail: "Tests are designed to feel like play, not exams" },
  { icon: BookOpen, title: "Multi-Domain Tests", desc: "Reading, Memory, Attention, Listening & Patterns", color: "from-violet-500 to-fuchsia-500", emoji: "🧩", detail: "5 core cognitive areas are evaluated" },
  { icon: Brain, title: "AI Scoring", desc: "Real-time analysis of each response", color: "from-pink-500 to-rose-500", emoji: "🤖", detail: "Machine learning models detect learning patterns" },
  { icon: Sparkles, title: "Identify Gaps", desc: "Pinpoint exact areas needing support", color: "from-amber-500 to-orange-500", emoji: "🔍", detail: "Dyslexia, ADHD, and slow-learning markers detected" },
  { icon: BarChart3, title: "Generate Report", desc: "Detailed learning ability profile created", color: "from-emerald-500 to-teal-500", emoji: "📊", detail: "Shared with teachers, parents & government dashboard" },
];

const AssessmentPage = () => {
  const [active, setActive] = useState("reading");
  const [selected, setSelected] = useState<string | null>(null);
  const [memoryRevealed, setMemoryRevealed] = useState(true);
  const [tappedCircles, setTappedCircles] = useState<number[]>([]);
  const [expandedFlow, setExpandedFlow] = useState<number | null>(null);

  return (
    <div className="space-y-8 pb-8">
      <div className="text-center">
        <h2 className="font-display text-2xl font-bold">Assessment Module</h2>
        <p className="text-muted-foreground text-sm mt-1">Interactive learning ability tests</p>
      </div>

      {/* ===== Visual Workflow ===== */}
      <section className="bg-card rounded-3xl shadow-card p-6 md:p-8 overflow-hidden">
        <h3 className="font-display text-lg font-bold text-center mb-1">Assessment Workflow</h3>
        <p className="text-muted-foreground text-xs text-center mb-6">How we evaluate every child — step by step</p>

        {/* Horizontal flow with cards */}
        <div className="hidden md:flex items-start gap-2 relative">
          {flowSteps.map((step, i) => {
            const Icon = step.icon;
            const isExpanded = expandedFlow === i;
            return (
              <div key={step.title} className="flex items-start flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.12 }}
                  onClick={() => setExpandedFlow(isExpanded ? null : i)}
                  className="flex flex-col items-center text-center cursor-pointer group flex-1"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-3`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-card rounded-full shadow flex items-center justify-center">
                      <span className="text-[10px] font-bold">{i + 1}</span>
                    </div>
                  </motion.div>
                  <p className="font-display font-bold text-xs leading-tight">{step.title}</p>
                  <p className="text-muted-foreground text-[10px] mt-1 leading-tight">{step.desc}</p>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 bg-muted rounded-xl px-3 py-2"
                      >
                        <p className="text-[10px] text-foreground font-medium">{step.detail}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                {i < flowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="mt-6 mx-1 flex-shrink-0"
                  >
                    <ArrowRight className="w-5 h-5 text-muted-foreground/40" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile: vertical cards */}
        <div className="md:hidden space-y-3">
          {flowSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                onClick={() => setExpandedFlow(expandedFlow === i ? null : i)}
                className="flex items-center gap-4 bg-muted/60 rounded-2xl p-4 cursor-pointer hover:bg-muted transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md flex-shrink-0 relative`}>
                  <Icon className="w-6 h-6 text-white" />
                  <span className="absolute -top-1 -left-1 w-5 h-5 bg-card rounded-full shadow text-[10px] font-bold flex items-center justify-center">{i + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{step.emoji}</span>
                    <p className="font-display font-bold text-sm">{step.title}</p>
                  </div>
                  <p className="text-muted-foreground text-xs">{step.desc}</p>
                  <AnimatePresence>
                    {expandedFlow === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-xs text-primary font-medium mt-1"
                      >
                        💡 {step.detail}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

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
