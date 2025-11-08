// App.jsx
import { useRef, useState } from "react";
import gsap from "gsap";

export default function App() {
  const mainRef = useRef();
  const maskRef = useRef();
  const [hover, setHover] = useState(false);

  const size = hover ? 400 : 40;

  const handleMouseMove = (e) => {
    gsap.to(maskRef.current, {
      webkitMaskPosition: `${e.clientX - size / 2}px ${e.clientY - size / 2}px`,
      webkitMaskSize: `${size}px`,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  return (
    <main
      ref={mainRef}
      onMouseMove={handleMouseMove}
      className="bg-black h-screen w-full overflow-hidden relative">
      {/* masked content */}
      <div
        ref={maskRef}
        className="h-full w-full flex justify-center items-center text-4xl leading-normal absolute top-0 left-0 bg-[#f1432c] text-black"
        style={{
          WebkitMaskImage: "url(/mask.svg)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "50% 50%",
          WebkitMaskSize: `${size}px`,
        }}>
        <p
          className="w-[70%]"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>
          I don’t chase trends; I chase understanding. Curiosity drives me to
          break limits, master complexity, and build solutions that genuinely
          move things forward.
        </p>
      </div>

      {/* base content behind mask */}
      <div className="h-full w-full flex justify-center items-center text-amber-100 text-4xl leading-normal cursor-default">
        <p className="w-[70%]">
          I don’t follow paths;{" "}
          <span className="text-[#f1432c]">I create them.</span> Logic drives me
          to dissect problems, craft innovation, and engineer ideas that truly
          make an impact.
        </p>
      </div>
    </main>
  );
}
