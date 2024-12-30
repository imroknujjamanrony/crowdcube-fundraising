import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const DetailsCampaign = () => {
  const campaign = useLoaderData();
  const { user } = useContext(AuthContext); // Get the logged-in user

  const handleDonation = async () => {
    const currentDate = new Date();
    const deadlineDate = new Date(campaign.deadline);

    // Check if the campaign deadline has passed
    if (currentDate > deadlineDate) {
      toast.error(
        "The deadline for this campaign has passed. You cannot donate."
      );
      return;
    }

    if (!user) {
      toast.error("You must be logged in to donate.");
      return;
    }

    // Collecting the donation data
    const donationData = {
      campaignImage: campaign.image,
      campaignId: campaign._id,
      campaignTitle: campaign.title,
      userName: user.displayName || "Anonymous", // Use logged-in user's name
      userEmail: user.email, // Use logged-in user's email
      donatedAmount: campaign.minDonation,
      campaignType: campaign.type,
      campaignDescription: campaign.description,
      donationDate: new Date(),
    };

    try {
      // Sending the data to the backend
      const response = await fetch(
        "https://crowdcube-fundraising-server.vercel.app/donations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(donationData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        toast.success("Donation successful!");
        console.log("Donation Response:", result);
      } else {
        toast.error("Failed to make the donation. Please try again.");
        console.error("Error:", await response.json());
      }
    } catch (error) {
      console.error("Error during donation submission:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <img
        src={campaign.image}
        alt={campaign.title}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-3xl font-bold">{campaign.title}</h1>

      <p className="text-gray-700 mt-4">{campaign.description}</p>
      <p className="mt-2">
        <strong>Type:</strong> {campaign.type}
      </p>
      <p>
        <strong>MinDonation:</strong> ${campaign.minDonation}
      </p>
      <p>
        <strong>Created By:</strong> {campaign.userName}
      </p>
      <p>
        <strong>Creator Email:</strong> {campaign.userEmail}
      </p>
      <p>
        <strong>Deadline:</strong>{" "}
        {new Date(campaign.deadline).toLocaleDateString()}
      </p>
      <button onClick={handleDonation} className="btn w-full btn-success">
        Donate Now
      </button>
    </div>
  );
};

export default DetailsCampaign;
