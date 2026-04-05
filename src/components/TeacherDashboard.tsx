import { motion } from "framer-motion";
import { AlertTriangle, Users, BookOpen, TrendingUp, Filter, Search } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from "recharts";

const students = [
  { name: "Arjun Kumar", class: "4B", reading: "Low", attention: "Low", status: "needs-help" },
  { name: "Priya Sharma", class: "4B", reading: "High", attention: "High", status: "good" },
  { name: "Ravi Mishra", class: "4A", reading: "Medium", attention: "Low", status: "needs-help" },
  { name: "Sneha Patel", class: "4B", reading: "Medium", attention: "Medium", status: "ok" },
  { name: "Amit Reddy", class: "4A", reading: "Low", attention: "Medium", status: "needs-help" },
  { name: "Meera Joshi", class: "4A", reading: "High", attention: "High", status: "good" },
];

const progressData = [
  { week: "W1", reading: 30, attention: 25, memory: 40 },
  { week: "W2", reading: 35, attention: 30, memory: 45 },
  { week: "W3", reading: 42, attention: 38, memory: 50 },
  { week: "W4", reading: 50, attention: 45, memory: 55 },
  { week: "W5", reading: 55, attention: 50, memory: 62 },
  { week: "W6", reading: 65, attention: 58, memory: 68 },
];

const TeacherDashboard = () => (
  <div className="space-y-6 pb-8">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="font-display text-2xl font-bold">Teacher Dashboard</h2>
        <p className="text-muted-foreground text-sm">Class 4B • 32 Students</p>
      </div>
      <div className="flex gap-2">
        <button className="bg-card shadow-card p-2.5 rounded-xl hover:bg-muted transition-colors"><Filter className="w-4 h-4" /></button>
        <button className="bg-card shadow-card p-2.5 rounded-xl hover:bg-muted transition-colors"><Search className="w-4 h-4" /></button>
      </div>
    </div>

    {/* Alerts */}
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="bg-accent/10 border border-accent/30 rounded-2xl p-4 flex items-center gap-3">
      <AlertTriangle className="w-6 h-6 text-accent shrink-0" />
      <div>
        <p className="font-display font-bold text-sm">3 students need attention</p>
        <p className="text-xs text-muted-foreground">Arjun, Ravi, and Amit show declining performance this week</p>
      </div>
    </motion.div>

    {/* KPIs */}
    <div className="grid grid-cols-3 gap-3">
      {[
        { icon: Users, value: "32", label: "Total Students", color: "text-primary" },
        { icon: BookOpen, value: "85%", label: "Active Today", color: "text-secondary" },
        { icon: TrendingUp, value: "+12%", label: "Avg Improvement", color: "text-secondary" },
      ].map((k, i) => (
        <div key={k.label} className="bg-card rounded-2xl shadow-card p-4 text-center">
          <k.icon className={`w-5 h-5 mx-auto mb-1 ${k.color}`} />
          <p className={`font-display font-extrabold text-xl ${k.color}`}>{k.value}</p>
          <p className="text-xs text-muted-foreground">{k.label}</p>
        </div>
      ))}
    </div>

    {/* Progress Chart */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h3 className="font-display font-bold mb-4">Class Progress (6 Weeks)</h3>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={progressData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 90%)" />
          <XAxis dataKey="week" tick={{ fontSize: 11 }} />
          <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
          <Tooltip />
          <Line type="monotone" dataKey="reading" stroke="hsl(210, 80%, 55%)" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="attention" stroke="hsl(38, 90%, 55%)" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="memory" stroke="hsl(160, 50%, 48%)" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex gap-4 justify-center mt-3">
        {[{ label: "Reading", color: "bg-primary" }, { label: "Attention", color: "bg-accent" }, { label: "Memory", color: "bg-secondary" }].map(l => (
          <span key={l.label} className="flex items-center gap-1 text-xs"><span className={`w-2.5 h-2.5 rounded-full ${l.color}`} />{l.label}</span>
        ))}
      </div>
    </div>

    {/* Student List */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h3 className="font-display font-bold mb-4">Student List</h3>
      <div className="space-y-2">
        {students.map((s, i) => (
          <motion.div key={s.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
            className={`flex items-center gap-3 p-3 rounded-xl ${s.status === "needs-help" ? "bg-destructive/5 border border-destructive/20" : "bg-muted"}`}>
            <div className="w-9 h-9 gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
              {s.name.charAt(0)}
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm">{s.name}</p>
              <p className="text-xs text-muted-foreground">Class {s.class}</p>
            </div>
            <div className="flex gap-1">
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${s.reading === "Low" ? "bg-destructive/10 text-destructive" : s.reading === "Medium" ? "bg-accent/10 text-accent" : "bg-secondary/10 text-secondary"}`}>
                R: {s.reading}
              </span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${s.attention === "Low" ? "bg-destructive/10 text-destructive" : s.attention === "Medium" ? "bg-accent/10 text-accent" : "bg-secondary/10 text-secondary"}`}>
                A: {s.attention}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default TeacherDashboard;
