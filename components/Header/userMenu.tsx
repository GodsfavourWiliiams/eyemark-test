"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { AvatarIcon, Hamburger, Globe } from "./providerIcons";
import MenuItem from "./menuItem";

interface UserMenuProps {}

const UserMenu: React.FC<UserMenuProps> = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-2">
        <div
          className="
            text-[14px] 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
            truncate 
          ">
          Airbnb your home
        </div>
        <div className="">
          <Globe />
        </div>
        <div
          onClick={toggleOpen}
          className="
          p-1
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          ">
          <Hamburger width={20} height={20} />
          <div className="">
            <AvatarIcon />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-60 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
            z-40
          ">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem label="Sign up" onClick={() => router.push("/")} />
              <MenuItem label="Login" onClick={() => router.push("/")} />

              <hr />
              <MenuItem
                label="Airbnb your home"
                onClick={() => {
                  {
                  }
                }}
              />
              <MenuItem label="Help" onClick={() => router.push("/")} />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
