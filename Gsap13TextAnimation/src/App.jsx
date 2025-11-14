import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./index.css";

const App = () => {
  const mainTextRef = useRef();
  useGSAP(() => {
    var h1Text = mainTextRef.current.textContent;
    var letters = h1Text.split("");
    var cutter = "";
    letters.forEach((element) => {
      cutter += `<span className="inline-block">${element}</span>`;
    });
    mainTextRef.current.innerHTML = cutter;
    gsap.from(mainTextRef.current.querySelectorAll("span"), {
      y: 100,
      duration: 0.5,
      stagger: 0.3,
    });
  });
  return (
    <div className="h-screen w-full bg-black flex justify-center items-center">
      <h1 ref={mainTextRef} className="text-6xl font-extrabold">
        BHARDWAJCHAKRI
      </h1>
    </div>
  );
};
export default App;
