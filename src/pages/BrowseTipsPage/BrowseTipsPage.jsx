import React, { useContext, useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../../components/Loading/Loading";
import { Helmet } from "react-helmet-async";

const BrowseTipsPage = () => {
  const [tips, setTips] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const { loading } = useContext(AuthContext);

  const fetchTips = (difficulty = "") => {
    let url = "http://localhost:3000/shareTip/availability";
    if (difficulty) {
      url += `?difficulty=${difficulty}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTips(data))
      .catch((err) => console.error("Error fetching tips:", err));
  };

  useEffect(() => {
    fetchTips(); // fetch all tips initially
  }, []);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSelectedDifficulty(value);
    fetchTips(value);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Helmet>
        <title>GrowTogether | GardenTip</title>
      </Helmet>

      <div className="my-4 text-gray-600 text-xl font-semibold">
        <label className="mr-2 font-semibold">Filter by Difficulty:</label>
        <select
          value={selectedDifficulty}
          onChange={handleFilterChange}
          className="border border-green-600 rounded p-2"
        >
          <option value="">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.imageUrl} alt={item.title} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <th>
                  <Link
                    to={`/TipDetailsPage/${item._id}`}
                    className="btn btn-ghost btn-xs border-green-600"
                  >
                    <IoEye size={20} className="text-green-600" />
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTipsPage;
