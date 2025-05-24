import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const UpdateTipPage = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [tip, setTip] = useState(null);

  useEffect(() => {
    fetch(
      `https://green-connect-server-one.vercel.app/shareTip/availability/${id}`
    )
      .then((res) => res.json())
      .then((data) => setTip(data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedTip = {
      title: form.title.value,
      category: form.category.value,
      imageUrl: form.imageUrl.value,
      availability: form.availability.value,
      difficulty: form.difficulty.value,
      plantType: form.plantType.value,
      description: form.description.value,
    };

    fetch(`https://green-connect-server-one.vercel.app/shareTip/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTip),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Updated!", "Your tip has been updated.", "success");
      });
  };

  if (!tip) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto my-8 p-6  rounded-lg shadow">
      <h2 className="text-2xl md:text-4xl md:font-bold mb-4 text-center text-green-600">
        Update Garden Tip
      </h2>
      <p className="text-center">
        The Update Tip Page allows users to modify details of an existing
        gardening tip they previously shared. Users can update fields such as
        the tip title, plant type, difficulty level, image URL, category,
        availability status, and description.
      </p>

      <form
        onSubmit={handleUpdate}
        className="space-y-8 p-4 transition-all duration-300 hover:shadow-sm rounded-lg dark:text-white shadow-green-400"
      >
        <div className="space-y-4">
          {/* User Info (Read-only) */}
          <div className="space-y-2">
            <label htmlFor="userName" className="block text-gray-600 text-sm">
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
            <label htmlFor="userEmail" className="block text-sm text-gray-600">
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
            <label htmlFor="title" className="block text-sm text-gray-600">
              Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={tip.title}
              id="title"
              placeholder="How I Grow Tomatoes Indoors"
              required
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>

          {/* Plant Type / Topic */}
          <div className="space-y-2">
            <label htmlFor="plantType" className="block text-sm text-gray-600">
              Plant Type / Topic
            </label>
            <input
              type="text"
              name="plantType"
              defaultValue={tip.plantType}
              id="plantType"
              placeholder="Tomatoes / Indoor Gardening"
              required
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>

          {/* Difficulty Level */}
          <div className="space-y-2">
            <label htmlFor="difficulty" className="block text-sm text-gray-600">
              Difficulty Level
            </label>
            <select
              name="difficulty"
              id="difficulty"
              defaultValue={tip.difficulty}
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
            <label htmlFor="imageUrl" className="block text-sm text-gray-600">
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              defaultValue={tip.imageUrl}
              id="imageUrl"
              placeholder="https://example.com/image.jpg"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label htmlFor="category" className="block text-sm text-gray-600">
              Category
            </label>
            <select
              name="category"
              id="category"
              defaultValue={tip.category}
              required
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            >
              <option value="Composting">Composting</option>
              <option value="Plant Care">Plant Care</option>
              <option value="Vertical Gardening">Vertical Gardening</option>
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
              defaultValue={tip.availability}
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
          <label htmlFor="description" className="block text-sm text-gray-600">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows="4"
            defaultValue={tip.description}
            placeholder="Write your gardening tip here..."
            required
            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
          />
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          value="  Update Tip"
          className="w-full px-8 btn py-3 font-semibold rounded-md dark:bg-green-600 dark:text-white border-none hover:bg-green-700 transition"
        />
      </form>
    </div>
  );
};

export default UpdateTipPage;
