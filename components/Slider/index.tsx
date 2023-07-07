import React, { useState, useRef, useEffect } from "react";
import { NextIcon, PrevIcon } from "./providerIcon";

export default function Slider({
  data,
  activeFilter,
  setActiveFilter,
  hoveredIndex,
  setHoveredIndex,
  isScrollUp,
}: {
  data: any;
  activeFilter: string;
  setActiveFilter: Function;
  hoveredIndex: number;
  setHoveredIndex: Function;
  isScrollUp: boolean;
}) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showNavButton, setShowNavButton] = useState({
    left: false,
    right: true,
  });

  useEffect(() => {
    const onScroll = () => {
      if (!sliderRef.current) return;
      const isAtEnd =
        sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
        sliderRef.current.scrollWidth - 1;
      const isAtStart = sliderRef.current.scrollLeft === 0;
      setShowNavButton({ left: !isAtStart, right: !isAtEnd });
    };

    if (sliderRef.current) {
      sliderRef.current.addEventListener("scroll", onScroll);
    }
    const refCopy = sliderRef.current;
    return () => {
      if (refCopy) {
        refCopy.removeEventListener("scroll", onScroll);
      }
    };
  }, []);

  const scrollToLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollToRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative overflow-hidden flex item-center justify-normal">
      <NavButton
        direction="left"
        onClick={scrollToLeft}
        visible={showNavButton}
      />
      <div
        className="overflow-auto scrollbar-hide flex items-center gap-4 sm:gap-7"
        ref={sliderRef}>
        {data?.map((item: any, index: number) => {
          return (
            <button
              key={index}
              onClick={() => setActiveFilter(item.filterId)}
              className={`flex-[0_0_50px] 
                      flex 
                      flex-col 
                      items-center 
                      justify-between 
                      gap-2
                      ${isScrollUp ? "pb-5" : "pb-2"}
                      transition-all
                      ease-out
                      duration-200
                      cursor-pointer
                      ${
                        hoveredIndex === index || item.filterId === activeFilter
                          ? "text-black border-black border-b-[3px]"
                          : "text-[#717171] border-[#717171]  hover:border-b-[3px]"
                      }
                    `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}>
              <item.icon
                color={
                  hoveredIndex === index || item.filterId === activeFilter
                    ? "black"
                    : "#717171"
                }
              />
              <span className="font-medium w-24 text-[12px] tracking-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
      <NavButton
        direction="right"
        onClick={scrollToRight}
        visible={showNavButton}
      />
    </div>
  );
}

function NavButton({
  direction,
  onClick,
  visible,
}: {
  direction: "left" | "right";
  onClick: () => void;
  visible: { left: boolean; right: boolean };
}) {
  const isLeft = direction === "left";

  return (
    <button
      className={`sm:block hidden
          absolute z-10 transition duration-100 rounded-full px-[11px] py-2 border bg-white border-gray-300 translate-y-1/2
          ${direction}-0
          ${isLeft && !visible.left ? "opacity-0" : ""}
          ${!isLeft && !visible.right ? "opacity-0" : ""}
          ${isLeft && visible.left ? "opacity-1" : ""}
          ${!isLeft && visible.right ? "opacity-1" : ""}
          `}
      onClick={onClick}>
      {isLeft ? <PrevIcon /> : <NextIcon />}
    </button>
  );
}
