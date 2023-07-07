"use client";
import { Heart } from "./providerIcons";
import { useState } from "react";

interface HeartButtonProps {
  listingId: string;
}

const HeartButton: React.FC<HeartButtonProps> = ({ listingId }) => {
  return (
    <div
      onClick={() => console.log("clicked")}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      ">
      <Heart bgColor={"#fff"} strokeColor={"#000"} />
    </div>
  );
};

export default HeartButton;
