import Animation from "./Animation";
import Legacy from "./Legacy";
import AboutCrowdCube from "./AboutCrowdCube";
import Slider from "./swiper/Slider";
import { Link, useLoaderData } from "react-router-dom";

const Homepage = () => {
  const campaigns = useLoaderData();

  return (
    <div>
      {/* Slider Section for banner*/}
      <section className="">
        <Slider></Slider>
        <AboutCrowdCube></AboutCrowdCube>
      </section>
      <section></section>

      {/* Running Campaigns Section */}
      <section>
        <div id="#running">
          <h1 className="text-5xl text-green-500 flex justify-center items-center gap-4 font-bold py-5 text-center">
            Running Campaigns: {campaigns.length}
            <div className="">
              {" "}
              <Animation></Animation>
            </div>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* map */}
            {campaigns.map((campaign) => (
              <div
                key={campaign._id}
                className="border p-4 rounded shadow hover:shadow-lg transition"
              >
                <img
                  src={campaign.image}
                  alt=""
                  className="w-full h-40 object-cover rounded"
                />
                <h2 className="text-xl font-bold mt-2">{campaign.title}</h2>
                <p className="text-gray-700">{campaign.description}</p>

                <p>
                  <strong>Deadline:</strong>{" "}
                  {new Date(campaign.deadline).toLocaleDateString()}
                </p>
                <Link
                  to={`/campaign/${campaign._id}`}
                  className="mt-4 px-4 btn bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  See More
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Legacy></Legacy>
      </section>
    </div>
  );
};

export default Homepage;
