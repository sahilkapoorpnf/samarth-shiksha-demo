import { motion } from "framer-motion";
import {
  ArrowRight, Brain, BookOpen, TrendingUp, Users, HeartPulse, Shield, Globe,
  Sparkles, Eye, Headphones, Gamepad2, BarChart3, Zap, Target, Layers,
  WifiOff, Languages, GraduationCap, Smartphone, ClipboardCheck, Building2,
  Monitor, FlaskConical, ChevronRight, Play, Star, Award, CheckCircle2,
  Lightbulb, Heart, Timer, Mic, PenTool, Calculator
} from "lucide-react";
import heroImg from "@/assets/hero-children.png";
import bdLogo from "@/assets/bitdecentro-logo-full.png";
import journeyVideo from "@/assets/full-journey-video.mp4.asset.json";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const footerLinks = [
  { label: "Disabilities", desc: "6 conditions we detect", icon: HeartPulse, tab: "disabilities" },
  { label: "Student App", desc: "Game-based learning", icon: Smartphone, tab: "student" },
  { label: "Assessment", desc: "AI screening tests", icon: ClipboardCheck, tab: "assessment" },
  { label: "AI Analysis", desc: "ML-powered diagnosis", icon: Brain, tab: "analysis" },
  { label: "Learning Games", desc: "50+ therapeutic games", icon: Gamepad2, tab: "games" },
  { label: "Rewards", desc: "Gamification system", icon: Award, tab: "gamification" },
  { label: "Teacher View", desc: "Educator dashboard", icon: GraduationCap, tab: "teacher" },
  { label: "Parent View", desc: "Family reports", icon: Users, tab: "parent" },
  { label: "Government", desc: "Policy analytics", icon: Building2, tab: "government" },
  { label: "Hardware", desc: "Device requirements", icon: Monitor, tab: "hardware" },
  { label: "Impact", desc: "Outcomes & metrics", icon: TrendingUp, tab: "impact" },
  { label: "Research", desc: "Papers & references", icon: FlaskConical, tab: "research" },
];

interface OverviewProps {
  onNavigate?: (tab: string) => void;
}

const OverviewPage = ({ onNavigate }: OverviewProps) => (
  <div className="space-y-12 pb-8">

    {/* ═══════════════════════ HERO — Split Narrative ═══════════════════════ */}
    <section className="relative overflow-hidden rounded-[2rem]">
      <div className="absolute inset-0 gradient-hero opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(0,0%,100%,0.15)_0%,transparent_60%)]" />
      <div className="relative z-10 grid md:grid-cols-5 gap-0">
        {/* Left narrative */}
        <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-2 mb-5">
              <span className="h-1 w-8 bg-accent rounded-full" />
              <span className="text-xs font-bold text-primary-foreground/80 uppercase tracking-widest">Government of India Initiative</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-primary-foreground leading-[1.1] mb-4">
              Samarth<br />Shiksha
            </h1>
            <p className="text-xl md:text-2xl font-display font-semibold text-primary-foreground/90 mb-2">
              Every Child Can Learn. Every Child Will.
            </p>
            <p className="text-primary-foreground/70 text-sm md:text-base max-w-lg leading-relaxed mb-8">
              India's first AI-powered learning ability support system — detecting 6 learning disabilities in government school children and delivering personalized, game-based therapy at scale.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <button className="gradient-warm px-7 py-3.5 rounded-2xl font-display font-bold shadow-elevated hover:scale-105 transition-transform text-sm text-primary-foreground flex items-center gap-2">
                Start Exploring <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-semibold">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
        {/* Right image */}
        <div className="md:col-span-2 relative flex items-end justify-center p-6 md:p-0">
          <motion.div initial={{ opacity: 0, scale: 0.85, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <img src={heroImg} alt="Children learning with tablets" className="w-full max-w-sm md:max-w-none rounded-2xl md:rounded-none md:rounded-tl-[3rem] shadow-2xl" />
          </motion.div>
          {/* Floating stat cards */}
          <motion.div {...fadeUp(0.6)} className="absolute top-8 right-4 md:right-8 bg-card/90 backdrop-blur-lg rounded-2xl p-3 shadow-elevated">
            <p className="font-display font-extrabold text-lg text-primary">12,450+</p>
            <p className="text-[10px] text-muted-foreground font-medium">Students Assessed</p>
          </motion.div>
          <motion.div {...fadeUp(0.8)} className="absolute bottom-16 left-4 md:left-0 bg-card/90 backdrop-blur-lg rounded-2xl p-3 shadow-elevated">
            <p className="font-display font-extrabold text-lg text-secondary">89%</p>
            <p className="text-[10px] text-muted-foreground font-medium">Improvement Rate</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════ JOURNEY VIDEO + PHASE CARDS ═══════════════════════ */}
    <section>
      <motion.div {...fadeUp(0)} className="text-center mb-8">
        <span className="text-xs font-bold text-primary uppercase tracking-widest">The Complete Journey</span>
        <h2 className="section-title mt-2">How AI Transforms Learning</h2>
        <p className="section-subtitle">Four phases that take a struggling child to a confident learner</p>
      </motion.div>

      {/* Single video banner */}
      <motion.div {...fadeUp(0.1)} className="relative rounded-2xl overflow-hidden shadow-elevated mb-6">
        <video src={journeyVideo.url} autoPlay loop muted playsInline className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-foreground/30" />
        {/* Top-left branding */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2.5 bg-card/80 backdrop-blur-lg rounded-xl px-3 py-2 shadow-elevated">
          <img src={bdLogo} alt="BitDecentro" className="h-5 md:h-6" />
        </div>
        {/* Top-right badge */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-primary/90 backdrop-blur-lg rounded-xl px-3 py-1.5 shadow-elevated">
          <p className="text-[9px] font-bold text-primary-foreground uppercase tracking-wider">Powered by AI</p>
        </div>
        {/* Bottom overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-0.5 w-6 bg-accent rounded-full" />
            <span className="text-[10px] font-bold text-primary-foreground/60 uppercase tracking-widest">Samarth Shiksha by BitDecentro</span>
          </div>
          <p className="font-display font-extrabold text-xl md:text-3xl text-primary-foreground">Screen → Detect → Therapy → Growth</p>
          <p className="text-primary-foreground/70 text-sm mt-1 max-w-lg">AI-powered learning disability detection and personalized game-based therapy for every government school child in India</p>
        </div>
      </motion.div>

      {/* 4 phase description cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { num: "01", title: "Screen", subtitle: "AI-Powered Assessment", desc: "Game-based tests across 5 cognitive domains with headphone-isolated sessions for accuracy.", gradient: "gradient-primary", icon: ClipboardCheck },
          { num: "02", title: "Detect", subtitle: "ML Diagnosis", desc: "95% accurate detection of Dyslexia, ADHD, Dyscalculia, Dysgraphia, APD & VPD.", gradient: "gradient-purple", icon: Brain },
          { num: "03", title: "Therapy", subtitle: "Game Interventions", desc: "50+ therapeutic games mapped to each disability with adaptive difficulty and rewards.", gradient: "gradient-warm", icon: Gamepad2 },
          { num: "04", title: "Growth", subtitle: "Measurable Results", desc: "89% of children show academic improvement within 6 months with real-time tracking.", gradient: "gradient-teal", icon: TrendingUp },
        ].map((phase, i) => {
          const Icon = phase.icon;
          return (
            <motion.div key={phase.title} {...fadeUp(0.2 + i * 0.1)}
              className="bg-card rounded-2xl shadow-card p-5 card-hover relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 ${phase.gradient}`} />
              <span className="text-[10px] font-extrabold text-muted-foreground/30 font-display">{phase.num}</span>
              <div className={`w-10 h-10 ${phase.gradient} rounded-xl flex items-center justify-center my-3 shadow-lg`}>
                <Icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-sm">{phase.title}</h3>
              <p className="text-[10px] font-semibold text-muted-foreground mb-1">{phase.subtitle}</p>
              <p className="text-xs text-muted-foreground/80 leading-relaxed">{phase.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* ═══════════════════════ BITDECENTRO BRANDING ═══════════════════════ */}
    <section className="relative overflow-hidden rounded-[2rem] bg-foreground text-primary-foreground">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent rounded-full translate-x-1/3 translate-y-1/3" />
      </div>
      <div className="relative z-10 p-8 md:p-12">
        <motion.div {...fadeUp(0)} className="text-center mb-10">
          <img src={bdLogo} alt="BitDecentro" className="h-12 md:h-16 mx-auto mb-6 brightness-0 invert" />
          <h2 className="font-display font-extrabold text-2xl md:text-4xl leading-tight mb-3">
            Empowering India's Future with<br /><span className="text-primary">Artificial Intelligence</span>
          </h2>
          <p className="text-primary-foreground/60 text-sm max-w-2xl mx-auto leading-relaxed">
            BitDecentro builds AI-first products that solve India's most critical challenges. Samarth Shiksha is our flagship initiative — bringing world-class learning disability detection and therapy to every government school child.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {[
            { title: "Our Mission", desc: "Ensure no child is left behind due to undetected learning disabilities. We believe every child can learn — they just need the right support at the right time.", icon: Heart },
            { title: "Our Technology", desc: "Proprietary ML models trained on 50,000+ Indian student datasets. NLP for reading assessment, Computer Vision for handwriting analysis, and Adaptive AI for personalized therapy.", icon: Brain },
            { title: "Our Impact", desc: "12,450+ students assessed, 340+ schools covered, 89% improvement rate. Working with 15+ districts across India to make inclusive education a reality.", icon: TrendingUp },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} {...fadeUp(0.1 + i * 0.1)}
                className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-base mb-2">{item.title}</h3>
                <p className="text-primary-foreground/50 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div {...fadeUp(0.4)} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 md:p-8">
          <h3 className="font-display font-bold text-lg text-center mb-6">How BitDecentro's AI Powers Every Step</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: "Data Collection", desc: "Multi-modal input — voice, touch, eye-tracking, handwriting — captured through tablets with headphones", icon: Mic },
              { step: "AI Processing", desc: "Real-time inference using edge-deployed ML models — works offline on low-cost tablets", icon: Zap },
              { step: "Smart Diagnosis", desc: "Pattern matching across 200+ behavioral markers to identify 6 disability types with severity scoring", icon: Target },
              { step: "Adaptive Learning", desc: "Content difficulty auto-adjusts based on performance. Each child gets a unique learning path", icon: Sparkles },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.step} {...fadeUp(0.5 + i * 0.08)} className="text-center">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="font-display font-bold text-xs mb-1">{s.step}</p>
                  <p className="text-[10px] text-primary-foreground/40 leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.6)} className="mt-8 text-center">
          <p className="text-primary-foreground/30 text-[10px] uppercase tracking-widest font-bold mb-2">Trusted By</p>
          <div className="flex items-center justify-center gap-6 flex-wrap text-primary-foreground/20 font-display font-bold text-sm">
            <span>Ministry of Education</span><span>•</span>
            <span>NCERT</span><span>•</span>
            <span>State Education Departments</span><span>•</span>
            <span>District Administration</span>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════ THE CRISIS — Bold Numbers ═══════════════════════ */}
    <section>
      <motion.div {...fadeUp(0)} className="text-center mb-8">
        <span className="text-xs font-bold text-destructive uppercase tracking-widest">The Silent Crisis</span>
        <h2 className="section-title mt-2">Millions of Children Are Falling Behind</h2>
        <p className="section-subtitle">Learning disabilities go undetected in 90% of government schools across India</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { stat: "35%", desc: "of Class 5 students cannot read a Class 2 level text", source: "ASER 2023", icon: BookOpen },
          { stat: "10-15%", desc: "of school children have some form of learning disability", source: "Indian Journal of Pediatrics", icon: HeartPulse },
          { stat: "90%", desc: "of learning disabilities go completely undetected", source: "RCI India Report", icon: Eye },
        ].map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div key={i} {...fadeUp(i * 0.15)}
              className="relative overflow-hidden bg-destructive/5 border border-destructive/10 rounded-2xl p-6 text-center group hover:border-destructive/25 transition-colors">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-destructive/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
              <Icon className="w-8 h-8 text-destructive/40 mx-auto mb-3" />
              <p className="font-display font-extrabold text-4xl text-destructive">{p.stat}</p>
              <p className="text-sm text-foreground/70 mt-2 leading-relaxed">{p.desc}</p>
              <p className="text-[10px] text-muted-foreground mt-3 font-semibold border-t border-destructive/10 pt-2">📄 {p.source}</p>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* ═══════════════════════ THE 6 DISABILITIES — Magazine Grid ═══════════════════════ */}
    <section>
      <motion.div {...fadeUp(0)} className="text-center mb-8">
        <span className="text-xs font-bold text-primary uppercase tracking-widest">What We Detect</span>
        <h2 className="section-title mt-2">6 Learning Disabilities, 1 Platform</h2>
        <p className="section-subtitle">Our AI identifies these conditions early — so every child gets the right support at the right time</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[
          { name: "Dyslexia", desc: "Difficulty reading, spelling, and decoding words. Affects phonological processing.", prevalence: "35%", icon: BookOpen, gradient: "gradient-primary" },
          { name: "ADHD", desc: "Difficulty sustaining attention, hyperactivity, and impulsive behavior.", prevalence: "28%", icon: Zap, gradient: "gradient-warm" },
          { name: "Dyscalculia", desc: "Difficulty understanding numbers, math concepts, and spatial reasoning.", prevalence: "15%", icon: Calculator, gradient: "gradient-purple" },
          { name: "Dysgraphia", desc: "Difficulty with handwriting, fine motor coordination, and written expression.", prevalence: "12%", icon: PenTool, gradient: "gradient-teal" },
          { name: "APD", desc: "Auditory Processing Disorder — difficulty processing and interpreting sounds.", prevalence: "7%", icon: Mic, gradient: "gradient-rose" },
          { name: "VPD", desc: "Visual Processing Disorder — difficulty interpreting visual information.", prevalence: "3%", icon: Eye, gradient: "gradient-sky" },
        ].map((d, i) => {
          const Icon = d.icon;
          return (
            <motion.div key={d.name} {...fadeUp(i * 0.08)}
              className="bg-card rounded-2xl shadow-card p-5 card-hover group relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 ${d.gradient}`} />
              <div className={`w-12 h-12 rounded-xl ${d.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="font-display font-bold text-sm">{d.name}</h3>
                <span className="text-[9px] font-bold bg-muted px-2 py-0.5 rounded-full text-muted-foreground">{d.prevalence} cases</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{d.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* ═══════════════════════ HOW IT WORKS — Timeline ═══════════════════════ */}
    <section className="bg-card rounded-[2rem] shadow-card p-6 md:p-10">
      <motion.div {...fadeUp(0)} className="text-center mb-10">
        <span className="text-xs font-bold text-secondary uppercase tracking-widest">The Journey</span>
        <h2 className="section-title mt-2">From Screening to Success</h2>
        <p className="section-subtitle">A 5-step evidence-based process that transforms outcomes</p>
      </motion.div>
      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute top-[3.5rem] left-0 right-0 h-0.5 bg-border" />
        <div className="grid md:grid-cols-5 gap-6 md:gap-4">
          {[
            { num: "01", icon: ClipboardCheck, label: "Screen & Assess", desc: "Age-appropriate tests across 5 cognitive domains — reading, math, attention, auditory, visual", color: "gradient-primary" },
            { num: "02", icon: Brain, label: "AI Analysis", desc: "Machine learning models analyze responses with 95% accuracy to identify disability patterns", color: "gradient-purple" },
            { num: "03", icon: HeartPulse, label: "Diagnose & Profile", desc: "Generate detailed learning profiles with disability markers, severity levels, and co-morbidities", color: "gradient-rose" },
            { num: "04", icon: Gamepad2, label: "Game Therapy", desc: "Custom game-based interventions mapped to each child's disability type and severity", color: "gradient-teal" },
            { num: "05", icon: TrendingUp, label: "Track & Adapt", desc: "Real-time progress monitoring with adaptive difficulty and quarterly re-assessments", color: "gradient-warm" },
          ].map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.label} {...fadeUp(0.1 + i * 0.12)} className="text-center relative">
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10`}>
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="text-[10px] font-extrabold text-muted-foreground/40 font-display">{step.num}</span>
                <h3 className="font-display font-bold text-sm mt-1">{step.label}</h3>
                <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ═══════════════════════ IMPACT METRICS — Radial Charts ═══════════════════════ */}
    <section>
      <motion.div {...fadeUp(0)} className="text-center mb-8">
        <span className="text-xs font-bold text-accent uppercase tracking-widest">Proven Results</span>
        <h2 className="section-title mt-2">Impact at Scale</h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { value: "12,450+", label: "Students Assessed", icon: Users, gradient: "gradient-primary" },
          { value: "89%", label: "Improvement Rate", icon: TrendingUp, gradient: "gradient-teal" },
          { value: "340+", label: "Schools Covered", icon: Building2, gradient: "gradient-warm" },
          { value: "6", label: "Disabilities Detected", icon: HeartPulse, gradient: "gradient-rose" },
          { value: "1,200+", label: "Teachers Trained", icon: GraduationCap, gradient: "gradient-purple" },
          { value: "15+", label: "Districts Active", icon: Globe, gradient: "gradient-sky" },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div key={s.label} {...fadeUp(i * 0.08)}
              className="bg-card rounded-2xl p-5 shadow-card text-center card-hover relative overflow-hidden group">
              <div className={`absolute inset-0 ${s.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className={`w-11 h-11 ${s.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                <Icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <p className="font-display text-2xl md:text-3xl font-extrabold text-foreground">{s.value}</p>
              <p className="text-muted-foreground text-xs mt-1 font-medium">{s.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* ═══════════════════════ CIRCULAR PROGRESS ═══════════════════════ */}
    <section className="bg-card rounded-[2rem] p-8 shadow-card">
      <motion.div {...fadeUp(0)} className="text-center mb-8">
        <h2 className="section-title">Detection → Intervention → Improvement</h2>
        <p className="section-subtitle">End-to-end measurable outcomes</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Detection Accuracy", pct: 95, desc: "AI identifies learning difficulties with clinical-grade precision", gradient: "text-primary" },
          { title: "Intervention Coverage", pct: 78, desc: "Students receiving personalized game-based therapy daily", gradient: "text-secondary" },
          { title: "Academic Improvement", pct: 89, desc: "Students showing measurable progress within 6 months", gradient: "text-accent" },
        ].map((item, i) => (
          <motion.div key={item.title} {...fadeUp(0.2 + i * 0.15)} className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-32 h-32 -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--border))" strokeWidth="6" />
                <motion.circle cx="50" cy="50" r="42" fill="none" stroke="currentColor"
                  className={item.gradient}
                  strokeWidth="6" strokeLinecap="round" strokeDasharray={264}
                  initial={{ strokeDashoffset: 264 }}
                  animate={{ strokeDashoffset: 264 - (264 * item.pct / 100) }}
                  transition={{ duration: 1.8, delay: 0.5 + i * 0.3, ease: "easeOut" }} />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-display font-extrabold text-2xl">{item.pct}%</span>
            </div>
            <h3 className="font-display font-bold text-sm">{item.title}</h3>
            <p className="text-muted-foreground text-xs mt-1 leading-relaxed max-w-[200px] mx-auto">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ═══════════════════════ WHO USES IT — Bento Grid ═══════════════════════ */}
    <section>
      <motion.div {...fadeUp(0)} className="text-center mb-8">
        <span className="text-xs font-bold text-primary uppercase tracking-widest">Designed For Everyone</span>
        <h2 className="section-title mt-2">Who Uses Samarth Shiksha?</h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { title: "Students", emoji: "🧒", desc: "Children aged 5-12 in government schools interact with fun, game-based activities using headphones for focused learning.", features: ["Gamified assessments", "Audio-guided questions", "Reward points & badges"], gradient: "gradient-primary" },
          { title: "Teachers", emoji: "👩‍🏫", desc: "Educators monitor progress, apply interventions, and receive AI-recommended teaching strategies.", features: ["Student performance dashboard", "Intervention recommendations", "Progress tracking"], gradient: "gradient-teal" },
          { title: "Parents", emoji: "👨‍👩‍👧", desc: "Families track development through simple reports and receive daily home activity guidance.", features: ["Weekly progress reports", "Home activity plans", "Milestone celebrations"], gradient: "gradient-warm" },
          { title: "Government", emoji: "🏛️", desc: "Officials analyze district-wide data, disability prevalence, and allocate budgets based on evidence.", features: ["District analytics", "Policy recommendations", "Budget optimization"], gradient: "gradient-purple" },
        ].map((u, i) => (
          <motion.div key={u.title} {...fadeUp(i * 0.1)}
            className="bg-card rounded-2xl shadow-card p-6 card-hover relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-32 h-32 ${u.gradient} opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700`} />
            <div className="flex items-start gap-4">
              <span className="text-4xl">{u.emoji}</span>
              <div className="flex-1">
                <h3 className="font-display font-bold text-base">{u.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{u.desc}</p>
                <div className="mt-3 space-y-1.5">
                  {u.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-foreground/70">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ═══════════════════════ KEY FEATURES — Two‑Col List ═══════════════════════ */}
    <section className="bg-card rounded-[2rem] shadow-card p-6 md:p-10">
      <motion.div {...fadeUp(0)} className="text-center mb-8">
        <Sparkles className="w-6 h-6 text-accent mx-auto mb-2" />
        <h2 className="section-title">Platform Capabilities</h2>
        <p className="section-subtitle">Built for India's unique educational challenges</p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-3">
        {[
          { text: "AI-powered detection of 6 learning disabilities with 95% accuracy", icon: Brain },
          { text: "Headphone-based isolated learning for focus in noisy classrooms", icon: Headphones },
          { text: "50+ therapeutic games mapped to specific disability types", icon: Gamepad2 },
          { text: "Real-time dashboards for teachers, parents, and officials", icon: BarChart3 },
          { text: "Offline-first design — works without internet, syncs when connected", icon: WifiOff },
          { text: "Multi-language support for 12+ regional Indian languages", icon: Languages },
          { text: "NEP 2020 & NCERT curriculum-aligned content framework", icon: GraduationCap },
          { text: "DPDP Act 2023 compliant — full data privacy & security", icon: Shield },
        ].map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div key={i} {...fadeUp(i * 0.05)}
              className="flex items-start gap-3 p-4 rounded-xl bg-muted/40 hover:bg-muted/70 transition-colors group">
              <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Icon className="w-4.5 h-4.5 text-primary-foreground" />
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{f.text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* ═══════════════════════ TECH STACK — Compact Grid ═══════════════════════ */}
    <section className="bg-primary/5 border border-primary/10 rounded-[2rem] p-6 md:p-8">
      <motion.div {...fadeUp(0)} className="text-center mb-6">
        <Zap className="w-5 h-5 text-primary mx-auto mb-2" />
        <h2 className="font-display font-bold text-xl">Powered By Advanced AI</h2>
        <p className="text-xs text-muted-foreground mt-1">Cutting-edge technology stack designed for scale</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "NLP & Speech AI", desc: "Natural language processing for reading fluency assessment", icon: Mic },
          { label: "Computer Vision", desc: "Handwriting analysis and visual processing evaluation", icon: Eye },
          { label: "Adaptive ML", desc: "Real-time difficulty adjustment based on performance", icon: Brain },
          { label: "Edge Computing", desc: "Offline-first with local AI inference on tablets", icon: Monitor },
        ].map((t, i) => {
          const Icon = t.icon;
          return (
            <motion.div key={t.label} {...fadeUp(i * 0.1)}
              className="bg-card rounded-xl p-4 text-center shadow-card card-hover">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-display font-bold text-xs">{t.label}</p>
              <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">{t.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* ═══════════════════════ FOOTER NAV — Explore Sections ═══════════════════════ */}
    <section className="rounded-[2rem] overflow-hidden">
      <div className="gradient-hero p-8 md:p-10 text-primary-foreground">
        <motion.div {...fadeUp(0)} className="text-center mb-8">
          <h2 className="font-display font-bold text-2xl md:text-3xl">Explore the Full Platform</h2>
          <p className="text-primary-foreground/70 text-sm mt-2">Deep-dive into every module of Samarth Shiksha</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {footerLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.label} {...fadeUp(i * 0.04)}
                onClick={() => onNavigate?.(item.tab)}
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-xl p-4 cursor-pointer transition-all hover:scale-[1.03] group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary-foreground/15 flex items-center justify-center shrink-0 group-hover:bg-primary-foreground/25 transition-colors">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm">{item.label}</p>
                    <p className="text-[10px] text-primary-foreground/60">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div {...fadeUp(0.5)} className="text-center mt-8">
          <p className="text-primary-foreground/50 text-xs">
            Built with ❤️ by <strong className="text-primary-foreground/70">BitDecentro</strong> • Aligned with NEP 2020 • DPDP Act 2023 Compliant
          </p>
        </motion.div>
      </div>
    </section>
  </div>
);

export default OverviewPage;
