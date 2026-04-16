import { motion } from "framer-motion";
import { TrendingUp, BookOpen, Eye, Users, ArrowRight, HeartPulse, Quote, School, Star, Award } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const comparisons = [
  { metric: "Reading Fluency", before: 35, after: 72, icon: BookOpen, color: "text-primary" },
  { metric: "Attention Span", before: 28, after: 62, icon: Eye, color: "text-accent" },
  { metric: "Math Skills", before: 40, after: 68, icon: Star, color: "text-purple-600" },
  { metric: "Student Engagement", before: 40, after: 85, icon: Users, color: "text-secondary" },
  { metric: "Memory Retention", before: 45, after: 78, icon: TrendingUp, color: "text-primary" },
  { metric: "Writing Ability", before: 38, after: 60, icon: Award, color: "text-accent" },
];

const chartData = [
  { name: "Reading", before: 35, after: 72 },
  { name: "Attention", before: 28, after: 62 },
  { name: "Math", before: 40, after: 68 },
  { name: "Engage.", before: 40, after: 85 },
  { name: "Memory", before: 45, after: 78 },
  { name: "Writing", before: 38, after: 60 },
];

const testimonials = [
  { quote: "We saw remarkable improvement in our students' reading and attention within just 8 weeks of using Samarth Shiksha.", author: "District Education Officer", location: "Patna, Bihar" },
  { quote: "My son used to hate reading. Now he asks to play the reading games every day. His confidence has grown so much.", author: "Parent of Class 3 Student", location: "Ranchi, Jharkhand" },
  { quote: "The AI analysis helped me identify 5 students with dyslexia that I had missed for 2 years. This system is a game changer.", author: "Government School Teacher", location: "Lucknow, UP" },
];

const disabilityImpact = [
  { condition: "Dyslexia", students: 1750, improved: 1400, rate: "80%", therapy: "Phonics-based reading games" },
  { condition: "ADHD", students: 1176, improved: 882, rate: "75%", therapy: "Attention training + headphones" },
  { condition: "Dyscalculia", students: 630, improved: 504, rate: "80%", therapy: "Visual math exercises" },
  { condition: "Dysgraphia", students: 504, improved: 353, rate: "70%", therapy: "Letter tracing + spelling games" },
];

const ImpactPage = () => (
  <div className="space-y-6 pb-8">
    <div className="text-center">
      <div className="w-16 h-16 gradient-teal rounded-2xl flex items-center justify-center mx-auto mb-4">
        <TrendingUp className="w-8 h-8 text-primary-foreground" />
      </div>
      <h2 className="section-title">Impact & Results</h2>
      <p className="section-subtitle">Measurable outcomes from 12,450 students across 340 government schools</p>
    </div>

    {/* Hero Stat */}
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="gradient-hero text-primary-foreground rounded-3xl p-8 text-center shadow-elevated">
      <p className="font-display font-extrabold text-5xl mb-2">89%</p>
      <p className="font-bold text-lg">of students showed measurable improvement</p>
      <p className="text-sm opacity-80 mt-2">Across all 6 disability categories, within 8-12 weeks of intervention</p>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {[
          { stat: "12,450", label: "Students" },
          { stat: "340", label: "Schools" },
          { stat: "15", label: "Districts" },
        ].map(s => (
          <div key={s.label} className="bg-primary-foreground/10 rounded-xl p-3">
            <p className="font-display font-extrabold text-xl">{s.stat}</p>
            <p className="text-[10px] opacity-80">{s.label}</p>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Impact by Disability */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <div className="flex items-center gap-2 mb-4">
        <HeartPulse className="w-5 h-5 text-destructive" />
        <h3 className="font-display font-bold">Impact by Disability Type</h3>
      </div>
      <div className="space-y-3">
        {disabilityImpact.map((d, i) => (
          <motion.div key={d.condition} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-muted/50 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-display font-bold text-sm">{d.condition}</h4>
              <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">{d.rate} improved</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>{d.students} detected</span>
              <span>{d.improved} improved</span>
              <span className="text-primary">Therapy: {d.therapy}</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden mt-2">
              <motion.div className="h-full bg-secondary rounded-full" initial={{ width: 0 }} animate={{ width: d.rate }} transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Before vs After Cards */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {comparisons.map((c, i) => {
        const Icon = c.icon;
        return (
          <motion.div key={c.metric} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl shadow-card p-4">
            <Icon className={`w-4 h-4 ${c.color} mb-2`} />
            <p className="text-[10px] font-medium text-muted-foreground mb-2">{c.metric}</p>
            <div className="flex items-center gap-2">
              <div className="text-center">
                <p className="font-display font-bold text-lg text-destructive">{c.before}%</p>
                <p className="text-[9px] text-muted-foreground">Before</p>
              </div>
              <ArrowRight className="w-3 h-3 text-muted-foreground" />
              <div className="text-center">
                <p className="font-display font-bold text-lg text-secondary">{c.after}%</p>
                <p className="text-[9px] text-muted-foreground">After</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* Chart */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h3 className="font-display font-bold mb-4">Before vs After — All Domains</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" tick={{ fontSize: 10 }} />
          <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
          <Tooltip />
          <Bar dataKey="before" fill="hsl(0, 72%, 55%)" radius={[4, 4, 0, 0]} name="Before" opacity={0.4} />
          <Bar dataKey="after" fill="hsl(158, 55%, 42%)" radius={[4, 4, 0, 0]} name="After" />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex gap-4 justify-center mt-3">
        <span className="flex items-center gap-1 text-xs"><span className="w-3 h-3 rounded bg-destructive/40" />Before</span>
        <span className="flex items-center gap-1 text-xs"><span className="w-3 h-3 rounded bg-secondary" />After</span>
      </div>
    </div>

    {/* Testimonials */}
    <div className="space-y-4">
      <h3 className="font-display font-bold text-lg text-center">What People Are Saying</h3>
      {testimonials.map((t, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.15 }}
          className="bg-card rounded-2xl shadow-card p-6">
          <Quote className="w-6 h-6 text-primary/30 mb-2" />
          <p className="font-display font-medium italic text-foreground/80 text-sm leading-relaxed">"{t.quote}"</p>
          <div className="mt-3 flex items-center gap-2">
            <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">{t.author.charAt(0)}</div>
            <div>
              <p className="text-xs font-bold">{t.author}</p>
              <p className="text-[10px] text-muted-foreground">{t.location}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default ImpactPage;
