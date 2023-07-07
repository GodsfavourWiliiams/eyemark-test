import { useState } from "react";
import Toggle from "./toggle";

type Props = {};

const Index = (props: Props) => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="w-full max-w-[700px] mx-auto border-gray-300 border rounded-[12px] flex items-center px-3 ">
      <div className="flex md:flex-row flex-col items-center gap-x-3 py-4 w-full">
        <span className="font-semibold pr-3 md:border-r-[1px] w-full md:w-[185px]">
          Display total price
        </span>
        <div className="flex items-center gap-3 justify-between w-full col-span-2">
          <div className="text-gray-500 text-[15px] md:text-base">
            Includes all fees, before taxes
          </div>
          <div className="hidden md:block">
            <Toggle enabled={enabled} setEnabled={setEnabled} />
          </div>
        </div>
      </div>{" "}
      <div className="block md:hidden">
        <Toggle enabled={enabled} setEnabled={setEnabled} />
      </div>
    </div>
  );
};

export default Index;
