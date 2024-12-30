import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const Allcampaign = () => {
  const campaignData = useLoaderData();
  const [campaigns, setCampaigns] = useState(campaignData);
  const [sortOrder, setSortOrder] = useState("asc");

  // Sorting Function
  const handleSort = () => {
    const sortedCampaigns = [...campaigns].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.minDonation - b.minDonation;
      } else {
        return b.minDonation - a.minDonation;
      }
    });
    setCampaigns(sortedCampaigns);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      {/* Header */}
      <h1 className="text-5xl text-green-500 font-bold py-5 text-center">
        All Campaigns: {campaigns.length}
      </h1>

      {/* Sort Button */}
      <div className="text-center mb-5">
        <button onClick={handleSort} className="btn btn-primary">
          Sort by Minimum Donation (
          {sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>

      {/* Campaign Table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
              <th>Campaign Title</th>
              <th>Description</th>
              <th>Minimum Donation</th>
              <th>Deadline</th>
              <th>Details</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={campaign.image}
                          alt={campaign.campaignTitle}
                          className="w-12 h-12 object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{campaign.title}</div>
                    </div>
                  </div>
                </td>
                <td>{campaign.description}</td>
                <td>${campaign.minDonation}</td>
                <td>{new Date(campaign.deadline).toLocaleDateString()}</td>
                <td>
                  <Link
                    to={`/campaign/${campaign._id}`}
                    className="btn btn-success btn-xs"
                  >
                    See More
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allcampaign;
