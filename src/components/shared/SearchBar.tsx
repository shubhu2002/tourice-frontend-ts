import { memo, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Bars } from "react-loader-spinner";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { apiInstance } from "~/utils";
import type { TourCardPops } from "~/types";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const modalRef = useRef<HTMLDivElement>(null);

  const {
    data: tourData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["getAllSearchTours"],
    queryFn: async () =>
      apiInstance
        .get<{ data: TourCardPops[] }>("/tour/all")
        .then((res) => res.data.data),
  });

  const filteredTours = tourData?.filter((tour) =>
    tour.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        event.target &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      transition={{ duration: 0.5 }}
      initial={{ width: "25%" }}
      whileHover={{ width: "30%" }}
      className="relative mt-4 flex w-5/6 flex-row justify-between rounded-lg border border-white/20 bg-white text-sm dark:bg-[rgba(0,0,0,0.8)] md:w-2/6"
      ref={modalRef}
    >
      <div className="flex w-full items-center gap-4 px-4">
        <MapPin color="#34d399" />
        <input
          type="text"
          required
          placeholder="Where You Want To Go....."
          className="w-full bg-transparent p-1 py-4 tracking-widest outline-none"
          onChange={handleInputChange}
          onClick={toggleOptions}
          value={searchTerm}
        />
        <ArrowRight />
      </div>
      <div
        className={`${
          searchTerm ? "block" : "hidden"
        } absolute left-0 right-0 top-16 h-fit w-full overflow-y-scroll rounded-lg bg-white p-2 backdrop-blur-sm dark:bg-[rgba(0,0,0,0.8)] [&::-webkit-scrollbar]:hidden`}
        data-lenis-prevent
      >
        {isLoading && (
          <div className="flex h-full w-full items-center justify-center">
            <Bars
              height="42"
              width="42"
              color="rgb(255,255,255,0.5)"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
        {isError && (
          <h1 className="flex h-full items-center justify-center font-mono capitalize">
            Failed to load tours. Please try again.
          </h1>
        )}
        {!isLoading && filteredTours?.length === 0 && (
          <h1 className="flex h-full items-center justify-center font-mono capitalize">
            No results found
          </h1>
        )}
        {searchTerm &&
          filteredTours?.map((item) => (
            <Link
              href={`/tours/tour/${item._id}`}
              key={item._id}
              className="flex list-none justify-center rounded-lg px-3 py-2 hover:bg-white/10"
            >
              {item.title}
            </Link>
          ))}
      </div>
    </motion.div>
  );
};

export default memo(SearchBar);
