import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../../components/Loading/Loading";
import { Helmet } from "react-helmet-async";
import { AiFillLike } from "react-icons/ai";

const TipDetailsPage = () => {
  const { user, loading } = useContext(AuthContext);
  const tip = useLoaderData();
  console.log(tip);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-10 mb-6">
      <Helmet>
        <title>GrowTogether | Tip Details</title>
      </Helmet>

      <div className="mt-10 mb-6">
        <img
          src="https://i.ibb.co/SDjYDr9c/images-3.jpg"
          alt=""
          className="min-w-full object-cover bg-cover h-80 rounded-sm shadow-2xl shadow-green-600"
        />
      </div>

      <div>
        <h1 className="text-xl md:text-4xl text-center text-green-600 font-semibold">
          Tip Overview - Learn & Grow
        </h1>
        <p className="text-sm text-center  max-w-xl mx-auto mt-4">
          Discover in-depth information about this gardening tip including its
          benefits, ideal conditions, and how you can apply it in your garden.
          Whether you're a beginner or an experienced gardener, this tip will
          help you grow greener and healthier plants
        </p>
      </div>

      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md shadow-green-600 dark:text-white mx-auto">
        <div className="flex space-x-4">
          <img
            alt=""
            src={user.photoURL}
            className="object-cover w-12 h-12 rounded-full shadow "
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {tip.userName}
            </a>
          </div>
        </div>
        <div>
          <img
            src={tip.imageUrl}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 "
          />
          <div className="flex justify-between">
            <h2 className="mb-1 text-xl font-semibold">{tip.title}</h2>
            <p>
              <button className="btn">
                <AiFillLike className="text-green-600" size={20} />
              </button>
            </p>
          </div>
          <p className="text-sm dark:text-gray-600">{tip.description}</p>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2">
            <div className="flex justify-between">
              <p className="text-gray-600 text-xl ">Category: {tip.category}</p>
              <p className="text-gray-600 text-xl ">
                Availability :{tip.availability}
              </p>
            </div>
            <div className="flex space-y-8 justify-between">
              <p className="text-gray-600 text-xl ">
                Difficulty: {tip.difficulty}
              </p>
              <p className="text-gray-600 text-xl ">
                PlantType: {tip.plantType}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipDetailsPage;
