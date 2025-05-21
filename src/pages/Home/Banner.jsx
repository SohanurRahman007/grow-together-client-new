import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Typewriter } from "react-simple-typewriter";

import img1 from "../../assets/banner/1.jpg";
import img2 from "../../assets/banner/2.jpg";
import img3 from "../../assets/banner/3.jpg";
import img4 from "../../assets/banner/4.jpg";
import img5 from "../../assets/banner/5.jpg";
import img6 from "../../assets/banner/6.jpg";

const Banner = () => {
  return (
    <div className="mt-6 mb-6">
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold">
          <span>I am </span>
          <span className="text-green-600">
            <Typewriter
              words={["a Developer", "a Nature Lover", "a Tree Planter"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="text-sm  text-gray-700 dark:text-white max-w-xl mx-auto mt-4">
          Join us as we celebrate nature with a variety of events including
          planting trees, selling plants, maintaining gardens, and spreading
          awareness about eco-friendly living. Let’s grow a greener future
          together!
        </p>
      </div>

      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        showStatus={false}
        className="md:h-[500px] h-[400px] rounded-sm shadow-2xl shadow-green-600"
      >
        {/* Slide 1 */}
        <div className="relative group md:h-[500px] ">
          <img
            src={img1}
            alt="Slide 1"
            className="object-cover w-full h-full  rounded-sm"
          />
          <div
            className="absolute inset-0 flex justify-center items-center 
                     opacity-0 translate-y-full
                     group-hover:opacity-100 group-hover:translate-y-0 
                     transition-all duration-500 ease-in-out"
          >
            <div className=" shadow-[0_10px_40px_rgba(187,247,208,0.6)] rounded-b-sm bg-gray-800 bg-transparent-900 bg-opacity-80 p-6 rounded max-w-lg text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">
                🌱 Tree Plantation Festival
              </h2>
              <p className="text-white">
                Join our annual tree plantation drive to help protect the
                environment. Together, we’ll plant hundreds of trees in our
                community park. Special gifts and surprises await participants
                of all ages!
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative group md:h-[500px]">
          <img
            src={img2}
            alt="Slide 2"
            className="object-cover w-full h-full rounded-sm"
          />
          <div
            className="absolute inset-0 flex justify-center items-center 
                     opacity-0 translate-y-full
                     group-hover:opacity-100 group-hover:translate-y-0 
                     transition-all duration-500 ease-in-out"
          >
            <div className="shadow-[0_10px_40px_rgba(187,247,208,0.6)] rounded-b-sm bg-gray-800  bg-opacity-60 p-6 rounded max-w-lg text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">
                🌳 Tree Sales Fair
              </h2>
              <p className="text-white">
                Explore a wide collection of local and exotic flower, fruit, and
                shade trees at our yearly Tree Sales Fair. Get healthy plants at
                affordable prices, directly from trusted nurseries.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative group md:h-[500px]">
          <img
            src={img3}
            alt="Slide 3"
            className="object-cover w-full h-full rounded-sm"
          />
          <div
            className="absolute inset-0 flex justify-center items-center 
                     opacity-0 translate-y-full
                     group-hover:opacity-100 group-hover:translate-y-0 
                     transition-all duration-500 ease-in-out"
          >
            <div className="shadow-[0_10px_40px_rgba(187,247,208,0.6)] rounded-b-sm bg-gray-800  bg-opacity-60 p-6 rounded max-w-lg text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">
                🧤 Tree Care Workshop
              </h2>
              <p className="text-white">
                Learn the right techniques to keep your trees healthy. This free
                workshop will cover watering schedules, pruning methods,
                fertilizing, and how to treat common plant diseases.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="relative group md:h-[500px]">
          <img
            src={img4}
            alt="Slide 4"
            className="object-cover w-full h-full rounded-sm"
          />
          <div
            className="absolute inset-0 flex justify-center items-center 
                     opacity-0 translate-y-full
                     group-hover:opacity-100 group-hover:translate-y-0 
                     transition-all duration-500 ease-in-out"
          >
            <div className="shadow-[0_10px_40px_rgba(187,247,208,0.6)] rounded-b-sm bg-gray-800  bg-opacity-60 p-6 rounded max-w-lg text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">
                🪴 Indoor Gardening Contest
              </h2>
              <p className="text-white">
                Is your home garden something special? Enter our Indoor
                Gardening Contest and showcase your creativity! Exciting prizes
                and certificates await the winners.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 5 */}
        <div className="relative group md:h-[500px]">
          <img
            src={img5}
            alt="Slide 5"
            className="object-cover w-full h-full rounded-sm"
          />
          <div
            className="absolute inset-0 flex justify-center items-center 
                     opacity-0 translate-y-full
                     group-hover:opacity-100 group-hover:translate-y-0 
                     transition-all duration-500 ease-in-out"
          >
            <div className="shadow-[0_10px_40px_rgba(187,247,208,0.6)] rounded-b-sm bg-gray-800  bg-opacity-60 p-6 rounded max-w-lg text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">
                🍀 Kitchen Gardening Tips
              </h2>
              <p className="text-white">
                Want to grow vegetables and herbs at home? This session will
                guide you step by step on how to start a kitchen garden — from
                choosing the right plants to maintaining them easily.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 6 */}
        <div className="relative group md:h-[500px]">
          <img
            src={img6}
            alt="Slide 6"
            className="object-cover w-full h-full rounded-sm"
          />
          <div
            className="absolute inset-0 flex justify-center items-center 
                     opacity-0 translate-y-full
                     group-hover:opacity-100 group-hover:translate-y-0 
                     transition-all duration-500 ease-in-out"
          >
            <div className="shadow-[0_10px_40px_rgba(187,247,208,0.6)] rounded-b-sm bg-gray-800  bg-opacity-60 p-6 rounded max-w-lg text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">
                🌼 Kids’ Green Event
              </h2>
              <p className="text-white">
                Let children fall in love with nature early! This fun-filled
                event includes plant-themed storytelling, painting, and a
                hands-on tree planting session for kids. Parents are welcome
                too!
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
