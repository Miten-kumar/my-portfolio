
// import { BackgroundBoxesDemo } from "@/components/Shared/BackgroundBoxesDemo"
import { ThreeDCardDemo } from "@/components/Shared/ThreeDCardDemo"
import { TypewriterEffectSmoothDemo } from "@/components/Shared/TypewriterEffectSmoothDemo"
export default function Herosection() {
  return (
    <div className="md:max-w-[1460px]  w-full mx-auto grid md:grid-cols-3 grid-cols-1 md:justify-center items-center justify-end  relative h-full">
      <div className="md:col-span-2 col-span-1 flex justify-center items-center">
        <TypewriterEffectSmoothDemo />
      </div>
      <div className="flex justify-start items-start">
        <ThreeDCardDemo />
      </div>
    </div>
  )
}
