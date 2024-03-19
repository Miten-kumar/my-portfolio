
// import { BackgroundBoxesDemo } from "@/components/Shared/BackgroundBoxesDemo"

import Herosection from "./_homepage-components/HeroSection";
import SkillSection from "./_homepage-components/SkillSection";
import ProjectSection from "./_homepage-components/ProjectSection";
import { GoogleGeminiEffectDemo } from "@/components/Shared/GoogleGeminiEffectDemo";
import FooterCard from "./_homepage-components/FooterCard";

export default function Home() {
  return (
    <>
      <Herosection />
      {/* <GoogleGeminiEffectDemo /> */}
      <SkillSection />
      <ProjectSection />
      <FooterCard/>
    </>
  )
}
