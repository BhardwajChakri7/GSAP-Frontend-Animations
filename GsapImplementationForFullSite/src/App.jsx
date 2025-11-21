import "remixicon/fonts/remixicon.css";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./index.css";

const App = () => {
  return (
    <>
      <section className="h-screen w-full bg-white relative">
        <nav className="flex items-center justify-between px-14 py-8">
          <div className="flex items-center gap-3">
            <i className="ri-shining-2-fill text-4xl rotate-30"></i>
            <h1 className="text-4xl font-extrabold">WizardZ</h1>
          </div>
          <div className="flex items-center gap-10 justify-center">
            <h2 className="text-l font-bold">About</h2>
            <h2 className="text-l font-bold">Services</h2>
            <h2 className="text-l font-bold">Use Cases</h2>
            <h2 className="text-l font-bold">Pricing</h2>
            <h2 className="text-l font-bold">Blog</h2>
            <button className="px-6 py-3 text-[14px] font-extrabold rounded-[9px] border-solid border-2 border-black cursor-pointer bg-transparent">
              Request a quote
            </button>
          </div>
        </nav>
        <div className="h-[72%] w-full flex p-14">
          <div className="h-full w-[45%]">
            <h1 className="text-6xl leading-[1.2] font-bold mb-8">
              Navigating the digital landscape for success
            </h1>
            <h2 className="text-l text-semibold w-[95%] mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              aliquam sint optio non magni assumenda doloremque molestiae
              ratione vitae id eos inventore nihil quisquam repudiandae vel,
              doloribus obcaecati exercitationem illum.
            </h2>
            <button className="bg-black text-white rounded-lg px-8 py-3 text-l font-bold border-none cursor-pointer">
              Book a consultation
            </button>
          </div>
          <div className="h-full w-[55%] relative">
            <img
              src="./homepage-megaphone.svg"
              alt="Megaphone Graphic"
              className="h-full object-contain absolute right-0"
            />
          </div>
        </div>
        <div className="flex items-center justify-between px-14 py-1">
          <img src="./amazon.png" alt="" className="h-10" />
          <img src="./dribbble.jpg" alt="" className="h-10" />
          <img src="./HubSpot.png" alt="" className="h-10" />
          <img src="./Notion.webp" alt="" className="h-10" />
          <img src="./netflix.jpg" alt="" className="h-10" />
          <img src="./zoom.png" alt="" className="h-10" />
        </div>
      </section>
      <section className="h-screen w-full mt-10">
        <div className="px-14 py-8 flex flex-start items-center gap-10">
          <h1 className="bg-[#9AE975] text-5xl font-bold pt-1 pb-0.5 pr-4 pl-4 rounded-[3px]">
            Services
          </h1>
          <p className="w-[45%] text-sm font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum
            iste enim! Voluptatibus quibusdam facilis non est?
          </p>
        </div>
        <div className="h-[80%] w-full px-14 py-2">
          <div className="h-[35%] w-[40%] bg-black"></div>
        </div>
      </section>
    </>
  );
};
export default App;
