import { motion } from "framer-motion";
import { AlertTriangle, Users, BookOpen, TrendingUp, Filter, Search, HeartPulse, Bell, FileText, ChevronRight, Activity, LayoutDashboard, UserCheck, BarChart3, ClipboardList, Settings, MessageSquare, Calendar, PieChart } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from "recharts";
import { useState } from "react";

const sidebarItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "students", label: "Student List", icon: Users },
  { id: "progress", label: "Progress", icon: BarChart3 },
  { id: "assessments", label: "Assessments", icon: ClipboardList },
  { id: "reports", label: "Reports", icon: FileText },
  { id: "messages", label: "Messages", icon: MessageSquare },
  { id: "schedule", label: "Schedule", icon: Calendar },
  { id: "settings", label: "Settings", icon: Settings },
];

const students = [
  { name: "Arjun Kumar", class: "4B", conditions: ["Dyslexia", "ADHD"], reading: "Low", attention: "Low", status: "needs-help", improvement: "-2%" },
  { name: "Priya Sharma", class: "4B", conditions: [], reading: "High", attention: "High", status: "good", improvement: "+15%" },
  { name: "Ravi Mishra", class: "4A", conditions: ["ADHD"], reading: "Medium", attention: "Low", status: "needs-help", improvement: "+5%" },
  { name: "Sneha Patel", class: "4B", conditions: ["Dyscalculia"], reading: "Medium", attention: "Medium", status: "ok", improvement: "+10%" },
  { name: "Amit Reddy", class: "4A", conditions: ["Dyslexia", "Dysgraphia"], reading: "Low", attention: "Medium", status: "needs-help", improvement: "+3%" },
  { name: "Meera Joshi", class: "4A", conditions: [], reading: "High", attention: "High", status: "good", improvement: "+20%" },
];

const progressData = [
  { week: "W1", reading: 30, attention: 25, memory: 40 },
  { week: "W2", reading: 35, attention: 30, memory: 45 },
  { week: "W3", reading: 42, attention: 38, memory: 50 },
  { week: "W4", reading: 50, attention: 45, memory: 55 },
  { week: "W5", reading: 55, attention: 50, memory: 62 },
  { week: "W6", reading: 65, attention: 58, memory: 68 },
];

const alerts = [
  { title: "3 students need immediate attention", desc: "Arjun, Ravi, and Amit show declining scores this week", type: "danger" },
  { title: "Sneha Patel completed all math games", desc: "Dyscalculia intervention showing positive results (+10%)", type: "success" },
  { title: "New assessment results available", desc: "8 students completed weekly re-assessment — view reports", type: "info" },
];

const TeacherDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="flex gap-4 pb-8">
      {/* Left Sidebar */}
      <div className="hidden md:block w-52 shrink-0">
        <div className="bg-card rounded-2xl shadow-card p-3 sticky top-20">
          <div className="flex items-center gap-2 px-3 py-2 mb-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <UserCheck className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <p className="font-display font-bold text-xs">Mrs. Sunita</p>
              <p className="text-[9px] text-muted-foreground">Class 4B</p>
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

      {/* Mobile sidebar as horizontal scroll */}
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
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold">Teacher Dashboard</h2>
            <p className="text-muted-foreground text-sm">Mrs. Sunita Verma • Class 4B • 32 Students</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-card shadow-card p-2.5 rounded-xl hover:bg-muted transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full text-[8px] text-destructive-foreground font-bold flex items-center justify-center">3</span>
            </button>
          </div>
        </div>

        {/* Alerts */}
        <div className="space-y-2">
          {alerts.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-4 flex items-center gap-3 ${
                a.type === "danger" ? "bg-destructive/10 border border-destructive/20" : a.type === "success" ? "bg-secondary/10 border border-secondary/20" : "bg-primary/10 border border-primary/20"
              }`}>
              {a.type === "danger" ? <AlertTriangle className="w-5 h-5 text-destructive shrink-0" /> :
               a.type === "success" ? <TrendingUp className="w-5 h-5 text-secondary shrink-0" /> :
               <FileText className="w-5 h-5 text-primary shrink-0" />}
              <div className="flex-1 min-w-0">
                <p className="font-display font-bold text-sm">{a.title}</p>
                <p className="text-xs text-muted-foreground">{a.desc}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
            </motion.div>
          ))}
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: Users, value: "32", label: "Total Students", color: "text-primary" },
            { icon: HeartPulse, value: "12", label: "With Disabilities", color: "text-destructive" },
            { icon: BookOpen, value: "85%", label: "Active Today", color: "text-secondary" },
            { icon: TrendingUp, value: "+12%", label: "Avg Improvement", color: "text-secondary" },
          ].map((k) => (
            <div key={k.label} className="bg-card rounded-2xl shadow-card p-4 text-center">
              <k.icon className={`w-5 h-5 mx-auto mb-1 ${k.color}`} />
              <p className={`font-display font-extrabold text-xl ${k.color}`}>{k.value}</p>
              <p className="text-[10px] text-muted-foreground">{k.label}</p>
            </div>
          ))}
        </div>

        {/* Disability Breakdown */}
        <div className="bg-card rounded-3xl shadow-card p-6">
          <h3 className="font-display font-bold mb-3 flex items-center gap-2"><HeartPulse className="w-5 h-5 text-destructive" /> Disability Distribution in Class</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              { name: "Dyslexia", count: 5, color: "bg-primary/10 text-primary" },
              { name: "ADHD", count: 4, color: "bg-accent/10 text-accent" },
              { name: "Dyscalculia", count: 2, color: "bg-purple-500/10 text-purple-600" },
              { name: "APD", count: 1, color: "bg-secondary/10 text-secondary" },
              { name: "Dysgraphia", count: 2, color: "bg-destructive/10 text-destructive" },
              { name: "No LD", count: 18, color: "bg-secondary/10 text-secondary" },
            ].map(d => (
              <div key={d.name} className={`${d.color} rounded-xl p-3 text-center`}>
                <p className="font-display font-extrabold text-lg">{d.count}</p>
                <p className="text-[10px] font-bold">{d.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Chart */}
        <div className="bg-card rounded-3xl shadow-card p-6">
          <h3 className="font-display font-bold mb-4">Class Progress (6 Weeks)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 18%, 88%)" />
              <XAxis dataKey="week" tick={{ fontSize: 11 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Line type="monotone" dataKey="reading" stroke="hsl(215, 85%, 50%)" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="attention" stroke="hsl(32, 95%, 52%)" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="memory" stroke="hsl(158, 55%, 42%)" strokeWidth={2} dot={{ r: 4 }} />
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
          <h3 className="font-display font-bold mb-4">Student Profiles</h3>
          <div className="space-y-2">
            {students.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                className={`flex items-center gap-3 p-3 rounded-xl ${s.status === "needs-help" ? "bg-destructive/5 border border-destructive/15" : "bg-muted"}`}>
                <div className="w-9 h-9 gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {s.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm">{s.name}</p>
                  <div className="flex gap-1 flex-wrap mt-0.5">
                    {s.conditions.length > 0 ? s.conditions.map(c => (
                      <span key={c} className="text-[9px] font-bold bg-destructive/10 text-destructive px-1.5 py-0.5 rounded-full">{c}</span>
                    )) : <span className="text-[9px] font-bold bg-secondary/10 text-secondary px-1.5 py-0.5 rounded-full">No LD</span>}
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                    s.reading === "Low" ? "bg-destructive/10 text-destructive" : s.reading === "Medium" ? "bg-accent/10 text-accent" : "bg-secondary/10 text-secondary"
                  }`}>R:{s.reading}</span>
                  <span className={`text-xs font-bold ${s.improvement.startsWith("+") ? "text-secondary" : "text-destructive"}`}>{s.improvement}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
