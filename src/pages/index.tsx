import Layout from "~/layout";
import {
  Hero,
  Service,
  FeaturedTour,
  Holiday,
  Testimonials,
  Offers,
  Subscribes,
} from "~/components";
import { useEffect } from "react";
import { useAppStore } from "~/store";

export default function Home() {
  const { setConfirmBooking } = useAppStore();
  useEffect(() => {
    setConfirmBooking(false);
  }, []);
  return (
    <Layout>
      <>
        <Hero />
        <Service />
        <FeaturedTour />
        <Holiday />
        <Testimonials />
        <Offers />
        <Subscribes />
      </>
    </Layout>
  );
}
