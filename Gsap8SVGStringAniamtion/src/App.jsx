import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./index.css";

const App = () => {
  const mainContainerRef = useRef();
  const mainPathRef = useRef();
  var finalPath = `M 10 200 Q 700 200 1390 200`;
  var finalPath1 = `M 10 200 Q 700 200 990 200`;

  // const handleMouseEntered = (dets) => {
  //   console.log(dets);
  // };

  useEffect(() => {
    // set initial path (if needed)
    gsap.set(mainPathRef.current, {
      attr: { d: finalPath },
    });
    console.log("rendered");
    return () => {
      // kills any running animation on path
      gsap.killTweensOf(mainPathRef.current);
    };
  }, []);

  const handleMouseLeaved = () => {
    gsap.to(mainPathRef.current, {
      attr: { d: finalPath },
      duration: 2,
      ease: "elastic.out(1,0.1)",
    });
  };

  const handleMouseMoved = (dets) => {
    // console.log(dets.clientX);
    const svgPos = mainContainerRef.current.getBoundingClientRect();
    const newXvalue = dets.clientX - svgPos.left;
    const newYvalue = dets.clientY - svgPos.top;

    gsap.to(mainPathRef.current, {
      attr: { d: `M 10 200 Q ${newXvalue} ${newYvalue} 1390 200` },
      duration: 0.3,
    });
  };

  return (
    <main className="bg-black h-screen w-full ">
      <h1 className="text-center pt-10 text-3xl font-bold">
        Hover On the String Below
      </h1>
      <div className="h-[90%] flex flex-row items-center justify-center">
        <svg
          width="1400"
          height="400"
          ref={mainContainerRef}
          // className="bg-red-500"
          // onMouseEnter={handleMouseEntered}
          onMouseLeave={handleMouseLeaved}
          onMouseMove={handleMouseMoved}>
          <path
            d="M 10 200 Q 700 200 1390 200"
            stroke="white"
            strokeWidth="2"
            fill="transparent"
            ref={mainPathRef}
          />
        </svg>
      </div>
    </main>
  );
};
export default App;
