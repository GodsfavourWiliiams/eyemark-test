import React from "react";

type Props = {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
};

const Toggle = ({ enabled, setEnabled }) => {
  return (
    <div className="relative flex flex-col items-center justify-center ">
      <div className="flex">
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => {
              setEnabled(!enabled);
            }}
            className="w-16 h-[34px] bg-gray-200 rounded-full peer  peer-focus:ring-black  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[30px] after:w-[30px] after:transition-all after:duration-500 peer-checked:bg-black"></div>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
