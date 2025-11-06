import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./index.css";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  const box1Ref = useRef();
  const box2Ref = useRef();
  const heading1Ref = useRef();
  const heading2Ref = useRef();

  useGSAP(() => {
    gsap.from(box1Ref.current, {
      scale: 0,
      duration: 2,
      rotate: 360,
      delay: 0.5,
    });
    gsap.from(heading1Ref.current, {
      opacity: 0,
      x: 500,
      scrollTrigger: {
        scroller: "body",
        trigger: heading1Ref.current,
        markers: true,
        start: "top 60%",
      },
    });
    gsap.from(heading2Ref.current, {
      opacity: 0,
      x: -500,
      scrollTrigger: {
        scroller: "body",
        trigger: heading2Ref.current,
        markers: true,
        start: "top 60%",
      },
    });
    gsap.from(box2Ref.current, {
      scale: 0,
      rotate: 360,
      duration: 2,
      // scrollTrigger: box2Ref,
      scrollTrigger: {
        trigger: box2Ref.current,
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: true,
      },
    });
  });

  return (
    <>
      <div className="h-screen w-full bg-blue-400 flex flex-row items-center justify-center">
        <div ref={box1Ref} className="h-60 w-60 bg-red-600"></div>
      </div>
      <div className="h-screen w-full bg-blue-500 flex flex-col items-center justify-center">
        <h1
          ref={heading1Ref}
          className="text-5xl font-bold p-8 bg-amber-400 m-7">
          Hello Chakri
        </h1>
        <h2 ref={heading2Ref} className="text-5xl font-bold p-8 bg-amber-200">
          GSAP Animations
        </h2>
      </div>
      <div className="h-screen w-full bg-blue-600 flex flex-row items-center justify-center">
        <div ref={box2Ref} className="h-60 w-60 bg-red-600"></div>
      </div>
      <div className="h-screen w-full bg-blue-800 flex flex-row items-center justify-center">
        <div className="h-60 w-60 bg-red-600"></div>
      </div>
    </>
  );
};
export default App;
