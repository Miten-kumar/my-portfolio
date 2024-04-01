
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
        <div className="lg:col-span-2 col-span-1 ">
          <TypewriterEffectSmoothDemo />
        </div>
        <div className="lg:block hidden">

          <ThreeDCardDemo />
        </div>
      </div>
    </div>
  )
}
