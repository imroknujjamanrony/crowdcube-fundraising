import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";

const MyDonations = () => {
  const { user, loading } = useContext(AuthContext); // Get user and loading state
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://crowdcube-fundraising-server.vercel.app/donations?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setDonations(data))
        .catch((error) => console.error("Error fetching donations:", error));
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Donations</h1>
      {donations.length === 0 ? (
        <p className="text-gray-600">No donations found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map((donation) => (
            <div
              key={donation._id}
              className="bg-white shadow-md rounded-lg p-4 border"
            >
              <img src={donation.campaignImage} alt="" />
              <h3 className="text-xl font-bold text-gray-800">
                {donation.campaignTitle}
              </h3>
              <p className="text-gray-600">
                <span className="font-semibold">Description:</span>{" "}
                {donation.campaignDescription}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Amount:</span> $
                {donation.donatedAmount}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Date:</span>{" "}
                {new Date(donation.donationDate).toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Type:</span>{" "}
                {donation.campaignType}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span>{" "}
                {donation.userEmail}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Name:</span> {donation.userName}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyDonations;
