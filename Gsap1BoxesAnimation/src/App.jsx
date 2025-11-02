import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import "./index.css";
const App = () => {
  const [circlex, setCirclex] = useState(0);
  const [circley, setCircley] = useState(0);
  const circleRef = useRef();
  const { contextSafe } = useGSAP();
  contextSafe(
    () => {
      gsap.to(circleRef.current, {
        x: circlex,
        y: circley,
        duration: 0.5,
      });
    },
    { scope: "main", dependencies: [circlex, circley] }
  );
  const randomx = gsap.utils.random(-500, 500, 10);
  const randomy = gsap.utils.random(-250, 250, 10);
  return (
    <main className="h-screen w-full bg-black p-4 flex flex-col items-center justify-center">
      <button
        onClick={() => {
          setCirclex(randomx);
          setCircley(randomy);
        }}
        className="h-10 w-50 bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 rounded-2xl active:scale-90 cursor-pointer font-bold font-mono m-10">
        Animate
      </button>
      <div ref={circleRef} className="h-40 w-40 rounded-full bg-white"></div>
    </main>
  );
};
export default App;
