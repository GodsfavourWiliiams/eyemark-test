"use client";
import { useRouter } from "next/router";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <div
      className={`${pathname === "/" ? "max-w-[2520px]" : "max-w-[1280px]"}
        mx-auto
        xl:px-20 
        md:px-10
        sm:px-2
        px-4`}>
      {children}
    </div>
  );
};

export default Container;
