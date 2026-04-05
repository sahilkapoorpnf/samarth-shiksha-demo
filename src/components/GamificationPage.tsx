import { motion } from "framer-motion";
import { Star, Trophy, Flame, Award, Medal, Target, Zap } from "lucide-react";

const badges = [
  { name: "Reading Star", emoji: "📖", earned: true, desc: "Complete 10 reading exercises" },
  { name: "Focus Hero", emoji: "🎯", earned: true, desc: "Score 80%+ on attention tests" },
  { name: "Memory Master", emoji: "🧠", earned: true, desc: "Win 5 memory games" },
  { name: "Quick Learner", emoji: "⚡", earned: false, desc: "Complete 3 lessons in a day" },
  { name: "Super Listener", emoji: "👂", earned: false, desc: "Pass all listening tests" },
  { name: "Pattern Pro", emoji: "🔷", earned: true, desc: "Solve 20 pattern puzzles" },
];

const leaderboard = [
  { name: "Priya S.", points: 450, rank: 1 },
  { name: "Arjun K.", points: 380, rank: 2 },
  { name: "Ravi M.", points: 340, rank: 3 },
  { name: "Sneha P.", points: 290, rank: 4 },
  { name: "Amit R.", points: 250, rank: 5 },
];

const GamificationPage = () => (
  <div className="space-y-6 pb-8">
    <div className="text-center">
      <h2 className="font-display text-2xl font-bold">Rewards & Gamification</h2>
      <p className="text-muted-foreground text-sm mt-1">Stay motivated with points and badges</p>
    </div>

    {/* Stats row */}
    <div className="grid grid-cols-3 gap-3">
      {[
        { icon: Star, value: "380", label: "Points", color: "gradient-warm" },
        { icon: Flame, value: "5 Days", label: "Streak", color: "gradient-hero" },
        { icon: Trophy, value: "4/6", label: "Badges", color: "gradient-primary" },
      ].map((s, i) => (
        <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
          className={`${s.color} text-primary-foreground rounded-2xl p-4 text-center shadow-card`}>
          <s.icon className="w-6 h-6 mx-auto mb-1" />
          <p className="font-display font-extrabold text-xl">{s.value}</p>
          <p className="text-xs opacity-80">{s.label}</p>
        </motion.div>
      ))}
    </div>

    {/* Badges */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h3 className="font-display font-bold mb-4">Badges Collection</h3>
      <div className="grid grid-cols-3 gap-4">
        {badges.map((b, i) => (
          <motion.div key={b.name} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
            className={`text-center p-3 rounded-2xl transition-all ${b.earned ? "bg-secondary/10 border border-secondary/30" : "bg-muted opacity-50"}`}>
            <span className="text-3xl block mb-2">{b.emoji}</span>
            <p className="font-display font-bold text-xs">{b.name}</p>
            <p className="text-[10px] text-muted-foreground mt-1">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Leaderboard */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h3 className="font-display font-bold mb-4 flex items-center gap-2"><Medal className="w-5 h-5 text-accent" /> Class Leaderboard</h3>
      <div className="space-y-2">
        {leaderboard.map((s, i) => (
          <motion.div key={s.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className={`flex items-center gap-3 p-3 rounded-xl ${i === 1 ? "bg-primary/10 border border-primary/30" : "bg-muted"}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm ${
              i === 0 ? "gradient-warm text-accent-foreground" : i === 1 ? "gradient-primary text-primary-foreground" : "bg-border text-muted-foreground"
            }`}>{s.rank}</span>
            <span className="font-bold text-sm flex-1">{s.name}</span>
            <span className="font-display font-bold text-sm text-primary">{s.points} pts</span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default GamificationPage;
