import { motion } from "framer-motion";
import { Heart, TrendingUp, BookOpen, Home, Star, Calendar, HeartPulse, MessageSquare, CheckCircle2, AlertTriangle, Brain, LayoutDashboard, Activity, Bell, Settings, FileText, Gamepad2, Phone } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from "recharts";
import { useState } from "react";

const sidebarItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "progress", label: "Progress", icon: TrendingUp },
  { id: "activities", label: "Home Activities", icon: Home },
  { id: "milestones", label: "Milestones", icon: Star },
  { id: "reports", label: "Reports", icon: FileText },
  { id: "messages", label: "Messages", icon: MessageSquare },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "settings", label: "Settings", icon: Settings },
];

const weeklyData = [
  { day: "Mon", score: 55 }, { day: "Tue", score: 58 }, { day: "Wed", score: 62 },
  { day: "Thu", score: 60 }, { day: "Fri", score: 68 }, { day: "Sat", score: 72 }, { day: "Sun", score: 75 },
];

const activities = [
  { title: "Read together for 15 mins", icon: BookOpen, done: true, why: "Builds phonemic awareness — helps with Dyslexia" },
  { title: "Play memory card game", icon: Brain, done: false, why: "Strengthens working memory — supports attention" },
  { title: "Practice counting with objects", icon: Star, done: false, why: "Concrete math understanding — helps with Dyscalculia" },
  { title: "Tell a story before bed", icon: Heart, done: true, why: "Listening comprehension — helps with APD" },
  { title: "Draw and trace letters", icon: Home, done: false, why: "Fine motor skills — helps with Dysgraphia" },
];

const milestones = [
  { week: "Week 1", achievement: "Completed first reading assessment", status: "done" },
  { week: "Week 2", achievement: "Started phonics-based exercises", status: "done" },
  { week: "Week 3", achievement: "Reading speed improved by 10%", status: "done" },
  { week: "Week 4", achievement: "Earned 'Reading Star' badge", status: "done" },
  { week: "Week 5", achievement: "Attention score improved to Medium", status: "current" },
  { week: "Week 6", achievement: "Target: Reading score above 60%", status: "upcoming" },
];

const ParentViewPage = () => {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="flex gap-4 pb-8">
      {/* Left Sidebar */}
      <div className="hidden md:block w-52 shrink-0">
        <div className="bg-card rounded-2xl shadow-card p-3 sticky top-20">
          <div className="flex items-center gap-2 px-3 py-2 mb-2">
            <div className="w-8 h-8 gradient-warm rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <p className="font-display font-bold text-xs">Parent Portal</p>
              <p className="text-[9px] text-muted-foreground">Arjun's Parent</p>
            </div>
          </div>
          <nav className="space-y-0.5">
            {sidebarItems.map(item => {
              const Icon = item.icon;
              return (
                <button key={item.id} onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    activeSection === item.id ? "bg-primary/10 text-primary font-bold" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}>
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div className="md:hidden fixed top-14 left-0 right-0 z-40 glass border-b border-border px-2 py-1.5 overflow-x-auto no-scrollbar flex gap-1">
        {sidebarItems.map(item => {
          const Icon = item.icon;
          return (
            <button key={item.id} onClick={() => setActiveSection(item.id)}
              className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                activeSection === item.id ? "bg-primary/10 text-primary" : "text-muted-foreground"
              }`}>
              <Icon className="w-3 h-3" />
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6 min-w-0 md:pt-0 pt-10">
        <div className="text-center">
          <h2 className="section-title">Parent View</h2>
          <p className="section-subtitle">Easy-to-understand progress reports and home activity suggestions</p>
        </div>

        {/* Encouraging message */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="gradient-hero text-primary-foreground rounded-3xl p-6 text-center shadow-card">
          <Heart className="w-8 h-8 mx-auto mb-2" />
          <h3 className="font-display font-bold text-lg">Your child is improving! 🎉</h3>
          <p className="text-sm opacity-90 mt-2">Arjun's reading score improved by <strong>25%</strong> this month. His attention span is also getting better. Keep supporting him at home!</p>
        </motion.div>

        {/* Child's Conditions */}
        <div className="bg-card rounded-3xl shadow-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <HeartPulse className="w-5 h-5 text-destructive" />
            <h3 className="font-display font-bold">Your Child's Learning Profile</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">The AI assessment has identified the following areas where Arjun needs extra support:</p>
          <div className="space-y-3">
            {[
              { condition: "Dyslexia (Moderate)", desc: "Arjun has difficulty with reading fluency and word recognition. This is very common and treatable with the right exercises.", color: "bg-primary/10 border-primary/20" },
              { condition: "ADHD - Inattentive (Mild)", desc: "Arjun sometimes finds it hard to focus for long periods. Short, fun activities work best for him.", color: "bg-accent/10 border-accent/20" },
            ].map(c => (
              <div key={c.condition} className={`${c.color} border rounded-2xl p-4`}>
                <p className="font-display font-bold text-sm">{c.condition}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-3 mt-3 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground"><strong className="text-foreground">Don't worry!</strong> These are common conditions that respond very well to early intervention. With consistent practice, most children show significant improvement within 8-12 weeks.</p>
          </div>
        </div>

        {/* Weekly Chart */}
        <div className="bg-card rounded-3xl shadow-card p-6">
          <h3 className="font-display font-bold mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-primary" /> Weekly Progress</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 18%, 88%)" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis domain={[40, 100]} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="hsl(158, 55%, 42%)" strokeWidth={3} dot={{ r: 5, fill: "hsl(158, 55%, 42%)" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Improvement Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Reading", before: "40%", after: "65%", change: "+25%" },
            { label: "Attention", before: "35%", after: "55%", change: "+20%" },
            { label: "Writing", before: "45%", after: "58%", change: "+13%" },
          ].map(s => (
            <div key={s.label} className="bg-card rounded-2xl shadow-card p-4 text-center">
              <p className="text-muted-foreground text-xs mb-1">{s.label}</p>
              <p className="font-display font-extrabold text-2xl text-secondary">{s.change}</p>
              <p className="text-[10px] text-muted-foreground mt-1">{s.before} → {s.after}</p>
            </div>
          ))}
        </div>

        {/* Milestones */}
        <div className="bg-card rounded-3xl shadow-card p-6">
          <h3 className="font-display font-bold mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-secondary" /> Learning Milestones</h3>
          <div className="space-y-3">
            {milestones.map((m, i) => (
              <motion.div key={m.week} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                className={`flex items-center gap-3 p-3 rounded-xl ${m.status === "done" ? "bg-secondary/10" : m.status === "current" ? "bg-primary/10 border border-primary/20" : "bg-muted opacity-50"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  m.status === "done" ? "bg-secondary text-secondary-foreground" : m.status === "current" ? "bg-primary text-primary-foreground animate-pulse" : "bg-muted-foreground/20 text-muted-foreground"
                }`}>{m.status === "done" ? "✓" : m.status === "current" ? "→" : "○"}</div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-muted-foreground">{m.week}</p>
                  <p className="text-sm font-medium">{m.achievement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Home Activities */}
        <div className="bg-card rounded-3xl shadow-card p-6">
          <h3 className="font-display font-bold mb-1 flex items-center gap-2"><Home className="w-5 h-5 text-accent" /> Suggested Home Activities</h3>
          <p className="text-xs text-muted-foreground mb-4">Simple activities you can do at home to support Arjun's learning</p>
          <div className="space-y-3">
            {activities.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.div key={a.title} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                  className={`p-3 rounded-xl ${a.done ? "bg-secondary/10" : "bg-muted"}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${a.done ? "bg-secondary" : "bg-border"}`}>
                      <Icon className={`w-5 h-5 ${a.done ? "text-secondary-foreground" : "text-muted-foreground"}`} />
                    </div>
                    <div className="flex-1">
                      <span className={`text-sm font-medium ${a.done ? "line-through text-muted-foreground" : ""}`}>{a.title}</span>
                      <p className="text-[10px] text-primary mt-0.5">{a.why}</p>
                    </div>
                    {a.done && <span className="text-secondary text-xs font-bold">Done ✓</span>}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Teacher Message */}
        <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5 flex items-start gap-3">
          <MessageSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <h4 className="font-display font-bold text-sm">Message from Teacher</h4>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">"Arjun is making great progress! He completed 3 reading exercises this week and his attention is improving. Please continue reading with him at home for 15 minutes daily." — Mrs. Sunita Verma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentViewPage;
