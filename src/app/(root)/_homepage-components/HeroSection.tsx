
// import { BackgroundBoxesDemo } from "@/components/Shared/BackgroundBoxesDemo"
import { SeparatorDemo } from "@/components/Shared/SeparatorDemo"
import { ThreeDCardDemo } from "@/components/Shared/ThreeDCardDemo"
import { TypewriterEffectSmoothDemo } from "@/components/Shared/TypewriterEffectSmoothDemo"
import { SparklesCore } from "@/components/ui/sparkles"
export default function Herosection() {
  return (

    <div className="md:max-w-[1460px] w-full mx-auto lg:h-[650px] h-svh ">
      <SeparatorDemo />
      <div className="lg:grid grid-cols-2 flex flex-col mx-auto items-center h-full w-11/12">
        <div className="order-2 lg:order-1">
          <TypewriterEffectSmoothDemo />
        </div>
        <div className="order-1 lg:order-2 mt-28 lg:mt-0 flex lg:justify-end justify-center lg:items-start items-end">
          <ThreeDCardDemo />
        </div>
      </div>

    </div>
  )
}
