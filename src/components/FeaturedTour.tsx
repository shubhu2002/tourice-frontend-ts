import { useQuery } from "@tanstack/react-query";
import { Bars } from "react-loader-spinner";

import type { TourCardPops } from "~/types";
import { TourCard } from "~/components";
import { apiInstance } from "~/utils";

const FeaturedTour = () => {
  const { data: featuredTours, isLoading } = useQuery({
    queryKey: ["getAllFeaturedTours"],
    queryFn: async () =>
      apiInstance
        .get<{ data: TourCardPops[] }>("/tour/featured")
        .then((res) => res.data.data),
  });
  return (
    <section className="mb-20 w-full">
      <h1 className="mb-16 w-full text-center text-[30px] md:text-[44px]">
        Popular Destinations
      </h1>
      {isLoading ? (
        <div className="flex w-full justify-center">
          <Bars
            height="56"
            width="56"
            color="rgb(251,146,60)"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="mx-auto grid w-[90%] grid-cols-1 place-items-center gap-x-14 gap-y-10 px-5 md:grid-cols-3 lg:grid-cols-3">
          {featuredTours?.map((item, index) => {
            return <TourCard tour={item} key={index} />;
          })}
        </div>
      )}
    </section>
  );
};

export default FeaturedTour;
