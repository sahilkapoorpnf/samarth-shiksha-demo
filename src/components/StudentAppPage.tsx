import { motion } from "framer-motion";
import { Play, User, Star, Lock, CheckCircle, Flame, BookOpen, Puzzle, ArrowRight, Smartphone, ScanFace, Brain, Gamepad2, TrendingUp, Award } from "lucide-react";
import { useState } from "react";

const PhoneFrame = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <div className="flex flex-col items-center">
    <p className="font-display font-bold text-sm mb-3 text-muted-foreground">{title}</p>
    <div className="w-[280px] h-[520px] bg-card rounded-[2.5rem] shadow-elevated border-4 border-foreground/10 overflow-hidden relative">
      <div className="h-7 bg-foreground/5 flex items-center justify-center">
        <div className="w-16 h-1.5 bg-foreground/20 rounded-full" />
      </div>
      <div className="p-4 h-[calc(100%-28px)] overflow-y-auto">{children}</div>
    </div>
  </div>
);

const workflowSteps = [
  { icon: Smartphone, title: "Open App", desc: "Child logs into the app with a simple tap", color: "from-blue-500 to-cyan-400", emoji: "📱" },
  { icon: ScanFace, title: "Quick Assessment", desc: "AI identifies learning gaps through fun tasks", color: "from-violet-500 to-purple-400", emoji: "🧪" },
  { icon: Brain, title: "AI Personalization", desc: "System creates a custom learning path", color: "from-pink-500 to-rose-400", emoji: "🤖" },
  { icon: Gamepad2, title: "Play & Learn", desc: "Interactive games designed for the child", color: "from-amber-500 to-orange-400", emoji: "🎮" },
  { icon: TrendingUp, title: "Track Progress", desc: "Real-time improvement tracking", color: "from-emerald-500 to-green-400", emoji: "📈" },
  { icon: Award, title: "Earn Rewards", desc: "Badges & points keep motivation high", color: "from-yellow-500 to-amber-400", emoji: "🏆" },
];

const StudentAppPage = () => {
  const [activeScreen, setActiveScreen] = useState<"home" | "profile" | "activity">("home");
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="space-y-10 pb-8">
      <div className="text-center">
        <h2 className="font-display text-2xl font-bold">Student App</h2>
        <p className="text-muted-foreground text-sm mt-1">Child-friendly mobile experience</p>
      </div>

      {/* ===== Visual Workflow ===== */}
      <section className="relative">
        <h3 className="font-display text-xl font-bold text-center mb-2">How It Works for Students</h3>
        <p className="text-muted-foreground text-sm text-center mb-8">A simple 6-step journey from login to learning mastery</p>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative">
          {/* connecting line */}
          <div className="absolute top-16 left-[8%] right-[8%] h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-30" />
          <motion.div className="absolute top-16 left-[8%] h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
            initial={{ width: 0 }} animate={{ width: "84%" }} transition={{ duration: 2, delay: 0.5 }} />

          <div className="grid grid-cols-6 gap-3">
            {workflowSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  onHoverStart={() => setActiveStep(i)}
                  onHoverEnd={() => setActiveStep(null)}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Step number */}
                  <motion.div
                    animate={activeStep === i ? { scale: 1.15 } : { scale: 1 }}
                    className={`relative w-[4.5rem] h-[4.5rem] rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow mb-3`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-card rounded-full shadow-md flex items-center justify-center">
                      <span className="text-xs font-bold text-foreground">{i + 1}</span>
                    </div>
                    {activeStep === i && (
                      <motion.div
                        layoutId="stepGlow"
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-30 blur-xl`}
                      />
                    )}
                  </motion.div>
                  <p className="font-display font-bold text-sm">{step.title}</p>
                  <p className="text-muted-foreground text-[11px] mt-1 leading-tight px-1">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative pl-10">
          <div className="absolute left-[1.1rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />
          {workflowSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.12 }}
                className="relative flex items-start gap-4 mb-6 last:mb-0"
              >
                <div className={`absolute left-[-1.45rem] w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md z-10`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="bg-card rounded-2xl shadow-card p-4 flex-1 ml-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{step.emoji}</span>
                    <p className="font-display font-bold text-sm">{step.title}</p>
                    <span className="ml-auto text-[10px] font-bold bg-muted rounded-full px-2 py-0.5 text-muted-foreground">Step {i + 1}</span>
                  </div>
                  <p className="text-muted-foreground text-xs">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ===== Screens Selector ===== */}
      <div className="flex justify-center gap-2 mb-6">
        {(["home", "profile", "activity"] as const).map(s => (
          <button key={s} onClick={() => setActiveScreen(s)}
            className={`px-4 py-2 rounded-xl text-sm font-bold font-display capitalize transition-all ${
              activeScreen === s ? "gradient-primary text-primary-foreground shadow-soft" : "bg-muted text-muted-foreground"
            }`}>{s}</button>
        ))}
      </div>

      <div className="flex justify-center">
        <motion.div key={activeScreen} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          {activeScreen === "home" && (
            <PhoneFrame title="Home Screen">
              <div className="text-center mb-4">
                <div className="w-20 h-20 gradient-hero rounded-full mx-auto flex items-center justify-center mb-3 animate-bounce-soft">
                  <span className="text-3xl">🧒</span>
                </div>
                <h3 className="font-display font-bold text-lg">Hi, Arjun! 👋</h3>
                <p className="text-muted-foreground text-xs">Ready to learn today?</p>
              </div>
              <button className="w-full gradient-primary text-primary-foreground py-4 rounded-2xl font-display font-bold text-lg shadow-soft hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                <Play className="w-6 h-6" /> Start Learning
              </button>
              <div className="mt-5">
                <p className="text-xs font-bold text-muted-foreground mb-2">Today's Progress</p>
                <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
                  <motion.div className="h-full gradient-hero rounded-full" initial={{ width: 0 }} animate={{ width: "65%" }} transition={{ duration: 1.2 }} />
                </div>
                <p className="text-xs text-muted-foreground mt-1">65% completed</p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="bg-muted rounded-xl p-3 text-center"><Flame className="w-5 h-5 text-accent mx-auto mb-1" /><p className="text-xs font-bold">5 Day Streak</p></div>
                <div className="bg-muted rounded-xl p-3 text-center"><Star className="w-5 h-5 text-accent mx-auto mb-1" /><p className="text-xs font-bold">120 Points</p></div>
              </div>
            </PhoneFrame>
          )}
          {activeScreen === "profile" && (
            <PhoneFrame title="Profile Screen">
              <div className="text-center mb-5">
                <div className="w-24 h-24 gradient-primary rounded-full mx-auto flex items-center justify-center mb-3">
                  <User className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg">Arjun Kumar</h3>
                <p className="text-muted-foreground text-xs">Class 4 • Section B</p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Learning Score", value: "72/100", color: "text-secondary" },
                  { label: "Reading Level", value: "Medium", color: "text-accent" },
                  { label: "Badges Earned", value: "8", color: "text-primary" },
                  { label: "Days Active", value: "45", color: "text-secondary" },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between bg-muted rounded-xl px-4 py-3">
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className={`font-display font-bold ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </PhoneFrame>
          )}
          {activeScreen === "activity" && (
            <PhoneFrame title="Activity Screen">
              <h3 className="font-display font-bold mb-3">Your Activities</h3>
              <div className="space-y-3">
                {[
                  { title: "Reading Practice", icon: BookOpen, unlocked: true, pct: 80 },
                  { title: "Memory Game", icon: Puzzle, unlocked: true, pct: 45 },
                  { title: "Pattern Match", icon: Star, unlocked: true, pct: 20 },
                  { title: "Advanced Reading", icon: BookOpen, unlocked: false, pct: 0 },
                  { title: "Story Time", icon: BookOpen, unlocked: false, pct: 0 },
                ].map(act => (
                  <div key={act.title} className={`flex items-center gap-3 p-3 rounded-xl ${act.unlocked ? "bg-muted" : "bg-muted/50 opacity-60"}`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${act.unlocked ? "gradient-primary" : "bg-foreground/10"}`}>
                      {act.unlocked ? <act.icon className="w-5 h-5 text-primary-foreground" /> : <Lock className="w-5 h-5 text-muted-foreground" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold">{act.title}</p>
                      {act.unlocked && (
                        <div className="w-full h-1.5 bg-border rounded-full mt-1">
                          <div className="h-full bg-secondary rounded-full" style={{ width: `${act.pct}%` }} />
                        </div>
                      )}
                    </div>
                    {act.unlocked && act.pct === 80 && <CheckCircle className="w-5 h-5 text-secondary" />}
                  </div>
                ))}
              </div>
            </PhoneFrame>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default StudentAppPage;
