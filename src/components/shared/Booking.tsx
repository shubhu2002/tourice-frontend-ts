import React, { useState } from "react";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { IndianRupeeIcon, Star } from "lucide-react";

import type { BookingProps, TourCardPops } from "~/types";
import { useAppStore } from "~/store";
import { apiInstance } from "~/utils";

const Booking = ({ tour }: { tour: TourCardPops }) => {
  const { setLoading, setConfirmBooking } = useAppStore();

  const today = React.useMemo(() => new Date(), []);
  const tyear = today.getFullYear();
  const tmonth = today.getMonth() + 1;
  const tdate = today.getDate();

  const [bookingData, setBookingData] = useState<BookingProps>({
    userId: "shubhutest",
    userEmail: "shubhu254@gmail.com",
    fullName: "",
    phone: "",
    guests: 0,
    date: "",
    tourName: tour.title,
    totalAmount: 0,
  });

  const serviceFee = bookingData.guests === 0 ? 0 : 24;
  const totalAmt =
    Number(tour.price) * Number(bookingData.guests) + Number(serviceFee);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: name === "phone" || name === "guests" ? Number(value) : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await apiInstance.post<{
        status: boolean;
        data: BookingProps;
      }>("/booking/create", {
        ...bookingData,
        totalAmount: totalAmt,
      });
      if (data.status) {
        setLoading(false);
        toast.success("Booking Confirmed !!");
        setBookingData({
          ...bookingData,
          fullName: "",
          guests: 0,
          phone: "",
          date: "",
          totalAmount: 0,
        });
        setConfirmBooking(true);
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setLoading(false);
        toast.error(error.message);
      }
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex w-full flex-col rounded-lg border border-[rgba(109,107,107,0.49)] px-6 py-4">
        <div className="flex w-full justify-between">
          <h1 className="flex items-center text-xl">
            <IndianRupeeIcon size={20} /> {tour.price}/- per person
          </h1>
          <span className="flex items-center gap-1">
            <Star size={16} fill="yellow" stroke="orange" /> {tour.rating}
          </span>
        </div>

        <h1 className="pt-7 text-xl">Information</h1>
        <div className="flex flex-col gap-4 pt-3">
          <div className="flex flex-col gap-4 rounded-lg border border-inputBorder p-5">
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={bookingData.fullName}
              required
              pattern="[a-zA-Z\s]+"
              className="border-b border-inputBorder bg-inherit py-2 outline-none"
              onChange={handleChange}
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={bookingData.phone}
              required
              pattern="[0-9]{10}"
              onClick={(e) => e.currentTarget.select()}
              title="Enter 10 digits Phone Number"
              className="border-b border-inputBorder bg-inherit py-2 outline-none"
              onChange={handleChange}
              autoComplete="off"
            />
            <div className="flex w-full justify-between gap-2">
              <input
                type="date"
                min={`${tyear}-${tmonth.toString().padStart(2, "0")}-${tdate
                  .toString()
                  .padStart(2, "0")}`}
                className="w-1/2 border-b border-inputBorder bg-inherit py-2 text-xs outline-none"
                name="date"
                value={bookingData.date}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                placeholder="Guests"
                name="guests"
                value={bookingData.guests}
                min={1}
                max={10}
                title="Enter not more than 10 persons"
                onChange={handleChange}
                onClick={(e) => e.currentTarget.select()}
                required
                autoComplete="off"
                className="w-1/2 border-b border-inputBorder bg-inherit py-2 outline-none"
              />
            </div>
          </div>

          <div className="flex w-full justify-between pt-3 text-sm">
            <h1>Total Guests</h1>
            <span>{bookingData.guests}</span>
          </div>
          <div className="flex w-full justify-between border-b border-inputBorder pb-2 text-sm">
            <h1>Service Charges*</h1>
            <span>₹ {serviceFee}</span>
          </div>
          <div className="flex w-full justify-between font-extrabold">
            <h1 className=" ">Total</h1>
            <span>₹{totalAmt}</span>
          </div>
          <button
            className="!md:px-7 bottone1 !py-2 !text-base"
            onClick={handleSubmit}
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Booking;
