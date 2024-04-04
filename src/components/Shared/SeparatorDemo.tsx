'use client'
import { Separator } from "@/components/ui/Separator"
import Link from "next/link"
import { useState } from "react";
import menubar from "../../../public/interface.png"
import logo from "../../../public/logo-two.png"
import about from "../../../public/about.png"
import skills from "../../../public/skills.png"
import work from "../../../public/working.png"
import resume from "../../../public/resume.png"
import contect from "../../../public/customer-service.png"
import Image from "next/image";
export function SeparatorDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center fixed backdrop-blur-md md:max-w-[1460px] w-full z-20  h-14">
        <Image width={150} src={logo} alt="no-icon" className=" object-cover ml-3 mt-3"></Image>
        <div className="md:flex hidden h-5  space-x-4 text-sm cursor-pointer  mx-14">
          <Link href="">About</Link >
          <Separator orientation="vertical" />
          <Link href="#Expertise">Expertise</Link >
          <Separator orientation="vertical" />
          <Link href="#projects">Work</Link >
          <Separator orientation="vertical" />
          <Link href="">Resume</Link >
          <Separator orientation="vertical" />
          <Link href="/contect">Contect</Link >
        </div>
      </div>
      <Image width={50} src={menubar} alt="no-icon" className={`z-20 object-cover  pr-2 md:hidden top-3 fixed right-0`} onClick={toggleMenu}></Image>
      <div className={`w-full mx-auto flex justify-center items-center fixed md:hidden bottom-0 right-0 h-16 backdrop-blur-3xl z-20 transition-all  duration-300 transform ${isOpen ? "opacity-100 -translate-y-0 " : "opacity-0 translate-y-20"}`}>
        <div className="flex h-5 items-center space-x-4 text-sm justify-center cursor-pointer  ">
          <Link href="" className="font-light">
            <Image width={26} src={about} alt="no-icon"  className="mx-auto"></Image>
            About
          </Link >
          <Separator orientation="vertical" />
          <Link href="#Expertise" className="font-light">
            <Image width={26} src={skills} alt="no-icon"  className="mx-auto"></Image>
            Skills
          </Link >
          <Separator orientation="vertical" />
          <Link href="#projects" className="font-light">
            <Image width={26} src={work} alt="no-icon"  className="mx-auto"></Image>
            Work
          </Link >
          <Separator orientation="vertical" />
          <Link href="" className="font-light">
            <Image width={26} src={resume} alt="no-icon"  className="mx-auto"></Image>
            Resume
          </Link >
          <Separator orientation="vertical" />
          <Link href="/contect" className="font-light">
            <Image width={26} src={contect} alt="no-icon"  className="mx-auto"></Image>
            Contect
          </Link >
        </div>
      </div>
    </>
  )
}
