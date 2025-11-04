import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./index.css";

const App = () => {
  const imageRef = useRef();

  const [xValue, setXdirection] = useState(0);
  const [yValue, setYdirection] = useState(0);
  const [rotationValue, setRotation] = useState(0);

  const xRandom = gsap.utils.random(-500, 500, 10);
  const yRandom = gsap.utils.random(-250, 250, 5);
  const rotation = gsap.utils.random(0, 360, 1);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      x: xValue,
      y: yValue,
      rotate: rotationValue,
      duration: 0.5,
    });
  }, [xValue, yValue, rotationValue]);
  return (
    <main className="bg-black h-screen w-full p-20 flex flex-col justify-evenly items-center">
      <img
        ref={imageRef}
        onClick={() => {
          setXdirection(xRandom);
          setYdirection(yRandom);
          setRotation(rotation);
        }}
        src="/flyimage.png"
        className="h-70 w-70 cursor-pointer"
      />
    </main>
  );
};

export default App;
