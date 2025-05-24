import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import Loading from "../../components/Loading/Loading";

const GardenTip = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  console.log(user);
  const handleSharedTips = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());
    fetch("https://green-connect-server-one.vercel.app/shareTip", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after add data on server", data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Tips is Post",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        form.reset();
      });
  };

  return (
    <div className="">
      <Helmet>
        <title>GrowTogether | GardenTip</title>
      </Helmet>

      <div className="my-7 flex flex-col ">
        <div>
          <img
            src="https://i.ibb.co/rRhWjx3D/soil-8080788-1280.jpg"
            className="min-w-full object-cover bg-cover h-80 rounded-sm shadow-2xl shadow-green-600"
            alt=""
          />
        </div>
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-green-600 mt-10">
          Share Your Green Wisdom
        </h2>
        <p className="text-sm text-center  max-w-xl mx-auto mt-4">
          Share your personal gardening experiences and tips with fellow plant
          lovers! Whether it's a secret compost recipe, seasonal planting
          advice, or a clever watering trick — your insight can help someone
          grow a greener, healthier garden.
        </p>

        <div className="card mt-10 md:mt-20  w-full mx-auto md:w-5/12 shrink-0 shadow-2xl shadow-green-600">
          <div className="w-full mx-auto rounded-b-md shadow-green-600 sm:p-8  dark:text-gray-800">
            <h2 className="mb-3 text-3xl font-semibold text-center text-green-600"></h2>

            <form
              onSubmit={handleSharedTips}
              className="space-y-8 p-4 transition-all duration-300 hover:shadow-sm rounded-lg dark:text-white shadow-green-400"
            >
              <div className="space-y-4">
                {/* User Info (Read-only) */}
                <div className="space-y-2">
                  <label
                    htmlFor="userName"
                    className="block text-gray-600 text-sm"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    value={user.displayName}
                    readOnly
                    className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="userEmail"
                    className="block text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    value={user.email}
                    readOnly
                    className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-600"
                  />
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <label
                    htmlFor="title"
                    className="block text-sm text-gray-600"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="How I Grow Tomatoes Indoors"
                    required
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                </div>

                {/* Plant Type / Topic */}
                <div className="space-y-2">
                  <label
                    htmlFor="plantType"
                    className="block text-sm text-gray-600"
                  >
                    Plant Type / Topic
                  </label>
                  <input
                    type="text"
                    name="plantType"
                    id="plantType"
                    placeholder="Tomatoes / Indoor Gardening"
                    required
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                </div>

                {/* Difficulty Level */}
                <div className="space-y-2">
                  <label
                    htmlFor="difficulty"
                    className="block text-sm text-gray-600"
                  >
                    Difficulty Level
                  </label>
                  <select
                    name="difficulty"
                    id="difficulty"
                    required
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>

                {/* Image URL */}
                <div className="space-y-2">
                  <label
                    htmlFor="imageUrl"
                    className="block text-sm text-gray-600"
                  >
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label
                    htmlFor="category"
                    className="block text-sm text-gray-600"
                  >
                    Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    required
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  >
                    <option value="Composting">Composting</option>
                    <option value="Plant Care">Plant Care</option>
                    <option value="Vertical Gardening">
                      Vertical Gardening
                    </option>
                    <option value="Balcony Gardening">Balcony Gardening</option>
                    <option value="Hydroponics">Hydroponics</option>
                  </select>
                </div>

                {/* Availability */}
                <div className="space-y-2">
                  <label
                    htmlFor="availability"
                    className="block text-sm text-gray-600"
                  >
                    Availability
                  </label>
                  <select
                    name="availability"
                    id="availability"
                    required
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  >
                    <option value="Public">Public</option>
                    <option value="Hidden">Hidden</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label
                  htmlFor="description"
                  className="block text-sm text-gray-600"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows="4"
                  placeholder="Write your gardening tip here..."
                  required
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>

              {/* Submit Button */}
              <input
                type="submit"
                value="Share Tip"
                className="w-full px-8 btn py-3 font-semibold rounded-md dark:bg-green-600 dark:text-white border-none hover:bg-green-700 transition"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardenTip;
