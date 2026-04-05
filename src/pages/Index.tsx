import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TabNavigation from "@/components/TabNavigation";
import OverviewPage from "@/components/OverviewPage";
import StudentAppPage from "@/components/StudentAppPage";
import AssessmentPage from "@/components/AssessmentPage";
import AIAnalysisPage from "@/components/AIAnalysisPage";
import LearningGamesPage from "@/components/LearningGamesPage";
import GamificationPage from "@/components/GamificationPage";
import TeacherDashboard from "@/components/TeacherDashboard";
import ParentViewPage from "@/components/ParentViewPage";
import GovernmentDashboard from "@/components/GovernmentDashboard";
import HardwarePage from "@/components/HardwarePage";
import ImpactPage from "@/components/ImpactPage";

const pages: Record<string, React.ComponentType> = {
  overview: OverviewPage,
  student: StudentAppPage,
  assessment: AssessmentPage,
  analysis: AIAnalysisPage,
  games: LearningGamesPage,
  gamification: GamificationPage,
  teacher: TeacherDashboard,
  parent: ParentViewPage,
  government: GovernmentDashboard,
  hardware: HardwarePage,
  impact: ImpactPage,
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const Page = pages[activeTab];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 pt-6 pb-24">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
            <Page />
          </motion.div>
        </AnimatePresence>
      </div>
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
