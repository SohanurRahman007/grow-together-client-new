import React, { useContext, useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../../components/Loading/Loading";
import { Helmet } from "react-helmet-async";

const BrowseTipsPage = () => {
  const [tips, setTips] = useState([]);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:3000/shareTip/availability")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTips(data);
      })
      .catch((err) => {
        console.error("Error fetching tips:", err);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Helmet>
        <title>GrowTogether | GardenTip</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
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
            {/* row  */}
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
                    className="btn btn-ghost btn-xs"
                  >
                    <IoEye />
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
