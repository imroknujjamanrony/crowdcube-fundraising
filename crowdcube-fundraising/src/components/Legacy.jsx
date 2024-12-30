const Legacy = () => {
  return (
    <div
      className="flex flex-col md:flex-row gap-6 bg-[#003f63] p-5 rounded-xl"
      data-aos="flip-down"
    >
      <div className="flex-shrink-0 md:w-1/2">
        <img
          className="w-full h-auto max-h-96 object-cover rounded-xl"
          src="https://i.ibb.co/KrRT4KR/skin-care-products-display-stand-shopping-mall-brightly-colored-beautifully-packaged-displayed-count.webp"
          alt="Display stand with beautifully packaged products"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-[#00AEEF] text-3xl font-semibold mb-4">
          Empowering Dreams Through Trust
        </h2>
        <p className="text-lg text-[#A9A9A9] font-normal leading-relaxed">
          At CrowdCube, we are dedicated to empowering individuals and ideas by
          fostering a culture of trust and collaboration. Whether you're raising
          funds for personal needs, a business venture, an innovative idea, or a
          startup dream, our platform is here to make your vision a reality.
          With a proven track record of successful campaigns and a transparent
          process, we connect fundraisers with supporters who believe in their
          cause. Join us in building a community where trust fuels success and
          every contribution creates meaningful change.
        </p>
      </div>
    </div>
  );
};

export default Legacy;
