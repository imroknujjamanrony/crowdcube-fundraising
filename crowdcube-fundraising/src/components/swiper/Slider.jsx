import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Slider = () => {
  return (
    <div className="py-12">
      <Swiper
        spaceBetween={20}
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2000 }}
      >
        {/** First Slide */}
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <img
              className="w-full h-full opacity-90 object-cover"
              src="https://i.ibb.co/DYCGP2C/pexels-orhunruzgaroz-11036734.jpg"
              alt="Beautiful Landscape"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
              <h2 className="text-5xl font-bold">
                <Typewriter
                  words={[
                    "Give a Helping Hand",
                    "Support Children in Need",
                    "Empower the Future Generation",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
              <p className="text-2xl font-medium">
                Experience the beauty of nature.
              </p>
              <Link
                className="btn btn-success mt-4 text-white font-normal"
                to={"/addnewcampaign"}
              >
                Add Campaign
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/** Second Slide */}
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <img
              className="w-full h-full opacity-90 object-cover"
              src="https://i.ibb.co.com/N7FP21X/gettyimages-1432660862-640x640.jpg"
              alt="Peaceful Forest"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
              <h2 className="text-5xl font-bold">
                <Typewriter
                  words={[
                    "Raise Funds for Treatment",
                    "Advanced Medication Support",
                    "Help with Rare Autoimmune Disorders",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
              <p className="text-2xl font-medium">
                Reconnect with tranquility.
              </p>
              <Link
                className="btn btn-success mt-4 text-white font-normal"
                to={"/addnewcampaign"}
              >
                Add Campaign
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/** Third Slide */}
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <img
              className="w-full h-full opacity-90 object-cover"
              src="https://i.ibb.co.com/YXh62zp/TUFZMTQw-MDc3-Nz-I2.jpg"
              alt="Another Scene"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
              <h2 className="text-5xl font-bold">
                <Typewriter
                  words={[
                    "Medical Treatment Support",
                    "Hope for Rare Diseases",
                    "Contribute to Save Lives",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
              <p className="text-2xl font-medium">
                Let your imagination wander.
              </p>
              <Link
                className="btn btn-success mt-4 text-white font-normal"
                to={"/addnewcampaign"}
              >
                Add Campaign
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
