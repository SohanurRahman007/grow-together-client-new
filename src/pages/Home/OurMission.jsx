import React from "react";

import img1 from "../../assets/ourMission/1.jpg";
import img2 from "../../assets/ourMission/2.jpg";
import img3 from "../../assets/ourMission/3.jpg";
import img4 from "../../assets/ourMission/4.jpg";
import img5 from "../../assets/ourMission/5.jpg";

const OurMission = () => {
  return (
    <>
      <div>
        <h3 className="text-2xl md:text-4xl font-semibold mb-2 text-center text-green-700">
          Our Mission
        </h3>
        <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-lg">
          We are dedicated to promoting a greener planet through community tree
          planting, sustainable gardening practices, and spreading awareness
          about the importance of nature conservation for future generations.
        </p>
      </div>

      <section className="  dark:text-gray-900 mt-4 mb-6">
        <div className="container grid grid-cols-2 gap-4   mx-auto md:grid-cols-4">
          <img
            src={img1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-xl shadow-green-600  md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full object-cover rounded-sm shadow-xl shadow-green-600  dark:bg-gray-500 aspect-square"
            src={img2}
          />
          <img
            alt=""
            className="w-full h-full rounded-sm shadow-xl shadow-green-600  dark:bg-gray-500 aspect-square"
            src={img5}
          />
          <img
            alt=""
            className="w-full h-full rounded-sm shadow-xl shadow-green-600  dark:bg-gray-500 aspect-square"
            src={img3}
          />
          <img
            alt=""
            className="w-full h-full rounded-sm shadow-xl shadow-green-600  dark:bg-gray-500 aspect-square"
            src={img4}
          />
        </div>
      </section>
    </>
  );
};

export default OurMission;
