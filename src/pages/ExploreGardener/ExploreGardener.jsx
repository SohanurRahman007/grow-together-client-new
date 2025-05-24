import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../../components/Loading/Loading";

const ExploreGardener = () => {
  const allGardenerData = useLoaderData();

  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container mx-auto mt-15 mb-15">
      <div>
        <h2 className="text-4xl font-semibold text-green-600 text-center">
          Explore Gardeners
        </h2>
        <p className="text-sm text-center text-gray-700 dark:text-white max-w-xl mx-auto mt-4">
          Discover a diverse range of passionate gardeners from all backgrounds
          and specialties. In this section, you can explore profiles, learn from
          their experiences, and get inspired by their unique gardening journeys
          — from rooftop planting to bonsai mastery.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {allGardenerData.map((data) => (
          <div
            key={data._id}
            className="flex flex-col rounded-lg shadow-xl shadow-green-600 p-6 dark:text-gray-800 transform transition duration-300 hover:scale-103"
          >
            <img
              src={data.image}
              alt={data.name}
              className="object-cover h-64 w-full rounded-md mb-4"
            />
            <div>
              <h2 className="text-xl font-semibold text-green-600 mb-1">
                {data.title}
              </h2>
              <span className="block pb-2 font-semibold text-gray-500">
                Plant Type: {data.plantType}
              </span>
              <div className="flex justify-between items-center mb-2 text-sm text-gray-700">
                <h1 className="font-bold">Gardener: {data.name}</h1>
                <span className="font-bold"> Age {data.age}</span>
              </div>
              <div className="flex justify-between border-b border-t border-green-600 pt-2 pb-2 items-center mb-2 text-sm text-gray-700">
                <span>Experience: {data.experience}</span>
                <h1 className="font-bold">Status: {data.status}</h1>
              </div>
              <p className="text-sm text-gray-600">
                Desc: {data.shortDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardener;
