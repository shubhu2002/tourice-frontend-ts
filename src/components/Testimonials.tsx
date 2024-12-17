import Image from "next/image";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { ImageData, testimonialsData } from "~/constants";

const Testimonials = () => {
  return (
    <section className="pointer-events-none relative my-12 flex w-full flex-col items-center pt-8 dark:bg-secondaryBG">
      <Image
        width={1000}
        height={1000}
        src={ImageData.airplane}
        alt="tree"
        className="absolute left-0 top-36 w-28 -rotate-[30deg] opacity-80 lg:-left-7 lg:top-0 lg:w-72"
      />
      <h1 className="font-Borel w-full text-center text-3xl tracking-widest">
        Our Happy Customers
      </h1>
      <h1 className="mb-1 mt-4 px-2 text-center text-sm">
        Some testimonials from those who go travelling using our services.
      </h1>
      <div className="mx-auto flex w-[85%] p-12 lg:w-[55%]">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          className="mySwiper drop-shadow-2xl"
        >
          {testimonialsData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="relative flex flex-col items-center rounded-3xl border-2 bg-white text-center dark:text-black">
                  <div className="overlay flex w-full flex-col items-center rounded-[20px_20px_0px_20px] bg-lime-200 py-2">
                    <Image
                      src={ImageData.man}
                      alt="avatar"
                      width={1000}
                      height={1000}
                      className="mb-2 w-[70px] bg-center"
                    />
                    <h1 className="font-semibold text-black">{item.name}</h1>
                    <span className="text-xs">{item.tag}</span>
                    <span className="flex gap-1">
                      {Array(5)
                        .fill(true)
                        .map((item, index) => (
                          <Star
                            key={index}
                            stroke="orange"
                            fill="yellow"
                            width={14}
                          />
                        ))}
                    </span>
                  </div>
                  <p className="mb-3 mt-5 w-56 px-1 text-xs">
                    &quot;{item.quote}&quot;
                  </p>
                  <Image
                    width={1000}
                    height={1000}
                    src={ImageData.comma}
                    alt="comma"
                    className="text-gray -ml-3 mb-3 w-7"
                  />
                </div>
              </SwiperSlide>
            );
          })}
          <hr className="my-2" />
          ...
        </Swiper>
      </div>
      <Image
        width={1000}
        height={1000}
        src={ImageData.airplane}
        alt="tree"
        className="absolute bottom-0 right-0 w-36 opacity-80 lg:w-56"
      />
    </section>
  );
};

export default Testimonials;
