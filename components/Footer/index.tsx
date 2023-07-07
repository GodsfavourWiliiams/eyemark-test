import React, { useState, useCallback } from "react";
import { ListIcon, MapIcon } from "./providerIcons";
import { useRouter } from "next/router";

type Props = {};

const Index = (props: Props) => {
  const router = useRouter();
  const { pathname } = router;
  const [showMap, setShowMap] = useState<boolean>(false);

  const handleClick = useCallback(
    (filterLabel: string) => {
      const queryParams = new URLSearchParams(
        router.asPath.split(/\?/)[1] || ""
      );
      queryParams.set("drawer_open", filterLabel);
      const toggleString = `/?${queryParams.toString()}`;
      router.push(toggleString);
    },
    [router]
  );

  const handleShowMap = useCallback(() => {
    const updatedShowMap = !showMap;
    setShowMap(updatedShowMap);
    handleClick(updatedShowMap ? "true" : "false");
  }, [handleClick, showMap]);

  if (pathname !== "/") return null;
  return (
    <div className="fixed index inset-x-0 top-[82%] flex items-center justify-center">
      <button
        onClick={handleShowMap}
        className="flex items-center gap-3 text-white text-sm text-center shadow-sm bg-gray-900 font-semibold py-[15px] px-6 rounded-full">
        <span className="">{showMap ? "Show List" : "Show map"}</span>
        {showMap ? <ListIcon /> : <MapIcon />}
      </button>
    </div>
  );
};

export default Index;
