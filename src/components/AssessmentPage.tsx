import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Headphones, CheckCircle, Eye, Ear, BookOpen, Shapes, ClipboardCheck, Brain, Sparkles, BarChart3, ArrowRight, AlertTriangle, Calculator, PenTool, Activity } from "lucide-react";
import { useState, useRef, useCallback } from "react";

const assessments = [
  { id: "reading", label: "Reading", icon: BookOpen, disability: "Dyslexia", desc: "Tests phonemic awareness, decoding, fluency, and reading comprehension" },
  { id: "math", label: "Math", icon: Calculator, disability: "Dyscalculia", desc: "Tests number sense, arithmetic, sequencing, and spatial reasoning" },
  { id: "memory", label: "Memory", icon: Eye, disability: "Working Memory Deficit", desc: "Tests short-term memory, visual memory, and recall ability" },
  { id: "attention", label: "Attention", icon: Activity, disability: "ADHD", desc: "Tests sustained attention, selective attention, and impulse control" },
  { id: "listening", label: "Listening", icon: Ear, disability: "APD", desc: "Tests auditory discrimination, comprehension, and sound processing" },
  { id: "pattern", label: "Patterns", icon: Shapes, disability: "VPD", desc: "Tests visual processing, pattern recognition, and spatial reasoning" },
  { id: "writing", label: "Writing", icon: PenTool, disability: "Dysgraphia", desc: "Tests letter formation, spelling, and written expression" },
];

const flowSteps = [
  { icon: ClipboardCheck, title: "Student Registration", desc: "Child's basic info, class, and consent form captured", color: "from-blue-500 to-indigo-500", detail: "Parental consent is mandatory before assessment" },
  { icon: BookOpen, title: "7-Domain Assessment", desc: "Reading, Math, Memory, Attention, Listening, Patterns & Writing", color: "from-violet-500 to-fuchsia-500", detail: "Each test takes 3-5 minutes — designed as fun activities" },
  { icon: Brain, title: "AI Scoring & Classification", desc: "ML models score each response and detect disability markers", color: "from-pink-500 to-rose-500", detail: "Trained on 50,000+ student assessments with 94% accuracy" },
  { icon: AlertTriangle, title: "Risk Level Assignment", desc: "Low / Medium / High risk classification for each domain", color: "from-amber-500 to-orange-500", detail: "Red flags for immediate referral are auto-detected" },
  { icon: Sparkles, title: "Disability Identification", desc: "Specific conditions detected: Dyslexia, ADHD, Dyscalculia, etc.", color: "from-teal-500 to-cyan-500", detail: "Cross-referencing multiple domains increases diagnostic accuracy" },
  { icon: BarChart3, title: "Report Generation", desc: "Detailed profile shared with teacher, parent, and government", color: "from-emerald-500 to-green-500", detail: "PDF report + dashboard view with actionable recommendations" },
];

const scoringRubric = [
  { range: "0-30%", level: "High Risk", color: "bg-destructive", desc: "Requires immediate intervention and specialist referral" },
  { range: "31-60%", level: "Medium Risk", color: "bg-accent", desc: "Needs targeted support through personalized learning games" },
  { range: "61-80%", level: "Low Risk", color: "bg-primary", desc: "Minor gaps addressable through regular practice" },
  { range: "81-100%", level: "No Risk", color: "bg-secondary", desc: "Age-appropriate ability — continue with regular curriculum" },
];

// Text-to-speech content for each assessment type
const ttsContent: Record<string, { text: string; playingLabel: string }> = {
  reading: { text: "The cat sat on the mat. Now answer: What did the cat sit on?", playingLabel: "Reading aloud..." },
  math: { text: "What is five plus three? Choose the correct answer.", playingLabel: "Speaking question..." },
  listening: { text: "Once upon a time, a beautiful blue bird sat on a tall tree and sang a lovely song. What color was the bird?", playingLabel: "Playing story..." },
  pattern: { text: "Look at the pattern. Blue, red, blue, red, blue. What comes next?", playingLabel: "Speaking question..." },
  writing: { text: "Spell the word: Apple. A, P, P, L, E. Apple.", playingLabel: "Speaking word..." },
};

const AssessmentPage = () => {
  const [active, setActive] = useState("reading");
  const [selected, setSelected] = useState<string | null>(null);
  const [memoryRevealed, setMemoryRevealed] = useState(true);
  const [tappedCircles, setTappedCircles] = useState<number[]>([]);
  const [expandedFlow, setExpandedFlow] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playAudio = useCallback((type: string) => {
    if (isPlaying) return;
    window.speechSynthesis.cancel();
    const content = ttsContent[type];
    if (!content) return;
    setIsPlaying(true);
    const utterance = new SpeechSynthesisUtterance(content.text);
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    utterance.lang = "en-US";
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    window.speechSynthesis.speak(utterance);
  }, [isPlaying]);

  const AudioButton = ({ type, label }: { type: string; label?: string }) => (
    <button
      onClick={() => playAudio(type)}
      className={`mt-3 px-6 py-3 rounded-xl font-bold flex items-center gap-2 mx-auto hover:scale-105 transition-all ${
        isPlaying
          ? "gradient-warm text-primary-foreground animate-pulse"
          : "gradient-primary text-primary-foreground"
      }`}
    >
      {isPlaying ? (
        <><Volume2 className="w-5 h-5 animate-bounce" /> {ttsContent[type]?.playingLabel || "Speaking..."}</>
      ) : (
        <><Headphones className="w-5 h-5" /> {label || "Play Audio"}</>
      )}
    </button>
  );

  return (
    <div className="space-y-8 pb-8">
      <div className="text-center">
        <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
          <ClipboardCheck className="w-8 h-8 text-primary-foreground" />
        </div>
        <h2 className="section-title">Assessment Module</h2>
        <p className="section-subtitle">Comprehensive 7-domain cognitive assessment covering all major learning disabilities — designed as fun, interactive activities that children enjoy</p>
      </div>

      {/* Workflow */}
      <section className="bg-card rounded-3xl shadow-card p-6 md:p-8">
        <h3 className="font-display text-lg font-bold text-center mb-1">Assessment Workflow</h3>
        <p className="text-muted-foreground text-xs text-center mb-6">6-step process from registration to actionable report</p>

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
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                    className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-3`}>
                    <Icon className="w-7 h-7 text-white" />
                    <div className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-card rounded-full shadow flex items-center justify-center">
                      <span className="text-[10px] font-bold">{i + 1}</span>
                    </div>
                  </motion.div>
                  <p className="font-display font-bold text-[11px] leading-tight">{step.title}</p>
                  <p className="text-muted-foreground text-[10px] mt-1 leading-tight">{step.desc}</p>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                        className="mt-2 bg-muted rounded-xl px-3 py-2">
                        <p className="text-[10px] text-foreground font-medium">{step.detail}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                {i < flowSteps.length - 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.15 }} className="mt-6 mx-1 flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-muted-foreground/40" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        <div className="md:hidden space-y-3">
          {flowSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.title} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.1 }}
                onClick={() => setExpandedFlow(expandedFlow === i ? null : i)}
                className="flex items-center gap-4 bg-muted/60 rounded-2xl p-4 cursor-pointer hover:bg-muted transition-colors">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md shrink-0 relative`}>
                  <Icon className="w-6 h-6 text-white" />
                  <span className="absolute -top-1 -left-1 w-5 h-5 bg-card rounded-full shadow text-[10px] font-bold flex items-center justify-center">{i + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display font-bold text-sm">{step.title}</p>
                  <p className="text-muted-foreground text-xs">{step.desc}</p>
                  <AnimatePresence>
                    {expandedFlow === i && (
                      <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                        className="text-xs text-primary font-medium mt-1">💡 {step.detail}</motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Scoring Rubric */}
      <section className="bg-card rounded-3xl shadow-card p-6">
        <h3 className="font-display font-bold text-lg mb-4 text-center">Scoring & Risk Classification</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {scoringRubric.map((r, i) => (
            <motion.div key={r.level} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="text-center p-4 rounded-xl bg-muted/50">
              <div className={`w-10 h-3 ${r.color} rounded-full mx-auto mb-2 opacity-70`} />
              <p className="font-display font-bold text-sm">{r.level}</p>
              <p className="font-display font-extrabold text-lg text-foreground/70">{r.range}</p>
              <p className="text-[10px] text-muted-foreground mt-1">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Assessment Tabs */}
      <div>
        <h3 className="font-display font-bold text-lg text-center mb-4">Interactive Test Demos</h3>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {assessments.map(a => {
            const Icon = a.icon;
            return (
              <button key={a.id} onClick={() => { setActive(a.id); setSelected(null); setTappedCircles([]); setMemoryRevealed(true); }}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold font-display whitespace-nowrap transition-all ${
                  active === a.id ? "gradient-primary text-primary-foreground shadow-soft" : "bg-card text-muted-foreground shadow-card"
                }`}>
                <Icon className="w-3.5 h-3.5" />{a.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Assessment Info */}
      {assessments.find(a => a.id === active) && (
        <div className="bg-primary/5 border border-primary/15 rounded-2xl p-4 flex items-start gap-3">
          <Brain className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-display font-bold text-sm">Detects: <span className="text-primary">{assessments.find(a => a.id === active)!.disability}</span></p>
            <p className="text-xs text-muted-foreground mt-0.5">{assessments.find(a => a.id === active)!.desc}</p>
          </div>
        </div>
      )}

      {/* Progress */}
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
                <h4 className="font-display font-bold text-lg mb-1">📖 Reading Fluency Test</h4>
                <p className="text-muted-foreground text-sm mb-4">Tests: decoding, phonemic awareness, comprehension</p>
                <div className="bg-muted rounded-2xl p-6">
                  <p className="font-display text-2xl font-bold leading-relaxed">"The <span className="text-primary">cat</span> sat on the <span className="text-secondary">mat</span>"</p>
                </div>
                <AudioButton type="reading" label="🔊 Play: Read the sentence" />
              </div>
              <div>
                <p className="font-bold text-sm mb-3">Question 1: What did the cat sit on?</p>
                <div className="grid grid-cols-2 gap-3">
                  {["A chair", "The mat", "A bed", "The floor"].map(opt => (
                    <button key={opt} onClick={() => setSelected(opt)}
                      className={`p-4 rounded-xl font-bold text-sm transition-all border-2 ${
                        selected === opt ? opt === "The mat" ? "border-secondary bg-secondary/10 text-secondary" : "border-destructive bg-destructive/10 text-destructive" : "border-border hover:border-primary/50"
                      }`}>
                      {selected === opt && opt === "The mat" && <CheckCircle className="w-4 h-4 inline mr-1" />}{opt}
                    </button>
                  ))}
                </div>
                {selected === "The mat" && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-secondary font-bold mt-4 text-sm">🎉 Correct! Reading comprehension is intact.</motion.p>}
              </div>
            </div>
          )}

          {active === "math" && (
            <div className="space-y-6 text-center">
              <h4 className="font-display font-bold text-lg mb-1">🔢 Number Sense Test</h4>
              <p className="text-muted-foreground text-sm">Tests: counting, arithmetic, number recognition</p>
              <div className="bg-muted rounded-2xl p-6">
                <p className="font-display text-3xl font-bold">5 + 3 = ?</p>
              </div>
              <AudioButton type="math" label="🔊 Play: 'What is five plus three?'" />
              <div className="grid grid-cols-4 gap-3 max-w-xs mx-auto">
                {["6", "7", "8", "9"].map(opt => (
                  <button key={opt} onClick={() => setSelected(opt)}
                    className={`p-4 rounded-xl font-bold text-lg transition-all border-2 ${
                      selected === opt ? opt === "8" ? "border-secondary bg-secondary/10 text-secondary" : "border-destructive bg-destructive/10 text-destructive" : "border-border hover:border-primary/50"
                    }`}>{opt}</button>
                ))}
              </div>
              {selected === "8" && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-secondary font-bold">🎉 Excellent arithmetic skills!</motion.p>}
            </div>
          )}

          {active === "memory" && (
            <div className="space-y-6 text-center">
              <h4 className="font-display font-bold text-lg mb-1">🧠 Visual Memory Test</h4>
              <p className="text-muted-foreground text-sm">Tests: short-term recall, visual memory, sequencing</p>
              <div className="flex justify-center gap-4 flex-wrap">
                {["🍎", "📚", "🌟", "🎈", "🐱"].map((emoji, i) => (
                  <motion.div key={i} animate={{ opacity: memoryRevealed ? 1 : 0, scale: memoryRevealed ? 1 : 0.5 }}
                    className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center text-3xl shadow-card">{emoji}</motion.div>
                ))}
              </div>
              <button onClick={() => setMemoryRevealed(!memoryRevealed)}
                className="gradient-warm text-accent-foreground px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                {memoryRevealed ? "Hide Objects" : "Show Objects"}
              </button>
              {!memoryRevealed && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p className="font-bold text-sm mb-3">Which objects were shown?</p>
                  <div className="flex justify-center gap-3 flex-wrap">
                    {["🍎", "🚗", "📚", "🎸", "🌟", "🏀"].map((e, i) => (
                      <button key={i} onClick={() => setSelected(e)}
                        className={`w-14 h-14 rounded-xl text-2xl flex items-center justify-center transition-all border-2 ${
                          selected === e ? ["🍎", "📚", "🌟"].includes(e) ? "border-secondary bg-secondary/10" : "border-destructive bg-destructive/10" : "border-border hover:border-primary/50"
                        }`}>{e}</button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {active === "attention" && (
            <div className="space-y-6 text-center">
              <h4 className="font-display font-bold text-lg mb-1">🎯 Sustained Attention Test</h4>
              <p className="text-muted-foreground text-sm">Tests: selective attention, impulse control, focus duration</p>
              <p className="text-sm">Tap only the <span className="text-destructive font-bold">red</span> circles!</p>
              <div className="grid grid-cols-5 gap-3 max-w-xs mx-auto">
                {[0,1,0,1,0, 1,0,0,1,0, 0,1,0,0,1, 1,0,1,0,0].map((isRed, i) => (
                  <motion.button key={i} whileTap={{ scale: 0.85 }}
                    onClick={() => { if (!tappedCircles.includes(i)) setTappedCircles([...tappedCircles, i]); }}
                    className={`w-12 h-12 rounded-full mx-auto transition-all ${
                      tappedCircles.includes(i) ? isRed ? "bg-secondary scale-90" : "bg-destructive/50 scale-90" : isRed ? "bg-destructive" : "bg-primary"
                    }`} />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Errors indicate attention or impulse control issues</p>
            </div>
          )}

          {active === "listening" && (
            <div className="space-y-6 text-center">
              <h4 className="font-display font-bold text-lg mb-1">🎧 Listening Comprehension Test</h4>
              <p className="text-muted-foreground text-sm">Tests: auditory discrimination, comprehension, following instructions</p>
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Headphones className={`w-10 h-10 text-primary-foreground ${isPlaying ? "animate-bounce" : ""}`} />
              </div>
              <AudioButton type="listening" label="🔊 Play Story" />
              <div className="bg-muted rounded-2xl p-5 text-left">
                <p className="font-bold text-sm mb-3">What color was the bird in the story?</p>
                <div className="space-y-2">
                  {["Red", "Blue", "Green", "Yellow"].map(opt => (
                    <button key={opt} onClick={() => setSelected(opt)}
                      className={`w-full p-3 rounded-xl text-sm font-bold text-left transition-all border-2 ${
                        selected === opt ? opt === "Blue" ? "border-secondary bg-secondary/10" : "border-destructive bg-destructive/10" : "border-border hover:border-primary/50"
                      }`}>{opt}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {active === "pattern" && (
            <div className="space-y-6 text-center">
              <h4 className="font-display font-bold text-lg mb-1">🔷 Pattern Recognition Test</h4>
              <p className="text-muted-foreground text-sm">Tests: visual processing, logical sequencing, spatial reasoning</p>
              <AudioButton type="pattern" label="🔊 Play: 'What comes next?'" />
              <div className="flex justify-center gap-3 items-center">
                {["🔵", "🔴", "🔵", "🔴", "🔵", "❓"].map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.2 }}
                    className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${i === 5 ? "border-2 border-dashed border-primary bg-muted" : "bg-muted shadow-card"}`}>{s}</motion.div>
                ))}
              </div>
              <div className="flex justify-center gap-3">
                {["🔴", "🔵", "🟢", "🟡"].map(opt => (
                  <button key={opt} onClick={() => setSelected(opt)}
                    className={`w-16 h-16 rounded-xl text-3xl flex items-center justify-center transition-all border-2 ${
                      selected === opt ? opt === "🔴" ? "border-secondary bg-secondary/10 scale-110" : "border-destructive bg-destructive/10" : "border-border hover:border-primary/50"
                    }`}>{opt}</button>
                ))}
              </div>
              {selected === "🔴" && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-secondary font-bold">🎉 Excellent pattern recognition!</motion.p>}
            </div>
          )}

          {active === "writing" && (
            <div className="space-y-6 text-center">
              <h4 className="font-display font-bold text-lg mb-1">✍️ Writing Assessment</h4>
              <p className="text-muted-foreground text-sm">Tests: letter formation, spelling, written expression</p>
              <div className="bg-muted rounded-2xl p-6">
                <p className="text-sm text-muted-foreground mb-3">Trace the letter below:</p>
                <p className="font-display text-6xl font-extrabold text-primary/30">A</p>
              </div>
              <AudioButton type="writing" label="🔊 Play: 'Spell the word Apple'" />
              <p className="text-sm mb-3 font-bold">Spell the word for this picture: 🍎</p>
              <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                {["APLE", "APPLE", "APEL", "APPEL"].map(opt => (
                  <button key={opt} onClick={() => setSelected(opt)}
                    className={`p-3 rounded-xl font-bold text-sm transition-all border-2 font-display tracking-wider ${
                      selected === opt ? opt === "APPLE" ? "border-secondary bg-secondary/10 text-secondary" : "border-destructive bg-destructive/10 text-destructive" : "border-border hover:border-primary/50"
                    }`}>{opt}</button>
                ))}
              </div>
              {selected === "APPLE" && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-secondary font-bold">🎉 Correct spelling!</motion.p>}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AssessmentPage;
