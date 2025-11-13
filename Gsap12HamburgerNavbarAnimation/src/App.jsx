import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import "./index.css";

const App = () => {
  const navBarRef = useRef();
  const closeRef = useRef();
  const tl = useRef();
  const onClickedNavButton = () => {
    tl.current.play();
    // console.log("hello");
  };
  const onClickedCloseButton = () => {
    tl.current.reverse();
  };
  useGSAP(() => {
    tl.current = gsap.timeline();
    tl.current.to(navBarRef.current, {
      right: 0,
      duration: 0.9,
    });
    tl.current.from("h2", {
      x: 150,
      duration: 0.5,
      opacity: 0,
      stagger: 0.2,
    });
    tl.current.from(closeRef.current, {
      opacity: 0,
      duration: 0.1,
    });
    tl.current.pause();
  });
  return (
    <div className="h-screen w-full bg-[url('../bgImage.jpg')] bg-cover bg-center">
      <div className="flex flex-row align-middle justify-between px-10 py-10">
        <h1 className="text-3xl font-bold">Bhardwaj Chakri</h1>
        <i
          onClick={onClickedNavButton}
          className="ri-menu-3-line text-3xl font-extrabold cursor-pointer"></i>
      </div>
      <div
        ref={navBarRef}
        className="h-full w-[40%] absolute bg-[#ffffffb9] top-0 right-[-40%] backdrop-blur-[1px] px-[50px] py-[70px]">
        <h2 className="text-3xl font-bold mb-3">Home</h2>
        <h2 className="text-3xl font-bold mb-3">About</h2>
        <h2 className="text-3xl font-bold mb-3">Work</h2>
        <h2 className="text-3xl font-bold mb-3">Courses</h2>
        <h2 className="text-3xl font-bold mb-3">Contact Us</h2>
        <i
          ref={closeRef}
          onClick={onClickedCloseButton}
          className="ri-close-line absolute top-10.5 right-10 text-2xl bg-white rounded-full h-8 w-8 text-center font-bold-[500] cursor-pointer"></i>
      </div>
    </div>
  );
};
export default App;
