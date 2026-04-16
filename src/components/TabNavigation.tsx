import { motion } from "framer-motion";
import {
  LayoutDashboard, Smartphone, ClipboardCheck, Gamepad2,
  GraduationCap, Users, Building2, Monitor, TrendingUp, Brain, Eye,
  HeartPulse, FlaskConical
} from "lucide-react";

const tabs = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "disabilities", label: "Disabilities", icon: HeartPulse },
  { id: "student", label: "Student App", icon: Smartphone },
  { id: "assessment", label: "Assessment", icon: ClipboardCheck },
  { id: "analysis", label: "AI Analysis", icon: Brain },
  { id: "games", label: "Games", icon: Gamepad2 },
  { id: "gamification", label: "Rewards", icon: TrendingUp },
  { id: "teacher", label: "Teacher", icon: GraduationCap },
  { id: "parent", label: "Parent", icon: Users },
  { id: "government", label: "Government", icon: Building2 },
  { id: "hardware", label: "Hardware", icon: Monitor },
  { id: "impact", label: "Impact", icon: Eye },
  { id: "research", label: "Research", icon: FlaskConical },
];

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`relative flex flex-col items-center gap-1 px-3 py-3 min-w-[72px] transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-x-2 top-0 h-0.5 gradient-primary rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className="w-4.5 h-4.5" style={{ width: 18, height: 18 }} />
                <span className="text-[9px] font-semibold whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
