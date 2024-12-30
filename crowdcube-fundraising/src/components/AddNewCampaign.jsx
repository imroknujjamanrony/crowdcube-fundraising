import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const AddNewCampaign = () => {
  const { user } = useContext(AuthContext);

  const handleAddCampaign = async (e) => {
    e.preventDefault();
    const campaignData = {
      image: e.target.image.value,
      title: e.target.title.value,
      type: e.target.type.value,
      description: e.target.description.value,
      minDonation: e.target.minDonation.value,
      deadline: e.target.deadline.value,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    try {
      const response = await fetch(
        "https://crowdcube-fundraising-server.vercel.app/addnewcampaign",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(campaignData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      toast.success("Campaign added successfully!");
      console.log("Server Response:", data);
      e.target.reset();
    } catch (error) {
      console.error("ERROR:", error.message);
      toast.error("Failed to add campaign. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="card bg-base-100 w-full max-w-lg md:max-w-2xl lg:max-w-4xl shadow-lg rounded-lg p-6">
        <h2 className="text-gray-700 text-2xl font-bold text-center mb-4">
          Add New Campaign
        </h2>
        <form onSubmit={handleAddCampaign} className="grid gap-6">
          {/* Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Image URL</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter Image URL"
              className="input input-bordered"
              required
            />
          </div>

          {/* Campaign Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Campaign Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter Campaign Title"
              className="input input-bordered"
              required
            />
          </div>

          {/* Campaign Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Campaign Type</span>
            </label>
            <select name="type" className="select select-bordered" required>
              <option value="personal">Personal Issue</option>
              <option value="startup">Startup</option>
              <option value="business">Business</option>
              <option value="creative">Creative Ideas</option>
            </select>
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Enter Description"
              className="textarea textarea-bordered"
              required
            ></textarea>
          </div>

          {/* Minimum Donation */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">
                Minimum Donation Amount
              </span>
            </label>
            <input
              type="number"
              name="minDonation"
              placeholder="Enter Minimum Donation Amount"
              className="input input-bordered"
              required
            />
          </div>

          {/* Deadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Deadline</span>
            </label>
            <input
              type="date"
              name="deadline"
              className="input input-bordered"
              required
            />
          </div>

          {/* User Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">User Email</span>
            </label>
            <input
              type="email"
              name="userEmail"
              value={user?.email || ""}
              className="input input-bordered"
              readOnly
            />
          </div>

          {/* User Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">User Name</span>
            </label>
            <input
              type="text"
              name="userName"
              value={user?.displayName || ""}
              className="input input-bordered"
              readOnly
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Add Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCampaign;
