import { motion } from "framer-motion";
import { FlaskConical, BookOpen, Brain, BarChart3, Shield, Globe, Award, FileText, CheckCircle2 } from "lucide-react";

const methodologies = [
  {
    title: "Multi-Sensory Learning (MSL)",
    desc: "Engages visual, auditory, and kinesthetic channels simultaneously. Research by the International Dyslexia Association shows MSL improves reading outcomes by 40-60%.",
    icon: Brain,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Orton-Gillingham Approach",
    desc: "A structured, sequential, diagnostic, and prescriptive approach to teaching reading. Used globally for dyslexia intervention with proven 70% success rate.",
    icon: BookOpen,
    color: "from-violet-500 to-purple-600"
  },
  {
    title: "Applied Behavior Analysis (ABA)",
    desc: "Evidence-based approach for attention and behavior modification. Gamified reward systems in our app are based on ABA principles.",
    icon: BarChart3,
    color: "from-amber-500 to-orange-600"
  },
  {
    title: "Computerized Cognitive Training",
    desc: "Digital exercises targeting working memory, processing speed, and attention. Meta-analysis of 50+ studies confirms significant improvements in trained domains.",
    icon: FlaskConical,
    color: "from-teal-500 to-cyan-600"
  },
];

const standards = [
  { label: "NEP 2020 Aligned", desc: "Follows India's National Education Policy focus on foundational literacy and numeracy" },
  { label: "NCERT Standards", desc: "Content mapped to NCERT curriculum frameworks for Classes 1-5" },
  { label: "WHO ICF Framework", desc: "Disability classification follows WHO International Classification of Functioning" },
  { label: "RCI Guidelines", desc: "Assessment protocols aligned with Rehabilitation Council of India standards" },
  { label: "UDL Principles", desc: "Universal Design for Learning ensures accessibility for all learners" },
  { label: "WCAG 2.1 AA", desc: "Digital accessibility standards for inclusive technology" },
];

const references = [
  { title: "National Institute of Mental Health", desc: "ADHD prevalence and intervention studies in school-age children", year: "2023" },
  { title: "International Dyslexia Association", desc: "Evidence-based practices for reading instruction", year: "2022" },
  { title: "Indian Journal of Pediatrics", desc: "Learning disabilities prevalence in Indian government schools", year: "2023" },
  { title: "WHO Global Report", desc: "Childhood developmental disorders and early intervention", year: "2024" },
  { title: "ASER Report", desc: "Annual Status of Education Report — foundational literacy data", year: "2023" },
];

const ResearchPage = () => (
  <div className="space-y-8 pb-8">
    <div className="text-center">
      <div className="w-16 h-16 gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
        <FlaskConical className="w-8 h-8 text-primary-foreground" />
      </div>
      <h2 className="section-title">Research & Methodology</h2>
      <p className="section-subtitle">Built on decades of research in educational psychology, special education, and cognitive science</p>
    </div>

    {/* AI Technology Stack */}
    <div className="bg-card rounded-3xl shadow-card p-6 md:p-8">
      <h3 className="font-display font-bold text-lg mb-2">AI & Technology Stack</h3>
      <p className="text-muted-foreground text-sm mb-6">Our system uses advanced AI models trained on educational data from 50,000+ student assessments</p>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { title: "Natural Language Processing", desc: "Analyzes reading patterns, phonemic awareness, and language comprehension using transformer models", pct: 94 },
          { title: "Computer Vision", desc: "Tracks visual attention patterns, handwriting analysis, and pattern recognition during assessments", pct: 91 },
          { title: "Predictive Analytics", desc: "ML models predict learning trajectories and recommend personalized interventions with 89% accuracy", pct: 89 },
        ].map((t, i) => (
          <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
            className="bg-muted/50 rounded-2xl p-5">
            <h4 className="font-display font-bold text-sm mb-2">{t.title}</h4>
            <p className="text-xs text-muted-foreground mb-3">{t.desc}</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <motion.div className="h-full gradient-hero rounded-full" initial={{ width: 0 }} animate={{ width: `${t.pct}%` }} transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }} />
              </div>
              <span className="text-xs font-bold text-primary">{t.pct}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Pedagogical Methodologies */}
    <div>
      <h3 className="font-display font-bold text-lg text-center mb-6">Pedagogical Foundations</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {methodologies.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div key={m.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl shadow-card p-5 flex gap-4 items-start card-hover">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center shadow-lg shrink-0`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm">{m.title}</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>

    {/* Compliance & Standards */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <div className="flex items-center gap-2 mb-5">
        <Shield className="w-5 h-5 text-primary" />
        <h3 className="font-display font-bold text-lg">Compliance & Standards</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {standards.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.08 }}
            className="bg-muted/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
              <h4 className="font-display font-bold text-xs">{s.label}</h4>
            </div>
            <p className="text-[10px] text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Research References */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <div className="flex items-center gap-2 mb-5">
        <FileText className="w-5 h-5 text-accent" />
        <h3 className="font-display font-bold text-lg">Key Research References</h3>
      </div>
      <div className="space-y-3">
        {references.map((r, i) => (
          <motion.div key={r.title} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
            className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
            <span className="text-xs font-bold text-primary bg-primary/10 rounded-lg px-2 py-1 shrink-0">{r.year}</span>
            <div>
              <p className="font-display font-bold text-sm">{r.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Data Privacy */}
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
      className="gradient-primary text-primary-foreground rounded-3xl p-8 text-center shadow-elevated">
      <Shield className="w-10 h-10 mx-auto mb-3 opacity-80" />
      <h3 className="font-display font-bold text-xl mb-2">Data Privacy & Security</h3>
      <p className="text-sm opacity-90 max-w-lg mx-auto">
        All student data is encrypted end-to-end, stored in compliance with India's DPDP Act 2023, and accessible only to authorized educators and parents. No data is shared with third parties.
      </p>
    </motion.div>
  </div>
);

export default ResearchPage;
