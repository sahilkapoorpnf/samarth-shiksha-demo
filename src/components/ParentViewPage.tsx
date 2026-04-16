import { motion, AnimatePresence } from "framer-motion";
import { Heart, TrendingUp, BookOpen, Home, Star, Calendar, HeartPulse, MessageSquare, CheckCircle2, Brain, LayoutDashboard, Bell, Settings, FileText, Phone, Download, Send, Clock, Shield, Volume2, Globe, User, Lock } from "lucide-react";
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

const monthlyData = [
  { week: "Week 1", reading: 40, attention: 35, writing: 45 },
  { week: "Week 2", reading: 45, attention: 40, writing: 48 },
  { week: "Week 3", reading: 52, attention: 45, writing: 50 },
  { week: "Week 4", reading: 58, attention: 50, writing: 55 },
  { week: "Week 5", reading: 62, attention: 53, writing: 56 },
  { week: "Week 6", reading: 65, attention: 55, writing: 58 },
];

const activities = [
  { title: "Read together for 15 mins", icon: BookOpen, done: true, why: "Builds phonemic awareness — helps with Dyslexia", time: "Morning" },
  { title: "Play memory card game", icon: Brain, done: false, why: "Strengthens working memory — supports attention", time: "Afternoon" },
  { title: "Practice counting with objects", icon: Star, done: false, why: "Concrete math understanding — helps with Dyscalculia", time: "Evening" },
  { title: "Tell a story before bed", icon: Heart, done: true, why: "Listening comprehension — helps with APD", time: "Night" },
  { title: "Draw and trace letters", icon: Home, done: false, why: "Fine motor skills — helps with Dysgraphia", time: "Anytime" },
];

const milestones = [
  { week: "Week 1", achievement: "Completed first reading assessment", status: "done" },
  { week: "Week 2", achievement: "Started phonics-based exercises", status: "done" },
  { week: "Week 3", achievement: "Reading speed improved by 10%", status: "done" },
  { week: "Week 4", achievement: "Earned 'Reading Star' badge", status: "done" },
  { week: "Week 5", achievement: "Attention score improved to Medium", status: "current" },
  { week: "Week 6", achievement: "Target: Reading score above 60%", status: "upcoming" },
];

const parentMessages = [
  { from: "Mrs. Sunita (Teacher)", time: "2h ago", msg: "Arjun did very well in today's reading exercise. He read 3 full sentences without help!", unread: true },
  { from: "School Coordinator", time: "1d ago", msg: "Parent-teacher meeting scheduled for next Friday at 3 PM.", unread: true },
  { from: "Mrs. Sunita (Teacher)", time: "3d ago", msg: "Please continue the daily 15-minute reading at home. It's making a big difference!", unread: false },
  { from: "System", time: "5d ago", msg: "Monthly progress report for Arjun is ready to download.", unread: false },
  { from: "Mrs. Sunita (Teacher)", time: "1w ago", msg: "Arjun earned the 'Focus Champion' badge today!", unread: false },
];

const notifications = [
  { title: "New Progress Report Available", desc: "Week 5 report for Arjun is ready", time: "1h ago", type: "report", read: false },
  { title: "Milestone Achieved!", desc: "Arjun's attention score improved to Medium risk", time: "3h ago", type: "milestone", read: false },
  { title: "Home Activity Reminder", desc: "Don't forget today's memory card game", time: "6h ago", type: "reminder", read: true },
  { title: "Teacher Message", desc: "Mrs. Sunita sent you a message", time: "1d ago", type: "message", read: true },
  { title: "Weekly Summary", desc: "Arjun completed 4/5 daily missions this week", time: "2d ago", type: "summary", read: true },
  { title: "Badge Earned", desc: "Arjun earned 'Reading Star' badge", time: "4d ago", type: "milestone", read: true },
];

const reportsList = [
  { title: "Week 5 Progress Report", date: "Apr 14, 2026", status: "New" },
  { title: "Week 4 Progress Report", date: "Apr 7, 2026", status: "Viewed" },
  { title: "Monthly Summary — March", date: "Apr 1, 2026", status: "Viewed" },
  { title: "Disability Assessment Report", date: "Mar 15, 2026", status: "Viewed" },
  { title: "Initial Screening Report", date: "Mar 1, 2026", status: "Viewed" },
];

const ParentViewPage = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderContent = () => {
    switch (activeSection) {
      case "progress":
        return (
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold">Arjun's Progress</h3>
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
            <div className="bg-card rounded-3xl shadow-card p-6">
              <h4 className="font-display font-bold mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-primary" /> Weekly Score</h4>
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
            <div className="bg-card rounded-3xl shadow-card p-6">
              <h4 className="font-display font-bold mb-4">6-Week Domain Trend</h4>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 18%, 88%)" />
                  <XAxis dataKey="week" tick={{ fontSize: 10 }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="reading" stroke="hsl(215, 85%, 50%)" strokeWidth={2} />
                  <Line type="monotone" dataKey="attention" stroke="hsl(32, 95%, 52%)" strokeWidth={2} />
                  <Line type="monotone" dataKey="writing" stroke="hsl(280, 60%, 55%)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
              <div className="flex gap-4 justify-center mt-3">
                {[{ label: "Reading", color: "bg-primary" }, { label: "Attention", color: "bg-accent" }, { label: "Writing", color: "bg-purple-500" }].map(l => (
                  <span key={l.label} className="flex items-center gap-1 text-xs"><span className={`w-2.5 h-2.5 rounded-full ${l.color}`} />{l.label}</span>
                ))}
              </div>
            </div>
          </div>
        );

      case "activities":
        return (
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold">Home Activities</h3>
            <p className="text-sm text-muted-foreground">Simple activities recommended by the AI to support Arjun's learning at home</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-secondary/10 rounded-2xl p-4 text-center"><p className="font-display font-extrabold text-2xl text-secondary">2/5</p><p className="text-[10px] text-muted-foreground">Completed Today</p></div>
              <div className="bg-primary/10 rounded-2xl p-4 text-center"><p className="font-display font-extrabold text-2xl text-primary">18</p><p className="text-[10px] text-muted-foreground">Activities This Week</p></div>
            </div>
            <div className="space-y-3">
              {activities.map((a, i) => {
                const Icon = a.icon;
                return (
                  <motion.div key={a.title} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                    className={`p-4 rounded-2xl ${a.done ? "bg-secondary/10 border border-secondary/20" : "bg-card shadow-card"}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${a.done ? "bg-secondary" : "bg-muted"}`}>
                        <Icon className={`w-5 h-5 ${a.done ? "text-secondary-foreground" : "text-muted-foreground"}`} />
                      </div>
                      <div className="flex-1">
                        <span className={`text-sm font-bold ${a.done ? "line-through text-muted-foreground" : ""}`}>{a.title}</span>
                        <p className="text-[10px] text-primary mt-0.5">{a.why}</p>
                        <span className="text-[9px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded mt-1 inline-block">{a.time}</span>
                      </div>
                      {a.done ? <span className="text-secondary text-xs font-bold">Done ✓</span> : <button className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-lg">Mark Done</button>}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        );

      case "milestones":
        return (
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold">Learning Milestones</h3>
            <p className="text-sm text-muted-foreground">Track Arjun's journey from assessment to improvement</p>
            <div className="space-y-3">
              {milestones.map((m, i) => (
                <motion.div key={m.week} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                  className={`flex items-center gap-3 p-4 rounded-2xl ${m.status === "done" ? "bg-secondary/10" : m.status === "current" ? "bg-primary/10 border-2 border-primary/20" : "bg-muted opacity-50"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    m.status === "done" ? "bg-secondary text-secondary-foreground" : m.status === "current" ? "bg-primary text-primary-foreground animate-pulse" : "bg-muted-foreground/20 text-muted-foreground"
                  }`}>{m.status === "done" ? "✓" : m.status === "current" ? "→" : "○"}</div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-muted-foreground">{m.week}</p>
                    <p className="text-sm font-bold">{m.achievement}</p>
                  </div>
                  {m.status === "done" && <CheckCircle2 className="w-5 h-5 text-secondary" />}
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
                    <p className="text-[10px] text-muted-foreground">{r.date}</p>
                  </div>
                  <span className={`text-[9px] font-bold px-2 py-1 rounded-full ${r.status === "New" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>{r.status}</span>
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
              <button className="gradient-primary text-primary-foreground px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1"><Send className="w-3 h-3" /> Reply to Teacher</button>
            </div>
            <div className="space-y-2">
              {parentMessages.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                  className={`bg-card rounded-2xl shadow-card p-4 flex items-start gap-3 cursor-pointer hover:bg-muted/50 transition-colors ${m.unread ? "border-l-4 border-primary" : ""}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0 ${m.unread ? "gradient-primary" : "bg-muted text-muted-foreground"}`}>{m.from.charAt(0)}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={`text-sm ${m.unread ? "font-bold" : "font-medium text-muted-foreground"}`}>{m.from}</p>
                      <span className="text-[10px] text-muted-foreground">{m.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{m.msg}</p>
                  </div>
                  {m.unread && <div className="w-2 h-2 bg-primary rounded-full shrink-0 mt-2" />}
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "notifications":
        return (
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold">Notifications</h3>
            <div className="space-y-2">
              {notifications.map((n, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                  className={`bg-card rounded-2xl shadow-card p-4 flex items-start gap-3 ${!n.read ? "border-l-4 border-primary" : ""}`}>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    n.type === "milestone" ? "bg-secondary/10" : n.type === "report" ? "bg-primary/10" : n.type === "reminder" ? "bg-accent/10" : "bg-muted"
                  }`}>
                    {n.type === "milestone" ? <Star className="w-4 h-4 text-secondary" /> :
                     n.type === "report" ? <FileText className="w-4 h-4 text-primary" /> :
                     n.type === "reminder" ? <Clock className="w-4 h-4 text-accent" /> :
                     <MessageSquare className="w-4 h-4 text-muted-foreground" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm ${!n.read ? "font-bold" : "font-medium text-muted-foreground"}`}>{n.title}</p>
                    <p className="text-[10px] text-muted-foreground">{n.desc}</p>
                    <p className="text-[9px] text-muted-foreground mt-1">{n.time}</p>
                  </div>
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
              { title: "Child Information", icon: User, fields: [{ label: "Name", value: "Arjun Kumar" }, { label: "Class", value: "4B" }, { label: "School", value: "Govt Primary School, Jaipur" }, { label: "Conditions", value: "Dyslexia (Moderate), ADHD (Mild)" }] },
              { title: "Notification Preferences", icon: Bell, fields: [{ label: "Progress Updates", value: "Daily" }, { label: "Teacher Messages", value: "Instant" }, { label: "Activity Reminders", value: "Morning & Evening" }, { label: "Weekly Report", value: "Every Sunday" }] },
              { title: "Privacy & Security", icon: Shield, fields: [{ label: "Data Sharing", value: "Teacher & School Only" }, { label: "Report Visibility", value: "Private" }, { label: "Two-factor Auth", value: "Enabled" }] },
              { title: "App Settings", icon: Settings, fields: [{ label: "Language", value: "Hindi + English" }, { label: "Audio Playback", value: "Enabled" }, { label: "Dark Mode", value: "System Default" }] },
            ].map(section => (
              <div key={section.title} className="bg-card rounded-2xl shadow-card p-5">
                <h4 className="font-display font-bold text-sm mb-3 flex items-center gap-2"><section.icon className="w-4 h-4 text-primary" /> {section.title}</h4>
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

            {/* Quick Activities */}
            <div className="bg-card rounded-3xl shadow-card p-6">
              <h3 className="font-display font-bold mb-1 flex items-center gap-2"><Home className="w-5 h-5 text-accent" /> Today's Home Activities</h3>
              <p className="text-xs text-muted-foreground mb-4">Simple activities to support Arjun's learning</p>
              <div className="space-y-2">
                {activities.slice(0, 3).map((a, i) => {
                  const Icon = a.icon;
                  return (
                    <div key={a.title} className={`flex items-center gap-3 p-3 rounded-xl ${a.done ? "bg-secondary/10" : "bg-muted"}`}>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${a.done ? "bg-secondary" : "bg-border"}`}>
                        <Icon className={`w-4 h-4 ${a.done ? "text-secondary-foreground" : "text-muted-foreground"}`} />
                      </div>
                      <span className={`text-sm flex-1 ${a.done ? "line-through text-muted-foreground" : "font-medium"}`}>{a.title}</span>
                      {a.done && <span className="text-secondary text-xs font-bold">✓</span>}
                    </div>
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
        );
    }
  };

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
      <div className="flex-1 min-w-0 md:pt-0 pt-10">
        <div className="text-center mb-6">
          <h2 className="section-title">Parent View</h2>
          <p className="section-subtitle">Easy-to-understand progress reports and home activity suggestions</p>
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

export default ParentViewPage;
