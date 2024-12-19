import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";

import { Header } from "~/components";
import Layout from "~/layout";
import type { BookingProps, TourCardPops } from "~/types";
import { apiInstance } from "~/utils";

export default function Home() {
  const { data: session } = useSession();
  const [tourDetails, setTourDetails] = useState<TourCardPops[]>([]);

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["getAllBookings", session?.user.username],
    queryFn: async () =>
      apiInstance
        .get<{
          data: BookingProps[];
        }>(`booking/search/${session?.user.username}`)
        .then((res) => res.data.data),
  });

  const getTour = async (title: string) => {
    try {
      console.log(title, "title");
      const { data } = await apiInstance.get<{ data: TourCardPops }>(
        `tour/search/title/${title}`,
      );
      return data.data;
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchTourDetails = async () => {
      if (!bookings) return;

      const details = await Promise.all(
        bookings.map(async (booking) => {
          const tourDetail = await getTour(booking.tourName);
          return tourDetail;
        }),
      );

      setTourDetails(
        details.filter((detail): detail is TourCardPops => detail !== null),
      );
    };

    void fetchTourDetails();
  }, [bookings]);

  return (
    <Layout>
      <section className="w-full">
        <Header title={`My Bookings`} />
        {isLoading && (
          <div className="flex h-44 w-full justify-center">
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
        )}
        {bookings?.length !== 0 ? (
          <div className="mb-10 grid grid-cols-2 gap-6 px-6 md:px-14">
            {bookings?.map((booking, index) => (
              <div
                key={index}
                className="relative flex flex-col overflow-hidden rounded-3xl border border-white/30 p-1 shadow-md transition-shadow hover:shadow-lg"
              >
                {tourDetails[index]?.photo && (
                  <Image
                    src={tourDetails[index].photo}
                    alt={tourDetails[index].title}
                    width={1000}
                    height={1000}
                    className="object-fit h-[380px] w-full rounded-3xl"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/80" />
                <div className="absolute bottom-3 left-0 right-0 z-[99] flex w-[95%] flex-col items-center justify-self-center rounded-[28px] bg-black/80 p-3.5 font-sans text-white">
                  <span className="w-full text-left text-sm font-bold text-white/60">
                    {tourDetails[index]?.desc}
                  </span>
                  <div className="mb-1.5 flex w-full items-center justify-between text-left text-2xl font-extrabold uppercase">
                    {booking.tourName}
                    <span className="text-base font-bold">
                      ⭐{tourDetails[index]?.rating}
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-2 font-semibold text-white/80">
                    <p>{booking.fullName}</p>{" "}
                    <span className="opacity-70">•</span>
                    <p>{booking.phone}</p>
                  </div>
                  <div className="w-full text-white/80">
                    <p className="flex items-center">
                      <strong className="mr-1">Tour Date : </strong>
                      <span className="font-semibold">{booking.date}</span>
                    </p>
                    <p className="flex items-center">
                      <strong className="mr-1">Total Persons : </strong>
                      <span className="font-semibold">{booking.guests}</span>
                    </p>
                    <p className="flex items-center">
                      <strong className="mr-1">Total Amount : </strong>
                      <span className="font-semibold">
                        ₹{booking.totalAmount} /-
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !isLoading && (
            <div className="flex h-48 flex-col items-center justify-center gap-8 text-4xl text-white/80">
              <span>No Bookings Yet</span>
              <div>
                <Link
                  href={"/tours"}
                  className="bottone1 w-full !px-7 !py-3 !text-lg"
                >
                  Explore Tours
                </Link>
              </div>
            </div>
          )
        )}
      </section>
    </Layout>
  );
}
