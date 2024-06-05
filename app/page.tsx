import AboutCardsGrid from "@/components/AboutCardsGrid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyApproach from "@/components/MyApproach";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import WorkExperience from "@/components/WorkExperience";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center 
      items-center flex-col overflow-clip mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={navItems}
        />
        <Hero />
        <AboutCardsGrid />
        <RecentProjects />
        <WorkExperience />
        <MyApproach />
        <Footer />
      </div>
    </main>
  )
}
