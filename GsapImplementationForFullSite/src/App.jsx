import "remixicon/fonts/remixicon.css";
import React, { use, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./index.css";

const App = () => {
  const navRef = useRef();
  const content1Ref = useRef();
  const content2Ref = useRef();
  const servicesRef = useRef();
  const servicesContentRef = useRef();
  const caseStudyRef = useRef();
  const caseStudyBoxRef = useRef();
  const ctaRef = useRef();
  const ctaImgRef = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    tl.from(navRef.current.querySelectorAll("div, h2, button"), {
      y: -40,
      opacity: 0,
      duration: 0.7,
      delay: 0.5,
      stagger: 0.15,
    });
    tl.from(content1Ref.current.querySelectorAll("h1"), {
      x: -300,
      opacity: 0,
      duration: 0.5,
    });
    tl.from(content1Ref.current.querySelectorAll("h2"), {
      x: -100,
      opacity: 0,
      duration: 0.5,
    });
    tl.from(content1Ref.current.querySelectorAll("button"), {
      opacity: 0,
      duration: 0.4,
    });
    tl.from(
      content1Ref.current.querySelectorAll("img"),
      {
        x: 300,
        opacity: 0,
        duration: 0.7,
      },
      "-=0.3"
    );
    tl.from(content2Ref.current.querySelectorAll("img"), {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.6,
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: servicesRef.current,
        scroller: "body",
        // markers: true,
        yoyo: true,
        start: "top 70%",
        scrub: 2,
        end: "top -70%",
      },
    });
    tl2.from(servicesRef.current.querySelectorAll("h1,p"), {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
    tl2.from(
      servicesContentRef.current.querySelectorAll(".anim1"),
      {
        x: -300,
        opacity: 0,
        duration: 3,
      },
      "cards1"
    );
    tl2.from(
      servicesContentRef.current.querySelectorAll(".anim2"),
      {
        x: 300,
        opacity: 0,
        duration: 3,
      },
      "cards1"
    );
    tl2.from(
      servicesContentRef.current.querySelectorAll(".anim3"),
      {
        x: -300,
        opacity: 0,
        duration: 3,
      },
      "cards2"
    );
    tl2.from(
      servicesContentRef.current.querySelectorAll(".anim4"),
      {
        x: 300,
        opacity: 0,
        duration: 3,
      },
      "cards2"
    );
    tl2.from(
      servicesContentRef.current.querySelectorAll(".anim5"),
      {
        x: -300,
        opacity: 0,
        duration: 3,
      },
      "cards3"
    );
    tl2.from(
      servicesContentRef.current.querySelectorAll(".anim6"),
      {
        x: 300,
        opacity: 0,
        duration: 3,
      },
      "cards3"
    );
    tl2.from(
      servicesContentRef.current.querySelectorAll(".anim7"),
      {
        x: -300,
        opacity: 0,
        duration: 3,
      },
      "cards4"
    );
    tl2.from(
      servicesContentRef.current.querySelectorAll(".anim8"),
      {
        x: 300,
        opacity: 0,
        duration: 3,
      },
      "cards4"
    );
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ctaRef.current,
        scroller: "body",
        // markers: true,
        yoyo: true,
        start: "top 70%",
        scrub: 2,
        end: "top 20%",
      },
    });
    tl3.from(ctaRef.current.querySelectorAll("h1"), {
      x: -100,
      opacity: 0,
      duration: 0.5,
    });
    tl3.from(ctaRef.current.querySelectorAll("p"), {
      x: -100,
      opacity: 0,
      duration: 0.5,
    });
    tl3.from(ctaRef.current.querySelectorAll("button"), {
      opacity: 0,
      duration: 0.4,
    });
    tl3.from(
      ctaImgRef.current,
      {
        x: 300,
        opacity: 0,
        duration: 0.7,
      },
      "-=1.4"
    );
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: caseStudyRef.current,
        scroller: "body",
        // markers: true,
        yoyo: true,
        start: "top 70%",
        scrub: 2,
        end: "top 50%",
      },
    });
  });
  return (
    <>
      <section className="h-screen w-full bg-white relative overflow-x-hidden">
        <nav
          ref={navRef}
          className="flex items-center justify-between px-14 py-8">
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
        <div ref={content1Ref} className="h-[72%] w-full flex p-14">
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
        <div
          ref={content2Ref}
          className="flex items-center justify-between px-14 py-1">
          <img src="./amazon.png" alt="" className="h-10" />
          <img src="./dribbble.jpg" alt="" className="h-10" />
          <img src="./HubSpot.png" alt="" className="h-10" />
          <img src="./Notion.webp" alt="" className="h-10" />
          <img src="./netflix.jpg" alt="" className="h-10" />
          <img src="./zoom.png" alt="" className="h-10" />
        </div>
      </section>
      <section className="min-h-[86vh] w-full mt-10 pb-14 overflow-x-hidden">
        <div
          ref={servicesRef}
          className="px-14 py-8 flex flex-start items-center gap-10">
          <h1 className="bg-[#9AE975] text-5xl font-bold pt-1 pb-0.5 pr-4 pl-4 rounded-[3px]">
            Services
          </h1>
          <p className="w-[45%] text-sm font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum
            iste enim! Voluptatibus quibusdam facilis non est?
          </p>
        </div>
        <div
          ref={servicesContentRef}
          className="h-[80%] w-full px-14 py-2 flex flex-wrap justify-between mt-7 gap-13">
          <div className="anim1 h-[250px] w-[48%] border-2 rounded-[30px] shrink-0 shadow-[0px_15px_0px_black] p-11 flex justify-between">
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
          <div className="anim2 bg-black h-[250px] w-[48%] border-2 rounded-[30px] shrink-0 shadow-[0px_15px_0px_black] p-11 flex justify-between">
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
          <div className="anim3 bg-black h-[250px] w-[48%] border-2 rounded-[30px] shrink-0 shadow-[0px_15px_0px_black] p-11 flex justify-between">
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
          <div className="anim4 h-[250px] w-[48%] border-2 rounded-[30px] shrink-0 shadow-[0px_15px_0px_black] p-11 flex justify-between">
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
          <div className="anim5 h-[250px] w-[48%] border-2 rounded-[30px] shrink-0 shadow-[0px_15px_0px_black] p-11 flex justify-between">
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
          <div className="anim6 bg-black h-[250px] w-[48%] border-2 rounded-[30px] shrink-0 shadow-[0px_15px_0px_black] p-11 flex justify-between">
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
          <div className="anim7 bg-black h-[250px] w-[48%] border-2 rounded-[30px] shrink-0 shadow-[0px_15px_0px_black] p-11 flex justify-between">
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
          <div className="anim8 h-[250px] w-[48%] border-2 rounded-[30px] shrink-0 shadow-[0px_15px_0px_black] p-11 flex justify-between">
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
      <section className="h-screen w-full flex items-center justify-center bg-white px-14">
        <div className="bg-gray-200 w-full h-[50%] rounded-[50px] flex items-center justify-around p-24">
          <div ref={ctaRef} className="flex flex-col gap-6">
            <h1 className="text-[30px] font-bold">Let's make things happen</h1>
            <p className="text-l font-bold w-[51%] pt-2">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed in the digital
              world.
            </p>
            <button className="bg-black text-white rounded-lg px-8 py-3 text-l font-bold border-none cursor-pointer w-[33%]">
              Get your free proposal
            </button>
          </div>
          <img
            ref={ctaImgRef}
            src="./cta-illustration.webp"
            alt="CTA Illustration"
            className="scale-125 pr-10"
          />
        </div>
      </section>
      <section className="h-screen w-full">
        <div
          ref={caseStudyRef}
          className="px-14 py-8 flex flex-start items-center gap-10">
          <h1 className="bg-[#9AE975] text-5xl font-bold pt-1 pb-2 pr-4 pl-4 rounded-[3px]">
            Case study
          </h1>
          <p className="w-[45%] text-md font-bold">
            Explore Real-life Examples of Our Proven Digital Marketing Success
            <br />
            through Our Case Studies.
          </p>
        </div>
        <div
          ref={caseStudyBoxRef}
          className="bg-black h-1/2 mx-14 rounded-[50px] mt-20 flex items-center justify-around">
          <div className="content1 w-[33%] flex flex-col items-start justify-evenly">
            <p className="text-white p-14 text-l font-bold">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <button className="text-l p-14 font-bold text-[#9AE975] mt-[-18%]">
              Learn more{" "}
              <i className="ri-arrow-right-up-line text-[#9AE975]"></i>
            </button>
          </div>
          <div className="line1 h-[60%] w-px bg-gray-400"></div>
          <div className="content2 w-[33%] flex flex-col items-start justify-evenly">
            <p className="text-white p-14 text-l font-bold">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first-page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <button className="text-l p-14 font-bold text-[#9AE975] mt-[-18%]">
              Learn more{" "}
              <i className="ri-arrow-right-up-line text-[#9AE975]"></i>
            </button>
          </div>
          <div className="line2 h-[60%] w-px bg-gray-400"></div>
          <div className="content3 w-[33%] flex flex-col items-start justify-evenly">
            <p className="text-white p-14 text-l font-bold">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <button className="text-l p-14 font-bold text-[#9AE975] mt-[-18%]">
              Learn more{" "}
              <i className="ri-arrow-right-up-line text-[#9AE975]"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default App;
