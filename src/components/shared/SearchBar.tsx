import { memo, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Bars } from "react-loader-spinner";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { apiInstance } from "~/utils";
import type { TourCardPops } from "~/types";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const { data: tourData, isLoading } = useQuery({
    queryKey: ["getAllSearchTours"],
    queryFn: async () =>
      apiInstance
        .get<{ data: TourCardPops[] }>("/tour/all")
        .then((res) => res.data.data),
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        event.target &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
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
      whileHover={{ width: "40%" }}
      className="relative mt-4 flex w-5/6 flex-row justify-between rounded-lg bg-white text-sm dark:bg-[rgba(0,0,0,0.8)] md:w-2/6"
      ref={modalRef}
    >
      <div className="flex w-full items-center gap-6 px-4">
        <MapPin color="#34d399" />
        <input
          type="text"
          required
          placeholder="Where You Want To Go....."
          className="w-full bg-transparent p-1 py-4 tracking-widest outline-none"
          readOnly
          onClick={toggleOptions}
        />
        <ArrowRight />
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute left-0 right-0 top-16 h-44 w-[100%] overflow-y-scroll rounded-lg bg-white backdrop-blur-sm dark:bg-[rgba(0,0,0,0.8)] [&::-webkit-scrollbar]:hidden`}
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
        {/* {error && (
          <h1 className="flex h-full items-center justify-center font-mono text-xl capitalize">
            {error}
          </h1>
        )} */}
        {tourData?.map((item) => (
          <Link
            href={`/tour/${item._id}`}
            key={item._id}
            className="flex list-none justify-center py-2 text-lg hover:bg-white/10"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default memo(SearchBar);
