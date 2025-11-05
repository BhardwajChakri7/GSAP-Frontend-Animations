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
      delay: 2.5,
      duration: 3,
      rotateZ: 450,
      borderRadius: "50%",
      x: 200,
      scale: 0.7,
    });
  });

  const boxRef1 = useRef();
  const circleRef1 = useRef();
  useGSAP(() => {
    gsap.to(boxRef1.current, {
      rotate: -360,
      x: -300,
      duration: 3,
      delay: 2,
    });
  });
  useGSAP(() => {
    gsap.from(circleRef1.current, {
      x: 200,
      delay: 0.5,
      duration: 3,
      rotateZ: 450,
      borderRadius: "50%",
      scale: 0.5,
    });
  });
  useGSAP(() => {
    gsap.from("h2", {
      duration: 2,
      y: -30,
      repeat: Infinity,
      delay: 0.5,
      color: "black",
      reversed: true,
      yoyo: true,
    });
  });

  return (
    <>
      <main className="bg-black h-screen w-full flex flex-col justify-evenly items-center">
        <h2 className="text-white text-3xl font-semibold">
          GSAP Animation 1 - Box & Circle Animation
        </h2>

        {/* Box & Circle Container */}
        <div className="flex flex-row justify-center items-center">
          <div
            ref={boxRef}
            className="h-32 w-32 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 rounded-3xl border-3 border-white flex justify-center items-center">
            <h1 className="text-white text-3xl font-bold">Hello</h1>
          </div>
          <div
            ref={circleRef}
            className="h-32 w-32 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 rounded-3xl border-3 border-white flex justify-center items-center">
            <h1 className="text-white text-3xl font-bold">World</h1>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div
            ref={boxRef1}
            className="h-32 w-32 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 rounded-3xl border-3 border-white flex justify-center items-center">
            <h1 className="text-white text-3xl font-bold">Hi</h1>
          </div>
          <div
            ref={circleRef1}
            className="h-32 w-32 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 rounded-3xl border-3 border-white flex justify-center items-center">
            <h1 className="text-white text-3xl font-bold">Chakri</h1>
          </div>
        </div>
      </main>
    </>
  );
};
export default App;
