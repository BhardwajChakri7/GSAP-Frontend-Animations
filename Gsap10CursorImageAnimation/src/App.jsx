import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./index.css";

const App = () => {
  const cursorRef = useRef();
  const cursorTextRef = useRef();
  const imageContainerRef = useRef();
  const mouseMovedEvent = (event) => {
    const eve = event.nativeEvent;
    gsap.to(cursorRef.current, {
      x: eve.x,
      y: eve.y,
      duration: 0.3,
      ease: "back.out(0.8)",
    });
  };
  const mouseEnteredEvent = () => {
    gsap.to(cursorRef.current, {
      scale: 4,
      backgroundColor: "blue",
      opacity: 0.5,
      border: 0.5,
    });
  };
  const mouseLeavedEvent = () => {
    gsap.to(cursorRef.current, {
      scale: 1,
      backgroundColor: "white",
      opacity: 1,
      border: 0,
    });
  };
  return (
    <main className="bg-black h-screen w-full" onMouseMove={mouseMovedEvent}>
      <div
        ref={cursorRef}
        className="bg-white h-4 w-4 rounded-full z-10 fixed text-center">
        <span ref={cursorTextRef}></span>
      </div>
      <div className="h-screen flex flex-row justify-center items-center">
        <div
          ref={imageContainerRef}
          onMouseEnter={mouseEnteredEvent}
          onMouseLeave={mouseLeavedEvent}
          className="bg-amber-500 h-120 w-200 relative mt-10">
          <div className="bg-red-700 h-full w-full absolute opacity-0 z-20"></div>
          <img
            src="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
};
export default App;
