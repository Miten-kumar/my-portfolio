import { Separator } from "@/components/ui/Separator"
import Link from "next/link"

export function SeparatorDemo() {
  return (
    <div className="w-full mx-auto flex justify-center items-center fixed py-5 backdrop-blur-md z-10">
      <div className="flex h-5 items-center space-x-4 text-sm cursor-pointer  ">
        <Link href="">About</Link >
        <Separator orientation="vertical" />
        <Link href="#Expertise">Expertise</Link >
        <Separator orientation="vertical" />
        <Link href="#projects">Work</Link >
        <Separator orientation="vertical" />
        <Link href="">Resume</Link >
        <Separator orientation="vertical" />
        <Link href="">Contect</Link >
      </div>
    </div>
  )
}
