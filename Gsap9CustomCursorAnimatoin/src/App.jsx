import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./index.css";

const App = () => {
  const mainContainerRef = useRef();
  const pointerRef = useRef();

  const mouseMovedOnPage = (e) => {
    const event = e.nativeEvent;
    gsap.to(pointerRef.current, {
      x: event.x,
      y: event.y,
      duration: 1,
      ease: "back.out",
    });
  };

  return (
    <>
      <div
        ref={pointerRef}
        className="h-4 w-4 bg-white rounded-full fixed"></div>
      <div
        onMouseMove={mouseMovedOnPage}
        className="bg-black h-screen w-full"></div>
      <div
        onMouseMove={mouseMovedOnPage}
        className="h-screen w-full bg-blue-500"></div>
    </>
  );
};
export default App;
