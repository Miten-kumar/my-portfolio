
// import { BackgroundBoxesDemo } from "@/components/Shared/BackgroundBoxesDemo"
import { SeparatorDemo } from "@/components/Shared/SeparatorDemo"
import { ThreeDCardDemo } from "@/components/Shared/ThreeDCardDemo"
import { TypewriterEffectSmoothDemo } from "@/components/Shared/TypewriterEffectSmoothDemo"
import { SparklesCore } from "@/components/ui/sparkles"
export default function Herosection() {
  return (

    <div className="md:max-w-[1460px] w-full mx-auto h-[600px]">
      <SeparatorDemo />
      <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto items-center h-full w-11/12">
        <div className="order-2 lg:order-1">
          <TypewriterEffectSmoothDemo />
        </div>
        <div className="order-1 lg:order-2 mt-28 lg:mt-0 flex justify-end">
          <ThreeDCardDemo />
        </div>
      </div>

    </div>
  )
}
