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
        <div className="h-[80%] w-full px-14 py-2 flex flex-wrap justify-between mt-7">
          <div className="h-[43%] w-[49%] border-2 rounded-[30px] shrink-0 shadow-[0px_15px_0px_black] p-11 flex justify-between">
            <div className="flex flex-col h-full justify-between">
              <h1 className="text-2xl font-bold leading-tight">
                <span className="bg-[#9AE975] px-2 py-1 rounded-[3px]">
                  Search Engine
                </span>
                <br />
                <span className="bg-[#9AE975] px-2 py-1 rounded-[3px]">
                  Optimization
                </span>
              </h1>
              <button className="flex items-center gap-5 mt-5 bg-transparent cursor-pointer text-xl font-bold">
                <i className="ri-arrow-right-up-line text-2xl h-10 w-10 bg-black text-white rounded-full flex items-center justify-center"></i>
                Learn more
              </button>
            </div>
            <img
              src="./seo.jpg"
              alt="SEO Graphic"
              className="h-full scale-125"
            />
          </div>
          <div className="bg-black h-[43%] w-[49%] border-2 rounded-[30px] shrink-0 shadow-[0px_15px_0px_black] p-11 flex justify-between">
            <div className="flex flex-col h-full justify-between">
              <h1 className="text-2xl font-bold leading-tight">
                <span className="bg-[#ffffff] px-2 py-1 rounded-[3px]">
                  Pay per click
                </span>
                <br />
                <span className="bg-[#ffffff] px-2 py-1 rounded-[3px]">
                  Advertisement
                </span>
              </h1>

              <button className="flex items-center gap-5 mt-5 bg-transparent cursor-pointer text-xl font-bold text-white">
                <i className="ri-arrow-right-up-line text-2xl h-10 w-10 bg-white text-black rounded-full flex items-center justify-center"></i>
                Learn more
              </button>
            </div>
            <img
              src="./ppc.jpeg"
              alt="PPC Graphic"
              className="h-full scale-105 invert"
            />
          </div>
          <div className="bg-black h-[43%] w-[49%] border-2 rounded-[30px] shrink-0 shadow-[0px_15px_0px_black] p-11 flex justify-between">
            <div className="flex flex-col h-full justify-between">
              <h1 className="text-2xl font-bold leading-tight">
                <span className="bg-[#ffffff] px-2 py-1 rounded-[3px]">
                  Social Media
                </span>
                <br />
                <span className="bg-[#ffffff] px-2 py-1 rounded-[3px]">
                  Marketing
                </span>
              </h1>
              <button className="flex items-center gap-5 mt-5 bg-transparent cursor-pointer text-xl font-bold text-white">
                <i className="ri-arrow-right-up-line text-2xl h-10 w-10 bg-white text-black rounded-full flex items-center justify-center"></i>
                Learn more
              </button>
            </div>
            <img
              src="./social.jpeg"
              alt="Social Media Graphic"
              className="h-full scale-155 invert rounded-2xl"
            />
          </div>
          <div className="h-[43%] w-[49%] border-2 rounded-[30px] shrink-0 shadow-[0px_15px_0px_black] p-11 flex justify-between">
            <div className="flex flex-col h-full justify-between">
              <h1 className="text-2xl font-bold leading-tight">
                <span className="bg-[#9AE975] px-2 py-1 rounded-[3px]">
                  E-mail
                </span>
                <br />
                <span className="bg-[#9AE975] px-2 py-1 rounded-[3px]">
                  Marketing
                </span>
              </h1>
              <button className="flex items-center gap-5 mt-5 bg-transparent cursor-pointer text-xl font-bold text-black">
                <i className="ri-arrow-right-up-line text-2xl h-10 w-10 bg-black text-white rounded-full flex items-center justify-center"></i>
                Learn more
              </button>
            </div>
            <img
              src="./email.png"
              alt="Email Graphic"
              className="h-full scale-125"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default App;
