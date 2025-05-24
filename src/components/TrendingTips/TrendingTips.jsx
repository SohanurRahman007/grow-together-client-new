import React, { useEffect, useState } from "react";

const TrendingTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("https://green-connect-server-one.vercel.app/trendingTips")
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
      })
      .catch((error) => console.error("Error fetching tips:", error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl md:text-4xl text-green-600 mt-16 text-center font-bold mb-4">
        Top Trending Tips
      </h2>
      <p className="text-sm text-center w-4xl mx-auto mb-6">
        Discover the latest and most-loved gardening hacks, plant care advice,
        and eco-friendly tricks shared by fellow green thumbs. These trending
        tips are handpicked based on popularity, usefulness, and creativity —
        helping you grow smarter, greener, and happier!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {tips.map((item, index) => (
          <div
            key={index}
            className=" p-4 rounded-lg shadow-md shadow-green-600 transform hover:scale-103 transition duration-300 ease-in-out"
          >
            <h3 className="text-lg font-semibold text-green-600 mt-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.category}</p>
            <p className="text-sm mt-1">{item.description}</p>
            <p className="text-xs text-right text-gray-500 mt-2">
              Posted by {item.author} on {item.datePosted}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTips;
