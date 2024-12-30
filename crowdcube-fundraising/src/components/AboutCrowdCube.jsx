import Animation from "./Animation";

const AboutCrowdCube = () => {
  return (
    <div
      className="text-center py-16 bg-neutral-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200"
      data-aos="fade-up"
    >
      <h2 className="text-4xl flex justify-center items-center gap-4 font-extrabold text-[#00AEEF]">
        <div>
          <Animation></Animation>
        </div>
        Turning Aspirations Into Achievements
      </h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 font-medium">
        CrowdCube is where dreams take shape. Whether it’s empowering young
        minds, uplifting the underprivileged, or fueling innovative business
        ideas, our platform connects compassion with action. Together, we create
        opportunities that transform lives and build a brighter future.
      </p>

      {/* <NavLink
        to="/donations"
        className="btn btn-success mt-6 text-lg font-normal text-[#FFD700]"
      >
        Start Your Contribution
      </NavLink> */}

      {/* Grid Section */}
      <div className="rounded-2xl mt-10 bg-gray-200 dark:bg-gray-700 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6">
          {[
            {
              src: "https://i.ibb.co.com/DkbvrvV/1702829830-AI-Based-Web-Development-with-Django.jpg",
              title: "AI-Based Skills",
            },
            {
              src: "https://i.ibb.co.com/q7d1RXt/siddhant-soni-Cvq-Czw-VOh-CM-unsplash.jpg",
              title: "Poor Children",
            },
            {
              src: "https://i.ibb.co.com/8MKr4yW/granddaughter-hugging-grandfather-family-hospital-visit-granddaughter-hugging-grandfather-family-hos.webp",
              title: "Medical Support",
            },
            {
              src: "https://i.ibb.co.com/VCskf7y/cozy-bakery-interior-eads-pastries-96461-13987.jpg",
              title: "For Business",
            },
            {
              src: "https://i.ibb.co.com/nfkV7rL/s717085907556508849-p3-i3-w4008.webp",
              title: "Creative Ideas",
            },
            {
              src: "https://i.ibb.co.com/YbSTtsV/school-uniform.jpg",
              title: "Education",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover"
                src={item.src}
                alt={item.title}
              />
              <h2 className="pt-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCrowdCube;
