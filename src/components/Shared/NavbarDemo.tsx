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
import contact from "../../../public/customer-service.png"
import Image from "next/image";
import { motion } from "framer-motion";
import { IconUserCircle, IconDeviceDesktopAnalytics,IconScript,IconMessages,IconCode } from "@tabler/icons-react";



export function NavbarDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center top-0 fixed left-0 right-0 backdrop-blur-md md:max-w-[1460px] w-full mx-auto z-20  h-14 ">
        <motion.div initial={{ opacity: 0, x: 20, }}
          animate={{ opacity: 1, x: [-30, 0, 0], }}
          transition={{
            duration: 2,
            ease: [0.4, 0.0, 0.2, 1],
          }}>

          <Link href="/">
            <Image width={150} src={logo} alt="no-icon" className=" object-cover ml-3 mt-3"></Image>
          </Link>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: [70, 0, 0],
          }}
          transition={{
            duration: 2,
            ease: [0.4, 0.0, 0.2, 1],
          }} >

          <div className="md:flex hidden h-5  space-x-4 text-sm cursor-pointer  mx-14">
            <Link href="">About</Link >
            <Separator orientation="vertical" />
            <Link href='/#Expertise'>Expertise</Link >
            <Separator orientation="vertical" />
            <Link href='/#projects'>Work</Link >
            <Separator orientation="vertical" />
            <Link href="">Resume</Link >
            <Separator orientation="vertical" />
            <Link href='/contact'>contact</Link >
          </div>
        </motion.div>

      </div>
      <motion.div
        initial={{
          opacity: 0,
          x: 50,
        }}
        animate={{
          opacity: 1,
          x: [70, 0, 0],
        }}
        transition={{
          duration: 2,
          ease: [0.4, 0.0, 0.2, 1],
        }}>
        <Image width={50} src={menubar} alt="no-icon" className={`z-20 object-cover  pr-2 md:hidden top-3 fixed right-0`} onClick={toggleMenu}></Image>
      </motion.div>
      <div className={`w-full mx-auto flex justify-center items-center fixed md:hidden bottom-0 right-0 h-16 backdrop-blur-3xl z-20 transition-all  duration-300 transform ${isOpen ? "opacity-100 -translate-y-0 " : "opacity-0 translate-y-20"}`}>
        <div className="flex h-5 items-center space-x-4 text-sm justify-center cursor-pointer  ">
          <Link href="" className="font-light">
            <IconUserCircle className="mx-auto" />
            About
          </Link >
          <Separator orientation="vertical" />
          <Link href='/#Expertise' className="font-light">
            <IconCode  className="mx-auto"/>
            Skills
          </Link >
          <Separator orientation="vertical" />
          <Link href='/#projects' className="font-light">
            <IconDeviceDesktopAnalytics className="mx-auto" />
            Work
          </Link >
          <Separator orientation="vertical" />
          <Link href='' className="font-light">
            <IconScript className="mx-auto"/>
            Resume
          </Link >
          <Separator orientation="vertical" />
          <Link href='/contact' className="font-light">
            <IconMessages className="mx-auto"/>
             contact
          </Link >
        </div>
      </div>
    </>
  )
}
