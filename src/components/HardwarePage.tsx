import { motion } from "framer-motion";
import { Headphones, Tablet, Monitor, Wifi, CheckCircle } from "lucide-react";
import hardwareImg from "@/assets/hardware-setup.png";

const features = [
  { icon: Tablet, title: "Learning Tablets", desc: "Pre-loaded with Samarth Shiksha app, child-proof cases, long battery life" },
  { icon: Headphones, title: "Noise-Cancelling Headphones", desc: "Headphone-based learning improves focus by 40% in noisy classrooms" },
  { icon: Monitor, title: "Teacher Monitoring Station", desc: "Real-time dashboard to track all student activities in the classroom" },
  { icon: Wifi, title: "Offline-First Design", desc: "Works without internet. Syncs data when connectivity is available" },
];

const HardwarePage = () => (
  <div className="space-y-6 pb-8">
    <div className="text-center">
      <h2 className="font-display text-2xl font-bold">Hardware Setup</h2>
      <p className="text-muted-foreground text-sm mt-1">Classroom-ready technology infrastructure</p>
    </div>

    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
      className="bg-card rounded-3xl shadow-card overflow-hidden">
      <img src={hardwareImg} alt="Classroom hardware setup" loading="lazy" width={1024} height={640} className="w-full object-cover" />
    </motion.div>

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="gradient-hero text-primary-foreground rounded-2xl p-5 text-center">
      <Headphones className="w-8 h-8 mx-auto mb-2" />
      <p className="font-display font-bold">"Headphone-based learning improves focus by 40%"</p>
      <p className="text-sm opacity-80 mt-1">Based on pilot studies across 50 government schools</p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map((f, i) => (
        <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
          className="bg-card rounded-2xl shadow-card p-5 flex gap-4 items-start hover:shadow-elevated transition-shadow">
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shrink-0">
            <f.icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display font-bold text-sm">{f.title}</h3>
            <p className="text-muted-foreground text-xs mt-1">{f.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="bg-card rounded-3xl shadow-card p-6">
      <h3 className="font-display font-bold mb-4">Setup Checklist</h3>
      {["Tablets distributed to classroom", "Headphones tested and sanitized", "Teacher trained on monitoring dashboard", "Content loaded and verified", "Network configured (or offline mode enabled)"].map((item, i) => (
        <div key={item} className="flex items-center gap-3 py-2">
          <CheckCircle className="w-5 h-5 text-secondary" />
          <span className="text-sm">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

export default HardwarePage;
