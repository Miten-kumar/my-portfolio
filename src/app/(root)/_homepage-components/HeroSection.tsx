
// import { BackgroundBoxesDemo } from "@/components/Shared/BackgroundBoxesDemo"
import { ThreeDCardDemo } from "@/components/Shared/ThreeDCardDemo"
import { TypewriterEffectSmoothDemo } from "@/components/Shared/TypewriterEffectSmoothDemo"
import { SparklesCore } from "@/components/ui/sparkles"
export default function Herosection() {
  return (
    <div className="md:max-w-[1460px]  w-full mx-auto grid lg:grid-cols-3 grid-cols-1 lg:justify-center items-center justify-end  relative h-[600px]">
      <div className="w-full absolute inset-0 ">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="lg:col-span-2 col-span-1 flex justify-center items-center">
        <TypewriterEffectSmoothDemo />
      </div>
      <div className="flex lg:justify-start lg:items-start justify-center items-center">
        <ThreeDCardDemo />
      </div>

    </div>
  )
}
