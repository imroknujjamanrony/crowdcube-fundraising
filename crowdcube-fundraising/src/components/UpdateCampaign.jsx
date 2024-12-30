import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const UpdateCampaign = () => {
  const campaign = useLoaderData();
  const [formData, setFormData] = useState({
    campaignTitle: campaign.campaignTitle || "",
    image: campaign.image || "",
    type: campaign.type || "",
    description: campaign.description || "",
    minDonation: campaign.minDonation || "",
    deadline: campaign.deadline || "",
    userEmail: campaign.userEmail || "",
    userName: campaign.userName || "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { _id, ...dataToUpdate } = formData;

    try {
      const response = await fetch(
        `https://crowdcube-fundraising-server.vercel.app/campaigns/${campaign._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToUpdate),
        }
      );

      if (response.ok) {
        toast.success("Campaign updated successfully!");
        navigate("/myCampaign");
      } else {
        toast.error("Failed to update the campaign.");
      }
    } catch (error) {
      console.error(error);
      alert("Error updating the campaign.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto p-6 bg-gray-100 shadow-md rounded-lg"
    >
      {/* Campaign Title */}
      <div className="mb-4">
        <label htmlFor="campaignTitle" className="block mb-2 font-medium">
          Campaign Title
        </label>
        <input
          type="text"
          name="campaignTitle"
          id="campaignTitle"
          value={formData.campaignTitle}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Image URL */}
      <div className="mb-4">
        <label htmlFor="image" className="block mb-2 font-medium">
          Image URL
        </label>
        <input
          type="url"
          name="image"
          id="image"
          value={formData.image}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Campaign Type */}
      <div className="mb-4">
        <label htmlFor="type" className="block mb-2 font-medium">
          Campaign Type
        </label>
        <select
          name="type"
          id="type"
          value={formData.type}
          onChange={handleChange}
          className="select select-bordered w-full"
          required
        >
          <option value="" disabled>
            Select a type
          </option>
          <option value="personal">Personal Issue</option>
          <option value="startup">Startup</option>
          <option value="business">Business</option>
          <option value="creative">Creative Ideas</option>
        </select>
      </div>

      {/* Description */}
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2 font-medium">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          rows="5"
          required
        ></textarea>
      </div>

      {/* Minimum Donation Amount */}
      <div className="mb-4">
        <label htmlFor="minDonation" className="block mb-2 font-medium">
          Minimum Donation Amount
        </label>
        <input
          type="number"
          name="minDonation"
          id="minDonation"
          value={formData.minDonation}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Deadline */}
      <div className="mb-4">
        <label htmlFor="deadline" className="block mb-2 font-medium">
          Deadline
        </label>
        <input
          type="date"
          name="deadline"
          id="deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* User Email (Read-Only) */}
      <div className="mb-4">
        <label htmlFor="userEmail" className="block mb-2 font-medium">
          User Email
        </label>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          value={formData.userEmail}
          className="input input-bordered w-full"
          readOnly
        />
      </div>

      {/* User Name (Read-Only) */}
      <div className="mb-4">
        <label htmlFor="userName" className="block mb-2 font-medium">
          User Name
        </label>
        <input
          type="text"
          name="userName"
          id="userName"
          value={formData.userName}
          className="input input-bordered w-full"
          readOnly
        />
      </div>

      {/* Update Campaign Button */}
      <button type="submit" className="btn btn-success w-full">
        Update Campaign
      </button>
    </form>
  );
};

export default UpdateCampaign;
