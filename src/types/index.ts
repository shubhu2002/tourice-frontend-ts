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

export type UserProps = {
  _id?: string;
  username?: string;
  email: string;
  password: string;
};

export type LoginResProps = {
  status: boolean;
  token: string;
  isAdmin: boolean;
  id: string;
  username: string;
  email: string;
};
