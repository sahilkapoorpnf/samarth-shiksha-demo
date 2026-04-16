import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Users, BookOpen, TrendingUp, Search, HeartPulse, Bell, FileText, ChevronRight, Activity, LayoutDashboard, UserCheck, BarChart3, ClipboardList, Settings, MessageSquare, Calendar, Download, CheckCircle2, Clock, Send, Filter, Eye, Printer } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, PieChart, Pie, Cell } from "recharts";
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
  { name: "Arjun Kumar", class: "4B", conditions: ["Dyslexia", "ADHD"], reading: "Low", attention: "Low", status: "needs-help", improvement: "-2%", age: 9, lastActive: "Today" },
  { name: "Priya Sharma", class: "4B", conditions: [], reading: "High", attention: "High", status: "good", improvement: "+15%", age: 10, lastActive: "Today" },
  { name: "Ravi Mishra", class: "4A", conditions: ["ADHD"], reading: "Medium", attention: "Low", status: "needs-help", improvement: "+5%", age: 9, lastActive: "Yesterday" },
  { name: "Sneha Patel", class: "4B", conditions: ["Dyscalculia"], reading: "Medium", attention: "Medium", status: "ok", improvement: "+10%", age: 10, lastActive: "Today" },
  { name: "Amit Reddy", class: "4A", conditions: ["Dyslexia", "Dysgraphia"], reading: "Low", attention: "Medium", status: "needs-help", improvement: "+3%", age: 9, lastActive: "2 days ago" },
  { name: "Meera Joshi", class: "4A", conditions: [], reading: "High", attention: "High", status: "good", improvement: "+20%", age: 10, lastActive: "Today" },
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

const messages = [
  { from: "Arjun's Parent", time: "2h ago", msg: "Thank you for the extra reading support. He's reading at home now!", unread: true },
  { from: "School Principal", time: "5h ago", msg: "Please submit disability reports for district review by Friday.", unread: true },
  { from: "Sneha's Parent", time: "1d ago", msg: "Can we schedule a meeting to discuss Sneha's math progress?", unread: false },
  { from: "System", time: "2d ago", msg: "Monthly progress reports are ready for download.", unread: false },
  { from: "Ravi's Parent", time: "3d ago", msg: "Ravi is enjoying the attention games. Any more recommendations?", unread: false },
];

const scheduleItems = [
  { time: "8:00 AM", title: "Morning Assessment — Class 4B", type: "assessment", status: "completed" },
  { time: "9:30 AM", title: "Reading Intervention — Arjun, Amit", type: "intervention", status: "completed" },
  { time: "11:00 AM", title: "Regular Class — Mathematics", type: "class", status: "current" },
  { time: "12:30 PM", title: "Lunch Break", type: "break", status: "upcoming" },
  { time: "1:30 PM", title: "Attention Training — Ravi, Arjun", type: "intervention", status: "upcoming" },
  { time: "3:00 PM", title: "Parent Meeting — Sneha's Parent", type: "meeting", status: "upcoming" },
  { time: "4:00 PM", title: "Generate Weekly Reports", type: "admin", status: "upcoming" },
];

const assessmentHistory = [
  { student: "Arjun Kumar", date: "Apr 14", domain: "Reading", score: 35, risk: "High" },
  { student: "Arjun Kumar", date: "Apr 14", domain: "Attention", score: 28, risk: "High" },
  { student: "Sneha Patel", date: "Apr 13", domain: "Math", score: 52, risk: "Medium" },
  { student: "Ravi Mishra", date: "Apr 13", domain: "Attention", score: 40, risk: "Medium" },
  { student: "Priya Sharma", date: "Apr 12", domain: "Reading", score: 88, risk: "No Risk" },
  { student: "Amit Reddy", date: "Apr 12", domain: "Writing", score: 30, risk: "High" },
  { student: "Meera Joshi", date: "Apr 11", domain: "Memory", score: 82, risk: "No Risk" },
];

const reportsList = [
  { title: "Weekly Class Progress Report", date: "Apr 14, 2026", type: "Weekly", status: "Ready" },
  { title: "Arjun Kumar — Individual Report", date: "Apr 13, 2026", type: "Individual", status: "Ready" },
  { title: "Disability Distribution Summary", date: "Apr 12, 2026", type: "Analytics", status: "Ready" },
  { title: "Sneha Patel — Intervention Report", date: "Apr 10, 2026", type: "Individual", status: "Ready" },
  { title: "Monthly District Submission", date: "Apr 1, 2026", type: "Government", status: "Submitted" },
];

const pieData = [
  { name: "Dyslexia", value: 5, color: "hsl(215, 85%, 50%)" },
  { name: "ADHD", value: 4, color: "hsl(32, 95%, 52%)" },
  { name: "Dyscalculia", value: 2, color: "hsl(280, 60%, 55%)" },
  { name: "APD", value: 1, color: "hsl(158, 55%, 42%)" },
  { name: "Dysgraphia", value: 2, color: "hsl(0, 70%, 55%)" },
  { name: "No LD", value: 18, color: "hsl(220, 10%, 75%)" },
];

const TeacherDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderContent = () => {
    switch (activeSection) {
      case "students":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-bold">Student List</h3>
              <div className="flex gap-2">
                <button className="bg-muted px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1"><Filter className="w-3 h-3" /> Filter</button>
                <button className="bg-muted px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1"><Search className="w-3 h-3" /> Search</button>
              </div>
            </div>
            <div className="bg-card rounded-2xl shadow-card overflow-hidden">
              <div className="grid grid-cols-6 gap-2 px-4 py-2 bg-muted text-[10px] font-bold text-muted-foreground uppercase">
                <span className="col-span-2">Student</span><span>Conditions</span><span>Reading</span><span>Progress</span><span>Action</span>
              </div>
              {students.map((s, i) => (
                <motion.div key={s.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                  className={`grid grid-cols-6 gap-2 items-center px-4 py-3 border-t border-border ${s.status === "needs-help" ? "bg-destructive/5" : ""}`}>
                  <div className="col-span-2 flex items-center gap-2">
                    <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs">{s.name.charAt(0)}</div>
                    <div><p className="text-xs font-bold">{s.name}</p><p className="text-[9px] text-muted-foreground">Age {s.age} • {s.class} • {s.lastActive}</p></div>
                  </div>
                  <div className="flex flex-wrap gap-0.5">{s.conditions.length > 0 ? s.conditions.map(c => <span key={c} className="text-[8px] bg-destructive/10 text-destructive px-1 py-0.5 rounded">{c}</span>) : <span className="text-[8px] bg-secondary/10 text-secondary px-1 py-0.5 rounded">None</span>}</div>
                  <span className={`text-[10px] font-bold ${s.reading === "Low" ? "text-destructive" : s.reading === "Medium" ? "text-accent" : "text-secondary"}`}>{s.reading}</span>
                  <span className={`text-[10px] font-bold ${s.improvement.startsWith("+") ? "text-secondary" : "text-destructive"}`}>{s.improvement}</span>
                  <button className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-lg font-bold flex items-center gap-1"><Eye className="w-3 h-3" /> View</button>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "progress":
        return (
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold">Class Progress Analytics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[{ label: "Avg Reading", val: "52%", change: "+12%", color: "text-primary" }, { label: "Avg Attention", val: "48%", change: "+8%", color: "text-accent" }, { label: "Avg Memory", val: "60%", change: "+15%", color: "text-secondary" }, { label: "Overall", val: "53%", change: "+11%", color: "text-primary" }].map(s => (
                <div key={s.label} className="bg-card rounded-2xl shadow-card p-4 text-center">
                  <p className={`font-display font-extrabold text-2xl ${s.color}`}>{s.val}</p>
                  <p className="text-[10px] text-muted-foreground">{s.label}</p>
                  <p className="text-[10px] text-secondary font-bold">{s.change} this month</p>
                </div>
              ))}
            </div>
            <div className="bg-card rounded-3xl shadow-card p-6">
              <h4 className="font-display font-bold mb-4">6-Week Trend</h4>
              <ResponsiveContainer width="100%" height={250}>
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
            <div className="bg-card rounded-3xl shadow-card p-6">
              <h4 className="font-display font-bold mb-4">Disability Distribution</h4>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart><Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
                  {pieData.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
                </Pie><Tooltip /></PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case "assessments":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-bold">Assessment Records</h3>
              <button className="gradient-primary text-primary-foreground px-4 py-2 rounded-xl text-xs font-bold">+ New Assessment</button>
            </div>
            <div className="bg-card rounded-2xl shadow-card overflow-hidden">
              <div className="grid grid-cols-5 gap-2 px-4 py-2 bg-muted text-[10px] font-bold text-muted-foreground uppercase">
                <span>Student</span><span>Date</span><span>Domain</span><span>Score</span><span>Risk</span>
              </div>
              {assessmentHistory.map((a, i) => (
                <motion.div key={`${a.student}-${a.domain}-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                  className="grid grid-cols-5 gap-2 items-center px-4 py-3 border-t border-border">
                  <p className="text-xs font-bold">{a.student}</p>
                  <p className="text-[10px] text-muted-foreground">{a.date}</p>
                  <p className="text-[10px] font-bold">{a.domain}</p>
                  <p className="text-xs font-bold">{a.score}%</p>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full text-center ${a.risk === "High" ? "bg-destructive/10 text-destructive" : a.risk === "Medium" ? "bg-accent/10 text-accent" : "bg-secondary/10 text-secondary"}`}>{a.risk}</span>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "reports":
        return (
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold">Reports</h3>
            <div className="space-y-3">
              {reportsList.map((r, i) => (
                <motion.div key={r.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-2xl shadow-card p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"><FileText className="w-5 h-5 text-primary" /></div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm">{r.title}</p>
                    <p className="text-[10px] text-muted-foreground">{r.date} • {r.type}</p>
                  </div>
                  <span className={`text-[9px] font-bold px-2 py-1 rounded-full ${r.status === "Submitted" ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"}`}>{r.status}</span>
                  <button className="bg-muted p-2 rounded-lg hover:bg-muted/80"><Download className="w-4 h-4 text-muted-foreground" /></button>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "messages":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-bold">Messages</h3>
              <button className="gradient-primary text-primary-foreground px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1"><Send className="w-3 h-3" /> Compose</button>
            </div>
            <div className="space-y-2">
              {messages.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                  className={`bg-card rounded-2xl shadow-card p-4 flex items-start gap-3 cursor-pointer hover:bg-muted/50 transition-colors ${m.unread ? "border-l-4 border-primary" : ""}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0 ${m.unread ? "gradient-primary" : "bg-muted text-muted-foreground"}`}>{m.from.charAt(0)}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={`text-sm ${m.unread ? "font-bold" : "font-medium text-muted-foreground"}`}>{m.from}</p>
                      <span className="text-[10px] text-muted-foreground">{m.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{m.msg}</p>
                  </div>
                  {m.unread && <div className="w-2 h-2 bg-primary rounded-full shrink-0 mt-2" />}
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "schedule":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-bold">Today's Schedule</h3>
              <span className="text-sm text-muted-foreground font-bold">April 16, 2026</span>
            </div>
            <div className="space-y-2">
              {scheduleItems.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                  className={`bg-card rounded-2xl shadow-card p-4 flex items-center gap-3 ${item.status === "current" ? "border-2 border-primary" : ""}`}>
                  <div className="text-center shrink-0 w-16">
                    <p className="text-xs font-bold text-muted-foreground">{item.time}</p>
                  </div>
                  <div className={`w-1.5 h-10 rounded-full shrink-0 ${item.status === "completed" ? "bg-secondary" : item.status === "current" ? "bg-primary animate-pulse" : "bg-muted"}`} />
                  <div className="flex-1">
                    <p className={`text-sm font-bold ${item.status === "completed" ? "text-muted-foreground line-through" : ""}`}>{item.title}</p>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                      item.type === "assessment" ? "bg-primary/10 text-primary" : item.type === "intervention" ? "bg-destructive/10 text-destructive" : item.type === "meeting" ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"
                    }`}>{item.type}</span>
                  </div>
                  {item.status === "completed" && <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />}
                  {item.status === "current" && <Clock className="w-5 h-5 text-primary shrink-0 animate-pulse" />}
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "settings":
        return (
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold">Settings</h3>
            {[
              { title: "Profile Information", fields: [{ label: "Name", value: "Mrs. Sunita Verma" }, { label: "School", value: "Govt Primary School, Jaipur" }, { label: "Class", value: "4B — 32 Students" }, { label: "Employee ID", value: "TCH-2024-0847" }] },
              { title: "Notification Preferences", fields: [{ label: "Student Alerts", value: "Enabled" }, { label: "Parent Messages", value: "Enabled" }, { label: "Weekly Reports", value: "Every Monday" }, { label: "Assessment Reminders", value: "Enabled" }] },
              { title: "Assessment Settings", fields: [{ label: "Auto-schedule assessments", value: "Weekly" }, { label: "Risk threshold for alerts", value: "Below 40%" }, { label: "Report language", value: "English + Hindi" }, { label: "Data sharing", value: "District Office" }] },
            ].map(section => (
              <div key={section.title} className="bg-card rounded-2xl shadow-card p-5">
                <h4 className="font-display font-bold text-sm mb-3">{section.title}</h4>
                <div className="space-y-3">
                  {section.fields.map(f => (
                    <div key={f.label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                      <span className="text-xs text-muted-foreground">{f.label}</span>
                      <span className="text-xs font-bold">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      default: // overview
        return (
          <div className="space-y-6">
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
                    <div className="w-9 h-9 gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">{s.name.charAt(0)}</div>
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
        );
    }
  };

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
      <div className="flex-1 min-w-0 md:pt-0 pt-10">
        <div className="flex items-center justify-between mb-6">
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

        <AnimatePresence mode="wait">
          <motion.div key={activeSection} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TeacherDashboard;
