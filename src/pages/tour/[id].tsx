import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { IndianRupee, Star } from "lucide-react";

import Layout from "~/layout";
import type { TourCardPops } from "~/types";
import { apiInstance } from "~/utils";
import { Booking, Confirmed, Loader } from "~/components";
import { useAppStore } from "~/store";

const TourDetail = () => {
  const {
    query: { id },
  } = useRouter();

  const { confirmBooking } = useAppStore();

  const { data: tour, isLoading } = useQuery({
    queryKey: ["getAllTourById"],
    queryFn: async () =>
      apiInstance
        .get<{ data: TourCardPops }>(`/tour/search/id/${id as string}`)
        .then((res) => res.data.data),
  });

  return (
    <Layout>
      {confirmBooking && <Confirmed />}
      {isLoading ? (
        <Loader />
      ) : (
        <main className="font-Poppins flex w-full flex-col gap-10 px-5 pb-10 pt-24 lg:flex-row lg:gap-20 lg:px-28">
          <section className="flex w-full flex-col gap-4 lg:w-3/5 lg:gap-7">
            <Image
              width={1000}
              height={1000}
              src={tour?.photo ?? ""}
              alt="photo"
              className="w-full rounded-lg"
            />
            <div className="flex w-full flex-col gap-2 rounded-lg border-[1px] border-[rgba(109,107,107,0.49)] p-4">
              <span className="text-xl">{tour?.title}</span>
              <div className="flex gap-5">
                <span className="flex items-center gap-2 text-sm">
                  <Star size={18} fill="yellow" stroke="orange" />{" "}
                  {tour?.rating}
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <IndianRupee size={18} />
                  {tour?.price} /- per person
                </span>
              </div>
              <h1 className="mt-4 text-lg">Description</h1>
              <p className="text-sm">{tour?.desc}</p>
              <h1 className="mt-4 text-lg">Top Places</h1>
              {Array.isArray(tour?.topPlaces) && tour.topPlaces.length > 0 ? (
                <ul className="flex flex-wrap gap-2">
                  {tour.topPlaces.map((place, index) => (
                    <li key={index} className="text-sm">
                      {place} ||
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No top places available for this tour.</p>
              )}
            </div>
          </section>
          <section className="flex w-full flex-col items-center gap-5 lg:w-2/6">
            {tour && <Booking tour={tour} />}
          </section>
        </main>
      )}
    </Layout>
  );
};

export default TourDetail;
