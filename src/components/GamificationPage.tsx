import { motion } from "framer-motion";
import { Star, Trophy, Flame, Award, Medal, Target, Zap, Gift, Crown, Heart, ArrowRight, ShoppingBag, Gamepad2, CheckCircle, TrendingUp, Sparkles } from "lucide-react";

const badges = [
  { name: "Reading Star", emoji: "📖", earned: true, desc: "Complete 10 reading exercises", rarity: "Common" },
  { name: "Focus Hero", emoji: "🎯", earned: true, desc: "Score 80%+ on attention tests", rarity: "Rare" },
  { name: "Memory Master", emoji: "🧠", earned: true, desc: "Win 5 memory games", rarity: "Common" },
  { name: "Math Wizard", emoji: "🔢", earned: true, desc: "Solve 20 math problems", rarity: "Common" },
  { name: "Quick Learner", emoji: "⚡", earned: false, desc: "Complete 3 lessons in a day", rarity: "Rare" },
  { name: "Super Listener", emoji: "👂", earned: false, desc: "Pass all listening tests", rarity: "Epic" },
  { name: "Pattern Pro", emoji: "🔷", earned: true, desc: "Solve 20 pattern puzzles", rarity: "Rare" },
  { name: "Writing Ace", emoji: "✍️", earned: false, desc: "Perfect score in spelling", rarity: "Epic" },
  { name: "Champion", emoji: "🏆", earned: false, desc: "Earn all other badges", rarity: "Legendary" },
];

const dailyTasks = [
  { task: "Complete 1 reading exercise", points: 10, done: true },
  { task: "Play a memory game", points: 15, done: true },
  { task: "Finish attention training", points: 20, done: false },
  { task: "Listen to a story", points: 10, done: false },
];

const leaderboard = [
  { name: "Priya S.", points: 450, rank: 1, avatar: "👧" },
  { name: "Arjun K.", points: 380, rank: 2, avatar: "🧒" },
  { name: "Ravi M.", points: 340, rank: 3, avatar: "👦" },
  { name: "Sneha P.", points: 290, rank: 4, avatar: "👧" },
  { name: "Amit R.", points: 250, rank: 5, avatar: "👦" },
];

const rewardsFlow = [
  { icon: Gamepad2, title: "Complete Activities", desc: "Play games, finish assessments, and attend daily sessions to earn points", points: "+10-50 pts per activity", color: "from-blue-500 to-cyan-400" },
  { icon: Star, title: "Accumulate Points", desc: "Points are saved automatically. Bonus points for streaks and perfect scores", points: "Wallet balance grows", color: "from-amber-500 to-yellow-400" },
  { icon: ShoppingBag, title: "Browse Reward Shop", desc: "Open the in-app shop to see available rewards — digital, privileges, and physical items", points: "See what you can get", color: "from-purple-500 to-pink-400" },
  { icon: Gift, title: "Redeem Rewards", desc: "Tap to redeem! Digital rewards are instant. Physical rewards delivered via teacher", points: "Spend your points", color: "from-emerald-500 to-green-400" },
];

const redeemableItems = [
  { name: "Digital Sticker Pack", cost: 50, icon: "🏷️", category: "Digital", desc: "Fun animated stickers for your profile" },
  { name: "Extra Game Time (15 min)", cost: 100, icon: "🎮", category: "Privilege", desc: "15 minutes of bonus game time" },
  { name: "Choose Class Activity", cost: 200, icon: "🎭", category: "Privilege", desc: "Pick the next class activity" },
  { name: "Homework Pass", cost: 250, icon: "📝", category: "School", desc: "Skip one homework assignment" },
  { name: "School Supply Kit", cost: 300, icon: "✏️", category: "Physical", desc: "Pencils, erasers, and notebooks" },
  { name: "Star Student Certificate", cost: 500, icon: "🏆", category: "Achievement", desc: "Printed certificate signed by teacher" },
  { name: "Special Seat for a Day", cost: 150, icon: "💺", category: "Privilege", desc: "Sit in the teacher's special chair" },
  { name: "Book of Choice", cost: 400, icon: "📚", category: "Physical", desc: "Choose any book from the school library" },
];

const GamificationPage = () => (
  <div className="space-y-8 pb-8">
    <div className="text-center">
      <div className="w-16 h-16 gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-4">
        <Trophy className="w-8 h-8 text-primary-foreground" />
      </div>
      <h2 className="section-title">Rewards & Gamification</h2>
      <p className="section-subtitle">Points, badges, streaks, and leaderboards keep children motivated and engaged in their learning journey</p>
    </div>

    {/* Stats row */}
    <div className="grid grid-cols-4 gap-3">
      {[
        { icon: Star, value: "380", label: "Points", color: "gradient-warm" },
        { icon: Flame, value: "5", label: "Day Streak", color: "gradient-hero" },
        { icon: Trophy, value: "5/9", label: "Badges", color: "gradient-primary" },
        { icon: Crown, value: "#2", label: "Class Rank", color: "gradient-purple" },
      ].map((s, i) => (
        <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
          className={`${s.color} text-primary-foreground rounded-2xl p-4 text-center shadow-card`}>
          <s.icon className="w-5 h-5 mx-auto mb-1" />
          <p className="font-display font-extrabold text-xl">{s.value}</p>
          <p className="text-[10px] opacity-80">{s.label}</p>
        </motion.div>
      ))}
    </div>

    {/* ===== HOW POINTS ARE USED — Flow ===== */}
    <section>
      <h3 className="font-display text-xl font-bold text-center mb-2">How Points Work</h3>
      <p className="text-muted-foreground text-sm text-center mb-6">A complete earn-to-redeem cycle that motivates continuous learning</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {rewardsFlow.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl shadow-card p-5 text-center relative card-hover">
              {i < rewardsFlow.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-muted-foreground/30 w-5 h-5 z-10" />
              )}
              <div className="absolute top-2 left-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                <span className="text-[10px] font-bold">{i + 1}</span>
              </div>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <p className="font-display font-bold text-sm">{step.title}</p>
              <p className="text-muted-foreground text-[11px] mt-1 leading-relaxed">{step.desc}</p>
              <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full mt-2 inline-block">{step.points}</span>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* Reward Catalog */}
    <section className="bg-card rounded-3xl shadow-card p-6">
      <div className="flex items-center gap-2 mb-1 justify-center">
        <ShoppingBag className="w-5 h-5 text-accent" />
        <h3 className="font-display font-bold text-lg">Reward Shop Catalog</h3>
      </div>
      <p className="text-xs text-muted-foreground text-center mb-5">Items students can redeem with earned points — approved by teachers and school</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {redeemableItems.map((item, i) => (
          <motion.div key={item.name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.06 }}
            className="bg-muted/50 rounded-2xl p-4 text-center card-hover group">
            <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">{item.icon}</span>
            <p className="font-display font-bold text-xs">{item.name}</p>
            <p className="text-[9px] text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
            <span className="text-[9px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded mt-1 inline-block">{item.category}</span>
            <div className="mt-2">
              <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">{item.cost} pts</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Daily Tasks */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-bold flex items-center gap-2"><Target className="w-5 h-5 text-primary" /> Daily Missions</h3>
        <span className="text-xs font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">2/4 done</span>
      </div>
      <div className="space-y-2">
        {dailyTasks.map((t, i) => (
          <motion.div key={t.task} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
            className={`flex items-center gap-3 p-3 rounded-xl ${t.done ? "bg-secondary/10" : "bg-muted"}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${t.done ? "bg-secondary" : "border-2 border-muted-foreground/30"}`}>
              {t.done && <span className="text-xs text-secondary-foreground">✓</span>}
            </div>
            <span className={`text-sm flex-1 ${t.done ? "line-through text-muted-foreground" : "font-medium"}`}>{t.task}</span>
            <span className="text-xs font-bold text-accent flex items-center gap-1"><Zap className="w-3 h-3" />{t.points} pts</span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Badges */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h3 className="font-display font-bold mb-4 flex items-center gap-2"><Award className="w-5 h-5 text-accent" /> Badge Collection</h3>
      <div className="grid grid-cols-3 gap-3">
        {badges.map((b, i) => (
          <motion.div key={b.name} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.06 }}
            className={`text-center p-3 rounded-2xl transition-all ${b.earned ? "bg-secondary/10 border border-secondary/30" : "bg-muted opacity-40"}`}>
            <span className="text-3xl block mb-1">{b.emoji}</span>
            <p className="font-display font-bold text-[11px]">{b.name}</p>
            <p className="text-[9px] text-muted-foreground mt-0.5">{b.desc}</p>
            <span className={`text-[8px] font-bold mt-1 inline-block px-1.5 py-0.5 rounded-full ${
              b.rarity === "Legendary" ? "bg-accent/20 text-accent" : b.rarity === "Epic" ? "bg-purple-500/20 text-purple-600" : b.rarity === "Rare" ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
            }`}>{b.rarity}</span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Leaderboard */}
    <div className="bg-card rounded-3xl shadow-card p-6">
      <h3 className="font-display font-bold mb-4 flex items-center gap-2"><Medal className="w-5 h-5 text-accent" /> Class Leaderboard</h3>
      <p className="text-xs text-muted-foreground mb-3">⚠️ Child-safe: Only first name and initial shown</p>
      <div className="space-y-2">
        {leaderboard.map((s, i) => (
          <motion.div key={s.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className={`flex items-center gap-3 p-3 rounded-xl ${i === 1 ? "bg-primary/10 border border-primary/30" : "bg-muted"}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm ${
              i === 0 ? "gradient-warm text-accent-foreground" : i === 1 ? "gradient-primary text-primary-foreground" : i === 2 ? "gradient-teal text-primary-foreground" : "bg-border text-muted-foreground"
            }`}>{s.rank}</span>
            <span className="text-xl">{s.avatar}</span>
            <span className="font-bold text-sm flex-1">{s.name}</span>
            <span className="font-display font-bold text-sm text-primary">{s.points} pts</span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Motivation Science */}
    <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5 flex items-start gap-3">
      <Heart className="w-5 h-5 text-primary shrink-0 mt-0.5" />
      <div>
        <h4 className="font-display font-bold text-sm">Why Gamification Works</h4>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Research shows gamification increases student engagement by 60% and learning retention by 40%. Our reward system is based on Applied Behavior Analysis (ABA) principles — positive reinforcement through immediate feedback and tangible rewards.</p>
      </div>
    </div>
  </div>
);

export default GamificationPage;
