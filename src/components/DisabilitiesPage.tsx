import { motion } from "framer-motion";
import { useState } from "react";
import { HeartPulse, BookOpen, Calculator, Brain, Eye, Ear, PenTool, AlertTriangle, CheckCircle2, Lightbulb, ChevronDown, ChevronUp, Activity } from "lucide-react";

const disabilities = [
  {
    id: "dyslexia",
    name: "Dyslexia",
    tagline: "Reading & Language Processing Disorder",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-primary/5 border-primary/20",
    prevalence: "5-17%",
    description: "A learning disorder that involves difficulty reading due to problems identifying speech sounds and learning how they relate to letters and words.",
    symptoms: [
      "Difficulty reading fluently",
      "Trouble spelling words correctly",
      "Slow and labor-intensive reading",
      "Reversing letters or numbers (b/d, 6/9)",
      "Difficulty understanding what they read",
      "Problems remembering sequences"
    ],
    howWeHelp: [
      "Phonics-based interactive reading exercises",
      "Audio-visual word matching games",
      "Text-to-speech support for comprehension",
      "Multi-sensory learning approaches",
      "Progressive difficulty scaling"
    ],
    assessment: "Reading speed test, phonemic awareness test, word recognition assessment"
  },
  {
    id: "dyscalculia",
    name: "Dyscalculia",
    tagline: "Mathematical Learning Disorder",
    icon: Calculator,
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-purple-500/5 border-purple-500/20",
    prevalence: "3-7%",
    description: "A specific learning disability that affects a person's ability to understand numbers and learn math facts.",
    symptoms: [
      "Difficulty understanding number concepts",
      "Poor mental math ability",
      "Trouble with counting and sequences",
      "Difficulty telling time",
      "Problems with spatial reasoning",
      "Confusion with math symbols (+, -, ×)"
    ],
    howWeHelp: [
      "Visual number line and counting games",
      "Interactive shape and pattern exercises",
      "Step-by-step math problem solving",
      "Real-world math scenarios (shopping, cooking)",
      "Gamified practice with rewards"
    ],
    assessment: "Number sense test, basic arithmetic assessment, spatial reasoning evaluation"
  },
  {
    id: "adhd",
    name: "ADHD",
    tagline: "Attention Deficit Hyperactivity Disorder",
    icon: Activity,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-accent/5 border-accent/20",
    prevalence: "5-11%",
    description: "A neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity that interferes with functioning and development.",
    symptoms: [
      "Cannot sustain attention on tasks",
      "Easily distracted by surroundings",
      "Fidgeting and inability to sit still",
      "Difficulty following instructions",
      "Forgetting daily activities",
      "Trouble organizing tasks"
    ],
    howWeHelp: [
      "Short, focused micro-learning sessions (3-5 min)",
      "Attention training games with increasing duration",
      "Headphone-based isolated learning environment",
      "Immediate feedback and reward loops",
      "Break reminders and movement activities"
    ],
    assessment: "Sustained attention test, selective attention test, impulse control evaluation"
  },
  {
    id: "apd",
    name: "Auditory Processing Disorder",
    tagline: "Difficulty Processing Sounds",
    icon: Ear,
    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-secondary/5 border-secondary/20",
    prevalence: "2-7%",
    description: "A condition where the brain has difficulty processing sounds, making it hard to understand speech, especially in noisy environments.",
    symptoms: [
      "Difficulty understanding speech in noise",
      "Frequently asking 'what?' or 'huh?'",
      "Misunderstanding spoken instructions",
      "Difficulty distinguishing similar sounds",
      "Problems following multi-step directions",
      "Poor musical ability"
    ],
    howWeHelp: [
      "Noise-cancelling headphone-based learning",
      "Audio discrimination exercises",
      "Listening comprehension games",
      "Speech-in-noise training",
      "Visual cues paired with audio content"
    ],
    assessment: "Auditory discrimination test, listening comprehension assessment, sound sequencing test"
  },
  {
    id: "vpd",
    name: "Visual Processing Disorder",
    tagline: "Difficulty Interpreting Visual Information",
    icon: Eye,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-destructive/5 border-destructive/20",
    prevalence: "2-5%",
    description: "A condition affecting the brain's ability to process visual information, impacting reading, math, and spatial awareness.",
    symptoms: [
      "Difficulty distinguishing shapes and letters",
      "Poor hand-eye coordination",
      "Trouble copying from board to paper",
      "Losing place while reading",
      "Difficulty with puzzles and maps",
      "Sensitivity to light or visual clutter"
    ],
    howWeHelp: [
      "High-contrast, clean visual interfaces",
      "Pattern recognition training games",
      "Shape sorting and matching exercises",
      "Adjustable font sizes and spacing",
      "Visual tracking exercises"
    ],
    assessment: "Visual discrimination test, pattern completion assessment, visual memory evaluation"
  },
  {
    id: "dysgraphia",
    name: "Dysgraphia",
    tagline: "Writing & Fine Motor Difficulty",
    icon: PenTool,
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-secondary/5 border-secondary/20",
    prevalence: "5-20%",
    description: "A learning disability that affects written expression, making it difficult to write clearly, spell correctly, and organize thoughts on paper.",
    symptoms: [
      "Illegible or inconsistent handwriting",
      "Slow and laborious writing",
      "Unusual grip on pen/pencil",
      "Difficulty organizing thoughts in writing",
      "Avoidance of writing tasks",
      "Inconsistent letter spacing and sizing"
    ],
    howWeHelp: [
      "Touch-based tracing exercises on tablet",
      "Voice-to-text alternatives for expression",
      "Letter formation practice games",
      "Spelling exercises with visual cues",
      "Fine motor skill development activities"
    ],
    assessment: "Handwriting analysis, spelling test, written expression assessment"
  },
];

const DisabilitiesPage = () => {
  const [expanded, setExpanded] = useState<string | null>("dyslexia");

  return (
    <div className="space-y-8 pb-8">
      <div className="text-center">
        <div className="w-16 h-16 gradient-rose rounded-2xl flex items-center justify-center mx-auto mb-4">
          <HeartPulse className="w-8 h-8 text-primary-foreground" />
        </div>
        <h2 className="section-title">Learning Disabilities We Address</h2>
        <p className="section-subtitle">Samarth Shiksha identifies, supports, and provides therapy for the following learning conditions affecting children in government schools</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { value: "6", label: "Conditions Detected", color: "gradient-primary" },
          { value: "15+", label: "Assessment Tests", color: "gradient-hero" },
          { value: "30+", label: "Therapy Games", color: "gradient-warm" },
        ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className={`${s.color} text-primary-foreground rounded-2xl p-4 text-center shadow-card`}>
            <p className="font-display font-extrabold text-2xl">{s.value}</p>
            <p className="text-xs opacity-80">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Disability Cards */}
      <div className="space-y-4">
        {disabilities.map((d, i) => {
          const Icon = d.icon;
          const isExpanded = expanded === d.id;
          return (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`bg-card rounded-2xl shadow-card overflow-hidden border ${isExpanded ? d.bgColor : 'border-transparent'}`}
            >
              <button
                onClick={() => setExpanded(isExpanded ? null : d.id)}
                className="w-full p-5 flex items-center gap-4 text-left"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${d.color} flex items-center justify-center shadow-lg shrink-0`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display font-bold text-lg">{d.name}</h3>
                    <span className="text-[10px] font-bold bg-muted rounded-full px-2.5 py-0.5 text-muted-foreground">{d.prevalence} of children</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-0.5">{d.tagline}</p>
                </div>
                {isExpanded ? <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />}
              </button>

              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-5 pb-5 space-y-5"
                >
                  <p className="text-sm text-foreground/80 leading-relaxed">{d.description}</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-destructive/5 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="w-4 h-4 text-destructive" />
                        <h4 className="font-display font-bold text-sm text-destructive">Signs & Symptoms</h4>
                      </div>
                      <ul className="space-y-1.5">
                        {d.symptoms.map(s => (
                          <li key={s} className="text-xs text-foreground/70 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-1.5 shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-secondary/5 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                        <h4 className="font-display font-bold text-sm text-secondary">How Samarth Shiksha Helps</h4>
                      </div>
                      <ul className="space-y-1.5">
                        {d.howWeHelp.map(h => (
                          <li key={h} className="text-xs text-foreground/70 flex items-start gap-2">
                            <CheckCircle2 className="w-3 h-3 text-secondary mt-0.5 shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-xl p-4 flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-bold text-xs text-primary">Assessment Method</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{d.assessment}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="gradient-hero text-primary-foreground rounded-3xl p-8 text-center shadow-elevated">
        <h3 className="font-display font-bold text-xl mb-2">Early Detection is Key</h3>
        <p className="text-sm opacity-90 max-w-lg mx-auto">
          Research shows that identifying learning disabilities before age 8 leads to 70% better outcomes. Samarth Shiksha enables mass screening of children in government schools, ensuring no child is left behind.
        </p>
      </motion.div>
    </div>
  );
};

export default DisabilitiesPage;
