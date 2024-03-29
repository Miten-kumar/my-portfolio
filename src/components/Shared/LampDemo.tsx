"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";

export function LampDemo() {
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="md:mt-8 mt-0 -translate-y-24 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl">
                My Current <br />Tech Stack
            </motion.h1>
            <InfiniteMovingCardsDemo />

        </LampContainer>
    );
}
