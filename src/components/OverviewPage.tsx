import { motion } from "framer-motion";
import { ArrowRight, Search, Brain, BookOpen, TrendingUp, Users, HeartPulse, Shield, Globe, Sparkles, CheckCircle2, Star, Eye, Headphones, Gamepad2, BarChart3, Award, Zap, Target, Layers, Wifi, WifiOff, Languages, GraduationCap, Building2 } from "lucide-react";
import heroImg from "@/assets/hero-children.png";

const steps = [
  { icon: Search, label: "Screen & Assess", desc: "Identify learning gaps through AI-powered assessments across 5 cognitive domains", num: "01" },
  { icon: Brain, label: "AI Analysis", desc: "Machine learning models analyze responses to detect dyslexia, ADHD, and other conditions", num: "02" },
  { icon: HeartPulse, label: "Diagnose & Plan", desc: "Generate detailed learning profiles with specific disability markers and severity levels", num: "03" },
  { icon: BookOpen, label: "Personalized Therapy", desc: "Custom game-based interventions designed for each child's unique learning needs", num: "04" },
  { icon: TrendingUp, label: "Track & Improve", desc: "Real-time progress monitoring with adaptive difficulty and regular re-assessments", num: "05" },
];

const stats = [
  { value: "12,450+", label: "Students Assessed", color: "text-primary", icon: Users },
  { value: "89%", label: "Improvement Rate", color: "text-secondary", icon: TrendingUp },
  { value: "340+", label: "Schools Covered", color: "text-accent", icon: Globe },
  { value: "6", label: "Disabilities Detected", color: "text-primary", icon: HeartPulse },
  { value: "1,200+", label: "Teachers Trained", color: "text-secondary", icon: Star },
  { value: "15+", label: "Districts Active", color: "text-accent", icon: Shield },
];

const targetUsers = [
  { title: "Students", desc: "Children aged 5-12 in government schools who face learning challenges. They interact with fun, game-based activities using headphones.", icon: "🧒", color: "gradient-primary" },
  { title: "Teachers", desc: "Government school educators who monitor student progress, apply interventions, and receive AI-recommended teaching strategies.", icon: "👩‍🏫", color: "gradient-teal" },
  { title: "Parents", desc: "Families tracking their child's development with simple reports and receiving daily home activity guidance.", icon: "👨‍👩‍👧", color: "gradient-warm" },
  { title: "Government", desc: "Education officials analyzing district-wide data, disability prevalence, and budget allocation for informed policy decisions.", icon: "🏛️", color: "gradient-purple" },
];

const disabilities = [
  { name: "Dyslexia", desc: "Difficulty reading, spelling, and decoding words", prevalence: "35%", icon: BookOpen, color: "bg-primary/10 text-primary" },
  { name: "ADHD", desc: "Difficulty sustaining attention and controlling impulses", prevalence: "28%", icon: Eye, color: "bg-accent/10 text-accent" },
  { name: "Dyscalculia", desc: "Difficulty understanding numbers and math concepts", prevalence: "15%", icon: Target, color: "bg-purple-500/10 text-purple-600" },
  { name: "Dysgraphia", desc: "Difficulty with handwriting and fine motor skills", prevalence: "12%", icon: Layers, color: "bg-secondary/10 text-secondary" },
  { name: "APD", desc: "Auditory Processing Disorder — difficulty processing sounds", prevalence: "7%", icon: Headphones, color: "bg-destructive/10 text-destructive" },
  { name: "VPD", desc: "Visual Processing Disorder — difficulty interpreting visual info", prevalence: "3%", icon: Eye, color: "bg-primary/10 text-primary" },
];

const features = [
  { text: "AI-powered learning disability detection (Dyslexia, ADHD, Dyscalculia, APD, VPD, Dysgraphia)", icon: Brain },
  { text: "Headphone-based isolated learning for improved focus in noisy classrooms", icon: Headphones },
  { text: "Game-based therapeutic interventions mapped to specific disabilities", icon: Gamepad2 },
  { text: "Real-time dashboards for teachers, parents, and government officials", icon: BarChart3 },
  { text: "Offline-first design — works without internet, syncs when available", icon: WifiOff },
  { text: "Multi-language support for regional Indian languages", icon: Languages },
  { text: "NEP 2020 & NCERT curriculum aligned content", icon: GraduationCap },
  { text: "Data privacy compliant with India's DPDP Act 2023", icon: Shield },
];

const OverviewPage = () => (
  <div className="space-y-10 pb-8">
    {/* Hero */}
    <section className="relative overflow-hidden rounded-3xl gradient-hero p-8 md:p-12 text-primary-foreground">
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-bold bg-primary-foreground/20 px-3 py-1 rounded-full">🇮🇳 For Government Schools Across India</span>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold leading-tight mt-4 mb-3">
            Samarth Shiksha
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-95 mb-1">Every Child Can Learn</p>
          <p className="text-base opacity-85 font-semibold mb-3">Identify • Support • Improve</p>
          <p className="opacity-80 text-sm mb-6 max-w-md leading-relaxed">
            An AI-powered learning ability support system that detects learning disabilities like <strong>Dyslexia, ADHD, Dyscalculia, APD, VPD & Dysgraphia</strong> in government school children — then provides personalized, game-based therapy to help them thrive.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button className="gradient-warm px-6 py-3 rounded-xl font-display font-bold shadow-elevated hover:scale-105 transition-transform text-sm">
              Explore Demo <ArrowRight className="inline w-4 h-4 ml-1" />
            </button>
            <button className="bg-primary-foreground/15 px-5 py-3 rounded-xl font-display font-bold hover:bg-primary-foreground/25 transition-colors text-sm">
              Watch Video ▶
            </button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <img src={heroImg} alt="Children learning with tablets" width={1280} height={720} className="w-full animate-float rounded-2xl" />
        </motion.div>
      </div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-foreground/5 rounded-full" />
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-foreground/5 rounded-full" />
    </section>

    {/* Problem Statement */}
    <section className="bg-card rounded-3xl shadow-card p-6 md:p-8">
      <h2 className="section-title mb-2">The Problem We Solve</h2>
      <p className="section-subtitle mb-6">Millions of children in government schools struggle silently</p>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { stat: "35%", desc: "of Class 5 students cannot read a Class 2 level text", source: "ASER 2023" },
          { stat: "10-15%", desc: "of school children have some form of learning disability", source: "Indian Journal of Pediatrics" },
          { stat: "90%", desc: "of learning disabilities go undetected in government schools", source: "RCI India Report" },
        ].map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
            className="bg-destructive/5 border border-destructive/15 rounded-2xl p-5 text-center">
            <p className="font-display font-extrabold text-3xl text-destructive">{p.stat}</p>
            <p className="text-sm text-foreground/70 mt-2">{p.desc}</p>
            <p className="text-[10px] text-muted-foreground mt-2 font-medium">Source: {p.source}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Disabilities We Detect */}
    <section>
      <h2 className="section-title mb-2">6 Learning Disabilities We Detect</h2>
      <p className="section-subtitle mb-6">Our AI identifies these conditions early so children get the right support</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {disabilities.map((d, i) => {
          const Icon = d.icon;
          return (
            <motion.div key={d.name} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl shadow-card p-4 card-hover">
              <div className={`w-10 h-10 rounded-xl ${d.color} flex items-center justify-center mb-3`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display font-bold text-sm">{d.name}</h3>
                <span className="text-[9px] font-bold bg-muted px-1.5 py-0.5 rounded-full text-muted-foreground">{d.prevalence}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{d.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* Stats */}
    <section className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {stats.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl p-5 shadow-card text-center card-hover">
            <Icon className={`w-5 h-5 mx-auto mb-2 ${s.color}`} />
            <p className={`font-display text-2xl md:text-3xl font-extrabold ${s.color}`}>{s.value}</p>
            <p className="text-muted-foreground text-xs mt-1">{s.label}</p>
          </motion.div>
        );
      })}
    </section>

    {/* System Flow */}
    <section>
      <h2 className="section-title mb-2">How It Works</h2>
      <p className="section-subtitle mb-8">A 5-step journey from screening to improvement</p>
      <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-5 md:gap-3">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div key={step.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.12 }}
              className="bg-card rounded-2xl p-5 shadow-card text-center relative group card-hover">
              <span className="text-[10px] font-extrabold text-muted-foreground/40 font-display absolute top-3 left-4">{step.num}</span>
              <div className="w-14 h-14 gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-sm mb-1">{step.label}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-muted-foreground/30 w-5 h-5" />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* Target Users */}
    <section>
      <h2 className="section-title mb-2">Who Uses Samarth Shiksha?</h2>
      <p className="section-subtitle mb-6">Designed for every stakeholder in a child's education</p>
      <div className="grid grid-cols-2 gap-4">
        {targetUsers.map((u, i) => (
          <motion.div key={u.title} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl shadow-card p-5 card-hover">
            <span className="text-3xl block mb-3">{u.icon}</span>
            <h3 className="font-display font-bold text-sm">{u.title}</h3>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{u.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Key Features */}
    <section className="bg-card rounded-3xl shadow-card p-6 md:p-8">
      <div className="flex items-center gap-2 justify-center mb-6">
        <Sparkles className="w-5 h-5 text-accent" />
        <h2 className="font-display font-bold text-xl">Key Features</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
              className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm text-foreground/80">{f.text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* Infographic */}
    <section className="bg-card rounded-3xl p-8 shadow-card">
      <h2 className="section-title mb-8">Impact at a Glance</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Detection", pct: 95, desc: "Learning difficulties identified accurately through AI", color: "text-primary" },
          { title: "Intervention", pct: 78, desc: "Students receiving personalized game-based therapy", color: "text-secondary" },
          { title: "Improvement", pct: 89, desc: "Students showing measurable academic progress", color: "text-accent" },
        ].map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.2 }}
            className="text-center">
            <div className="relative w-28 h-28 mx-auto mb-4">
              <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
                <motion.circle cx="50" cy="50" r="42" fill="none" stroke="currentColor"
                  className={item.color}
                  strokeWidth="8" strokeLinecap="round" strokeDasharray={264}
                  initial={{ strokeDashoffset: 264 }}
                  animate={{ strokeDashoffset: 264 - (264 * item.pct / 100) }}
                  transition={{ duration: 1.5, delay: 0.5 + i * 0.3 }} />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-display font-extrabold text-xl">{item.pct}%</span>
            </div>
            <h3 className="font-display font-bold">{item.title}</h3>
            <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Technology Stack */}
    <section className="bg-primary/5 border border-primary/15 rounded-3xl p-6 md:p-8">
      <h2 className="font-display font-bold text-xl text-center mb-6 flex items-center justify-center gap-2">
        <Zap className="w-5 h-5 text-primary" /> Powered By
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "NLP & Speech AI", desc: "Natural language processing for reading assessment" },
          { label: "Computer Vision", desc: "Handwriting and visual processing analysis" },
          { label: "Adaptive ML", desc: "Real-time difficulty adjustment based on performance" },
          { label: "Edge Computing", desc: "Offline-first with local AI inference on tablets" },
        ].map((t, i) => (
          <motion.div key={t.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-4 text-center shadow-card">
            <p className="font-display font-bold text-xs text-primary">{t.label}</p>
            <p className="text-[10px] text-muted-foreground mt-1">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default OverviewPage;
