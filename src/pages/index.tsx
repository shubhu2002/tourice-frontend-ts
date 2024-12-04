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

export default function Home() {
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
