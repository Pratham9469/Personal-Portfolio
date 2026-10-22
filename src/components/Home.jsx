import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import Typed from "typed.js";
import { useGSAP } from '@gsap/react';
import image from "../assets/images/image.png";

const Home = () => {
  const parentDiv = useRef(null);
  const typedRef = useRef(null);

  // Initialize Typed.js cleanly
  useGSAP(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Frontend Developer",
        "React Developer",
        "Creative Developer",
        "Web Developer",
        "Software Developer"
      ],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Character stagger animation runs ONLY on laptops/desktops (lg: 1024px and up)
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.fromTo(".para2 span",
        {
          opacity: 0,
          y: 80,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.04,
          ease: "power3.out",
          repeat: -1,
          yoyo: true,
          repeatDelay: 1,
          force3D: true,
        }
      );
    });

    return () => mm.revert();
  }, { scope: parentDiv });

  // Floating arrows optimized with GPU layer promotion
  useGSAP(() => {
    gsap.to(".icon-down", {
      y: -6,
      yoyo: true,
      ease: "power3.out",
      duration: 0.6,
      repeat: -1,
      force3D: true
    });

    gsap.to(".icon-right", {
      x: 6,
      yoyo: true,
      ease: "power3.out",
      duration: 0.6,
      repeat: -1,
      force3D: true
    });
  }, []);

  return (
    <>
      {/* Inline SVG definitions for the blob clip path */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
            <path fill="white" d="M0.5,0 C0.9,0 1,0.4 1,0.5 C1,0.8 0.7,1 0.5,1 C0.2,1 0,0.7 0,0.5 C0,0.2 0.2,0 0.5,0 Z">
              <animate
                attributeName="d"
                dur="4s"
                repeatCount="indefinite"
                values="
                  M0.5,0 C0.9,0 1,0.4 1,0.5 C1,0.8 0.7,1 0.5,1 C0.2,1 0,0.7 0,0.5 C0,0.2 0.2,0 0.5,0 Z;
                  M0.5,0 C0.75,-0.05 1,0.15 0.98,0.45 C0.95,0.82 0.75,1 0.5,1 C0.22,1 0.02,0.82 0.02,0.5 C0.02,0.15 0.25,-0.02 0.5,0 Z;
                  M0.5,0 C0.82,0.02 1,0.28 0.96,0.52 C0.92,0.9 0.72,0.98 0.48,1 C0.15,0.98 -0.02,0.72 0.02,0.45 C0.05,0.18 0.22,-0.03 0.5,0 Z;
                  M0.5,0 C0.96,0.04 1.04,0.35 0.98,0.55 C0.94,0.92 0.66,1.06 0.46,1 C0.18,0.96 -0.04,0.76 0.02,0.48 C0.06,0.16 0.28,-0.04 0.5,0 Z;
                  M0.5,0 C0.9,0 1,0.4 1,0.5 C1,0.8 0.7,1 0.5,1 C0.2,1 0,0.7 0,0.5 C0,0.2 0.2,0 0.5,0 Z"
              />
            </path>
          </clipPath>
        </defs>
      </svg>

      <section className='min-h-screen w-full overflow-hidden' id='home' ref={parentDiv}>
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center lg:items-center gap-12 lg:gap-8 px-6 sm:px-12 lg:px-16 xl:px-30 pt-28 sm:pt-32 lg:pt-36 text-center lg:text-left'>

          <div className='flex flex-col mt-2 lg:mt-0 w-full lg:w-auto min-w-0 items-center lg:items-start'>

            <div className='gsap1 flex items-center justify-center lg:justify-start'>
              <h3 className='para text-sm sm:text-base lg:text-[19px] text-[#B8C4FF] font-bold uppercase tracking-wider pl-0 lg:pl-5'>
                <span ref={typedRef}></span>
              </h3>
            </div>

            <div>
              <h1 className="text-[clamp(2.8rem,9vw,5.5rem)] lg:text-[140px] xl:text-[200px] font-bold text-[#E3E2E5] uppercase tracking-tighter leading-none mt-2">
                <span className="first-name inline-block">Pratham</span>
                <br />
                <span className="last-name inline-block text-[clamp(2.8rem,9vw,5.5rem)] lg:text-[140px] xl:text-[200px] font-bold uppercase tracking-tighter text-[#B8C4FF]">
                  Seth
                </span>
              </h1>
            </div>

            <div className='mt-4 flex flex-col items-center lg:items-start'>
              {/* Restored character split spans so GSAP matchMedia selector (.para2 span) can target them on desktop */}
              <p className='para2 overflow-hidden flex flex-wrap justify-center lg:justify-start'>
                {"I craft the web, one pixel at a time.".split("").map((char, index) => {
                  return (
                    <span
                      key={index}
                      className='text-[clamp(1rem,3.5vw,2.25rem)] text-[#E3E2E5] tracking-wide font-semibold mb-2 lg:mb-3 inline-block w-fit will-change-transform'
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  )
                })}
              </p>

              <p className='para3 text-sm sm:text-lg lg:text-[22px] xl:text-[27px] text-[#747580] tracking-tight leading-relaxed max-w-xl mt-2'>
                I create responsive web interfaces with React, JavaScript, and GSAP, combining thoughtful design with smooth, purposeful animation.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-fit justify-center lg:justify-start items-center'>
              <a href='#projects' className='w-full sm:w-fit [-webkit-tap-highlight-color:transparent]'>
                <button className='btn1 w-full sm:w-auto bg-[#B8C4FF] px-5 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-[18px] tracking-wide font-bold text-black flex justify-center items-center gap-2 cursor-pointer rounded-[5px] [-webkit-tap-highlight-color:transparent]'>
                  Explore My Work <ArrowDown className='icon-down shrink-0' size={20} />
                </button>
              </a>

              <a href='https://drive.google.com/file/d/1xfTfk7LQ5FmUaVgQptL5E0AUqBD12aZU/view?usp=sharing' target='_blank' rel='noreferrer' className='w-full sm:w-fit [-webkit-tap-highlight-color:transparent]'>
                <button className='btn2 w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-4 bg-[#363636] text-[#E3E2E5] flex justify-center items-center gap-2 tracking-wide font-bold text-sm sm:text-base lg:text-[18px] cursor-pointer rounded-[5px] [-webkit-tap-highlight-color:transparent]'>
                  Download Resume <ArrowRight className='icon-right shrink-0' size={20} />
                </button>
              </a>
            </div>
          </div>

          <div className='flex justify-center items-center mt-2 lg:mt-0 shrink-0'>
            <img
              src={image}
              alt="Pratham Seth"
              className='image-div w-48 h-48 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-140 xl:h-140 max-w-full object-cover shadow-2xl border-4 border-[#B3E860] rounded-full transform-gpu'
              style={{ clipPath: 'url(#blobClip)' }}
            />
          </div>
        </div>

        <div className='flex justify-center items-center mt-12 sm:mt-16 pb-8 overflow-hidden'>
          <h2 className='scroll uppercase tracking-wider text-xs sm:text-sm lg:text-[18px] flex justify-center items-center gap-3 text-[#dcdddf]'>
            Scroll to Explore <ArrowDown className='icon-down shrink-0' size={18} />
          </h2>
        </div>
      </section>
    </>
  )
}

export default Home;