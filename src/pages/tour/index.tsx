import { useQuery } from "@tanstack/react-query";
import { Bars } from "react-loader-spinner";

import { Header, SearchBar, TourCard, Subscribes } from "~/components";
import { apiInstance } from "~/utils";
import type { TourCardPops } from "~/types";
import Layout from "~/layout";

const Tour = () => {
  const { data: tours, isLoading } = useQuery({
    queryKey: ["getAllTours"],
    queryFn: async () =>
      apiInstance
        .get<{ data: TourCardPops[] }>("/tour/all")
        .then((res) => res.data.data),
  });
  return (
    <Layout>
      <main className="h-full w-full">
        <Header title={"All Tours"} />
        <section className="flex w-full flex-col items-center justify-center gap-6">
          <SearchBar />
          {isLoading && (
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
          )}
          <div className="mx-auto mt-10 grid w-[90%] grid-cols-2 place-items-center gap-x-14 gap-y-10 px-5 md:grid-cols-3 lg:grid-cols-4">
            {tours?.map((item, index) => {
              return <TourCard tour={item} key={index} />;
            })}
          </div>
          <Subscribes />
        </section>
      </main>
    </Layout>
  );
};

export default Tour;
