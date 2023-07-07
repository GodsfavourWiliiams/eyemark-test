import Container from "../../components/Container";
import DisplayTotalPrice from "../../components/DisplayTotalPrice";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchListing,
  getCategory,
} from "../../logic/reducers/getListingSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import Listings from "../../components/Listings";
import ListingPulse from "../../components/Listings/pulse";
import EmptyListing from "../../components/EmptyListing";

type Props = {};

const Index = (props: Props) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const router = useRouter();
  const { category } = router.query;
  const param = category as string;
  const { payload, loading, error } = useSelector(
    (state: any) => state.ListingReducer.getListingSlice || {}
  );

  useEffect(() => {
    if (param) dispatch(getCategory(param));
  }, [dispatch, param]);

  useEffect(() => {
    dispatch(fetchListing());
  }, [dispatch]);

  // Filter the listing data based on the category state
  const filteredData = payload?.filter(
    (item: { category: string }) =>
      item.category.toLocaleLowerCase() === param || !param
  );

  return (
    <>
      <Container>
        <DisplayTotalPrice />
        <div className="mt-4 flex items-center justify-center">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-y-10 gap-x-6 w-full">
              {Array.from(Array(12).keys()).map((id) => (
                <ListingPulse key={id} />
              ))}
            </div>
          ) : payload ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-y-10 gap-x-6 w-full">
              {payload &&
                filteredData.map((item: any) => (
                  <Listings key={item.id} data={item} />
                ))}
            </div>
          ) : (
            // If there is no data, display the empty listing component
            !loading &&
            !payload?.length && (
              <div className="w-full">
                <EmptyListing
                  title="No listings found"
                  subtitle="Try adjusting your search filters or check back later for new listings."
                  showReset
                />
              </div>
            )
          )}
        </div>
      </Container>
    </>
  );
};

export default Index;
