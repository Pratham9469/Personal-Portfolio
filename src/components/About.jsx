import { BriefcaseBusiness, Brush, Calendar, CodeXml, Dot, Gamepad2, GraduationCap, Heart, Leaf, Lightbulb, MapPin, Music, SquareUser, Star } from 'lucide-react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const parentDiv = useRef();
  const firstDiv = useRef();
  const cardsDiv = useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // DESKTOP & LARGE LAPTOP (1280px and up): Pinned horizontal/sequential ScrollTrigger timeline
    mm.add("(min-width: 1280px)", () => {
      gsap.set(firstDiv.current, {
        x: -100,
        opacity: 0
      });

      gsap.set(".secondDiv span", {
        color: 'gray'
      });

      gsap.set(".card1", {
        x: 100,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parentDiv.current,
          start: 'top top',
          end: '+=2000',
          scrub: 1,
          pin: true,
        },
      });

      tl.to(firstDiv.current, {
        x: 0,
        opacity: 1,
        duration: 4
      }).to(".secondDiv span", {
        color: '#E3E2E5',
        stagger: 0.08,
      }, "<").to(".card1", {
        x: 0,
        opacity: 1,
        stagger: 1,
      }, ">");
    });

    // MOBILE, TABLETS & IPADS (under 1280px): Smooth vertical scroll reveal optimized with force3D
    mm.add("(max-width: 1279px)", () => {
      gsap.fromTo(firstDiv.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          force3D: true,
          scrollTrigger: {
            trigger: firstDiv.current,
            start: "top 85%",
          }
        }
      );

      gsap.fromTo(".secondDiv span",
        { opacity: 0.3, color: "gray" },
        {
          opacity: 1,
          color: "#E3E2E5",
          stagger: 0.02,
          duration: 0.5,
          force3D: true,
          scrollTrigger: {
            trigger: ".secondDiv",
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(".card1",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          force3D: true,
          scrollTrigger: {
            trigger: cardsDiv.current,
            start: "top 80%",
          }
        }
      );
    });

  }, { scope: parentDiv });

  return (
    <>
      <section className='min-h-screen bg-[#0E0F11] relative py-16 xl:py-0 overflow-hidden' ref={parentDiv} id='about'>

        {/* Header & Bio Section */}
        <div className='flex flex-col xl:flex-row justify-between items-start xl:items-center px-6 sm:px-12 xl:px-0'>

          <div className='about mx-0 xl:mx-30 my-4 xl:my-20' ref={firstDiv}>
            <h1 className='text-[36px] sm:text-[50px] xl:text-[90px] font-bold leading-tight xl:leading-30 tracking-wide text-[#E3E2E5]'>I BUILD</h1>
            <h1 className='text-[36px] sm:text-[50px] xl:text-[90px] font-bold leading-tight xl:leading-30 tracking-wide text-[#E3E2E5]'>FOR THE</h1>
            <h1 className='text-[36px] sm:text-[50px] xl:text-[90px] font-bold leading-tight xl:leading-30 tracking-wide text-[#B8C4FF]'>WEB.</h1>
          </div>

          <div>
            <p className='secondDiv para4 text-[16px] sm:text-[20px] xl:text-[38px] tracking-wide mr-0 xl:mr-20 leading-relaxed xl:leading-normal'>
              {'“I am a Computer Science graduate passionate'.split(" ").map((word, index) => (
                <span key={index} className="inline-block">{word}&nbsp;</span>
              ))}
              <br className='hidden xl:block' />
              {'about frontend development, interactive websites,'.split(" ").map((word, index) => (
                <span key={index} className="inline-block">{word}&nbsp;</span>
              ))}
              <br className='hidden xl:block' />
              {'creative coding, and animation. I enjoy turning'.split(" ").map((word, index) => (
                <span key={index} className="inline-block">{word}&nbsp;</span>
              ))}
              <br className='hidden xl:block' />
              {'complex concepts into responsive, intuitive, and'.split(" ").map((word, index) => (
                <span key={index} className="inline-block">{word}&nbsp;</span>
              ))}
              <br className='hidden xl:block' />
              {'visually engaging interfaces that prioritize both'.split(" ").map((word, index) => (
                <span key={index} className="inline-block">{word}&nbsp;</span>
              ))}
              <br className='hidden xl:block' />
              {'design elegance and performance.”'.split(" ").map((word, index) => (
                <span key={index} className="inline-block">{word}&nbsp;</span>
              ))}
            </p>
          </div>
        </div>

        {/* Cards Section: Responsive 2-column grid on tablets/iPads, single column on mobile, 4-column on desktop */}
        <div className='thirdDiv grid grid-cols-1 md:grid-cols-2 xl:flex xl:flex-nowrap justify-center xl:justify-evenly items-center gap-6 px-6 sm:px-12 xl:px-0 mt-10 xl:mt-1' ref={cardsDiv}>

          {/* 1st card */}
          <div className='card1 w-full xl:w-100 h-auto xl:h-95 bg-[#1B1C1E] p-5 sm:p-6 rounded-2xl border-2 border-[#4c58955a]'>
            <h1 className='para5 font-semibold tracking-wider text-[18px] sm:text-[20px] uppercase flex items-center gap-3 text-[#f96bfb]'>
              <GraduationCap size={26} color='#97a8ff' className='xl:hidden shrink-0' />
              <GraduationCap size={30} color='#97a8ff' className='hidden xl:block shrink-0' />
              Education
            </h1>
            <div>
              <h1 className='para6 text-[18px] sm:text-[22px] font-semibold text-[#E3E2E5] mt-4'>B.Tech in Computer Science and Engineering</h1>
              <h1 className='para7 text-[14px] sm:text-[18px] text-[#c3c2c4] mt-3 tracking-wider leading-relaxed xl:leading-normal'>Model Institute of Engineering and <br className='hidden xl:block' />Technology (Autonomous), Jammu</h1>
              <div className="flex items-center justify-start gap-4 mt-4">
                <h1 className="para8 flex items-center gap-2 text-[14px] sm:text-[16px] tracking-wider text-[#c4cdff]">
                  <Calendar size={16} color="#889aff" />
                  2022 - 2026
                </h1>
                <Dot size={16} color="#919191" />
                <h1 className="para9 flex items-center gap-2 text-[14px] sm:text-[16px] tracking-wider text-[#c4cdff]">
                  <MapPin size={16} color="#889aff" />
                  Jammu
                </h1>
              </div>
            </div>
            <div className='px-4 py-2 w-fit bg-[#2C2C2E] rounded-2xl mt-6 xl:mt-10'>
              <h1 className='para10 tracking-wider text-[16px] sm:text-[20px] font-normal text-[#B0E631]'>CGPA 7.8</h1>
            </div>
          </div>

          {/* 2nd card */}
          <div className='card1 w-full xl:w-90 h-auto xl:h-95 bg-[#1B1C1E] p-5 sm:p-6 rounded-2xl border-2 border-[#4c58955a]'>
            <h1 className='para5 font-semibold tracking-wider text-[18px] sm:text-[20px] uppercase flex items-center gap-3 text-[#97C330]'>
              <Lightbulb size={26} color='#97a8ff' className='xl:hidden shrink-0' />
              <Lightbulb size={30} color='#97a8ff' className='hidden xl:block shrink-0' />
              Learning & Approach
            </h1>
            <div>
              <h1 className='para6 text-[18px] sm:text-[22px] font-semibold text-[#E3E2E5] mt-4'>Always Exploring</h1>
              <h1 className='para7 text-[14px] sm:text-[18px] text-[#c3c2c4] mt-3 tracking-wider leading-relaxed xl:leading-normal'>
                I love learning new technologies,<br className='hidden xl:block' />exploring modern web trends,<br className='hidden xl:block' />and building small projects to<br className='hidden xl:block' />sharpen my skills. I believe in<br className='hidden xl:block' />consistent practice, clean code<br className='hidden xl:block' />and continuous improvement
              </h1>
              <div className="para11 flex items-center justify-start gap-4 mt-4 text-[12px] sm:text-base">
                <h1 className='text-[#889aff] font-bold'>LEARN &nbsp;&nbsp;/</h1>
                <h1 className='text-[#889aff] font-bold'>BUILD &nbsp;&nbsp;/</h1>
                <h1 className='text-[#889aff] font-bold'>GROW</h1>
              </div>
            </div>
          </div>

          {/* 3rd Card */}
          <div className='card1 w-full xl:w-90 h-auto xl:h-95 bg-[#1B1C1E] p-5 sm:p-6 rounded-2xl border-2 border-[#4c58955a]'>
            <h1 className='para5 font-semibold tracking-wider text-[18px] sm:text-[20px] uppercase flex items-center gap-3 text-[#FFB781]'>
              <Heart size={26} color='#97a8ff' className='xl:hidden shrink-0' />
              <Heart size={30} color='#97a8ff' className='hidden xl:block shrink-0' />
              Interests
            </h1>
            <div>
              <h1 className='para6 text-[18px] sm:text-[22px] font-semibold text-[#E3E2E5] mt-4'>Beyond Code</h1>
              <h1 className='para7 text-[14px] sm:text-[18px] text-[#c3c2c4] mt-3 leading-relaxed xl:leading-normal'>
                I enjoy exploring UI/UX, animations,<br className='hidden xl:block' />tech content, and gaming. I also<br className='hidden xl:block' />love music, drawing and spending time in nature. They help me stay<br className='hidden xl:block' /> creative, focused and balanced
              </h1>
              <div className='para12 grid grid-cols-2 gap-3 mt-4'>
                <div>
                  <h1 className='flex text-[14px] sm:text-[18px] items-center gap-2 border-2 border-[#5f76ebab] w-full py-1.5 rounded-full px-3 bg-[#0029f818]'><Gamepad2 size={16} color='#889aff' />Gaming</h1>
                </div>
                <div>
                  <h1 className='flex text-[14px] sm:text-[18px] items-center gap-2 border-2 border-[#5f76ebab] w-full py-1.5 rounded-full px-3 bg-[#0029f818]'><Music size={16} color='#889aff' />Music</h1>
                </div>
                <div>
                  <h1 className='flex text-[14px] sm:text-[18px] items-center gap-2 border-2 border-[#5f76ebab] w-full py-1.5 rounded-full px-3 bg-[#0029f818]'><Leaf size={16} color='#889aff' />Nature</h1>
                </div>
                <div>
                  <h1 className='flex text-[14px] sm:text-[18px] items-center gap-2 border-2 border-[#5f76ebab] w-full py-1.5 rounded-full px-3 bg-[#0029f818]'><Brush size={16} color='#889aff' />Drawing</h1>
                </div>
              </div>
            </div>
          </div>

          {/* 4th card */}
          <div className='card1 w-full xl:w-95 h-auto xl:h-95 bg-[#1B1C1E] p-5 sm:p-6 rounded-2xl border-2 border-[#4c58955a]'>
            <h1 className='para5 font-semibold tracking-wider text-[18px] sm:text-[20px] uppercase flex items-center gap-3 text-[#f09292]'>
              <SquareUser size={26} color='#97a8ff' className='xl:hidden shrink-0' />
              <SquareUser size={30} color='#97a8ff' className='hidden xl:block shrink-0' />
              Quick Facts
            </h1>

            <div className='flex items-center gap-4 mt-4'>
              <MapPin size={22} color='#97a8ff' className='shrink-0' />
              <div className='para13 leading-5 text-[14px] sm:text-[17px] font-medium'>
                <h1 className='text-[#97a8ff]'>Based in</h1>
                <h1 className='text-[#c3c2c4]'>Jammu, India</h1>
              </div>
            </div>

            <div className='flex items-center gap-4 mt-4'>
              <CodeXml size={22} color='#97a8ff' className='shrink-0' />
              <div className='para13 leading-5 text-[14px] sm:text-[17px] font-medium'>
                <h1 className='text-[#97a8ff]'>Focus</h1>
                <h1 className='text-[#c3c2c4]'>Web & Software Development</h1>
              </div>
            </div>

            <div className='flex items-center gap-4 mt-4'>
              <BriefcaseBusiness size={22} color='#97a8ff' className='shrink-0' />
              <div className='para13 leading-5 text-[14px] sm:text-[17px] font-medium'>
                <h1 className='text-[#97a8ff]'>Currently</h1>
                <h1 className='text-[#c3c2c4]'>Open to Career Opportunities</h1>
              </div>
            </div>

            <div className='flex items-center gap-4 mt-4'>
              <Star size={22} color='#97a8ff' className='shrink-0' />
              <div className='para13 leading-5 text-[14px] sm:text-[17px] font-medium'>
                <h1 className='text-[#97a8ff]'>Goal</h1>
                <h1 className='text-[#c3c2c4]'>Solving Real-World Problems & <br className='hidden xl:block' />growing as a Software Developer</h1>
              </div>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default About;