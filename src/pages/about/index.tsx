import { Header } from "~/components";
import Layout from "~/layout";

const About = () => {
  return (
    <Layout>
      <section className="w-full text-sm">
        <Header title={`All About Us`} />
        <div className="mb-10 flex flex-col gap-6 px-6 md:px-14 md:text-justify">
          <h1 className="text-2xl">
            Welocome to{" "}
            <span className="text-4xl text-orange-300">Tourice </span>
          </h1>
          <hr />
          <p>
            At Tourice, we believe that travel is not just about reaching a
            destination; it&apos;s about the journey itself. We are dedicated to
            curating extraordinary travel experiences that leave you with
            cherished memories and a deep connection to the world around you.
            With a passion for exploration and a commitment to exceptional
            service, we&apos;re here to turn your travel dreams into reality.
          </p>
          <div>
            <h1 className="pb-1 text-lg font-semibold">Who we are ? </h1>
            <p>
              We are a team of avid travelers, wanderlust enthusiasts, and
              experienced professionals who are driven by the desire to provide
              you with the most authentic, enriching, and hassle-free travel
              adventures. Our diverse backgrounds and extensive travel expertise
              enable us to craft journeys that cater to a wide range of
              interests, preferences, and budgets.
            </p>
          </div>
          <div>
            <h1 className="pb-1 text-lg font-semibold">Our Missions - </h1>
            <p>
              Our mission is to redefine the way you experience travel. We aim
              to go beyond conventional itineraries, giving you the chance to
              truly immerse yourself in the local culture, history, and beauty
              of each destination. Through careful planning, attention to
              detail, and a deep understanding of your desires, we are dedicated
              to making every moment of your journey unforgettable.
            </p>
          </div>
          <div>
            <h1 className="pb-1 text-lg font-semibold">What we Offer - </h1>
            <ul className="flex list-disc flex-col gap-4 pl-4 pt-2 md:pl-8">
              <li>
                <span className="text-base font-semibold">
                  Tailored Itineraries :{" "}
                </span>
                We understand that no two travelers are alike, and that&apos;s
                why we offer personalized itineraries that align with your
                interests and preferences. Whether you&apos;re a solo explorer,
                a couple seeking a romantic getaway, a family on an adventure,
                or a group of friends ready to make memories, we&apos;ve got you
                covered.
              </li>
              <li>
                <span className="text-base font-semibold">
                  Expert Guidance :{" "}
                </span>
                Our travel experts are here to guide you every step of the way.
                From destination recommendations and visa assistance to local
                insights and safety tips, we ensure you have all the information
                you need for a smooth and enjoyable journey.
              </li>
              <li>
                <span className="text-base font-semibold">
                  Handpicked Accommodations :{" "}
                </span>
                We believe where you stay plays a pivotal role in your travel
                experience. Our team handpicks accommodations that blend
                comfort, character, and authenticity, ensuring you have a home
                away from home no matter where you go.
              </li>
              <li>
                <span className="text-base font-semibold">
                  Unique Experiences :{" "}
                </span>
                We&apos;re all about creating moments that take your breath
                away. Whether it&apos;s a private cooking class with a local
                chef, a thrilling wildlife safari, a serene sunset cruise, or a
                guided historical walking tour, we introduce you to experiences
                that you&apos;ll treasure forever.
              </li>
              <li>
                <span className="text-base font-semibold">24/7 Support : </span>
                Your safety and comfort are our top priorities. That&apos;s why
                we provide round-the-clock customer support to address any
                concerns or unexpected situations that might arise during your
                journey. Join Us on a Journey: Embark on a voyage of discovery
                with tourice. Let us be your compass, guiding you through
                uncharted territories and introducing you to the beauty and
                wonder that the world has to offer. Whether you&apos;re a
                seasoned traveler or setting out on your first adventure, we
                invite you to join us in creating stories that will be shared
                for generations to come. Let&apos;s explore, experience, and
                make memories together. Your journey starts here.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
