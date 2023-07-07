/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListing } from "../../logic/reducers/getListingSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import {
  AmazingViewIcon,
  BedIcon,
  RoomsIcon,
} from "../../components/Header/providerIcons";
import { Spinner } from "../../components/core/spinner";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { payload, loading, error } = useSelector(
    (state: any) => state.ListingReducer.getListingSlice || {}
  );
  const [listing, setListing] = useState({} as any);

  useEffect(() => {
    const data = payload?.find((item: any) => item.id === id);
    setListing(data);
  }, [dispatch, id, payload]);

  useEffect(() => {
    dispatch(fetchListing());
  }, [dispatch]);

  return (
    <>
      <div>
        <div className="mb-3">
          <h1 className="text-xl font-semibold">{listing?.title}</h1>
          <span className="">{listing?.location}</span>
        </div>
        <div className="gap-8 grid grid-flow-col columns-2">
          {listing?.images?.map((image: any, index: number) => (
            <img
              key={index}
              className="w-full aspect-square mb-6 rounded-lg bg-neutral-300"
              src={image}
              alt={listing?.title}
            />
          ))}
        </div>
        <div className="">
          {listing ? (
            <div className="col-span-4 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <div className=" text-xl font-semibold flex flex-row items-center gap-2">
                  <div>Hosted by {listing?.hostName}</div>
                  <img
                    className="rounded-full w-12 h-12 border"
                    src={listing?.hostImage}
                    alt={listing?.hostName}
                  />
                </div>
                <div className="flex flex-row items-center gap-4 text-neutral-500 font-semibold">
                  <p className="flex flex-col justify-start items-center px-6 py-6 gap-1 text-center border rounded-md">
                    <AmazingViewIcon color="black" />
                    {listing.guests} guests
                  </p>
                  <p className="flex flex-col justify-start items-center px-6 py-6 gap-1 text-center border rounded-md">
                    <RoomsIcon color="black" />
                    {listing.rooms} rooms
                  </p>
                  <p className="flex flex-col justify-start items-center px-6 py-6 gap-1 text-center border rounded-md">
                    <BedIcon />
                    {listing.baths} bathrooms
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
