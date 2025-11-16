import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./index.css";

const App = () => {
  const mainTextRef1 = useRef();
  const mainTextRef2 = useRef();
  useGSAP(() => {
    var h1Text = mainTextRef1.current.textContent;
    var letters = h1Text.split("");
    var cutter = "";
    letters.forEach((element) => {
      cutter += `<span>${element}</span>`;
    });
    mainTextRef1.current.innerHTML = cutter;

    var h2Text = mainTextRef2.current.textContent;
    var letters1 = h2Text.split("");
    var halfLength = Math.floor(h2Text.length / 2);
    var cutter1 = "";
    letters1.forEach((element, idx) => {
      if (idx >= halfLength) {
        cutter1 += `<span class="a">${element}</span>`;
      } else {
        cutter1 += `<span class="b">${element}</span>`;
      }
    });
    mainTextRef2.current.innerHTML = cutter1;

    gsap.from(mainTextRef1.current.querySelectorAll("span"), {
      y: 50,
      duration: 1,
      stagger: -0.15,
      opacity: 0,
    });

    gsap.from(mainTextRef2.current.querySelectorAll("span.a"), {
      y: 50,
      delay: 2.2,
      duration: 1,
      stagger: -0.15,
      opacity: 0,
    });

    gsap.from(mainTextRef2.current.querySelectorAll("span.b"), {
      y: 50,
      duration: 1,
      delay: 2.2,
      stagger: 0.15,
      opacity: 0,
    });
  });
  return (
    <div className="h-screen w-full bg-black flex flex-col justify-center items-center">
      <div>
        <h1
          ref={mainTextRef1}
          className="text-6xl font-extrabold p-4 mb-30 overflow-hidden">
          BHARDWAJCHAKRI
        </h1>
      </div>
      <div>
        <h1
          ref={mainTextRef2}
          className="uppercase text-6xl font-extrabold p-4 mb-15">
          ChakriBhard
        </h1>
      </div>
    </div>
  );
};
export default App;
