import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TabNavigation from "@/components/TabNavigation";
import BrandHeader from "@/components/BrandHeader";
import OverviewPage from "@/components/OverviewPage";
import DisabilitiesPage from "@/components/DisabilitiesPage";
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
import ResearchPage from "@/components/ResearchPage";

const pages: Record<string, React.ComponentType> = {
  overview: OverviewPage,
  disabilities: DisabilitiesPage,
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
  research: ResearchPage,
};

// Pages that use internal sidebar layout need wider container
const widePages = new Set(["teacher", "parent", "government"]);

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const Page = pages[activeTab];
  const isWide = widePages.has(activeTab);

  return (
    <div className="min-h-screen bg-background">
      <BrandHeader />
      <div className={`mx-auto px-4 pt-16 pb-24 ${isWide ? "max-w-6xl" : "max-w-4xl"}`}>
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
