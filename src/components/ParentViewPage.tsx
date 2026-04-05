import { motion } from "framer-motion";
import { Heart, TrendingUp, BookOpen, Home, Star, Calendar } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from "recharts";

const weeklyData = [
  { day: "Mon", score: 55 }, { day: "Tue", score: 58 }, { day: "Wed", score: 62 },
  { day: "Thu", score: 60 }, { day: "Fri", score: 68 }, { day: "Sat", score: 72 }, { day: "Sun", score: 75 },
];

const activities = [
  { title: "Read together for 15 mins", icon: BookOpen, done: true },
  { title: "Play memory card game", icon: Star, done: false },
  { title: "Practice counting objects", icon: Home, done: false },
  { title: "Tell a story before bed", icon: Heart, done: true },
];

const ParentViewPage = () => (
  <div className="space-y-6 pb-8">
    <div className="text-center">
      <h2 className="font-display text-2xl font-bold">Parent View</h2>
      <p className="text-muted-foreground text-sm mt-1">Track your child's progress</p>
    </div>

    {/* Encouraging message */}
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="gradient-hero text-primary-foreground rounded-3xl p-6 text-center shadow-card">
      <Heart className="w-8 h-8 mx-auto mb-2" />
      <h3 className="font-display font-bold text-lg">Your child is improving in reading! 🎉</h3>
      <p className="text-sm opacity-80 mt-2">Arjun's reading score improved by 15% this week. Keep encouraging him!</p>
    </motion.div>

    {/* Weekly Chart */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h3 className="font-display font-bold mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-primary" /> Weekly Progress</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={weeklyData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 90%)" />
          <XAxis dataKey="day" tick={{ fontSize: 12 }} />
          <YAxis domain={[40, 100]} tick={{ fontSize: 11 }} />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="hsl(160, 50%, 48%)" strokeWidth={3} dot={{ r: 5, fill: "hsl(160, 50%, 48%)" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>

    {/* Improvement Stats */}
    <div className="grid grid-cols-2 gap-4">
      {[
        { label: "Reading", before: "40%", after: "65%", change: "+25%" },
        { label: "Attention", before: "35%", after: "55%", change: "+20%" },
      ].map(s => (
        <div key={s.label} className="bg-card rounded-2xl shadow-card p-5 text-center">
          <p className="text-muted-foreground text-xs mb-1">{s.label}</p>
          <p className="font-display font-extrabold text-2xl text-secondary">{s.change}</p>
          <p className="text-xs text-muted-foreground mt-1">{s.before} → {s.after}</p>
        </div>
      ))}
    </div>

    {/* Home Activities */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h3 className="font-display font-bold mb-4 flex items-center gap-2"><Home className="w-5 h-5 text-accent" /> Suggested Home Activities</h3>
      <div className="space-y-3">
        {activities.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.div key={a.title} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-3 p-3 rounded-xl ${a.done ? "bg-secondary/10" : "bg-muted"}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${a.done ? "bg-secondary" : "bg-border"}`}>
                <Icon className={`w-5 h-5 ${a.done ? "text-secondary-foreground" : "text-muted-foreground"}`} />
              </div>
              <span className={`text-sm font-medium flex-1 ${a.done ? "line-through text-muted-foreground" : ""}`}>{a.title}</span>
              {a.done && <span className="text-secondary text-xs font-bold">Done ✓</span>}
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
);

export default ParentViewPage;
