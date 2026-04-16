import { motion } from "framer-motion";
import { Building2, Users, School, TrendingUp, MapPin, HeartPulse, IndianRupee, FileText, AlertTriangle, Target, LayoutDashboard, BarChart3, PieChart as PieChartIcon, Settings, Globe, Download, Filter, CheckCircle2, Clock, Bell, Shield, Eye, Printer, Mail, Calendar, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, PieChart, Pie, Cell, AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import { useState } from "react";

const sidebarItems = [
  { id: "overview", label: "State Overview", icon: LayoutDashboard },
  { id: "districts", label: "District Data", icon: MapPin },
  { id: "disabilities", label: "Disability Stats", icon: HeartPulse },
  { id: "trends", label: "Growth Trends", icon: TrendingUp },
  { id: "budget", label: "Budget & Finance", icon: IndianRupee },
  { id: "reports", label: "Reports", icon: FileText },
  { id: "policy", label: "Policy Recs", icon: Target },
  { id: "settings", label: "Settings", icon: Settings },
];

const kpis = [
  { label: "Students Assessed", value: "12,450", icon: Users, change: "+18% YoY", color: "gradient-primary" },
  { label: "Schools Covered", value: "340", icon: School, change: "+24 this quarter", color: "gradient-hero" },
  { label: "Avg Improvement", value: "34%", icon: TrendingUp, change: "+5% from last year", color: "gradient-warm" },
  { label: "Districts Active", value: "15", icon: MapPin, change: "+3 new", color: "gradient-teal" },
  { label: "Disabilities Detected", value: "4,200", icon: HeartPulse, change: "33.7% prevalence", color: "gradient-rose" },
  { label: "Budget Utilized", value: "₹2.8Cr", icon: IndianRupee, change: "78% of allocated", color: "gradient-purple" },
];

const districtData = [
  { name: "Patna", assessed: 2400, improved: 1800, schools: 58, teachers: 124 },
  { name: "Ranchi", assessed: 1800, improved: 1400, schools: 42, teachers: 96 },
  { name: "Lucknow", assessed: 2100, improved: 1700, schools: 51, teachers: 110 },
  { name: "Bhopal", assessed: 1500, improved: 1100, schools: 38, teachers: 82 },
  { name: "Jaipur", assessed: 1900, improved: 1500, schools: 47, teachers: 101 },
  { name: "Chennai", assessed: 2750, improved: 2200, schools: 64, teachers: 138 },
];

const trendData = [
  { month: "Jan", students: 3200, improvement: 22, schools: 180 },
  { month: "Feb", students: 4500, improvement: 25, schools: 210 },
  { month: "Mar", students: 5800, improvement: 28, schools: 245 },
  { month: "Apr", students: 7200, improvement: 30, schools: 280 },
  { month: "May", students: 9100, improvement: 32, schools: 310 },
  { month: "Jun", students: 12450, improvement: 34, schools: 340 },
];

const disabilityBreakdown = [
  { name: "Dyslexia", value: 35, color: "hsl(215, 85%, 50%)", count: 1470 },
  { name: "ADHD", value: 28, color: "hsl(32, 95%, 52%)", count: 1176 },
  { name: "Dyscalculia", value: 15, color: "hsl(260, 70%, 55%)", count: 630 },
  { name: "Dysgraphia", value: 12, color: "hsl(158, 55%, 42%)", count: 504 },
  { name: "APD", value: 7, color: "hsl(340, 75%, 55%)", count: 294 },
  { name: "VPD", value: 3, color: "hsl(195, 80%, 50%)", count: 126 },
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
  { title: "Scale Phonics Training", desc: "Districts with high dyslexia rates (Patna, Bhopal) need additional phonics-trained teachers", priority: "High", status: "Pending" },
  { title: "ADHD Intervention Programs", desc: "28% of detected disabilities are ADHD — invest in attention training infrastructure", priority: "High", status: "In Review" },
  { title: "Teacher Training Expansion", desc: "Increase special education training from 1,200 to 3,000 teachers by next fiscal year", priority: "Medium", status: "Approved" },
  { title: "Hardware Procurement", desc: "500 additional tablets and headphones needed for newly onboarded districts", priority: "Medium", status: "Pending" },
  { title: "Parent Awareness Campaign", desc: "Launch state-wide awareness program for early detection of learning disabilities", priority: "High", status: "Drafting" },
  { title: "Data Privacy Framework", desc: "Establish DPDP-compliant data handling for student assessment records", priority: "High", status: "In Review" },
];

const budgetData = [
  { category: "Hardware & Devices", allocated: 85, utilized: 68, amount: "₹85L" },
  { category: "Teacher Training", allocated: 45, utilized: 38, amount: "₹45L" },
  { category: "Software Licenses", allocated: 35, utilized: 32, amount: "₹35L" },
  { category: "Infrastructure", allocated: 55, utilized: 40, amount: "₹55L" },
  { category: "Research & Dev", allocated: 30, utilized: 22, amount: "₹30L" },
  { category: "Admin & Ops", allocated: 30, utilized: 25, amount: "₹30L" },
];

const budgetTrend = [
  { quarter: "Q1 FY24", allocated: 70, utilized: 45 },
  { quarter: "Q2 FY24", allocated: 70, utilized: 58 },
  { quarter: "Q3 FY24", allocated: 70, utilized: 65 },
  { quarter: "Q4 FY24", allocated: 70, utilized: 62 },
  { quarter: "Q1 FY25", allocated: 70, utilized: 55 },
  { quarter: "Q2 FY25", allocated: 70, utilized: 60 },
];

const reports = [
  { title: "Annual State Assessment Report FY24", date: "March 2024", type: "Annual", pages: 48, status: "Published" },
  { title: "Q2 District Performance Summary", date: "Sept 2024", type: "Quarterly", pages: 22, status: "Published" },
  { title: "Disability Prevalence Study — Bihar", date: "Nov 2024", type: "Research", pages: 36, status: "Published" },
  { title: "Teacher Training Impact Analysis", date: "Jan 2025", type: "Analysis", pages: 18, status: "Draft" },
  { title: "Hardware Utilization Audit", date: "Feb 2025", type: "Audit", pages: 14, status: "Draft" },
  { title: "Q3 Budget Utilization Report", date: "Dec 2024", type: "Quarterly", pages: 16, status: "Published" },
];

const radarData = [
  { area: "Reading", patna: 75, ranchi: 65, lucknow: 80, avg: 73 },
  { area: "Memory", patna: 60, ranchi: 55, lucknow: 70, avg: 62 },
  { area: "Attention", patna: 50, ranchi: 70, lucknow: 55, avg: 58 },
  { area: "Math", patna: 65, ranchi: 80, lucknow: 60, avg: 68 },
  { area: "Writing", patna: 70, ranchi: 60, lucknow: 75, avg: 68 },
  { area: "Speech", patna: 80, ranchi: 75, lucknow: 85, avg: 80 },
];

// ─── Section Components ───

const OverviewSection = () => (
  <div className="space-y-6">
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
  </div>
);

const DistrictsSection = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  return (
    <div className="space-y-6">
      <h3 className="font-display font-bold text-lg flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> District-Wise Data</h3>
      <div className="grid md:grid-cols-3 gap-3">
        {districtData.map((d, i) => (
          <motion.div key={d.name} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
            onClick={() => setSelectedDistrict(selectedDistrict === d.name ? null : d.name)}
            className={`bg-card rounded-2xl shadow-card p-4 cursor-pointer transition-all hover:shadow-lg ${selectedDistrict === d.name ? "ring-2 ring-primary" : ""}`}>
            <p className="font-display font-bold text-sm">{d.name}</p>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <div><p className="text-[10px] text-muted-foreground">Assessed</p><p className="font-bold text-sm">{d.assessed.toLocaleString()}</p></div>
              <div><p className="text-[10px] text-muted-foreground">Improved</p><p className="font-bold text-sm text-green-600">{d.improved.toLocaleString()}</p></div>
              <div><p className="text-[10px] text-muted-foreground">Schools</p><p className="font-bold text-sm">{d.schools}</p></div>
              <div><p className="text-[10px] text-muted-foreground">Teachers</p><p className="font-bold text-sm">{d.teachers}</p></div>
            </div>
            <div className="mt-3">
              <div className="flex justify-between text-[10px] text-muted-foreground mb-1"><span>Improvement Rate</span><span>{Math.round(d.improved / d.assessed * 100)}%</span></div>
              <div className="w-full bg-muted rounded-full h-2"><div className="bg-primary rounded-full h-2 transition-all" style={{ width: `${Math.round(d.improved / d.assessed * 100)}%` }} /></div>
            </div>
          </motion.div>
        ))}
      </div>
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
      <div className="bg-card rounded-3xl shadow-card p-6">
        <h3 className="font-display font-bold mb-4">District Skill Radar</h3>
        <ResponsiveContainer width="100%" height={280}>
          <RadarChart data={radarData}>
            <PolarGrid stroke="hsl(var(--border))" />
            <PolarAngleAxis dataKey="area" tick={{ fontSize: 10 }} />
            <PolarRadiusAxis tick={{ fontSize: 9 }} />
            <Radar name="Patna" dataKey="patna" stroke="hsl(215, 85%, 50%)" fill="hsl(215, 85%, 50%)" fillOpacity={0.15} />
            <Radar name="Ranchi" dataKey="ranchi" stroke="hsl(32, 95%, 52%)" fill="hsl(32, 95%, 52%)" fillOpacity={0.15} />
            <Radar name="Lucknow" dataKey="lucknow" stroke="hsl(158, 55%, 42%)" fill="hsl(158, 55%, 42%)" fillOpacity={0.15} />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const DisabilitiesSection = () => (
  <div className="space-y-6">
    <h3 className="font-display font-bold text-lg flex items-center gap-2"><HeartPulse className="w-5 h-5 text-destructive" /> Disability Statistics</h3>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-card rounded-3xl shadow-card p-6">
        <h4 className="font-display font-bold mb-4">Overall Distribution</h4>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={disabilityBreakdown} cx="50%" cy="50%" innerRadius={50} outerRadius={90} paddingAngle={3} dataKey="value">
              {disabilityBreakdown.map((entry, i) => <Cell key={i} fill={entry.color} />)}
            </Pie>
            <Tooltip formatter={(value: number) => `${value}%`} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-card rounded-3xl shadow-card p-6">
        <h4 className="font-display font-bold mb-4">Detection Count by Type</h4>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={disabilityBreakdown} layout="vertical">
            <XAxis type="number" tick={{ fontSize: 10 }} />
            <YAxis dataKey="name" type="category" tick={{ fontSize: 10 }} width={80} />
            <Tooltip />
            <Bar dataKey="count" radius={[0, 6, 6, 0]} name="Students Detected">
              {disabilityBreakdown.map((entry, i) => <Cell key={i} fill={entry.color} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h4 className="font-display font-bold mb-4">Detailed Breakdown</h4>
      <div className="space-y-3">
        {disabilityBreakdown.map((d, i) => (
          <motion.div key={d.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
            className="p-4 rounded-xl bg-muted/50">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                <span className="font-display font-bold text-sm">{d.name}</span>
              </div>
              <span className="font-bold text-sm">{d.count.toLocaleString()} students ({d.value}%)</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="rounded-full h-2 transition-all" style={{ width: `${d.value}%`, backgroundColor: d.color }} />
            </div>
            <p className="text-[10px] text-muted-foreground mt-2">
              {d.name === "Dyslexia" && "Difficulty in reading, decoding words, and phonological processing. Most prevalent across all districts."}
              {d.name === "ADHD" && "Challenges with sustained attention, impulse control, and hyperactivity affecting learning outcomes."}
              {d.name === "Dyscalculia" && "Difficulty understanding numbers, math facts, and mathematical reasoning."}
              {d.name === "Dysgraphia" && "Challenges with handwriting, spelling, and organizing written expression."}
              {d.name === "APD" && "Auditory Processing Disorder — difficulty processing and interpreting sounds despite normal hearing."}
              {d.name === "VPD" && "Visual Processing Disorder — difficulty interpreting visual information and spatial relationships."}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h4 className="font-display font-bold mb-4">District-wise Prevalence</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-muted-foreground border-b border-border">
              <th className="text-left font-medium py-2">District</th>
              {disabilityBreakdown.map(d => <th key={d.name} className="font-medium py-2 px-2 text-center">{d.name}</th>)}
            </tr>
          </thead>
          <tbody>
            {districtData.map(dist => (
              <tr key={dist.name} className="border-b border-border/50">
                <td className="font-bold py-2 text-xs">{dist.name}</td>
                {disabilityBreakdown.map((d, i) => (
                  <td key={d.name} className="py-2 px-2 text-center text-xs">
                    {Math.round(dist.assessed * d.value / 100 * (0.7 + Math.random() * 0.6))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const TrendsSection = () => (
  <div className="space-y-6">
    <h3 className="font-display font-bold text-lg flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary" /> Growth Trends</h3>
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h4 className="font-display font-bold mb-4">Student Assessment Growth (6 Months)</h4>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={trendData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="month" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip />
          <Area type="monotone" dataKey="students" stroke="hsl(215, 85%, 50%)" fill="hsl(215, 85%, 50%)" fillOpacity={0.15} strokeWidth={2} name="Students Assessed" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-card rounded-3xl shadow-card p-6">
        <h4 className="font-display font-bold mb-4">Improvement Rate Trend</h4>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} domain={[15, 40]} />
            <Tooltip />
            <Line type="monotone" dataKey="improvement" stroke="hsl(158, 55%, 42%)" strokeWidth={2} dot={{ r: 4 }} name="Improvement %" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-card rounded-3xl shadow-card p-6">
        <h4 className="font-display font-bold mb-4">Schools Onboarded</h4>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={trendData}>
            <XAxis dataKey="month" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="schools" fill="hsl(260, 70%, 55%)" radius={[6, 6, 0, 0]} name="Schools" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h4 className="font-display font-bold mb-4">Key Growth Milestones</h4>
      <div className="space-y-4">
        {[
          { date: "Jun 2024", milestone: "12,450 students assessed — 289% growth from Jan", icon: Users },
          { date: "May 2024", milestone: "Crossed 300 schools mark across 15 districts", icon: School },
          { date: "Apr 2024", milestone: "34% average improvement rate achieved", icon: TrendingUp },
          { date: "Mar 2024", milestone: "3 new districts (Jaipur, Bhopal, Chennai) onboarded", icon: MapPin },
          { date: "Feb 2024", milestone: "AI assessment engine upgraded to v2.0 with 95% accuracy", icon: Target },
        ].map((m, i) => (
          <motion.div key={m.date} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
            className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <m.icon className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="font-display font-bold text-sm">{m.milestone}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{m.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const BudgetSection = () => (
  <div className="space-y-6">
    <h3 className="font-display font-bold text-lg flex items-center gap-2"><IndianRupee className="w-5 h-5 text-primary" /> Budget & Finance</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {[
        { label: "Total Allocated", value: "₹3.6 Cr", change: "+15% from FY24", up: true },
        { label: "Total Utilized", value: "₹2.8 Cr", change: "78% utilization", up: true },
        { label: "Remaining", value: "₹80L", change: "Q3-Q4 planned", up: false },
      ].map((k, i) => (
        <motion.div key={k.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
          className="bg-card rounded-2xl shadow-card p-4">
          <p className="text-[10px] text-muted-foreground">{k.label}</p>
          <p className="font-display font-extrabold text-xl mt-1">{k.value}</p>
          <span className={`text-[10px] font-bold flex items-center gap-1 mt-1 ${k.up ? "text-green-600" : "text-muted-foreground"}`}>
            {k.up ? <ArrowUpRight className="w-3 h-3" /> : <Clock className="w-3 h-3" />} {k.change}
          </span>
        </motion.div>
      ))}
    </div>
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h4 className="font-display font-bold mb-4">Category-wise Allocation vs Utilization (₹ Lakhs)</h4>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={budgetData}>
          <XAxis dataKey="category" tick={{ fontSize: 9 }} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip />
          <Bar dataKey="allocated" fill="hsl(215, 85%, 50%)" radius={[4, 4, 0, 0]} name="Allocated (₹L)" />
          <Bar dataKey="utilized" fill="hsl(158, 55%, 42%)" radius={[4, 4, 0, 0]} name="Utilized (₹L)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h4 className="font-display font-bold mb-4">Quarterly Utilization Trend</h4>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={budgetTrend}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="quarter" tick={{ fontSize: 9 }} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip />
          <Line type="monotone" dataKey="allocated" stroke="hsl(215, 85%, 50%)" strokeWidth={2} strokeDasharray="5 5" name="Allocated (₹L)" />
          <Line type="monotone" dataKey="utilized" stroke="hsl(158, 55%, 42%)" strokeWidth={2} dot={{ r: 4 }} name="Utilized (₹L)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h4 className="font-display font-bold mb-4">Budget Utilization Details</h4>
      <div className="space-y-3">
        {budgetData.map((b, i) => (
          <div key={b.category} className="p-3 rounded-xl bg-muted/50">
            <div className="flex justify-between items-center mb-2">
              <span className="font-display font-bold text-sm">{b.category}</span>
              <span className="text-xs text-muted-foreground">{b.amount} allocated</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2.5">
              <div className="bg-primary rounded-full h-2.5 transition-all" style={{ width: `${Math.round(b.utilized / b.allocated * 100)}%` }} />
            </div>
            <p className="text-[10px] text-muted-foreground mt-1">{Math.round(b.utilized / b.allocated * 100)}% utilized — ₹{b.utilized}L of ₹{b.allocated}L</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ReportsSection = () => (
  <div className="space-y-6">
    <h3 className="font-display font-bold text-lg flex items-center gap-2"><FileText className="w-5 h-5 text-primary" /> Reports & Documents</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {[
        { label: "Total Reports", value: "24", icon: FileText },
        { label: "Published", value: "18", icon: CheckCircle2 },
        { label: "Drafts", value: "6", icon: Clock },
        { label: "Downloads", value: "1,240", icon: Download },
      ].map((s, i) => (
        <motion.div key={s.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
          className="bg-card rounded-2xl shadow-card p-4 text-center">
          <s.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
          <p className="font-display font-extrabold text-xl">{s.value}</p>
          <p className="text-[10px] text-muted-foreground">{s.label}</p>
        </motion.div>
      ))}
    </div>
    <div className="bg-card rounded-3xl shadow-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-display font-bold">All Reports</h4>
        <button className="flex items-center gap-1 text-xs font-bold text-primary"><Filter className="w-3 h-3" /> Filter</button>
      </div>
      <div className="space-y-3">
        {reports.map((r, i) => (
          <motion.div key={r.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
            className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-sm">{r.title}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{r.date} • {r.type} • {r.pages} pages</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${r.status === "Published" ? "bg-green-100 text-green-700" : "bg-accent/10 text-accent"}`}>{r.status}</span>
              <button className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Download className="w-4 h-4 text-primary" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const PolicySection = () => (
  <div className="space-y-6">
    <h3 className="font-display font-bold text-lg flex items-center gap-2"><Target className="w-5 h-5 text-accent" /> AI Policy Recommendations</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {[
        { label: "Total Recs", value: "6", color: "bg-primary/10 text-primary" },
        { label: "High Priority", value: "4", color: "bg-destructive/10 text-destructive" },
        { label: "Approved", value: "1", color: "bg-green-100 text-green-700" },
        { label: "Pending", value: "3", color: "bg-accent/10 text-accent" },
      ].map((s, i) => (
        <div key={s.label} className="bg-card rounded-2xl shadow-card p-4 text-center">
          <p className={`font-display font-extrabold text-xl ${s.color.split(" ")[1]}`}>{s.value}</p>
          <p className="text-[10px] text-muted-foreground mt-1">{s.label}</p>
        </div>
      ))}
    </div>
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h4 className="font-display font-bold mb-4">All Recommendations</h4>
      <div className="space-y-3">
        {policyRecs.map((r, i) => (
          <motion.div key={r.title} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
            className="p-4 rounded-xl bg-muted/50">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${r.priority === "High" ? "bg-destructive/10 text-destructive" : "bg-accent/10 text-accent"}`}>{r.priority}</span>
                <div>
                  <p className="font-display font-bold text-sm">{r.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{r.desc}</p>
                </div>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                r.status === "Approved" ? "bg-green-100 text-green-700" :
                r.status === "In Review" ? "bg-blue-100 text-blue-700" :
                r.status === "Drafting" ? "bg-purple-100 text-purple-700" :
                "bg-accent/10 text-accent"
              }`}>{r.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h4 className="font-display font-bold mb-4">Implementation Roadmap</h4>
      <div className="space-y-4">
        {[
          { phase: "Phase 1 — Q3 FY25", items: ["Teacher training scale-up (1,200→2,000)", "ADHD intervention pilot in 3 districts"], status: "In Progress" },
          { phase: "Phase 2 — Q4 FY25", items: ["Hardware procurement for 5 new districts", "Parent awareness campaign launch"], status: "Planned" },
          { phase: "Phase 3 — Q1 FY26", items: ["Full phonics training rollout", "Data privacy framework implementation"], status: "Upcoming" },
        ].map((p, i) => (
          <motion.div key={p.phase} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="p-4 rounded-xl border border-border">
            <div className="flex items-center justify-between mb-2">
              <p className="font-display font-bold text-sm">{p.phase}</p>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                p.status === "In Progress" ? "bg-blue-100 text-blue-700" : p.status === "Planned" ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"
              }`}>{p.status}</span>
            </div>
            <ul className="space-y-1">
              {p.items.map(item => (
                <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className={`w-3 h-3 shrink-0 ${p.status === "In Progress" ? "text-blue-500" : "text-muted-foreground/50"}`} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const SettingsSection = () => (
  <div className="space-y-6">
    <h3 className="font-display font-bold text-lg flex items-center gap-2"><Settings className="w-5 h-5 text-primary" /> Dashboard Settings</h3>
    <div className="space-y-4">
      {[
        { title: "Notification Preferences", desc: "Configure email and SMS alerts for key metrics", icon: Bell, items: [
          { label: "Email alerts for new district data", enabled: true },
          { label: "Weekly summary digest", enabled: true },
          { label: "Budget threshold alerts (>90% utilization)", enabled: false },
          { label: "Policy recommendation updates", enabled: true },
        ]},
        { title: "Data Access & Permissions", desc: "Manage who can view and edit dashboard data", icon: Shield, items: [
          { label: "State admin — Full access", enabled: true },
          { label: "District officers — Read-only", enabled: true },
          { label: "External auditors — Reports only", enabled: false },
          { label: "Research partners — Anonymized data", enabled: true },
        ]},
        { title: "Display Preferences", desc: "Customize dashboard appearance and data views", icon: Eye, items: [
          { label: "Show YoY comparison on KPIs", enabled: true },
          { label: "Auto-refresh data every 30 minutes", enabled: false },
          { label: "Show district-level drill-down", enabled: true },
          { label: "Enable dark mode", enabled: false },
        ]},
        { title: "Export & Integration", desc: "Configure data exports and third-party integrations", icon: Globe, items: [
          { label: "Auto-export monthly CSV to state portal", enabled: true },
          { label: "API access for NIC integration", enabled: false },
          { label: "Scheduled report generation", enabled: true },
          { label: "UDISE+ data sync", enabled: false },
        ]},
      ].map((section, i) => (
        <motion.div key={section.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
          className="bg-card rounded-3xl shadow-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <section.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-display font-bold text-sm">{section.title}</p>
              <p className="text-[10px] text-muted-foreground">{section.desc}</p>
            </div>
          </div>
          <div className="space-y-2">
            {section.items.map(item => (
              <div key={item.label} className="flex items-center justify-between p-2.5 rounded-xl bg-muted/50">
                <span className="text-xs">{item.label}</span>
                <div className={`w-9 h-5 rounded-full transition-colors cursor-pointer flex items-center ${item.enabled ? "bg-primary justify-end" : "bg-muted-foreground/30 justify-start"}`}>
                  <div className="w-4 h-4 rounded-full bg-primary-foreground mx-0.5 shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// ─── Main Component ───

const sectionMap: Record<string, React.ComponentType> = {
  overview: OverviewSection,
  districts: DistrictsSection,
  disabilities: DisabilitiesSection,
  trends: TrendsSection,
  budget: BudgetSection,
  reports: ReportsSection,
  policy: PolicySection,
  settings: SettingsSection,
};

const GovernmentDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const Section = sectionMap[activeSection] || OverviewSection;

  return (
    <div className="flex gap-4 pb-8">
      {/* Left Sidebar */}
      <div className="hidden md:block w-52 shrink-0">
        <div className="bg-card rounded-2xl shadow-card p-3 sticky top-20">
          <div className="flex items-center gap-2 px-3 py-2 mb-2">
            <div className="w-8 h-8 gradient-purple rounded-lg flex items-center justify-center">
              <Building2 className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <p className="font-display font-bold text-xs">Govt Panel</p>
              <p className="text-[9px] text-muted-foreground">FY 2024-25</p>
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
      <div className="flex-1 space-y-6 min-w-0 md:pt-0 pt-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center">
            <Building2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">Government Dashboard</h2>
            <p className="text-muted-foreground text-sm">State-level analytics • FY 2024-25</p>
          </div>
        </div>
        <Section />
      </div>
    </div>
  );
};

export default GovernmentDashboard;
