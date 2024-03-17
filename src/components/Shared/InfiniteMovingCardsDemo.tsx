"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import html from "../../../public/html.gif"
import css from "../../../public/css.png"
import javascript from "../../../public/javascript.gif"
import typescript from "../../../public/typescript.png"
import react from "../../../public/react.gif"
import next from "../../../public/next.png"
import node from "../../../public/nodejs.gif"
import mongodb from "../../../public/mongoDB.gif"
import taiwind from "../../../public/taiwind.png"

export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-max ng-[#020817] flex flex-col antialiased   relative">
            {/* <hr className="hr-text gradient mt-5" data-content="MY SKILL" /> */}
            {/* <h2 className="text-center text-2xl tracking-[6px] text-white">MY SKILLS</h2> */}

            <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
    );
}

const testimonials = [
    {
        image: html,
        class: "scale-[1.35]"
    },
    {
        image: css,
    },
    {
        image: javascript,
    },
    {
        image: typescript,
    },
    {
        image: react,

    },
    {
        image: node,
    },
    {
        image: taiwind,
        class: "rotate-image"
    },
    {
        image: mongodb,

    },
    {
        image: next,

    },
];
