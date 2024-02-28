"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import cardImage from "../../../public/profile_picture.png"

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardItem translateZ="100" className="overflow-hidden h-96  w-96">
        <Image src={cardImage} width={300} className="object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail"
        />
      </CardItem>
    </CardContainer>
  );
}

