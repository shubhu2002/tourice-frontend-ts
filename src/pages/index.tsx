import { useEffect } from "react";

import Layout from "~/layout";
import { useAppStore } from "~/store";
import {
  Hero,
  Service,
  FeaturedTour,
  Holiday,
  Testimonials,
  Offers,
  Subscribes,
} from "~/components";

export default function Home() {
  const { setConfirmBooking } = useAppStore();
  useEffect(() => {
    setConfirmBooking(false);
  }, [setConfirmBooking]);
  return (
    <Layout>
      <Hero />
      <Service />
      <FeaturedTour />
      <Holiday />
      <Testimonials />
      <Offers />
      <Subscribes />
    </Layout>
  );
}
