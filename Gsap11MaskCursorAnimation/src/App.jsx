import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  const cursorRef = useRef();
  const textRef = useRef();
  const mouseMovedEvent = (event) => {
    const eve = event.nativeEvent;
    gsap.to(cursorRef.current, {
      x: eve.x,
      y: eve.y,
      duration: 0.3,
      ease: "power.out",
    });
  };
  const mouseMovedTextEvent = () => {
    gsap.to(textRef.current, {
      scale: 2,
    });
  };
  return (
    <main
      className="bg-black h-screen w-full text-center"
      onMouseMove={mouseMovedEvent}>
      <div
        ref={cursorRef}
        className="h-10 w-10 bg-orange-700 rounded-full"></div>
      <div
        className=" h-full w-full flex flex-row justify-center items-center"
        onMouseMove={mouseMovedTextEvent}>
        <h1 ref={textRef} className="text-5xl text-white font-bold w-[70vw]">
          I don’t chase trends; I chase understanding. Curiosity drives me to
          break limits, master complexity, and build solutions that genuinely
          move things forward.
        </h1>
      </div>
    </main>
  );
};
export default App;
