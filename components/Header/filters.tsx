"use client";
import { useState, useEffect } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import Container from "../Container";
import {
  AmazingViewIcon,
  BedIcon,
  CampingIcon,
  CastleIcon,
  CaveIcon,
  DesertIcon,
  HistoricalIcon,
  IslandIcon,
  LakeIcon,
  PoolIcon,
  RoomsIcon,
  SharedIcon,
  TInyHomesIcon,
  TowerIcon,
  SpaceIcon,
  VillageIcon,
  WifiIcon,
  LaundryIcon,
  ParkingIcon,
  SecurityIcon,
  ChurchIcon,
  BeachIcon,
  NoiseIcon,
  ControlIcon,
} from "./providerIcons";
import { useRouter } from "next/router";
import { useCallback } from "react";
import CategorySlider from "../Slider";

export const filters = [
  {
    filterId: "shared_homes",
    label: "Shared Homes",
    icon: SharedIcon,
    description: "This property is close to the beach!",
  },
  {
    filterId: "rooms",
    label: "Rooms",
    icon: RoomsIcon,
    description: "This property has windmills!",
  },
  {
    filterId: "amazing_views",
    label: "Amazing Views",
    icon: AmazingViewIcon,
    description: "This property is modern!",
  },
  {
    filterId: "bed_and_breakfast",
    label: "Bed and Breakfast",
    icon: BedIcon,
    description: "This property is in the countryside!",
  },
  {
    filterId: "pools",
    label: "Pools",
    icon: PoolIcon,
    description: "This property has a beautiful pool!",
  },
  {
    filterId: "islands",
    label: "Islands",
    icon: IslandIcon,
    description: "This property is on an island!",
  },
  {
    filterId: "lake",
    label: "Lake",
    icon: LakeIcon,
    description: "This property is near a lake!",
  },
  {
    filterId: "towers",
    label: "Towers",
    icon: TowerIcon,
    description: "This property has skiing activities!",
  },
  {
    filterId: "castles",
    label: "Castles",
    icon: CastleIcon,
    description: "This property is an ancient castle!",
  },
  {
    filterId: "caves",
    label: "Caves",
    icon: CaveIcon,
    description: "This property is in a spooky cave!",
  },
  {
    filterId: "camping",
    label: "Camping",
    icon: CampingIcon,
    description: "This property offers camping activities!",
  },
  {
    filterId: "tiny_homes",
    label: "Tiny Homes",
    icon: TInyHomesIcon,
    description: "This property is in an arctic environment!",
  },
  {
    filterId: "desert",
    label: "Desert",
    icon: DesertIcon,
    description: "This property is in the desert!",
  },
  {
    filterId: "historical_home",
    label: "Historical Home",
    icon: HistoricalIcon,
    description: "This property is brand new and luxurious!",
  },
  {
    filterId: "house_rules",
    label: "House Rules",
    icon: SpaceIcon,
    description: "This property has specific house rules!",
  },
  {
    filterId: "village",
    label: "Village",
    icon: VillageIcon,
    description: "This property is near public transportation!",
  },
  {
    filterId: "wi-fi_availability",
    label: "Wi-Fi Availability",
    icon: WifiIcon,
    description: "This property has Wi-Fi available!",
  },
  {
    filterId: "laundry_facilities",
    label: "Laundry Facilities",
    icon: LaundryIcon,
    description: "This property has laundry facilities!",
  },
  {
    filterId: "parking_options",
    label: "Parking Options",
    icon: ParkingIcon,
    description: "This property offers parking options!",
  },
  {
    filterId: "security_measures",
    label: "Security Measures",
    icon: SecurityIcon,
    description: "This property has security measures!",
  },
  {
    filterId: "noise_level",
    label: "Noise Level",
    icon: NoiseIcon,
    description: "This property has a specific noise level policy!",
  },
  {
    filterId: "church",
    label: "Church",
    icon: ChurchIcon,
    description: "This property is near a church!",
  },
  {
    filterId: "beach",
    label: "Beach",
    icon: BeachIcon,
    description: "This property is near a beach!",
  },
];

const Filters = () => {
  const router = useRouter();
  const { category } = router.query;
  const param = category as string;
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [isScrollUp, setIsScrollUp] = useState(false);

  const handleClick = useCallback(
    (filterLabel: string) => {
      const queryParams = new URLSearchParams(
        router.asPath.split(/\?/)[1] || ""
      );
      queryParams.set("category", filterLabel);
      const searchString = `/?${queryParams.toString()}`;
      router.push(searchString);
    },
    [router]
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        typeof window !== "undefined"
          ? window.pageYOffset || document.documentElement.scrollTop
          : 0;
      setIsScrollUp(scrollTop > 0);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      {/* Filters */}

      <div className={`${isScrollUp ? "pt-5 shadow-sm" : "pt-10"}`}>
        {" "}
        <Container>
          <div className=" flex items-center gap-4">
            <CategorySlider
              activeFilter={param}
              setActiveFilter={handleClick}
              data={filters}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              isScrollUp={isScrollUp}
            />
            <button className="p-4 rounded-xl hidden sm:flex items-center gap-3 border text-[12px] font-semibold">
              <ControlIcon width={16} height={16} />
              <span className=""> Filters</span>
            </button>{" "}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Filters;
