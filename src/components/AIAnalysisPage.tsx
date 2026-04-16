import { motion } from "framer-motion";
import { Brain, AlertTriangle, TrendingUp, Lightbulb, HeartPulse, BookOpen, Activity, Ear, Eye, Calculator, PenTool, CheckCircle2 } from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";

const radarData = [
  { subject: "Reading", score: 40, fullMark: 100 },
  { subject: "Math", score: 55, fullMark: 100 },
  { subject: "Memory", score: 72, fullMark: 100 },
  { subject: "Attention", score: 35, fullMark: 100 },
  { subject: "Listening", score: 65, fullMark: 100 },
  { subject: "Pattern", score: 80, fullMark: 100 },
  { subject: "Writing", score: 45, fullMark: 100 },
];

const barData = [
  { name: "Reading", score: 40, color: "hsl(0, 72%, 55%)" },
  { name: "Math", score: 55, color: "hsl(32, 95%, 52%)" },
  { name: "Memory", score: 72, color: "hsl(158, 55%, 42%)" },
  { name: "Attention", score: 35, color: "hsl(0, 72%, 55%)" },
  { name: "Listening", score: 65, color: "hsl(215, 85%, 50%)" },
  { name: "Pattern", score: 80, color: "hsl(158, 55%, 42%)" },
  { name: "Writing", score: 45, color: "hsl(32, 95%, 52%)" },
];

const abilities = [
  { label: "Reading Fluency", level: "High Risk", pct: 40, color: "bg-destructive", icon: BookOpen },
  { label: "Mathematical Ability", level: "Medium Risk", pct: 55, color: "bg-accent", icon: Calculator },
  { label: "Working Memory", level: "Low Risk", pct: 72, color: "bg-secondary", icon: Brain },
  { label: "Sustained Attention", level: "High Risk", pct: 35, color: "bg-destructive", icon: Activity },
  { label: "Listening Comprehension", level: "Medium Risk", pct: 65, color: "bg-primary", icon: Ear },
  { label: "Visual Processing", level: "No Risk", pct: 80, color: "bg-secondary", icon: Eye },
  { label: "Written Expression", level: "Medium Risk", pct: 45, color: "bg-accent", icon: PenTool },
];

const detectedConditions = [
  { name: "Dyslexia", confidence: "87%", severity: "Moderate", color: "bg-destructive/10 border-destructive/20 text-destructive", desc: "Difficulty with phonemic awareness, word decoding, and reading fluency" },
  { name: "ADHD (Inattentive)", confidence: "78%", severity: "Mild-Moderate", color: "bg-accent/10 border-accent/20 text-accent", desc: "Reduced sustained attention span, difficulty staying focused on tasks" },
  { name: "Dysgraphia", confidence: "62%", severity: "Mild", color: "bg-primary/10 border-primary/20 text-primary", desc: "Inconsistent letter formation and spelling difficulties" },
];

const interventions = [
  { condition: "Dyslexia", actions: ["Phonics-based reading games (Level 1-3)", "Audio-visual word matching exercises", "Text-to-speech assisted reading", "Orton-Gillingham method-based activities"] },
  { condition: "ADHD", actions: ["Short 3-minute focused sessions", "Headphone-based isolated learning", "Attention training games with rewards", "Movement breaks every 10 minutes"] },
  { condition: "Dysgraphia", actions: ["Touch-based letter tracing on tablet", "Spelling practice with visual cues", "Voice-to-text alternatives", "Fine motor skill exercises"] },
];

const AIAnalysisPage = () => (
  <div className="space-y-6 pb-8">
    <div className="text-center">
      <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4">
        <Brain className="w-8 h-8 text-primary-foreground" />
      </div>
      <h2 className="section-title">AI-Generated Learning Profile</h2>
      <p className="section-subtitle">Comprehensive analysis for <strong>Arjun Kumar</strong> • Class 4B • Age 9</p>
    </div>

    {/* Detected Conditions */}
    <div className="bg-destructive/5 border border-destructive/15 rounded-3xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <HeartPulse className="w-5 h-5 text-destructive" />
        <h3 className="font-display font-bold">Detected Learning Conditions</h3>
      </div>
      <div className="space-y-3">
        {detectedConditions.map((c, i) => (
          <motion.div key={c.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }}
            className={`${c.color} border rounded-2xl p-4`}>
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-display font-bold">{c.name}</h4>
              <div className="flex gap-2">
                <span className="text-xs font-bold bg-card rounded-full px-2.5 py-0.5">Confidence: {c.confidence}</span>
                <span className="text-xs font-bold bg-card rounded-full px-2.5 py-0.5">Severity: {c.severity}</span>
              </div>
            </div>
            <p className="text-xs opacity-80">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-3xl shadow-card p-6">
        <h3 className="font-display font-bold mb-4">Ability Radar (7 Domains)</h3>
        <ResponsiveContainer width="100%" height={280}>
          <RadarChart data={radarData}>
            <PolarGrid stroke="hsl(220, 18%, 88%)" />
            <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fontFamily: "Quicksand" }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
            <Radar name="Score" dataKey="score" stroke="hsl(215, 85%, 50%)" fill="hsl(215, 85%, 50%)" fillOpacity={0.2} strokeWidth={2} />
          </RadarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="bg-card rounded-3xl shadow-card p-6">
        <h3 className="font-display font-bold mb-4">Domain Score Breakdown</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={barData}>
            <XAxis dataKey="name" tick={{ fontSize: 10, fontFamily: "Quicksand" }} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="score" radius={[8, 8, 0, 0]}>
              {barData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>

    <div className="bg-card rounded-3xl shadow-card p-6 space-y-4">
      <h3 className="font-display font-bold">Detailed Domain Scores</h3>
      {abilities.map((a, i) => {
        const Icon = a.icon;
        return (
          <motion.div key={a.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="font-medium flex items-center gap-2"><Icon className="w-4 h-4 text-muted-foreground" />{a.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{a.pct}%</span>
                <span className={`font-bold text-xs px-2 py-0.5 rounded-full ${
                  a.level === "High Risk" ? "bg-destructive/10 text-destructive" : a.level === "Medium Risk" ? "bg-accent/10 text-accent" : a.level === "Low Risk" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                }`}>{a.level}</span>
              </div>
            </div>
            <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
              <motion.div className={`h-full rounded-full ${a.color}`} initial={{ width: 0 }} animate={{ width: `${a.pct}%` }} transition={{ duration: 1, delay: 0.3 + i * 0.08 }} />
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* AI Insight */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
      className="bg-accent/10 border-2 border-accent/30 rounded-2xl p-6">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
        <div>
          <h3 className="font-display font-bold text-sm mb-2">AI Diagnostic Summary</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Arjun shows strong indicators of <strong>Dyslexia</strong> (reading fluency score 40%, phonemic awareness below age level) and <strong>ADHD-Inattentive type</strong> (attention score 35%, significant impulse control errors). 
            Mild <strong>Dysgraphia</strong> markers detected in writing assessment. Pattern recognition and memory scores are within normal range, indicating preserved logical reasoning ability.
          </p>
        </div>
      </div>
    </motion.div>

    {/* Recommended Interventions */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="w-5 h-5 text-accent" />
        <h3 className="font-display font-bold">Recommended Interventions</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {interventions.map((inv, i) => (
          <motion.div key={inv.condition} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
            className="bg-muted/50 rounded-2xl p-4">
            <h4 className="font-display font-bold text-sm mb-3">For {inv.condition}:</h4>
            <ul className="space-y-2">
              {inv.actions.map(a => (
                <li key={a} className="text-xs text-muted-foreground flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary mt-0.5 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-5 flex items-start gap-3">
        <TrendingUp className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
        <div><h4 className="font-display font-bold text-sm">Key Strength</h4><p className="text-xs text-muted-foreground mt-1">Strong pattern recognition (80%) and working memory (72%) indicate good logical reasoning potential that can be leveraged for learning.</p></div>
      </div>
      <div className="bg-primary/10 border border-primary/30 rounded-2xl p-5 flex items-start gap-3">
        <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <div><h4 className="font-display font-bold text-sm">Priority Action</h4><p className="text-xs text-muted-foreground mt-1">Begin with headphone-based phonics exercises. Use audio-visual methods to leverage listening skills (65%) while building reading fluency.</p></div>
      </div>
    </div>
  </div>
);

export default AIAnalysisPage;
