import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./index.css";

const App = () => {
  const [xValue, setrandomX] = useState(0);
  const [yValue, setrandomY] = useState(0);
  const circleRef = useRef();

  const randomX = gsap.utils.random(-500, 500, 10);
  const randomY = gsap.utils.random(-300, 300, 10);

  useGSAP(
    () => {
      gsap.to(circleRef.current, {
        x: xValue,
        y: yValue,
        duration: 0.5,
      });
    },
    { dependencies: [xValue, yValue] }
  );

  return (
    <main className="bg-black h-screen w-full p-20 flex flex-col justify-evenly items-center">
      <button
        onClick={() => {
          setrandomX(randomX);
          setrandomY(randomY);
        }}
        className="h-13 w-50 bg-gradient-to-t from-blue-700 via-blue-900 to-blue-700 rounded-full active:scale-95 text-2xl text-white font-bold cursor-pointer hover:from-blue-900 hover:via-blue-700 hover:to-blue-900">
        Animate
      </button>
      <div ref={circleRef} className="h-40 w-40 rounded-full bg-white"></div>
    </main>
  );
};
export default App;
