import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { IndianRupee, Star } from "lucide-react";

import Layout from "~/layout";
import type { TourCardPops } from "~/types";
import { apiInstance } from "~/utils";
import { Booking, Confirmed } from "~/components";
import { useAppStore } from "~/store";
import { SkeletonLoading } from "~/components/shared/Skeleton-Loading";

const TourDetail = () => {
  const {
    query: { id },
  } = useRouter();

  const { confirmBooking } = useAppStore();

  const { data: tour, isLoading } = useQuery({
    queryKey: ["getAllTourById", id],
    queryFn: async () =>
      apiInstance
        .get<{ data: TourCardPops }>(`/tour/search/id/${id as string}`)
        .then((res) => res.data.data),
  });

  return (
    <Layout>
      {confirmBooking && <Confirmed />}
      <main className="font-Poppins flex w-full flex-col gap-10 px-5 pb-10 pt-24 lg:flex-row lg:gap-20 lg:px-28">
        <section className="flex w-full flex-col gap-4 lg:w-3/5 lg:gap-7">
          {isLoading ? (
            <SkeletonLoading height={420} />
          ) : (
            <Image
              width={1000}
              height={1000}
              src={tour?.photo ?? ""}
              alt="photo"
              className="h-full w-full rounded-lg object-contain"
            />
          )}
          {isLoading ? (
            <SkeletonLoading height={180} />
          ) : (
            <div className="flex w-full flex-col gap-2 rounded-lg border-[1px] border-[rgba(109,107,107,0.49)] p-4 text-sm md:text-base">
              <div className="flex justify-between text-xl font-semibold uppercase md:text-2xl">
                <span>{tour?.title}</span>
                <span className="flex items-center gap-2">
                  <Star size={18} fill="yellow" stroke="orange" />{" "}
                  {tour?.rating}
                </span>
              </div>

              <span className="flex items-center gap-1">
                <IndianRupee size={18} />
                {tour?.price} /- per person
              </span>
              <h1 className="mt-4 text-lg text-white/80 md:text-xl">
                Description
              </h1>
              <p className="">{tour?.desc}</p>
              <h1 className="mt-4 text-lg text-white/80 md:text-xl">
                Top Places
              </h1>
              {tour?.topPlaces ? (
                <ul className="flex flex-wrap gap-2">
                  {tour.topPlaces.map((place, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-center"
                    >
                      {place}{" "}
                      {tour.topPlaces.length - 1 > index && (
                        <span className="text-white/40">•</span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No top places available for this tour.</p>
              )}
            </div>
          )}
        </section>
        {isLoading ? (
          <SkeletonLoading height={500} />
        ) : (
          <section className="flex w-full flex-col items-center gap-5 lg:w-2/6">
            {tour && <Booking tour={tour} />}
          </section>
        )}
      </main>
    </Layout>
  );
};

export default TourDetail;
