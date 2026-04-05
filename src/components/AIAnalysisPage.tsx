import { motion } from "framer-motion";
import { Brain, AlertTriangle, TrendingUp, Lightbulb } from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";

const radarData = [
  { subject: "Reading", score: 40, fullMark: 100 },
  { subject: "Memory", score: 72, fullMark: 100 },
  { subject: "Attention", score: 35, fullMark: 100 },
  { subject: "Listening", score: 65, fullMark: 100 },
  { subject: "Pattern", score: 80, fullMark: 100 },
];

const barData = [
  { name: "Reading", score: 40, color: "hsl(0, 72%, 55%)" },
  { name: "Memory", score: 72, color: "hsl(160, 50%, 48%)" },
  { name: "Attention", score: 35, color: "hsl(38, 90%, 55%)" },
  { name: "Listening", score: 65, color: "hsl(210, 80%, 55%)" },
  { name: "Pattern", score: 80, color: "hsl(160, 50%, 48%)" },
];

const abilities = [
  { label: "Reading Ability", level: "Low", pct: 40, color: "bg-destructive" },
  { label: "Memory Score", level: "Medium", pct: 72, color: "bg-secondary" },
  { label: "Attention Score", level: "Low", pct: 35, color: "bg-accent" },
  { label: "Listening Comprehension", level: "Medium", pct: 65, color: "bg-primary" },
  { label: "Pattern Recognition", level: "High", pct: 80, color: "bg-secondary" },
];

const AIAnalysisPage = () => (
  <div className="space-y-6 pb-8">
    <div className="text-center">
      <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-3">
        <Brain className="w-8 h-8 text-primary-foreground" />
      </div>
      <h2 className="font-display text-2xl font-bold">Learning Ability Profile</h2>
      <p className="text-muted-foreground text-sm mt-1">AI-generated analysis for Arjun Kumar</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {/* Radar Chart */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-3xl shadow-card p-6">
        <h3 className="font-display font-bold mb-4">Ability Radar</h3>
        <ResponsiveContainer width="100%" height={280}>
          <RadarChart data={radarData}>
            <PolarGrid stroke="hsl(210, 20%, 90%)" />
            <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fontFamily: "Quicksand" }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
            <Radar name="Score" dataKey="score" stroke="hsl(210, 80%, 55%)" fill="hsl(210, 80%, 55%)" fillOpacity={0.25} strokeWidth={2} />
          </RadarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Bar Chart */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="bg-card rounded-3xl shadow-card p-6">
        <h3 className="font-display font-bold mb-4">Score Breakdown</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={barData}>
            <XAxis dataKey="name" tick={{ fontSize: 11, fontFamily: "Quicksand" }} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="score" radius={[8, 8, 0, 0]}>
              {barData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>

    {/* Ability Bars */}
    <div className="bg-card rounded-3xl shadow-card p-6 space-y-4">
      <h3 className="font-display font-bold">Detailed Scores</h3>
      {abilities.map((a, i) => (
        <motion.div key={a.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium">{a.label}</span>
            <span className={`font-bold ${a.level === "Low" ? "text-destructive" : a.level === "Medium" ? "text-accent" : "text-secondary"}`}>{a.level}</span>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <motion.div className={`h-full rounded-full ${a.color}`} initial={{ width: 0 }} animate={{ width: `${a.pct}%` }} transition={{ duration: 1, delay: 0.3 + i * 0.1 }} />
          </div>
        </motion.div>
      ))}
    </div>

    {/* Insight Box */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
      className="bg-accent/10 border-2 border-accent/30 rounded-2xl p-6">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
        <div>
          <h3 className="font-display font-bold text-sm mb-1">AI Insight</h3>
          <p className="text-sm text-muted-foreground">This student shows signs of <strong>reading difficulty</strong> and <strong>low attention span</strong>. Recommended interventions include phonics-based reading exercises and focused attention games with gradual complexity increase.</p>
        </div>
      </div>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-5 flex items-start gap-3">
        <TrendingUp className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
        <div><h4 className="font-display font-bold text-sm">Strength</h4><p className="text-xs text-muted-foreground mt-1">Strong pattern recognition skills indicate good logical reasoning potential.</p></div>
      </div>
      <div className="bg-primary/10 border border-primary/30 rounded-2xl p-5 flex items-start gap-3">
        <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <div><h4 className="font-display font-bold text-sm">Recommendation</h4><p className="text-xs text-muted-foreground mt-1">Use audio-visual learning methods to leverage listening skills while building reading ability.</p></div>
      </div>
    </div>
  </div>
);

export default AIAnalysisPage;
