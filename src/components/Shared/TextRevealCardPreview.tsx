"use client";
import React from "react";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function TextRevealCardPreview() {
    return (
        <div className="flex items-center justify-center mx-auto rounded-2xl w-full">
            <TextRevealCard text="My Skills" revealText=" &#127881;Expertices&#128310;">   </TextRevealCard>
        </div>
    );
}
