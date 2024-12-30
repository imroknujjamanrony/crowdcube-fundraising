import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const MyCampaign = () => {
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch(
      `https://crowdcube-fundraising-server.vercel.app/mycampaigns?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setCampaigns(data));
  }, [user]);

  const handleDelete = (id) => {
    // Create custom toast for confirmation with Yes and No buttons
    const toastId = toast.warning(
      <div>
        <p>Are you sure you want to delete this campaign?</p>
        <div>
          <button
            onClick={() => {
              fetch(
                `https://crowdcube-fundraising-server.vercel.app/campaigns/${id}`,
                {
                  method: "DELETE",
                }
              )
                .then((res) => res.json())
                .then(() => {
                  setCampaigns(
                    campaigns.filter((campaign) => campaign._id !== id)
                  );
                  toast.success("Campaign deleted successfully!");
                })
                .catch((error) => {
                  console.error(error);
                  toast.error("Failed to delete the campaign.");
                });
              toast.dismiss(toastId); // Dismiss the confirmation toast after action
            }}
            className="bg-red-500 text-white py-1 px-4 rounded mr-2"
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss(toastId)} // Dismiss the toast when No is clicked
            className="bg-gray-500 text-white py-1 px-4 rounded"
          >
            No
          </button>
        </div>
      </div>,
      {
        autoClose: false, // Prevent the toast from auto-closing
        closeOnClick: false,
        draggable: false,
        position: "top-center",
      }
    );
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Campaigns</h1>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Donation Amount</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign._id}>
              <td className="border px-4 py-2">{campaign.title}</td>
              <td className="border px-4 py-2">{campaign.type}</td>
              <td className="border px-4 py-2">${campaign.minDonation}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDelete(campaign._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
                <button
                  onClick={() =>
                    window.location.assign(`/updateCampaign/${campaign._id}`)
                  }
                  className="btn btn-primary ml-2"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCampaign;
