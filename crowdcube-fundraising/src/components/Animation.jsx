import { useLottie } from "lottie-react";
import animation from "../assets/lottie.json";

const Animation = () => {
  const options = {
    animationData: animation,
    loop: true,
    autoplay: true,
  };

  // Apply styles to the container
  const style = {
    width: "100px",
    height: "100px",
  };

  const { View } = useLottie(options);

  return <div style={style}>{View}</div>;
};

export default Animation;
