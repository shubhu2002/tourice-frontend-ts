export type TourCardPops = {
  _id: string;
  title: string;
  price: number;
  desc: string;
  rating: number;
  photo: string;
  featured: boolean;
  topPlaces: string[];
};

export type BookingProps = {
  userId: string;
  userEmail: string;
  tourName: string;
  fullName: string;
  guests: number;
  phone: string;
  date: string;
  totalAmount: number;
};
