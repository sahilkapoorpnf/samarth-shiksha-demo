import { motion } from "framer-motion";
import { Building2, Users, School, TrendingUp, MapPin } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, Cell } from "recharts";

const kpis = [
  { label: "Students Assessed", value: "12,450", icon: Users, change: "+18%", color: "gradient-primary" },
  { label: "Schools Covered", value: "340", icon: School, change: "+24", color: "gradient-hero" },
  { label: "Avg Improvement", value: "34%", icon: TrendingUp, change: "+5%", color: "gradient-warm" },
  { label: "Districts Active", value: "12", icon: MapPin, change: "+3", color: "gradient-primary" },
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

const heatmapData = [
  { district: "Patna", reading: 3, memory: 2, attention: 3 },
  { district: "Ranchi", reading: 2, memory: 3, attention: 2 },
  { district: "Lucknow", reading: 1, memory: 2, attention: 3 },
  { district: "Bhopal", reading: 3, memory: 3, attention: 1 },
  { district: "Jaipur", reading: 2, memory: 1, attention: 2 },
  { district: "Chennai", reading: 1, memory: 1, attention: 2 },
];

const heatColor = (v: number) => v === 3 ? "bg-destructive/70" : v === 2 ? "bg-accent/70" : "bg-secondary/50";

const GovernmentDashboard = () => (
  <div className="space-y-6 pb-8">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center">
        <Building2 className="w-6 h-6 text-primary-foreground" />
      </div>
      <div>
        <h2 className="font-display text-2xl font-bold">Government Dashboard</h2>
        <p className="text-muted-foreground text-sm">State-level analytics overview</p>
      </div>
    </div>

    {/* KPIs */}
    <div className="grid grid-cols-2 gap-3">
      {kpis.map((k, i) => (
        <motion.div key={k.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
          className={`${k.color} text-primary-foreground rounded-2xl p-5 shadow-card`}>
          <k.icon className="w-5 h-5 mb-2 opacity-80" />
          <p className="font-display font-extrabold text-2xl">{k.value}</p>
          <p className="text-xs opacity-80">{k.label}</p>
          <span className="text-xs font-bold bg-primary-foreground/20 px-2 py-0.5 rounded-full mt-2 inline-block">{k.change}</span>
        </motion.div>
      ))}
    </div>

    {/* District Performance */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h3 className="font-display font-bold mb-4">District-wise Performance</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={districtData}>
          <XAxis dataKey="name" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip />
          <Bar dataKey="assessed" fill="hsl(210, 80%, 55%)" radius={[4, 4, 0, 0]} name="Assessed" />
          <Bar dataKey="improved" fill="hsl(160, 50%, 48%)" radius={[4, 4, 0, 0]} name="Improved" />
        </BarChart>
      </ResponsiveContainer>
    </div>

    {/* Trend Line */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h3 className="font-display font-bold mb-4">Growth Trend</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={trendData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 90%)" />
          <XAxis dataKey="month" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip />
          <Line type="monotone" dataKey="students" stroke="hsl(210, 80%, 55%)" strokeWidth={2} dot={{ r: 4 }} name="Students" />
          <Line type="monotone" dataKey="improvement" stroke="hsl(160, 50%, 48%)" strokeWidth={2} dot={{ r: 4 }} name="Improvement %" yAxisId={0} />
        </LineChart>
      </ResponsiveContainer>
    </div>

    {/* Learning Gap Heatmap */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h3 className="font-display font-bold mb-4">Learning Gap Heatmap</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-muted-foreground">
              <th className="text-left font-medium py-2 pr-4">District</th>
              <th className="font-medium py-2 px-3">Reading</th>
              <th className="font-medium py-2 px-3">Memory</th>
              <th className="font-medium py-2 px-3">Attention</th>
            </tr>
          </thead>
          <tbody>
            {heatmapData.map(d => (
              <tr key={d.district}>
                <td className="font-bold py-2 pr-4">{d.district}</td>
                {[d.reading, d.memory, d.attention].map((v, i) => (
                  <td key={i} className="py-2 px-3">
                    <div className={`w-full h-8 rounded-lg ${heatColor(v)} flex items-center justify-center text-xs font-bold`}>
                      {v === 3 ? "High Gap" : v === 2 ? "Medium" : "Low"}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-3 mt-3 justify-end">
        <span className="flex items-center gap-1 text-xs"><span className="w-3 h-3 rounded bg-secondary/50" />Low</span>
        <span className="flex items-center gap-1 text-xs"><span className="w-3 h-3 rounded bg-accent/70" />Medium</span>
        <span className="flex items-center gap-1 text-xs"><span className="w-3 h-3 rounded bg-destructive/70" />High</span>
      </div>
    </div>
  </div>
);

export default GovernmentDashboard;
