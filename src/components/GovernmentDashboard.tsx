import { motion } from "framer-motion";
import { Building2, Users, School, TrendingUp, MapPin, HeartPulse, IndianRupee, FileText, AlertTriangle, Target } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, PieChart, Pie, Cell } from "recharts";

const kpis = [
  { label: "Students Assessed", value: "12,450", icon: Users, change: "+18% YoY", color: "gradient-primary" },
  { label: "Schools Covered", value: "340", icon: School, change: "+24 this quarter", color: "gradient-hero" },
  { label: "Avg Improvement", value: "34%", icon: TrendingUp, change: "+5% from last year", color: "gradient-warm" },
  { label: "Districts Active", value: "15", icon: MapPin, change: "+3 new", color: "gradient-teal" },
  { label: "Disabilities Detected", value: "4,200", icon: HeartPulse, change: "33.7% prevalence", color: "gradient-rose" },
  { label: "Budget Utilized", value: "₹2.8Cr", icon: IndianRupee, change: "78% of allocated", color: "gradient-purple" },
];

const districtData = [
  { name: "Patna", assessed: 2400, improved: 1800 },
  { name: "Ranchi", assessed: 1800, improved: 1400 },
  { name: "Lucknow", assessed: 2100, improved: 1700 },
  { name: "Bhopal", assessed: 1500, improved: 1100 },
  { name: "Jaipur", assessed: 1900, improved: 1500 },
  { name: "Chennai", assessed: 2750, improved: 2200 },
];

const trendData = [
  { month: "Jan", students: 3200, improvement: 22 },
  { month: "Feb", students: 4500, improvement: 25 },
  { month: "Mar", students: 5800, improvement: 28 },
  { month: "Apr", students: 7200, improvement: 30 },
  { month: "May", students: 9100, improvement: 32 },
  { month: "Jun", students: 12450, improvement: 34 },
];

const disabilityBreakdown = [
  { name: "Dyslexia", value: 35, color: "hsl(215, 85%, 50%)" },
  { name: "ADHD", value: 28, color: "hsl(32, 95%, 52%)" },
  { name: "Dyscalculia", value: 15, color: "hsl(260, 70%, 55%)" },
  { name: "Dysgraphia", value: 12, color: "hsl(158, 55%, 42%)" },
  { name: "APD", value: 7, color: "hsl(340, 75%, 55%)" },
  { name: "VPD", value: 3, color: "hsl(195, 80%, 50%)" },
];

const heatmapData = [
  { district: "Patna", reading: 3, memory: 2, attention: 3, math: 2 },
  { district: "Ranchi", reading: 2, memory: 3, attention: 2, math: 1 },
  { district: "Lucknow", reading: 1, memory: 2, attention: 3, math: 2 },
  { district: "Bhopal", reading: 3, memory: 3, attention: 1, math: 3 },
  { district: "Jaipur", reading: 2, memory: 1, attention: 2, math: 1 },
  { district: "Chennai", reading: 1, memory: 1, attention: 2, math: 1 },
];

const heatColor = (v: number) => v === 3 ? "bg-destructive/70" : v === 2 ? "bg-accent/70" : "bg-secondary/50";

const policyRecs = [
  { title: "Scale Phonics Training", desc: "Districts with high dyslexia rates (Patna, Bhopal) need additional phonics-trained teachers", priority: "High" },
  { title: "ADHD Intervention Programs", desc: "28% of detected disabilities are ADHD — invest in attention training infrastructure", priority: "High" },
  { title: "Teacher Training Expansion", desc: "Increase special education training from 1,200 to 3,000 teachers by next fiscal year", priority: "Medium" },
  { title: "Hardware Procurement", desc: "500 additional tablets and headphones needed for newly onboarded districts", priority: "Medium" },
];

const GovernmentDashboard = () => (
  <div className="space-y-6 pb-8">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center">
        <Building2 className="w-6 h-6 text-primary-foreground" />
      </div>
      <div>
        <h2 className="font-display text-2xl font-bold">Government Dashboard</h2>
        <p className="text-muted-foreground text-sm">State-level analytics • FY 2024-25</p>
      </div>
    </div>

    {/* KPIs */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {kpis.map((k, i) => (
        <motion.div key={k.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
          className={`${k.color} text-primary-foreground rounded-2xl p-4 shadow-card`}>
          <k.icon className="w-5 h-5 mb-2 opacity-80" />
          <p className="font-display font-extrabold text-2xl">{k.value}</p>
          <p className="text-xs opacity-80">{k.label}</p>
          <span className="text-[10px] font-bold bg-primary-foreground/20 px-2 py-0.5 rounded-full mt-2 inline-block">{k.change}</span>
        </motion.div>
      ))}
    </div>

    {/* Disability Breakdown Pie */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-card rounded-3xl shadow-card p-6">
        <h3 className="font-display font-bold mb-4 flex items-center gap-2"><HeartPulse className="w-5 h-5 text-destructive" /> Disability Distribution</h3>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie data={disabilityBreakdown} cx="50%" cy="50%" innerRadius={50} outerRadius={85} paddingAngle={3} dataKey="value">
              {disabilityBreakdown.map((entry, i) => <Cell key={i} fill={entry.color} />)}
            </Pie>
            <Tooltip formatter={(value: number) => `${value}%`} />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-wrap gap-2 justify-center mt-2">
          {disabilityBreakdown.map(d => (
            <span key={d.name} className="flex items-center gap-1 text-[10px]">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />{d.name} ({d.value}%)
            </span>
          ))}
        </div>
      </div>

      <div className="bg-card rounded-3xl shadow-card p-6">
        <h3 className="font-display font-bold mb-4">District Performance</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={districtData}>
            <XAxis dataKey="name" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="assessed" fill="hsl(215, 85%, 50%)" radius={[4, 4, 0, 0]} name="Assessed" />
            <Bar dataKey="improved" fill="hsl(158, 55%, 42%)" radius={[4, 4, 0, 0]} name="Improved" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* Trend */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h3 className="font-display font-bold mb-4">Growth Trend (6 Months)</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={trendData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 18%, 88%)" />
          <XAxis dataKey="month" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip />
          <Line type="monotone" dataKey="students" stroke="hsl(215, 85%, 50%)" strokeWidth={2} dot={{ r: 4 }} name="Students Assessed" />
          <Line type="monotone" dataKey="improvement" stroke="hsl(158, 55%, 42%)" strokeWidth={2} dot={{ r: 4 }} name="Improvement %" />
        </LineChart>
      </ResponsiveContainer>
    </div>

    {/* Heatmap */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h3 className="font-display font-bold mb-4">Learning Gap Heatmap</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-muted-foreground">
              <th className="text-left font-medium py-2 pr-4">District</th>
              <th className="font-medium py-2 px-2">Reading</th>
              <th className="font-medium py-2 px-2">Memory</th>
              <th className="font-medium py-2 px-2">Attention</th>
              <th className="font-medium py-2 px-2">Math</th>
            </tr>
          </thead>
          <tbody>
            {heatmapData.map(d => (
              <tr key={d.district}>
                <td className="font-bold py-2 pr-4 text-xs">{d.district}</td>
                {[d.reading, d.memory, d.attention, d.math].map((v, i) => (
                  <td key={i} className="py-2 px-2">
                    <div className={`h-7 rounded-lg ${heatColor(v)} flex items-center justify-center text-[10px] font-bold`}>
                      {v === 3 ? "High" : v === 2 ? "Med" : "Low"}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-3 mt-3 justify-end">
        <span className="flex items-center gap-1 text-[10px]"><span className="w-3 h-3 rounded bg-secondary/50" />Low Gap</span>
        <span className="flex items-center gap-1 text-[10px]"><span className="w-3 h-3 rounded bg-accent/70" />Medium</span>
        <span className="flex items-center gap-1 text-[10px]"><span className="w-3 h-3 rounded bg-destructive/70" />High Gap</span>
      </div>
    </div>

    {/* Policy Recommendations */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <div className="flex items-center gap-2 mb-4">
        <Target className="w-5 h-5 text-accent" />
        <h3 className="font-display font-bold">AI Policy Recommendations</h3>
      </div>
      <div className="space-y-3">
        {policyRecs.map((r, i) => (
          <motion.div key={r.title} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${r.priority === "High" ? "bg-destructive/10 text-destructive" : "bg-accent/10 text-accent"}`}>{r.priority}</span>
            <div>
              <p className="font-display font-bold text-sm">{r.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default GovernmentDashboard;
