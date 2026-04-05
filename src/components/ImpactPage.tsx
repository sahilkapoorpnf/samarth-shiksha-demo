import { motion } from "framer-motion";
import { TrendingUp, BookOpen, Eye, Users, ArrowRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const comparisons = [
  { metric: "Reading Score", before: 35, after: 72, icon: BookOpen, color: "primary" },
  { metric: "Attention Span", before: 28, after: 62, icon: Eye, color: "accent" },
  { metric: "Student Engagement", before: 40, after: 85, icon: Users, color: "secondary" },
  { metric: "Memory Retention", before: 45, after: 78, icon: TrendingUp, color: "primary" },
];

const chartData = [
  { name: "Reading", before: 35, after: 72 },
  { name: "Attention", before: 28, after: 62 },
  { name: "Engagement", before: 40, after: 85 },
  { name: "Memory", before: 45, after: 78 },
];

const ImpactPage = () => (
  <div className="space-y-6 pb-8">
    <div className="text-center">
      <h2 className="font-display text-2xl font-bold">Impact Visualization</h2>
      <p className="text-muted-foreground text-sm mt-1">Before vs After — measurable results</p>
    </div>

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="gradient-hero text-primary-foreground rounded-3xl p-6 text-center shadow-card">
      <p className="font-display font-extrabold text-4xl mb-1">89%</p>
      <p className="font-bold">of students showed measurable improvement</p>
      <p className="text-sm opacity-80 mt-1">Across 340 government schools in 12 districts</p>
    </motion.div>

    {/* Comparison Cards */}
    <div className="grid grid-cols-2 gap-4">
      {comparisons.map((c, i) => {
        const Icon = c.icon;
        return (
          <motion.div key={c.metric} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl shadow-card p-5">
            <Icon className={`w-5 h-5 text-${c.color} mb-2`} />
            <p className="text-xs font-medium text-muted-foreground mb-3">{c.metric}</p>
            <div className="flex items-center gap-2">
              <div className="text-center">
                <p className="font-display font-bold text-lg text-destructive">{c.before}%</p>
                <p className="text-[10px] text-muted-foreground">Before</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <div className="text-center">
                <p className="font-display font-bold text-lg text-secondary">{c.after}%</p>
                <p className="text-[10px] text-muted-foreground">After</p>
              </div>
            </div>
            <div className="mt-3 flex gap-1 h-2">
              <div className="bg-destructive/30 rounded-full" style={{ width: `${c.before}%` }} />
              <div className="bg-secondary rounded-full" style={{ width: `${c.after - c.before}%` }} />
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* Chart */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h3 className="font-display font-bold mb-4">Before vs After Comparison</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" tick={{ fontSize: 11 }} />
          <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
          <Tooltip />
          <Bar dataKey="before" fill="hsl(0, 72%, 55%)" radius={[4, 4, 0, 0]} name="Before" opacity={0.5} />
          <Bar dataKey="after" fill="hsl(160, 50%, 48%)" radius={[4, 4, 0, 0]} name="After" />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex gap-4 justify-center mt-3">
        <span className="flex items-center gap-1 text-xs"><span className="w-3 h-3 rounded bg-destructive/50" />Before</span>
        <span className="flex items-center gap-1 text-xs"><span className="w-3 h-3 rounded bg-secondary" />After</span>
      </div>
    </div>

    {/* Testimonial */}
    <div className="bg-card rounded-3xl shadow-card p-6 text-center">
      <p className="text-4xl mb-3">💬</p>
      <p className="font-display font-bold italic text-foreground/80">"We saw remarkable improvement in our students' reading and attention within just 8 weeks."</p>
      <p className="text-muted-foreground text-sm mt-3">— District Education Officer, Patna</p>
    </div>
  </div>
);

export default ImpactPage;
