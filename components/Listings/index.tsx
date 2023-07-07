import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Heart, StarIcon } from "./providerIcons";
import { Carousel } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { likeListing } from "../../logic/reducers/getListingSlice";

interface ListingCardProps {
  data: any;
}

const Index: React.FC<ListingCardProps> = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const dateFormatted = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const handleFavorite = (id: number) => {
    dispatch(likeListing(id));
  };

  return (
    <div
      // onClick={() => router.push(`/listings/${data.id}`)}
      className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            ">
          <Carousel className="">
            {data?.images?.map((image: any, index: number) => (
              <Image
                onClick={() => router.push(`/rooms/${data.id}`)}
                key={index}
                fill
                className="
                    object-cover 
                    h-full 
                    w-full 
                    transition
                    bg-neutral-300
                    "
                src={image}
                alt={`${data.title} listing images`}
              />
            ))}
          </Carousel>

          <div
            onClick={() => handleFavorite(data.id)}
            className="
              absolute
              top-3
              right-3
            ">
            <Heart
              bgColor={data.isLiked ? "red" : "gray"}
              strokeColor={data.isLiked ? "red" : "white"}
            />
          </div>
        </div>
        <div
          className="flex flex-col justify-start "
          onClick={() => router.push(`/rooms/${data.id}`)}>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-base">
              {data.location}, {data.location}
            </span>
            <div className="self-start flex gap-1.5 flex-nowrap items-center">
              <StarIcon />
              <span>{data.rating}</span>
            </div>
          </div>

          <span className="font-normal text-[#8f8e8e]">{data?.subtitle}</span>
          <div className="font-normal text-[#8f8e8e]">
            <span>{dateFormatted(data.startAt)}</span>
            <span> - </span>
            <span>{dateFormatted(data.endAt)}</span>
          </div>
          <div className="flex flex-row items-center gap-1 font-medium mt-1">
            <span className="">${data?.price}</span>
            <span className="">night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
