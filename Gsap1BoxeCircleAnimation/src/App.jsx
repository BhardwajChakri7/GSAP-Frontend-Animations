import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import "./index.css";
const App = () => {
  const boxRef = useRef();
  const circleRef = useRef();
  useGSAP(() => {
    gsap.from(boxRef.current, {
      rotate: -360,
      x: -300,
      duration: 3,
      delay: 0.5,
    });
  });
  useGSAP(() => {
    gsap.to(circleRef.current, {
      delay: 3,
      duration: 3,
      rotateZ: 450,
      x: 200,
    });
  });

  return (
    <>
      <main className="bg-black h-screen w-full flex flex-col justify-evenly items-center">
        <h1 className="text-white text-3xl font-semibold">
          GSAP Animation 1 - Box & Circle Animation
        </h1>

        {/* Box & Circle Container */}
        <div className="flex flex-row justify-center items-center">
          <div
            ref={boxRef}
            className="h-32 w-32 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 rounded-3xl border-2 border-blue-400 flex justify-center items-center">
            <h1 className="text-white text-3xl font-bold">1</h1>
          </div>

          <div
            ref={circleRef}
            className="h-32 w-32 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 rounded-full border-2 border-blue-400 flex justify-center items-center">
            <h1 className="text-white text-3xl font-bold">2</h1>
          </div>
        </div>
      </main>
    </>
  );
};
export default App;
