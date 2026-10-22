import { Bot, CloudCheck, CodeXml, ExternalLink, GraduationCap, MonitorCog, ShieldLock } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const Certificates = () => {
  const marqueeRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // DESKTOP & LARGE LAPTOP (1280px and up): Marquee animation with hover-pause functionality
    mm.add("(min-width: 1280px)", () => {
      const animation = gsap.to(marqueeRef.current, {
        x: "-50%",
        duration: 25,
        ease: "none",
        repeat: -1,
        force3D: true,
      });

      const marquee = marqueeRef.current;
      if (!marquee) return;

      const pauseAnimation = () => animation.pause();
      const resumeAnimation = () => animation.play();

      marquee.addEventListener("mouseenter", pauseAnimation);
      marquee.addEventListener("mouseleave", resumeAnimation);

      return () => {
        marquee.removeEventListener("mouseenter", pauseAnimation);
        marquee.removeEventListener("mouseleave", resumeAnimation);
      };
    });

    // MOBILE, TABLETS & IPADS (under 1280px): Optimized smooth marquee speed for touch interaction
    mm.add("(max-width: 1279px)", () => {
      const animation = gsap.to(marqueeRef.current, {
        x: "-50%",
        duration: 20,
        ease: "none",
        repeat: -1,
        force3D: true,
      });

      return () => {
        animation.kill();
      };
    });

    return () => mm.revert();
  }, { scope: marqueeRef });

  return (
    <>
      <section className='min-h-screen bg-[#121315] px-6 sm:px-12 xl:px-18 py-12 overflow-hidden' id='certificate'>

        {/* Top Section */}
        <div className='flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8 xl:gap-0'>

          <div className='leading-tight xl:leading-20 px-4 sm:px-12 xl:px-0 inline-block border-l-4 xl:border-l-8 border-[#B3E860]'>
            <h1 className='para14 uppercase text-[32px] sm:text-[48px] xl:text-[70px] font-bold text-[#E3E2E5]'>Certifications &</h1>
            <h1 className='para14 uppercase text-[32px] sm:text-[48px] xl:text-[70px] font-bold text-[#B8C4FF]'>Honors</h1>
          </div>

          {/* Right Header Side */}
          <div className='flex items-center justify-start xl:justify-end gap-3 sm:gap-4 px-4 sm:px-0'>
            <div className='w-20 h-20 sm:w-30 sm:h-30 rounded-full flex items-center justify-center border-12 sm:border-20 border-[#0f1821] mr-0 sm:mr-8 shrink-0'>
              <GraduationCap size={30} className="sm:w-11.25 sm:h-11.25" color='#B3E860' />
            </div>

            <div className='leading-6 sm:leading-8 py-4 sm:py-6 border-b-2 border-[#B3E860] para19 shrink-0'>
              <h1 className='text-lg sm:text-[25px] text-[#97A0AE]'>Better Skills.</h1>
              <h1 className='text-lg sm:text-[25px] text-[#97A0AE]'>Bigger Opportunities</h1>
            </div>
          </div>
        </div>

        <div className='inline-block px-4 sm:px-5 py-5 para19 tracking-wide'>
          <p className='text-base sm:text-[18px] text-[#b4becf]'>Continuous learning and hands-on experience have helped me build</p>
          <p className='text-base sm:text-[18px] text-[#b4becf]'>stronger skills and stay updated with the latest technologies.</p>
        </div>

        {/* Cards Section (Marquee) */}
        <div className="marquee-card marquee-viewport mt-8 overflow-hidden w-full">
          <div ref={marqueeRef} className="marque flex w-max will-change-transform transform-gpu">

            {/* First Set of Cards */}
            <div className="flex gap-6 sm:gap-10 pr-6 sm:pr-10">

              {/* Card 1 */}
              <div className="marquee-card">
                <div className='bg-[#0C151E] w-75 sm:w-115 h-112.5 sm:h-120 px-5 py-4 mt-8 rounded-3xl border-2 border-gray-800 border-b-4 border-b-[#427FCF] flex flex-col justify-between'>
                  <div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3 sm:gap-5'>
                        <div className='w-14 h-14 sm:w-18 sm:h-18 rounded-3xl flex justify-center items-center border-2 border-[#a3b2fd54] shrink-0'><ShieldLock size={28} className="sm:w-8.75 sm:h-8.75" color='#B7C2FD' /></div>
                        <h2 className='para16 uppercase text-sm sm:text-[18px] text-[#E3E2E5]'>Palo Alto Networks</h2>
                      </div>
                      <h3 className='para16 tracking-widest text-sm sm:text-base text-[#E3E2E5]'>2025</h3>
                    </div>

                    <div className='leading-7 sm:leading-8 mt-4 tracking-wider'>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>Cybersecurity</h1>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>Foundation</h1>
                    </div>

                    <div className='mt-3'>
                      <div className='para21 bg-[#121D2A] inline-block px-4 sm:px-6 py-1 rounded-3xl text-sm sm:text-[18px] tracking-widest text-[#b6c8e4]'>Coursera</div>
                    </div>

                    <div className='mt-4'>
                      <p className='para19 text-sm sm:text-[19px] leading-6 sm:leading-7 text-[#818da0] tracking-wide'>Gained a solid understanding of cybersecurity principles, threat landscape, network security and risk management.</p>
                    </div>
                  </div>

                  <div className='border-t-2 border-gray-800 mt-6 flex justify-center items-center h-20 sm:h-30 [-webkit-tap-highlight-color:transparent]'>
                    <a href='https://drive.google.com/file/d/1D3NIz4hiLjx1J1waMQWJQUXI9tybN9oz/view?usp=sharing' target='_blank' rel='noreferrer' className='w-full flex justify-center [-webkit-tap-highlight-color:transparent]'>
                      <button className='view1 text-base sm:text-[21px] tracking-wider text-[#a1a6b1] flex items-center bg-[#01122d14] px-8 sm:px-15 py-4 sm:py-6 gap-3 sm:gap-4 rounded-full border-2 border-[#5581f868] cursor-pointer [-webkit-tap-highlight-color:transparent]'>
                        <ExternalLink color='#3971B8' size={24} className="sm:w-7 sm:h-7" /> View Certificate
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="marquee-card">
                <div className='bg-[#0C151E] w-75 sm:w-115 h-112.5 sm:h-120 px-5 py-4 mt-8 rounded-3xl border-2 border-gray-800 border-b-4 border-b-[#A3D940] flex flex-col justify-between'>
                  <div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3 sm:gap-5'>
                        <div className='w-14 h-14 sm:w-18 sm:h-18 rounded-3xl flex justify-center items-center border-2 border-[#a3b2fd54] shrink-0'><CloudCheck size={28} className="sm:w-8.75 sm:h-8.75" color='#A3D940' /></div>
                        <h2 className='para16 uppercase text-sm sm:text-[18px] text-[#E3E2E5]'>Palo Alto Networks</h2>
                      </div>
                      <h3 className='para16 tracking-widest text-sm sm:text-base text-[#E3E2E5]'>2025</h3>
                    </div>

                    <div className='leading-7 sm:leading-8 mt-4 tracking-wider'>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>Cloud Security</h1>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>Fundamentals</h1>
                    </div>

                    <div className='mt-3'>
                      <div className='para21 bg-[#121D2A] inline-block px-4 sm:px-6 py-1 rounded-3xl text-sm sm:text-[18px] tracking-widest text-[#b6c8e4]'>Coursera</div>
                    </div>

                    <div className='mt-4'>
                      <p className='para19 text-sm sm:text-[19px] leading-6 sm:leading-7 text-[#818da0] tracking-wide'>Learned core concepts of cloud security, including architecture, identity and access management, and threat detection</p>
                    </div>
                  </div>

                  <div className='border-t-2 border-gray-800 mt-6 flex justify-center items-center h-20 sm:h-30 [-webkit-tap-highlight-color:transparent]'>
                    <a href='https://drive.google.com/file/d/1w1heKUew1a44kq106vworfLiywP2gjfj/view?usp=sharing' target='_blank' rel='noreferrer' className='w-full flex justify-center [-webkit-tap-highlight-color:transparent]'>
                      <button className='view1 text-base sm:text-[21px] tracking-wider text-[#a1a6b1] flex items-center bg-[#01122d14] px-8 sm:px-15 py-4 sm:py-6 gap-3 sm:gap-4 rounded-full border-2 border-[#A3D940] cursor-pointer [-webkit-tap-highlight-color:transparent]'>
                        <ExternalLink color='#A3D940' size={24} className="sm:w-7 sm:h-7" /> View Certificate
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="marquee-card">
                <div className='bg-[#0C151E] w-75 sm:w-115 h-112.5 sm:h-120 px-5 py-4 mt-8 rounded-3xl border-2 border-gray-800 border-b-4 border-b-[#7b6fe0] flex flex-col justify-between'>
                  <div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3 sm:gap-5'>
                        <div className='w-14 h-14 sm:w-18 sm:h-18 rounded-3xl flex justify-center items-center border-2 border-[#a3b2fd54] shrink-0'><CodeXml size={28} className="sm:w-8.75 sm:h-8.75" color='#B8C4FF' /></div>
                        <h2 className='para16 uppercase text-sm sm:text-[18px] text-[#E3E2E5]'>Infosys springboard</h2>
                      </div>
                      <h3 className='para16 tracking-widest text-sm sm:text-base text-[#E3E2E5]'>2025</h3>
                    </div>

                    <div className='leading-7 sm:leading-8 mt-4 tracking-wider'>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>Mastering</h1>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>JavaScript</h1>
                    </div>

                    <div className='mt-3'>
                      <div className='para21 bg-[#121D2A] inline-block px-4 sm:px-6 py-1 rounded-3xl text-sm sm:text-[18px] tracking-widest text-[#b6c8e4]'>Infosys</div>
                    </div>

                    <div className='mt-4'>
                      <p className='para19 text-sm sm:text-[19px] leading-6 sm:leading-7 text-[#818da0] tracking-wide'>Strengthened my JavaScript skills with ES6 features, DOM manipulation, async/await, and modern development practices</p>
                    </div>
                  </div>

                  <div className='border-t-2 border-gray-800 mt-6 flex justify-center items-center h-20 sm:h-30 [-webkit-tap-highlight-color:transparent]'>
                    <a href='https://drive.google.com/file/d/1wsa6PjJF868r9z9Yyuy0AlfrBg5x9ywg/view?usp=sharing' target='_blank' rel='noreferrer' className='w-full flex justify-center [-webkit-tap-highlight-color:transparent]'>
                      <button className='view1 text-base sm:text-[21px] tracking-wider text-[#a1a6b1] flex items-center bg-[#01122d14] px-8 sm:px-15 py-4 sm:py-6 gap-3 sm:gap-4 rounded-full border-2 border-[#423D6E] cursor-pointer [-webkit-tap-highlight-color:transparent]'>
                        <ExternalLink color='#7b6fe0' size={24} className="sm:w-7 sm:h-7" /> View Certificate
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="marquee-card">
                <div className='bg-[#0C151E] w-75 sm:w-115 h-112.5 sm:h-120 px-5 py-4 mt-8 rounded-3xl border-2 border-gray-800 border-b-4 border-b-[#51B9F9] flex flex-col justify-between'>
                  <div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3 sm:gap-5'>
                        <div className='w-14 h-14 sm:w-18 sm:h-18 rounded-3xl flex justify-center items-center border-2 border-[#a3b2fd54] shrink-0'><MonitorCog size={28} className="sm:w-8.75 sm:h-8.75" color='#51B9F9' /></div>
                        <h2 className='para16 uppercase text-sm sm:text-[18px] text-[#E3E2E5]'>NPTEL</h2>
                      </div>
                      <h3 className='para16 tracking-widest text-sm sm:text-base text-[#E3E2E5]'>2024</h3>
                    </div>

                    <div className='leading-7 sm:leading-8 mt-4 tracking-wider'>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>The joy of Computing</h1>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>Using Python</h1>
                    </div>

                    <div className='mt-3'>
                      <div className='para21 bg-[#121D2A] inline-block px-4 sm:px-6 py-1 rounded-3xl text-sm sm:text-[18px] tracking-widest text-[#b6c8e4]'>NPTEL</div>
                    </div>

                    <div className='mt-4'>
                      <p className='para19 text-sm sm:text-[19px] leading-6 sm:leading-7 text-[#818da0] tracking-wide'>Built a strong foundation in Python programming, problem solving, and computational thinking</p>
                    </div>
                  </div>

                  <div className='border-t-2 border-gray-800 mt-6 flex justify-center items-center h-20 sm:h-30 [-webkit-tap-highlight-color:transparent]'>
                    <a href='https://drive.google.com/file/d/1MkIWrugBVJpD7lq5EzksFmFRXetqB0LE/view?usp=sharing' target='_blank' rel='noreferrer' className='w-full flex justify-center [-webkit-tap-highlight-color:transparent]'>
                      <button className='view1 text-base sm:text-[21px] tracking-wider text-[#a1a6b1] flex items-center bg-[#01122d14] px-8 sm:px-15 py-4 sm:py-6 gap-3 sm:gap-4 rounded-full border-2 border-[#51B9F9] cursor-pointer [-webkit-tap-highlight-color:transparent]'>
                        <ExternalLink color='#51B9F9' size={24} className="sm:w-7 sm:h-7" /> View Certificate
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="marquee-card">
                <div className='bg-[#0C151E] w-75 sm:w-115 h-112.5 sm:h-120 px-5 py-4 mt-8 rounded-3xl border-2 border-gray-800 border-b-4 border-b-[#F96BFB] flex flex-col justify-between'>
                  <div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3 sm:gap-5'>
                        <div className='w-14 h-14 sm:w-18 sm:h-18 rounded-3xl flex justify-center items-center border-2 border-[#a3b2fd54] shrink-0'><Bot size={28} className="sm:w-8.75 sm:h-8.75" color='#F96BFB' /></div>
                        <h2 className='para16 uppercase text-sm sm:text-[18px] text-[#E3E2E5]'>IBM SkillsBuild</h2>
                      </div>
                      <h3 className='para16 tracking-widest text-sm sm:text-base text-[#E3E2E5]'>2025</h3>
                    </div>

                    <div className='leading-7 sm:leading-8 mt-4 tracking-wider'>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>Ai Agent</h1>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>Architect</h1>
                    </div>

                    <div className='mt-3'>
                      <div className='para21 bg-[#121D2A] inline-block px-4 sm:px-6 py-1 rounded-3xl text-sm sm:text-[18px] tracking-widest text-[#b6c8e4]'>IBM</div>
                    </div>

                    <div className='mt-4'>
                      <p className='para19 text-sm sm:text-[19px] leading-6 sm:leading-7 text-[#818da0] tracking-wide'>Explored AI agent fundamentals, from core concepts to designing intelligent, goal-oriented AI solutions.</p>
                    </div>
                  </div>

                  <div className='border-t-2 border-gray-800 mt-6 flex justify-center items-center h-20 sm:h-30 [-webkit-tap-highlight-color:transparent]'>
                    <a href='https://drive.google.com/file/d/1dGKL1c25nhfvy8lHguuD1N_Nwgs7x073/view?usp=sharing' target='_blank' rel='noreferrer' className='w-full flex justify-center [-webkit-tap-highlight-color:transparent]'>
                      <button className='view1 text-base sm:text-[21px] tracking-wider text-[#a1a6b1] flex items-center bg-[#01122d14] px-8 sm:px-15 py-4 sm:py-6 gap-3 sm:gap-4 rounded-full border-2 border-[#423D6E] cursor-pointer [-webkit-tap-highlight-color:transparent]'>
                        <ExternalLink color='#7b6fe0' size={24} className="sm:w-7 sm:h-7" /> View Certificate
                      </button>
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Duplicate Set for Seamless Marquee Loop */}
            <div className="flex gap-6 sm:gap-10 pr-6 sm:pr-10">

              {/* Card 1 Duplicate */}
              <div className="marquee-card">
                <div className='bg-[#0C151E] w-75 sm:w-115 h-112.5 sm:h-120 px-5 py-4 mt-8 rounded-3xl border-2 border-gray-800 border-b-4 border-b-[#427FCF] flex flex-col justify-between'>
                  <div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3 sm:gap-5'>
                        <div className='w-14 h-14 sm:w-18 sm:h-18 rounded-3xl flex justify-center items-center border-2 border-[#a3b2fd54] shrink-0'><ShieldLock size={28} className="sm:w-8.75 sm:h-8.75" color='#B7C2FD' /></div>
                        <h2 className='para16 uppercase text-sm sm:text-[18px] text-[#E3E2E5]'>Palo Alto Networks</h2>
                      </div>
                      <h3 className='para16 tracking-widest text-sm sm:text-base text-[#E3E2E5]'>2025</h3>
                    </div>

                    <div className='leading-7 sm:leading-8 mt-4 tracking-wider'>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>Cybersecurity</h1>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>Foundation</h1>
                    </div>

                    <div className='mt-3'>
                      <div className='para21 bg-[#121D2A] inline-block px-4 sm:px-6 py-1 rounded-3xl text-sm sm:text-[18px] tracking-widest text-[#b6c8e4]'>Coursera</div>
                    </div>

                    <div className='mt-4'>
                      <p className='para19 text-sm sm:text-[19px] leading-6 sm:leading-7 text-[#818da0] tracking-wide'>Gained a solid understanding of cybersecurity principles, threat landscape, network security and risk management.</p>
                    </div>
                  </div>

                  <div className='border-t-2 border-gray-800 mt-6 flex justify-center items-center h-20 sm:h-30 [-webkit-tap-highlight-color:transparent]'>
                    <a href='https://drive.google.com/file/d/1D3NIz4hiLjx1J1waMQWJQUXI9tybN9oz/view?usp=sharing' target='_blank' rel='noreferrer' className='w-full flex justify-center [-webkit-tap-highlight-color:transparent]'>
                      <button className='view1 text-base sm:text-[21px] tracking-wider text-[#a1a6b1] flex items-center bg-[#01122d14] px-8 sm:px-15 py-4 sm:py-6 gap-3 sm:gap-4 rounded-full border-2 border-[#5581f868] cursor-pointer [-webkit-tap-highlight-color:transparent]'>
                        <ExternalLink color='#3971B8' size={24} className="sm:w-7 sm:h-7" /> View Certificate
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 Duplicate */}
              <div className="marquee-card">
                <div className='bg-[#0C151E] w-75 sm:w-115 h-112.5 sm:h-120 px-5 py-4 mt-8 rounded-3xl border-2 border-gray-800 border-b-4 border-b-[#A3D940] flex flex-col justify-between'>
                  <div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3 sm:gap-5'>
                        <div className='w-14 h-14 sm:w-18 sm:h-18 rounded-3xl flex justify-center items-center border-2 border-[#a3b2fd54] shrink-0'><CloudCheck size={28} className="sm:w-8.75 sm:h-8.75" color='#A3D940' /></div>
                        <h2 className='para16 uppercase text-sm sm:text-[18px] text-[#E3E2E5]'>Palo Alto Networks</h2>
                      </div>
                      <h3 className='para16 tracking-widest text-sm sm:text-base text-[#E3E2E5]'>2025</h3>
                    </div>

                    <div className='leading-7 sm:leading-8 mt-4 tracking-wider'>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>Cloud Security</h1>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>Fundamentals</h1>
                    </div>

                    <div className='mt-3'>
                      <div className='para21 bg-[#121D2A] inline-block px-4 sm:px-6 py-1 rounded-3xl text-sm sm:text-[18px] tracking-widest text-[#b6c8e4]'>Coursera</div>
                    </div>

                    <div className='mt-4'>
                      <p className='para19 text-sm sm:text-[19px] leading-6 sm:leading-7 text-[#818da0] tracking-wide'>Learned core concepts of cloud security, including architecture, identity and access management, and threat detection</p>
                    </div>
                  </div>

                  <div className='border-t-2 border-gray-800 mt-6 flex justify-center items-center h-20 sm:h-30 [-webkit-tap-highlight-color:transparent]'>
                    <a href='https://drive.google.com/file/d/1w1heKUew1a44kq106vworfLiywP2gjfj/view?usp=sharing' target='_blank' rel='noreferrer' className='w-full flex justify-center [-webkit-tap-highlight-color:transparent]'>
                      <button className='view1 text-base sm:text-[21px] tracking-wider text-[#a1a6b1] flex items-center bg-[#01122d14] px-8 sm:px-15 py-4 sm:py-6 gap-3 sm:gap-4 rounded-full border-2 border-[#A3D940] cursor-pointer [-webkit-tap-highlight-color:transparent]'>
                        <ExternalLink color='#A3D940' size={24} className="sm:w-7 sm:h-7" /> View Certificate
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3 Duplicate */}
              <div className="marquee-card">
                <div className='bg-[#0C151E] w-75 sm:w-115 h-112.5 sm:h-120 px-5 py-4 mt-8 rounded-3xl border-2 border-gray-800 border-b-4 border-b-[#7b6fe0] flex flex-col justify-between'>
                  <div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3 sm:gap-5'>
                        <div className='w-14 h-14 sm:w-18 sm:h-18 rounded-3xl flex justify-center items-center border-2 border-[#a3b2fd54] shrink-0'><CodeXml size={28} className="sm:w-8.75 sm:h-8.75" color='#B8C4FF' /></div>
                        <h2 className='para16 uppercase text-sm sm:text-[18px] text-[#E3E2E5]'>Infosys springboard</h2>
                      </div>
                      <h3 className='para16 tracking-widest text-sm sm:text-base text-[#E3E2E5]'>2025</h3>
                    </div>

                    <div className='leading-7 sm:leading-8 mt-4 tracking-wider'>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>Mastering</h1>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>JavaScript</h1>
                    </div>

                    <div className='mt-3'>
                      <div className='para21 bg-[#121D2A] inline-block px-4 sm:px-6 py-1 rounded-3xl text-sm sm:text-[18px] tracking-widest text-[#b6c8e4]'>Infosys</div>
                    </div>

                    <div className='mt-4'>
                      <p className='para19 text-sm sm:text-[19px] leading-6 sm:leading-7 text-[#818da0] tracking-wide'>Strengthened my JavaScript skills with ES6 features, DOM manipulation, async/await, and modern development practices</p>
                    </div>
                  </div>

                  <div className='border-t-2 border-gray-800 mt-6 flex justify-center items-center h-20 sm:h-30 [-webkit-tap-highlight-color:transparent]'>
                    <a href='https://drive.google.com/file/d/1wsa6PjJF868r9z9Yyuy0AlfrBg5x9ywg/view?usp=sharing' target='_blank' rel='noreferrer' className='w-full flex justify-center [-webkit-tap-highlight-color:transparent]'>
                      <button className='view1 text-base sm:text-[21px] tracking-wider text-[#a1a6b1] flex items-center bg-[#01122d14] px-8 sm:px-15 py-4 sm:py-6 gap-3 sm:gap-4 rounded-full border-2 border-[#423D6E] cursor-pointer [-webkit-tap-highlight-color:transparent]'>
                        <ExternalLink color='#7b6fe0' size={24} className="sm:w-7 sm:h-7" /> View Certificate
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 4 Duplicate */}
              <div className="marquee-card">
                <div className='bg-[#0C151E] w-75 sm:w-115 h-112.5 sm:h-120 px-5 py-4 mt-8 rounded-3xl border-2 border-gray-800 border-b-4 border-b-[#51B9F9] flex flex-col justify-between'>
                  <div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3 sm:gap-5'>
                        <div className='w-14 h-14 sm:w-18 sm:h-18 rounded-3xl flex justify-center items-center border-2 border-[#a3b2fd54] shrink-0'><MonitorCog size={28} className="sm:w-8.75 sm:h-8.75" color='#51B9F9' /></div>
                        <h2 className='para16 uppercase text-sm sm:text-[18px] text-[#E3E2E5]'>NPTEL</h2>
                      </div>
                      <h3 className='para16 tracking-widest text-sm sm:text-base text-[#E3E2E5]'>2024</h3>
                    </div>

                    <div className='leading-7 sm:leading-8 mt-4 tracking-wider'>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>The joy of Computing</h1>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>Using Python</h1>
                    </div>

                    <div className='mt-3'>
                      <div className='para21 bg-[#121D2A] inline-block px-4 sm:px-6 py-1 rounded-3xl text-sm sm:text-[18px] tracking-widest text-[#b6c8e4]'>NPTEL</div>
                    </div>

                    <div className='mt-4'>
                      <p className='para19 text-sm sm:text-[19px] leading-6 sm:leading-7 text-[#818da0] tracking-wide'>Built a strong foundation in Python programming, problem solving, and computational thinking</p>
                    </div>
                  </div>

                  <div className='border-t-2 border-gray-800 mt-6 flex justify-center items-center h-20 sm:h-30 [-webkit-tap-highlight-color:transparent]'>
                    <a href='https://drive.google.com/file/d/1MkIWrugBVJpD7lq5EzksFmFRXetqB0LE/view?usp=sharing' target='_blank' rel='noreferrer' className='w-full flex justify-center [-webkit-tap-highlight-color:transparent]'>
                      <button className='view1 text-base sm:text-[21px] tracking-wider text-[#a1a6b1] flex items-center bg-[#01122d14] px-8 sm:px-15 py-4 sm:py-6 gap-3 sm:gap-4 rounded-full border-2 border-[#51B9F9] cursor-pointer [-webkit-tap-highlight-color:transparent]'>
                        <ExternalLink color='#51B9F9' size={24} className="sm:w-7 sm:h-7" /> View Certificate
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 5 Duplicate */}
              <div className="marquee-card">
                <div className='bg-[#0C151E] w-75 sm:w-115 h-112.5 sm:h-120 px-5 py-4 mt-8 rounded-3xl border-2 border-gray-800 border-b-4 border-b-[#F96BFB] flex flex-col justify-between'>
                  <div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3 sm:gap-5'>
                        <div className='w-14 h-14 sm:w-18 sm:h-18 rounded-3xl flex justify-center items-center border-2 border-[#a3b2fd54] shrink-0'><Bot size={28} className="sm:w-8.75 sm:h-8.75" color='#F96BFB' /></div>
                        <h2 className='para16 uppercase text-sm sm:text-[18px] text-[#E3E2E5]'>IBM SkillsBuild</h2>
                      </div>
                      <h3 className='para16 tracking-widest text-sm sm:text-base text-[#E3E2E5]'>2025</h3>
                    </div>

                    <div className='leading-7 sm:leading-8 mt-4 tracking-wider'>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>Ai Agent</h1>
                      <h1 className='para19 font-bold text-xl sm:text-[25px] text-[#EFF0F3]'>Architect</h1>
                    </div>

                    <div className='mt-3'>
                      <div className='para21 bg-[#121D2A] inline-block px-4 sm:px-6 py-1 rounded-3xl text-sm sm:text-[18px] tracking-widest text-[#b6c8e4]'>IBM</div>
                    </div>

                    <div className='mt-4'>
                      <p className='para19 text-sm sm:text-[19px] leading-6 sm:leading-7 text-[#818da0] tracking-wide'>Explored AI agent fundamentals, from core concepts to designing intelligent, goal-oriented AI solutions.</p>
                    </div>
                  </div>

                  <div className='border-t-2 border-gray-800 mt-6 flex justify-center items-center h-20 sm:h-30 [-webkit-tap-highlight-color:transparent]'>
                    <a href='https://drive.google.com/file/d/1dGKL1c25nhfvy8lHguuD1N_Nwgs7x073/view?usp=sharing' target='_blank' rel='noreferrer' className='w-full flex justify-center [-webkit-tap-highlight-color:transparent]'>
                      <button className='view1 text-base sm:text-[21px] tracking-wider text-[#a1a6b1] flex items-center bg-[#01122d14] px-8 sm:px-15 py-4 sm:py-6 gap-3 sm:gap-4 rounded-full border-2 border-[#423D6E] cursor-pointer [-webkit-tap-highlight-color:transparent]'>
                        <ExternalLink color='#7b6fe0' size={24} className="sm:w-7 sm:h-7" /> View Certificate
                      </button>
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Certificates;