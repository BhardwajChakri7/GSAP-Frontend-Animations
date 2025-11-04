import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./index.css";

const App = () => {
  const tl = gsap.timeline();

  const boxRef1 = useRef();
  const boxRef2 = useRef();
  const boxRef3 = useRef();
  useGSAP(() => {
    tl.to(boxRef1.current, {
      x: 1000,
      duration: 2,
      delay: 1,
      rotate: 360,
    });
    tl.to(boxRef2.current, {
      x: 1000,
      duration: 2,
      rotate: 1080,
      borderRadius: "40%",
    });
    tl.to(boxRef3.current, {
      x: 1000,
      duration: 2,
    });
  });

  return (
    <main className="bg-black h-screen w-full p-10">
      <div ref={boxRef1} className="bg-red-400 h-50 w-50 m-3"></div>
      <div ref={boxRef2} className="bg-red-600 h-50 w-50 m-3"></div>
      <div ref={boxRef3} className="bg-red-800 h-50 w-50 m-3"></div>
    </main>
  );
};
export default App;
