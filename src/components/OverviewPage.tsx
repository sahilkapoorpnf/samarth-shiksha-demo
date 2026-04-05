import { motion } from "framer-motion";
import { ArrowRight, Search, Brain, BookOpen, TrendingUp, Users } from "lucide-react";
import heroImg from "@/assets/hero-children.png";

const steps = [
  { icon: Search, label: "Student Assessment", desc: "Identify learning gaps" },
  { icon: Brain, label: "AI Analysis", desc: "Analyze abilities" },
  { icon: BookOpen, label: "Personalized Learning", desc: "Custom curriculum" },
  { icon: TrendingUp, label: "Progress Tracking", desc: "Monitor growth" },
];

const stats = [
  { value: "12,450+", label: "Students Assessed", color: "text-primary" },
  { value: "89%", label: "Showed Improvement", color: "text-secondary" },
  { value: "340+", label: "Schools Covered", color: "text-accent" },
  { value: "1,200+", label: "Teachers Trained", color: "text-primary" },
];

const OverviewPage = () => (
  <div className="space-y-12 pb-8">
    {/* Hero */}
    <section className="relative overflow-hidden rounded-3xl gradient-hero p-8 md:p-12 text-primary-foreground">
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Samarth Shiksha
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-90 mb-2">Every Child Can Learn</p>
          <p className="text-base opacity-80 mb-6">Identify. Support. Improve.</p>
          <p className="opacity-75 text-sm mb-8 max-w-md">
            An AI-powered learning ability support system for special and slow-learning children in government schools.
          </p>
          <button className="gradient-warm px-6 py-3 rounded-xl font-display font-bold shadow-elevated hover:scale-105 transition-transform">
            Explore Demo <ArrowRight className="inline w-4 h-4 ml-1" />
          </button>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <img src={heroImg} alt="Children learning with tablets" width={1280} height={720} className="w-full animate-float" />
        </motion.div>
      </div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-foreground/5 rounded-full" />
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-foreground/5 rounded-full" />
    </section>

    {/* Stats */}
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
          className="bg-card rounded-2xl p-5 shadow-card text-center">
          <p className={`font-display text-2xl md:text-3xl font-extrabold ${s.color}`}>{s.value}</p>
          <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
        </motion.div>
      ))}
    </section>

    {/* System Flow */}
    <section>
      <h2 className="font-display text-2xl font-bold text-center mb-8">How It Works</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div key={step.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.15 }}
              className="bg-card rounded-2xl p-6 shadow-card text-center relative group hover:shadow-elevated transition-shadow">
              <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-sm mb-1">{step.label}</h3>
              <p className="text-muted-foreground text-xs">{step.desc}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-muted-foreground/40 w-5 h-5" />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* Infographic */}
    <section className="bg-card rounded-3xl p-8 shadow-card">
      <h2 className="font-display text-2xl font-bold text-center mb-8">Learning Journey</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Detection", pct: 95, desc: "Learning difficulties identified early", color: "bg-primary" },
          { title: "Intervention", pct: 78, desc: "Students receiving personalized support", color: "bg-secondary" },
          { title: "Improvement", pct: 89, desc: "Students showing measurable progress", color: "bg-accent" },
        ].map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.2 }}
            className="text-center">
            <div className="relative w-28 h-28 mx-auto mb-4">
              <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
                <motion.circle cx="50" cy="50" r="42" fill="none" stroke="currentColor"
                  className={item.color === "bg-primary" ? "text-primary" : item.color === "bg-secondary" ? "text-secondary" : "text-accent"}
                  strokeWidth="8" strokeLinecap="round" strokeDasharray={264}
                  initial={{ strokeDashoffset: 264 }}
                  animate={{ strokeDashoffset: 264 - (264 * item.pct / 100) }}
                  transition={{ duration: 1.5, delay: 0.5 + i * 0.3 }} />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-display font-extrabold text-xl">{item.pct}%</span>
            </div>
            <h3 className="font-display font-bold">{item.title}</h3>
            <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default OverviewPage;
