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
        <div className="h-max  flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] relative">
            <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
    );
}

const testimonials = [
    {
        image: html,
        class:"invert"
    },
    {
        image: css,
    },
    {
        image: javascript,
    },
    {
        image: typescript,
        class: "rotate-image"
    },
    {
        image: react,

    },
    {
        image: node,
        class:"invert"
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
        class: "rotate-image"

    },
];
