import React from "react";

const Gardeners = ({ gardenerData }) => {
  return (
    <div className="container mx-auto mt-15">
      <div>
        <h2 className=" text-2xl md:text-4xl font-semibold text-green-600 text-center">
          Featured Gardeners
        </h2>
        <p className="text-sm text-center text-gray-700 dark:text-white max-w-xl mx-auto mt-4">
          The Featured Gardeners section highlights the most active and
          experienced members of the gardening community who consistently share
          valuable tips, insights, and innovations.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gardenerData.map((data) => (
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
                <span>{data.experience}</span>
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

export default Gardeners;
