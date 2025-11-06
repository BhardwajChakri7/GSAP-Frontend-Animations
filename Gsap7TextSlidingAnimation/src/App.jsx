import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./index.css";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const mainContainerRef = useRef();
  const mainHeadingRef = useRef();
  useGSAP(() => {
    gsap.to(mainHeadingRef.current, {
      xPercent: -62,
      yoyo: true,
      scrollTrigger: {
        trigger: mainContainerRef.current,
        scroller: "body",
        markers: true,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });
  });
  return (
    <>
      <div className="h-screen w-full bg-blue-500 flex flex-row items-center justify-center">
        <h1 className="text-5xl font-bold">Scroll To Know the Animation</h1>
      </div>
      <div
        ref={mainContainerRef}
        className="h-screen w-full bg-black text-center flex items-center">
        <h1 ref={mainHeadingRef} className="text-[40vw] font-bold uppercase">
          Experience
        </h1>
      </div>
      <div className="h-screen w-full bg-blue-500"></div>
    </>
  );
};
export default App;
