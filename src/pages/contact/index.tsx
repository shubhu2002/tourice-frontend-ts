import Image from "next/image";

import Layout from "~/layout";
import { Header, Subscribes } from "~/components";
import { ImageData } from "~/constants";

const Contact = () => {
  return (
    <Layout>
      <section className="w-full">
        <Header title={`Contact us`} />
        <main className="flex w-full flex-col gap-6 px-6 lg:px-12">
          <p className="text-center lg:text-xl">
            We&apos;re here to help you plan your dream vacation! Feel free to
            reach out to us with any questions, inquiries, or booking requests.
            Our dedicated team of travel experts is ready to assist you.
          </p>
          <hr />
          <h1 className="text-center text-xl">Contact Information </h1>
          <div className="relative flex w-full flex-col gap-6 lg:px-28">
            <Image
              src={ImageData.tree}
              alt="tree"
              width={1000}
              height={1000}
              className="absolute -right-5 bottom-0 z-0 w-60 opacity-50 md:opacity-100 lg:-top-10 lg:right-36 lg:w-52"
            />
            <ul className="relative flex flex-col gap-1">
              <h1 className="text-lg">Address : </h1>
              <li>245, Basant Vihar</li>
              <li>Gwalior , Madhya Pradesh</li>
              <li>Zip Code : 474012</li>
            </ul>

            <ul className="relative flex flex-col gap-1">
              <h1 className="text-lg">Emails - </h1>
              <li>General Enquires - info@tourice.com</li>
              <li>Customer Support - support@tourice.com</li>
              <li>Bookings - bookings@tourice.com</li>
            </ul>

            <ul className="relative flex flex-col gap-1">
              <h1 className="text-lg">Social Media - </h1>
              <li>Facebook : https://www.facebook.com/Tourice</li>
              <li>Twitter : https://www.twitter.com/Tourice</li>
              <li>Instagram : https://www.instagram.com/Tourice</li>
            </ul>
          </div>
          <hr />
          <h1 className="text-center lg:text-xl">
            We look forward to assisting you in planning your next unforgettable
            adventure!
          </h1>
        </main>
        <Subscribes />
      </section>
    </Layout>
  );
};

export default Contact;
