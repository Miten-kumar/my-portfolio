
// import { BackgroundBoxesDemo } from "@/components/Shared/BackgroundBoxesDemo"

import Herosection from "./_homepage-components/HeroSection";
import SkillSection from "./_homepage-components/SkillSection";
import ProjectSection from "./_homepage-components/ProjectSection";
import { GoogleGeminiEffectDemo } from "@/components/Shared/GoogleGeminiEffectDemo";
import FooterCard from "./_homepage-components/FooterCard";
import { NavbarDemo } from "@/components/Shared/NavbarDemo";

export default function Home() {
  return (
    <>
      <div className="md:max-w-[1460px] w-full mx-auto">

        <Herosection />
        <SkillSection />
        <ProjectSection />
        <FooterCard />

      </div>
    </>
  )
}
