import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, User, Star, Lock, CheckCircle, Flame, BookOpen, Puzzle, ArrowRight, Smartphone, ScanFace, Brain, Gamepad2, TrendingUp, Award, Volume2, VolumeX, Headphones, Mic, Eye, Hand, Calculator, MessageCircle, Gift, ShoppingBag, Sparkles, ChevronRight, Clock, Heart, Zap, RotateCcw } from "lucide-react";
import { useState, useRef, useCallback } from "react";

const PhoneFrame = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <div className="flex flex-col items-center">
    <p className="font-display font-bold text-sm mb-3 text-muted-foreground">{title}</p>
    <div className="w-[300px] h-[560px] bg-card rounded-[2.5rem] shadow-elevated border-4 border-foreground/10 overflow-hidden relative">
      <div className="h-7 bg-foreground/5 flex items-center justify-center">
        <div className="w-16 h-1.5 bg-foreground/20 rounded-full" />
      </div>
      <div className="p-4 h-[calc(100%-28px)] overflow-y-auto no-scrollbar">{children}</div>
    </div>
  </div>
);

const workflowSteps = [
  { icon: Smartphone, title: "Open App & Login", desc: "Child logs in with a simple picture-based password or teacher scan. Works offline too.", color: "from-blue-500 to-cyan-400", emoji: "📱", detail: "Supports face recognition, QR code, and picture password for young children who can't type" },
  { icon: ScanFace, title: "Baseline Assessment", desc: "AI runs a fun 5-minute screening across reading, math, attention, memory & listening", color: "from-violet-500 to-purple-400", emoji: "🧪", detail: "Uses headphone-based isolated audio testing to eliminate classroom noise interference" },
  { icon: Brain, title: "AI Personalization", desc: "Machine learning creates a unique learning path based on detected disabilities", color: "from-pink-500 to-rose-400", emoji: "🤖", detail: "Adjusts difficulty, pace, modality (visual/audio/kinesthetic) based on the child's specific needs" },
  { icon: Gamepad2, title: "Play Therapeutic Games", desc: "Child plays games specifically designed to treat their learning difficulties", color: "from-amber-500 to-orange-400", emoji: "🎮", detail: "Dyslexia → phonics games, ADHD → focus training, Dyscalculia → number sense activities" },
  { icon: TrendingUp, title: "Real-time Tracking", desc: "Every interaction is tracked. AI adjusts difficulty in real-time based on performance", color: "from-emerald-500 to-green-400", emoji: "📈", detail: "Parents and teachers can view progress dashboards with weekly improvement reports" },
  { icon: Award, title: "Earn & Redeem Rewards", desc: "Points, badges, and streaks keep motivation high. Redeem for real school benefits", color: "from-yellow-500 to-amber-400", emoji: "🏆", detail: "Points can be exchanged for stickers, extra play time, class privileges, and school supplies" },
];

const sampleQuestions = [
  {
    type: "reading",
    icon: BookOpen,
    title: "Reading Comprehension",
    question: "Listen to the word and tap the correct picture",
    audioLabel: "🔊 Play: 'APPLE'",
    options: ["🍎 Apple", "🍌 Banana", "🍊 Orange", "🍇 Grapes"],
    correct: 0,
    forDisability: "Dyslexia",
    skill: "Phonemic Awareness",
  },
  {
    type: "attention",
    icon: Eye,
    title: "Attention Training",
    question: "Tap the star when it turns GREEN. Don't tap when RED!",
    audioLabel: "🔊 Play instructions",
    options: ["⭐ TAP NOW!", "Wait...", "Wait...", "⭐ TAP NOW!"],
    correct: 0,
    forDisability: "ADHD",
    skill: "Sustained Attention",
  },
  {
    type: "math",
    icon: Calculator,
    title: "Number Sense",
    question: "Listen to the number and show it with blocks",
    audioLabel: "🔊 Play: 'Show me SEVEN'",
    options: ["🟦🟦🟦🟦🟦 (5)", "🟦🟦🟦🟦🟦🟦🟦 (7)", "🟦🟦🟦 (3)", "🟦🟦🟦🟦🟦🟦🟦🟦🟦 (9)"],
    correct: 1,
    forDisability: "Dyscalculia",
    skill: "Number Recognition",
  },
  {
    type: "memory",
    icon: Brain,
    title: "Working Memory",
    question: "Remember the sequence and repeat it back",
    audioLabel: "🔊 Play: '3 - 7 - 2 - 9'",
    options: ["3-7-2-9", "3-2-7-9", "7-3-9-2", "9-2-7-3"],
    correct: 0,
    forDisability: "Memory Deficit",
    skill: "Sequential Memory",
  },
  {
    type: "listening",
    icon: Headphones,
    title: "Auditory Processing",
    question: "Which word rhymes with 'CAT'?",
    audioLabel: "🔊 Play: 'CAT'",
    options: ["🎩 Hat", "🐕 Dog", "🚗 Car", "🌳 Tree"],
    correct: 0,
    forDisability: "APD",
    skill: "Rhyme Detection",
  },
];

const rewardsFlow = [
  { icon: Gamepad2, title: "Play & Learn", desc: "Complete games, assessments, and daily missions", points: "+10-50 pts", color: "from-blue-500 to-cyan-400" },
  { icon: Star, title: "Earn Points", desc: "Points accumulate in your reward wallet automatically", points: "Balance grows", color: "from-amber-500 to-yellow-400" },
  { icon: ShoppingBag, title: "Visit Reward Shop", desc: "Browse the in-app reward shop for exciting items", points: "Browse catalog", color: "from-purple-500 to-pink-400" },
  { icon: Gift, title: "Redeem Rewards", desc: "Exchange points for real benefits and classroom perks", points: "Spend points", color: "from-emerald-500 to-green-400" },
];

const redeemableItems = [
  { name: "Digital Sticker Pack", cost: 50, icon: "🏷️", category: "Digital" },
  { name: "Extra Game Time (15 min)", cost: 100, icon: "🎮", category: "Privilege" },
  { name: "Choose Class Activity", cost: 200, icon: "🎭", category: "Privilege" },
  { name: "Homework Pass", cost: 250, icon: "📝", category: "School" },
  { name: "School Supply Kit", cost: 300, icon: "✏️", category: "Physical" },
  { name: "Star Student Certificate", cost: 500, icon: "🏆", category: "Achievement" },
  { name: "Special Seat for a Day", cost: 150, icon: "💺", category: "Privilege" },
  { name: "Book of Choice", cost: 400, icon: "📚", category: "Physical" },
];

const StudentAppPage = () => {
  const [activeScreen, setActiveScreen] = useState<"home" | "question" | "activity" | "rewards">("home");
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean | null>(null);

  const playAudio = useCallback(() => {
    setIsPlaying(true);
    // Simulate audio playback with Web Audio API beep
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 440;
      gain.gain.value = 0.3;
      osc.start();
      osc.stop(ctx.currentTime + 0.8);
      setTimeout(() => setIsPlaying(false), 1200);
    } catch {
      setTimeout(() => setIsPlaying(false), 1200);
    }
  }, []);

  const handleAnswer = (idx: number) => {
    setSelectedAnswer(idx);
    setAnsweredCorrectly(idx === sampleQuestions[currentQ].correct);
    setTimeout(() => {
      if (currentQ < sampleQuestions.length - 1) {
        setCurrentQ(prev => prev + 1);
        setSelectedAnswer(null);
        setAnsweredCorrectly(null);
      }
    }, 1500);
  };

  const q = sampleQuestions[currentQ];

  return (
    <div className="space-y-10 pb-8">
      {/* Header */}
      <div className="text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-20 h-20 gradient-hero rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-glow">
          <Smartphone className="w-10 h-10 text-primary-foreground" />
        </motion.div>
        <h2 className="section-title">Student App Experience</h2>
        <p className="section-subtitle">A child-friendly, headphone-based learning system designed for children with learning disabilities in government schools</p>
      </div>

      {/* ===== Enhanced Visual Workflow ===== */}
      <section className="relative">
        <h3 className="font-display text-xl font-bold text-center mb-2">Complete Student Journey</h3>
        <p className="text-muted-foreground text-sm text-center mb-8">Click each step to see technical details</p>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative">
          <div className="absolute top-16 left-[8%] right-[8%] h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-20" />
          <motion.div className="absolute top-16 left-[8%] h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
            initial={{ width: 0 }} animate={{ width: "84%" }} transition={{ duration: 2, delay: 0.5 }} />

          <div className="grid grid-cols-6 gap-3">
            {workflowSteps.map((step, i) => {
              const Icon = step.icon;
              const isExpanded = expandedStep === i;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  onClick={() => setExpandedStep(isExpanded ? null : i)}
                  onHoverStart={() => setActiveStep(i)}
                  onHoverEnd={() => setActiveStep(null)}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <motion.div
                    animate={activeStep === i ? { scale: 1.15 } : { scale: 1 }}
                    className={`relative w-[4.5rem] h-[4.5rem] rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow mb-3`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-card rounded-full shadow-md flex items-center justify-center">
                      <span className="text-xs font-bold text-foreground">{i + 1}</span>
                    </div>
                    {activeStep === i && (
                      <motion.div layoutId="stepGlow" className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-30 blur-xl`} />
                    )}
                  </motion.div>
                  <p className="font-display font-bold text-xs">{step.title}</p>
                  <p className="text-muted-foreground text-[10px] mt-1 leading-tight px-1">{step.desc}</p>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                        className="mt-2 bg-primary/5 border border-primary/20 rounded-xl p-2 text-[10px] text-primary leading-tight">
                        {step.detail}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative pl-10">
          <div className="absolute left-[1.1rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />
          {workflowSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.12 }}
                className="relative flex items-start gap-4 mb-6 last:mb-0 cursor-pointer" onClick={() => setExpandedStep(expandedStep === i ? null : i)}>
                <div className={`absolute left-[-1.45rem] w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md z-10`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="bg-card rounded-2xl shadow-card p-4 flex-1 ml-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{step.emoji}</span>
                    <p className="font-display font-bold text-sm">{step.title}</p>
                    <span className="ml-auto text-[10px] font-bold bg-muted rounded-full px-2 py-0.5 text-muted-foreground">Step {i + 1}</span>
                  </div>
                  <p className="text-muted-foreground text-xs">{step.desc}</p>
                  <AnimatePresence>
                    {expandedStep === i && (
                      <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                        className="text-[11px] text-primary mt-2 bg-primary/5 rounded-lg p-2">{step.detail}</motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ===== Screens Selector ===== */}
      <section>
        <h3 className="font-display text-xl font-bold text-center mb-2">Interactive Demo Screens</h3>
        <p className="text-muted-foreground text-sm text-center mb-6">Experience the app as a student would — click through actual screens</p>
        
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {([
            { key: "home", label: "🏠 Home", desc: "Dashboard" },
            { key: "question", label: "🎧 Questions", desc: "With Audio" },
            { key: "activity", label: "📚 Activities", desc: "Learning" },
            { key: "rewards", label: "🎁 Rewards", desc: "Redeem" },
          ] as const).map(s => (
            <button key={s.key} onClick={() => { setActiveScreen(s.key); setCurrentQ(0); setSelectedAnswer(null); setAnsweredCorrectly(null); }}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold font-display transition-all flex flex-col items-center ${
                activeScreen === s.key ? "gradient-primary text-primary-foreground shadow-soft" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}>
              <span>{s.label}</span>
              <span className="text-[9px] opacity-70">{s.desc}</span>
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.div key={activeScreen} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            {activeScreen === "home" && (
              <PhoneFrame title="Home Screen">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 gradient-hero rounded-full mx-auto flex items-center justify-center mb-3 shadow-lg">
                    <span className="text-3xl">🧒</span>
                  </div>
                  <h3 className="font-display font-bold text-lg">Hi, Arjun! 👋</h3>
                  <p className="text-muted-foreground text-xs">Class 4B • Govt Primary School</p>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <Headphones className="w-3 h-3 text-secondary" />
                    <span className="text-[10px] text-secondary font-bold">Headphones Connected</span>
                  </div>
                </div>
                <button className="w-full gradient-primary text-primary-foreground py-4 rounded-2xl font-display font-bold text-lg shadow-soft hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 mb-4">
                  <Play className="w-6 h-6" /> Start Today's Learning
                </button>
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold">Today's Progress</span>
                    <span className="text-secondary font-bold">65%</span>
                  </div>
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div className="h-full gradient-hero rounded-full" initial={{ width: 0 }} animate={{ width: "65%" }} transition={{ duration: 1.2 }} />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-muted rounded-xl p-2.5 text-center"><Flame className="w-4 h-4 text-accent mx-auto mb-1" /><p className="text-[10px] font-bold">5 Day</p><p className="text-[8px] text-muted-foreground">Streak</p></div>
                  <div className="bg-muted rounded-xl p-2.5 text-center"><Star className="w-4 h-4 text-accent mx-auto mb-1" /><p className="text-[10px] font-bold">380</p><p className="text-[8px] text-muted-foreground">Points</p></div>
                  <div className="bg-muted rounded-xl p-2.5 text-center"><Award className="w-4 h-4 text-primary mx-auto mb-1" /><p className="text-[10px] font-bold">5</p><p className="text-[8px] text-muted-foreground">Badges</p></div>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-3">
                  <p className="text-[10px] font-bold text-primary mb-1">🎯 Today's Missions</p>
                  <div className="space-y-1.5">
                    {["Reading Exercise (+10 pts)", "Memory Game (+15 pts)", "Attention Task (+20 pts)"].map((m, i) => (
                      <div key={m} className="flex items-center gap-2">
                        <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${i === 0 ? "bg-secondary" : "border border-muted-foreground/30"}`}>
                          {i === 0 && <span className="text-[6px] text-white">✓</span>}
                        </div>
                        <span className={`text-[10px] ${i === 0 ? "line-through text-muted-foreground" : ""}`}>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </PhoneFrame>
            )}

            {activeScreen === "question" && (
              <PhoneFrame title="Assessment Screen — Click 🔊 to hear audio">
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full flex items-center gap-1">
                      <q.icon className="w-3 h-3" /> {q.title}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{currentQ + 1}/{sampleQuestions.length}</span>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {sampleQuestions.map((_, i) => (
                      <div key={i} className={`h-1 flex-1 rounded-full ${i < currentQ ? "bg-secondary" : i === currentQ ? "bg-primary" : "bg-muted"}`} />
                    ))}
                  </div>
                </div>

                <div className="bg-muted/50 rounded-2xl p-4 mb-3">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-[9px] font-bold bg-destructive/10 text-destructive px-1.5 py-0.5 rounded-full">For: {q.forDisability}</span>
                    <span className="text-[9px] font-bold bg-secondary/10 text-secondary px-1.5 py-0.5 rounded-full">Skill: {q.skill}</span>
                  </div>
                  <p className="font-display font-bold text-sm mb-3">{q.question}</p>
                  
                  {/* Audio Play Button */}
                  <button
                    onClick={playAudio}
                    className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                      isPlaying
                        ? "gradient-warm text-primary-foreground animate-pulse"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                  >
                    {isPlaying ? <><Volume2 className="w-5 h-5" /> Playing Audio...</> : <><Headphones className="w-5 h-5" /> {q.audioLabel}</>}
                  </button>
                </div>

                <div className="space-y-2">
                  {q.options.map((opt, i) => (
                    <motion.button
                      key={`${currentQ}-${i}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      onClick={() => selectedAnswer === null && handleAnswer(i)}
                      className={`w-full text-left p-3 rounded-xl text-sm font-medium transition-all border-2 ${
                        selectedAnswer === null
                          ? "bg-card border-border hover:border-primary hover:bg-primary/5"
                          : selectedAnswer === i
                            ? answeredCorrectly
                              ? "bg-secondary/10 border-secondary text-secondary"
                              : "bg-destructive/10 border-destructive text-destructive"
                            : i === q.correct && selectedAnswer !== null
                              ? "bg-secondary/10 border-secondary text-secondary"
                              : "bg-muted border-transparent opacity-50"
                      }`}
                    >
                      {opt}
                      {selectedAnswer === i && answeredCorrectly && <CheckCircle className="inline w-4 h-4 ml-2" />}
                    </motion.button>
                  ))}
                </div>

                {answeredCorrectly !== null && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className={`mt-3 p-3 rounded-xl text-center text-sm font-bold ${
                      answeredCorrectly ? "bg-secondary/10 text-secondary" : "bg-destructive/10 text-destructive"
                    }`}>
                    {answeredCorrectly ? "🎉 Correct! +10 points" : "❌ Not quite! The correct answer is highlighted"}
                  </motion.div>
                )}

                <div className="mt-3 flex justify-center">
                  <button onClick={() => { setCurrentQ(0); setSelectedAnswer(null); setAnsweredCorrectly(null); }}
                    className="text-xs text-muted-foreground flex items-center gap-1 hover:text-foreground">
                    <RotateCcw className="w-3 h-3" /> Reset Quiz
                  </button>
                </div>
              </PhoneFrame>
            )}

            {activeScreen === "activity" && (
              <PhoneFrame title="Learning Activities">
                <h3 className="font-display font-bold mb-1">Your Learning Path</h3>
                <p className="text-[10px] text-muted-foreground mb-3">Activities customized for your learning needs</p>
                <div className="space-y-2.5">
                  {[
                    { title: "Phonics Practice", icon: BookOpen, unlocked: true, pct: 80, disability: "Dyslexia", type: "Reading" },
                    { title: "Focus Training", icon: Eye, unlocked: true, pct: 60, disability: "ADHD", type: "Attention" },
                    { title: "Memory Sequence", icon: Brain, unlocked: true, pct: 45, disability: "Memory", type: "Memory" },
                    { title: "Number Blocks", icon: Calculator, unlocked: true, pct: 30, disability: "Dyscalculia", type: "Math" },
                    { title: "Sound Matching", icon: Headphones, unlocked: true, pct: 20, disability: "APD", type: "Listening" },
                    { title: "Letter Tracing", icon: Hand, unlocked: false, pct: 0, disability: "Dysgraphia", type: "Writing" },
                    { title: "Story Builder", icon: MessageCircle, unlocked: false, pct: 0, disability: "Language", type: "Speaking" },
                  ].map((act, idx) => (
                    <div key={act.title} className={`flex items-center gap-3 p-3 rounded-xl ${act.unlocked ? "bg-card border border-border" : "bg-muted/50 opacity-50"}`}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${act.unlocked ? "gradient-primary" : "bg-foreground/10"}`}>
                        {act.unlocked ? <act.icon className="w-5 h-5 text-primary-foreground" /> : <Lock className="w-4 h-4 text-muted-foreground" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <p className="text-xs font-bold">{act.title}</p>
                          <span className="text-[8px] bg-destructive/10 text-destructive px-1 rounded">{act.disability}</span>
                        </div>
                        {act.unlocked && (
                          <>
                            <div className="w-full h-1.5 bg-border rounded-full mt-1.5">
                              <div className="h-full bg-secondary rounded-full transition-all" style={{ width: `${act.pct}%` }} />
                            </div>
                            <p className="text-[9px] text-muted-foreground mt-0.5">{act.pct}% complete</p>
                          </>
                        )}
                      </div>
                      {act.unlocked && <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />}
                    </div>
                  ))}
                </div>
              </PhoneFrame>
            )}

            {activeScreen === "rewards" && (
              <PhoneFrame title="Rewards & Redemption">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                    <Gift className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <p className="font-display font-extrabold text-2xl text-accent">380</p>
                  <p className="text-[10px] text-muted-foreground">Available Points</p>
                </div>

                <div className="mb-4">
                  <p className="text-[10px] font-bold mb-2 text-muted-foreground">REWARD SHOP</p>
                  <div className="space-y-2">
                    {redeemableItems.slice(0, 5).map(item => (
                      <div key={item.name} className="flex items-center gap-3 p-2.5 rounded-xl bg-card border border-border">
                        <span className="text-xl">{item.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-bold truncate">{item.name}</p>
                          <span className="text-[8px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded">{item.category}</span>
                        </div>
                        <button className={`text-[10px] font-bold px-2.5 py-1 rounded-lg ${
                          item.cost <= 380 ? "gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}>
                          {item.cost} pts
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-3">
                  <p className="text-[10px] font-bold text-secondary mb-1">💡 How to earn more</p>
                  <div className="space-y-1">
                    {["Complete daily missions", "Maintain your streak", "Score 100% on tests", "Help a classmate"].map(tip => (
                      <p key={tip} className="text-[9px] text-muted-foreground flex items-center gap-1">
                        <Zap className="w-2.5 h-2.5 text-accent" /> {tip}
                      </p>
                    ))}
                  </div>
                </div>
              </PhoneFrame>
            )}
          </motion.div>
        </div>
      </section>

      {/* ===== Rewards Redemption Flow ===== */}
      <section>
        <h3 className="font-display text-xl font-bold text-center mb-2">Rewards Redemption Flow</h3>
        <p className="text-muted-foreground text-sm text-center mb-6">How points translate into real-world motivation</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {rewardsFlow.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
                className="bg-card rounded-2xl shadow-card p-5 text-center relative card-hover">
                {i < rewardsFlow.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-muted-foreground/30 w-5 h-5 z-10" />
                )}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <p className="font-display font-bold text-sm">{step.title}</p>
                <p className="text-muted-foreground text-[11px] mt-1">{step.desc}</p>
                <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full mt-2 inline-block">{step.points}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Redeemable items full grid */}
      <section className="bg-card rounded-3xl shadow-card p-6">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <ShoppingBag className="w-5 h-5 text-accent" />
          <h3 className="font-display font-bold">Reward Catalog</h3>
        </div>
        <p className="text-sm text-muted-foreground text-center mb-4">Items students can redeem with their earned points</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {redeemableItems.map((item, i) => (
            <motion.div key={item.name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.06 }}
              className="bg-muted/50 rounded-2xl p-4 text-center card-hover">
              <span className="text-3xl block mb-2">{item.icon}</span>
              <p className="font-display font-bold text-xs">{item.name}</p>
              <span className="text-[9px] text-muted-foreground">{item.category}</span>
              <div className="mt-2">
                <span className="text-xs font-bold text-accent">{item.cost} pts</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Audio & Accessibility */}
      <section className="bg-primary/5 border border-primary/15 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Headphones className="w-5 h-5 text-primary" />
          <h4 className="font-display font-bold">Audio-First Design</h4>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3">Every question includes audio playback because many children with learning disabilities struggle with reading text. The headphone-based system ensures:</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            "Isolated learning — no classroom noise",
            "Audio instructions for non-readers",
            "Multi-language voice support",
            "Adjustable playback speed",
            "Repeat audio unlimited times",
            "Visual + audio dual encoding",
          ].map(f => (
            <div key={f} className="flex items-start gap-1.5">
              <CheckCircle className="w-3 h-3 text-secondary shrink-0 mt-0.5" />
              <span className="text-[11px]">{f}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StudentAppPage;
