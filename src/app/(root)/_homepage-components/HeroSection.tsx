
// import { BackgroundBoxesDemo } from "@/components/Shared/BackgroundBoxesDemo"
import { SeparatorDemo } from "@/components/Shared/SeparatorDemo"
import { ThreeDCardDemo } from "@/components/Shared/ThreeDCardDemo"
import { TypewriterEffectSmoothDemo } from "@/components/Shared/TypewriterEffectSmoothDemo"
import { SparklesCore } from "@/components/ui/sparkles"
export default function Herosection() {
  return (

    <div className="md:max-w-[1460px] w-full mx-auto h-[600px]">
       <SeparatorDemo/>
      <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center h-full">
        {/* <div className="w-full absolute inset-0 "> */}
          {/* <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          /> */}
          {/* </div> */}
        <div className="lg:col-span-2 col-span-1 ">
          <TypewriterEffectSmoothDemo />
        </div>
          <ThreeDCardDemo />
      </div>
    </div>
  )
}
