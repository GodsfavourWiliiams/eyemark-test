"use client";

import { useRouter } from "next/navigation";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const Index = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  showReset,
}) => {
  const router = useRouter();
  return (
    <div
      className="
          h-[60vh]
          w-full
          flex 
          flex-col 
          gap-2 
          justify-center 
          items-center 
        ">
      <h1 className="">{title}</h1>
      <span className="">{subtitle}</span>
      <div className="w-48 mt-4">
        {showReset && (
          <button
            className="w-full text-sm text-gray-500 border border-gray-500 rounded-full py-2 hover:bg-gray-100 transition duration-150 ease-
            select-none focus:outline-none focus:shadow-outline"
            onClick={() => router.push("/")}>
            Remove all filters
          </button>
        )}
      </div>
    </div>
  );
};

export default Index;
