"use client";

import { useState } from "react";
import { ControlIcon, SearchIcon } from "./providerIcons";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="
        text-[14px]
        border-[1px] 
        w-full 
        md:w-auto 
        py-2
        rounded-full 
        shadow-md
        sm:shadow-sm 
        hover:shadow-lg 
        transition 
        cursor-pointer
      ">
        <div className="flex items-center gap-3 justify-between sm:hidden">
          <div className="flex items-center ">
            <div
              className="
              ml-2
              p-3
              rounded-full 
            ">
              <SearchIcon color="#222222" />
            </div>
            <div className="">
              <span className="text-[15px] font-semibold">Anywhere</span>
              <div className="flex items-center gap-3 text-[11px] text-[#717171]">
                <span className="">Any week</span>
                <span className="bg-[#717171] p-1 rounded-full" />
                <span className="">Add guests</span>
              </div>
            </div>
          </div>
          <div className="border p-2 mr-2 rounded-full">
            <ControlIcon width={24} height={24} />
          </div>
        </div>
        <div
          className="
          hidden sm:flex 
          flex-row 
          items-center 
          justify-between
        ">
          <div
            className="
            font-semibold 
            px-4
            truncate 
          ">
            Anywhere
          </div>
          <div
            className="
            hidden 
            sm:block 
            font-semibold 
            px-4
            border-x-[1px] 
            flex-1 
            text-center
            truncate 
          ">
            Any week
          </div>
          <div
            className="
            pl-4
            pr-2 
            text-gray-500 
            flex 
            flex-row 
            items-center 
            font-medium
            gap-3
            truncate 
          ">
            <div className="hidden sm:block">Add guests</div>
            <div
              className="
              p-[7px]
              bg-rose-500 
              rounded-full 
            ">
              <SearchIcon color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
