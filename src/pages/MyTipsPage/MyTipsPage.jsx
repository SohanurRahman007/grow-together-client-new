import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Loading from "../../components/Loading/Loading";
import { Helmet } from "react-helmet-async";

const MyTipsPage = () => {
  const { user, loading } = useContext(AuthContext);
  const [myTips, setMyTips] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/shareTip/myTips?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyTips(data))
        .catch((err) => console.error("Error fetching my tips:", err));
    }
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/shareTip/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            setMyTips((prev) => prev.filter((tip) => tip._id !== id));

            Swal.fire({
              title: "Deleted!",
              text: "Your tip has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.error("Delete failed", error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="mt-10 mb-6">
      <Helmet>
        <title>GrowTogether | Tip Details</title>
      </Helmet>
      <div className="overflow-x-auto shadow-md shadow-green-600 rounded-md">
        <h2 className="text-xl md:text-4xl text-center text-green-600 font-semibold">
          My Garden Tips
        </h2>
        <p className="text-sm text-center  max-w-xl mx-auto mt-4 ">
          The My Tips page displays all gardening tips submitted by the
          currently logged-in user.Users can manage their tips efficiently
          through this dashboard, and tips can be removed with a confirmation
          prompt to avoid accidental deletions.
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myTips.map((tip, index) => (
              <tr key={tip._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={tip.imageUrl}
                    alt={tip.title}
                    className="h-12 w-12 rounded"
                  />
                </td>
                <td>{tip.title}</td>
                <td>{tip.category}</td>
                <td>{tip.availability}</td>
                <td className="space-x-2">
                  <Link
                    to={`/updateTip/${tip._id}`}
                    className="btn btn-xs btn-info"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(tip._id)}
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTipsPage;
