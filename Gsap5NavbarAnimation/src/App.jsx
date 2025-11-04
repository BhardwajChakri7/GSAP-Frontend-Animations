import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./index.css";

const App = () => {
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from("nav h1", {
      y: -25,
      opacity: 0,
      duration: 0.7,
      delay: 0.4,
    });
    tl.from("h4", {
      y: -25,
      opacity: 0,
      duration: 0.7,
      stagger: 0.3,
    });
    tl.from("h2", {
      // y: -30,
      opacity: 0,
      scale: 0.5,
      duration: 1,
    });
  });
  return (
    <main className="h-screen w-full bg-black">
      <nav className="pl-15 pr-15 pt-7 pb-7 flex flex-row items-center justify-between">
        <h1 className="text-2xl font-extrabold">Bhardwaj</h1>
        <div className="flex flex-row gap-20">
          <h4 className="text-xl font-bold">Home</h4>
          <h4 className="text-xl font-bold">About</h4>
          <h4 className="text-xl font-bold">Work</h4>
          <h4 className="text-xl font-bold">Blog</h4>
        </div>
      </nav>
      <h2 className="font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl whitespace-nowrap">
        GANIPINENI BHARDWAJ NAIDU
      </h2>
    </main>
  );
};
export default App;
