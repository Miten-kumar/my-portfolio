"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils"; 
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import applesso from "../../../public/apple sso.png"
export function DirectionAwareHoverDemo() {

  return (
    <div className="">

      <DirectionAwareHover imageUrl={applesso} >
        <p className="font-bold text-xl">Apple Sso</p>
        <p className="font-normal text-sm">Nextjs / NextAuth</p>
      </DirectionAwareHover>
    </div>
  );
}
