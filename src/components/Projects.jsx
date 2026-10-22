import image1 from '../assets/images/project1.png'
import image2 from '../assets/images/android.png'
import image3 from '../assets/images/flutter.png'
import image4 from '../assets/images/python.png'
import image5 from '../assets/images/firebase.png'
import image6 from '../assets/images/location.png'
import image7 from '../assets/images/brain.png'
import image8 from '../assets/images/project2.png'
import image9 from '../assets/images/html.png'
import image10 from '../assets/images/css.png'
import image11 from '../assets/images/js.png'
import image12 from '../assets/images/aws.png'
import image13 from '../assets/images/db.png'
import image14 from '../assets/images/project3.png'
import image15 from '../assets/images/ndma.png'
import image16 from '../assets/images/cloud.png'
import image17 from '../assets/images/chartjs.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { Box, Code, GraduationCap, MoveUpRight, ShoppingCart, Trophy } from 'lucide-react'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

const Projects = () => {
  const project_gsap1 = useRef(null);
  const project_gsap2 = useRef(null);
  const project_gsap3 = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    gsap.registerPlugin(ScrollTrigger);

    // DESKTOP & LARGE LAPTOP (1280px and up): Pinned card timeline animation with GPU acceleration
    mm.add("(min-width: 1280px)", () => {
      gsap.set([project_gsap1.current, project_gsap2.current], {
        opacity: 0,
        y: 100
      });

      gsap.set(".project-card", {
        yPercent: 100,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: project_gsap3.current,
          start: 'top top',
          end: '+=600%',
          pin: true,
          scrub: true,
        }
      });

      tl.to(project_gsap1.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        force3D: true
      }).to(project_gsap2.current, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        force3D: true
      })
      .to(".project-card:nth-child(1)", {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        force3D: true
      })
      .to(".project-card:nth-child(2)", {
        yPercent: 0,
        opacity: 1,
        duration: 1.5,
        force3D: true
      })
      .to(".project-card:nth-child(3)", {
        yPercent: 0,
        opacity: 1,
        duration: 1.5,
        force3D: true
      });
    });

    // MOBILE, TABLETS & IPADS (under 1280px): Smooth sequential reveal without pinning or layout jank
    mm.add("(max-width: 1279px)", () => {
      gsap.fromTo([project_gsap1.current, project_gsap2.current],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          force3D: true,
          scrollTrigger: {
            trigger: project_gsap3.current,
            start: "top 85%"
          }
        }
      );

      gsap.utils.toArray(".project-card").forEach((card) => {
        gsap.fromTo(card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            force3D: true,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      <section className='bg-[#0E0F11] xl:h-screen px-6 sm:px-12 xl:px-18 py-12 overflow-x-hidden' ref={project_gsap3} id='projects'>

        <div className='para14 leading-tight xl:leading-20 tracking-widest uppercase font-bold border-l-4 xl:border-l-6 border-[#97C330] px-4 xl:px-10 will-change-transform' ref={project_gsap1}>
          <h1 className='text-[36px] sm:text-[48px] xl:text-[72px] text-[#E3E2E5]'>Building Ideas Into</h1>
          <h1 className='text-[36px] sm:text-[48px] xl:text-[72px] text-[#B8C4FF]'>Real-World Impact.</h1>
        </div>

        <div className='para15 px-4 xl:px-12 mt-4 will-change-transform' ref={project_gsap2}>
          <p className='tracking-wide text-gray-400 text-sm sm:text-base xl:text-[17px] leading-relaxed xl:leading-7'>
            I build responsive web applications, cross-platform mobile experiences, and intelligent software <br className='hidden xl:block'/>solutions using modern frontend technologies, backend systems, and applied machine learning.
          </p>
        </div>


        {/* Project Stack Container */}
        <div className='project-stack relative mt-8 xl:mt-0'>

          {/* ================= FIRST PROJECT ================= */}
          <div className='project-card xl:absolute xl:inset-0 w-full xl:h-[65vh] mb-8 xl:mb-0 xl:mt-10 rounded-3xl xl:rounded-4xl p-5 sm:p-6 flex flex-col xl:flex-row gap-6 xl:gap-4 border-2 border-gray-700 bg-[#06111A] brightness-[0.9] shadow-2xl will-change-transform'>

            {/* image div */}
            <div className='w-full xl:w-[90vh] h-64 sm:h-80 xl:h-full rounded-2xl xl:rounded-4xl overflow-hidden shrink-0'>
              <img src={image1} className='w-full h-full object-cover rounded-2xl xl:rounded-4xl' alt="Roadwise AI" />
            </div>

            {/* right side */}
            <div className='w-full xl:w-[95vh] p-2 xl:p-6 flex flex-col justify-between'>
              <div>
                <div className='bg-[#0E0F11] w-fit h-10 px-5 py-1 rounded-full flex items-center'>
                  <h1 className='para16 uppercase flex items-center text-sm xl:text-[20px] gap-3 text-[#97C330] font-bold'>
                    <Trophy size={20} color='#97C330'/> 01 / 03 - 3rd Place
                  </h1>
                </div>

                <div className='mt-3'>
                  <h1 className='para17 uppercase font-bold text-3xl sm:text-4xl xl:text-[50px] text-[#E3E2E5]'>
                    Roadwise <span className='text-[#B8C4FF]'>Ai</span>
                  </h1>
                </div>

                <div className='mt-1'>
                  <h1 className='para18 text-base xl:text-[22px] text-[#97C330] font-medium tracking-wider'>
                    Real-Time Pothole Detection System
                  </h1>
                </div>

                <div className='mt-3 xl:mt-5'>
                  <p className='para19 text-sm sm:text-base xl:text-[20px] text-[#E3E2E5] tracking-wider leading-relaxed xl:leading-8'>
                    RoadWise AI is an <span className='text-[#B8C4FF]'>Edge-AI-powered road monitoring system</span> that uses smartphone sensor data and machine learning to detect <span className='text-[#B8C4FF]'>potholes, speed breakers, and smooth roads</span> in real time. It features an Android application for <span className='text-[#B8C4FF]'>on-device road classification</span> and an <span className='text-[#B8C4FF]'>admin web portal</span> for visualizing road anomalies on an interactive map, tracking their locations, and monitoring road conditions. The system integrates <span className='text-[#B8C4FF]'>ONNX Runtime, Firebase, and GPS</span> to enable intelligent road monitoring and support safer transportation. <span className='text-[#A8E6B0]'>Secured 3rd place</span> in the project competition.
                  </p>
                </div>
              </div>


              {/* tech badges */}
              <div className='mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 w-full xl:w-[90vh]'>
                <div className='w-full xl:w-35 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex items-center text-xs sm:text-sm xl:text-[18px] gap-2 text-[#E3E2E5]'>
                    <img src={image2} className='w-5 xl:w-15 object-contain' alt="" /> Android
                  </h3>
                </div>
                <div className='w-full xl:w-35 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex justify-evenly items-center text-xs sm:text-sm xl:text-[18px] w-full text-[#E3E2E5]'>
                    <img src={image3} className='w-5 xl:w-7 object-contain' alt="" /> Flutter
                  </h3>
                </div>
                <div className='w-full xl:w-35 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex justify-evenly items-center text-xs sm:text-sm xl:text-[18px] w-full text-[#E3E2E5]'>
                    <img src={image4} className='w-5 xl:w-7 object-contain' alt="" /> Python
                  </h3>
                </div>
                <div className='w-full xl:w-44 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex justify-evenly items-center text-xs sm:text-sm xl:text-[18px] w-full text-[#E3E2E5]'>
                    <Box className='w-5 xl:w-7' color='#B8C4FF'/> ONNX Runtime
                  </h3>
                </div>
                <div className='w-full xl:w-35 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex justify-evenly items-center text-xs sm:text-sm xl:text-[18px] w-full text-[#E3E2E5]'>
                    <img src={image5} className='w-5 xl:w-7 object-contain' alt="" /> Firebase
                  </h3>
                </div>
                <div className='w-full xl:w-35 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex justify-evenly items-center text-xs sm:text-sm xl:text-[18px] w-full text-[#E3E2E5]'>
                    <img src={image6} className='w-5 xl:w-8 object-contain' alt="" /> GPS
                  </h3>
                </div>
                <div className='w-full xl:w-55 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex justify-evenly items-center text-xs sm:text-sm xl:text-[18px] w-full text-[#E3E2E5]'>
                    <img src={image7} className='w-5 xl:w-7 object-contain' alt="" /> Machine Learning
                  </h3>
                </div>
              </div>

              {/* buttons */}
              <div className='flex flex-col sm:flex-row justify-evenly mt-6 gap-4'>
                <div className='w-full sm:w-auto [-webkit-tap-highlight-color:transparent]'>
                  <a href='https://roadwise-app.vercel.app/' target='_blank' rel='noreferrer' className='[-webkit-tap-highlight-color:transparent]'>
                    <button className='para20 flex items-center justify-center gap-3 w-full sm:w-75 h-14 xl:h-17 bg-[#9dadff] text-[#151627] text-base xl:text-[20px] font-bold rounded-2xl cursor-pointer [-webkit-tap-highlight-color:transparent]'>
                      Explore Project <MoveUpRight color='#151627' size={23} strokeWidth={2.8}/>
                    </button>
                  </a>
                </div>
                <div className='w-full sm:w-auto [-webkit-tap-highlight-color:transparent]'>
                  <a href='https://github.com/Pratham9469/Roadwise' target='_blank' rel='noreferrer' className='[-webkit-tap-highlight-color:transparent]'>
                    <button className='para21 flex items-center justify-center gap-3 w-full sm:w-75 h-14 xl:h-17 bg-[#0A0E14] text-[#E9E9EB] text-base xl:text-[20px] font-bold rounded-2xl border-2 border-[#B8C4FF] cursor-pointer [-webkit-tap-highlight-color:transparent]'>
                      View Source Code <Code color='#B8C4FF' size={23} strokeWidth={2.8}/>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>



          {/* ================= SECOND PROJECT ================= */}
          <div className='project-card xl:absolute xl:inset-0 w-full xl:h-[65vh] mb-8 xl:mb-0 xl:mt-10 rounded-3xl xl:rounded-4xl p-5 sm:p-6 flex flex-col xl:flex-row gap-6 xl:gap-4 border-2 border-gray-700 bg-[#06111A] brightness-[0.9] shadow-2xl will-change-transform'>

            {/* left side (Content on desktop, order-2 on mobile) */}
            <div className='w-full xl:w-[95vh] p-2 xl:p-6 flex flex-col justify-between order-2 xl:order-1'>
              <div>
                <div className='bg-[#0E0F11] w-fit h-10 px-5 py-1 rounded-full flex items-center'>
                  <h1 className='para16 uppercase flex items-center text-sm xl:text-[20px] gap-3 text-[#97C330] font-bold'>
                    <ShoppingCart size={20} color='#97C330'/> 02 / 03 - E-COMMERCE
                  </h1>
                </div>

                <div className='mt-3'>
                  <h1 className='para17 uppercase font-bold text-3xl sm:text-4xl xl:text-[50px] text-[#E3E2E5]'>
                    Sri Anandha <span className='text-[#B8C4FF]'>Jewelers</span>
                  </h1>
                </div>

                <div className='mt-1'>
                  <h1 className='para18 text-base xl:text-[22px] text-[#97C330] font-medium tracking-wider'>
                    Jewelery Retail Web Application
                  </h1>
                </div>

                <div className='mt-3 xl:mt-5'>
                  <p className='para19 text-sm sm:text-base xl:text-[20px] text-[#E3E2E5] tracking-wider leading-relaxed xl:leading-8'>
                    Sri Anandha Jewelers is a <span className='text-[#B8C4FF]'>full-stack e-commerce web application</span> designed to provide a seamless online jewellery shopping experience. Built using <span className='text-[#B8C4FF]'>Python Flask, HTML, CSS, and JavaScript,</span> with <span className='text-[#B8C4FF]'>AWS DynamoDB</span> for data storage, the platform includes secure user authentication, product browsing and management, a <span className='text-[#B8C4FF]'>shopping cart, wishlist, and coupon management.</span> The project combines an intuitive user interface with backend functionality and cloud-based data storage to deliver a convenient shopping experience.
                  </p>
                </div>
              </div>


              {/* tech badges */}
              <div className='mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 w-full xl:w-[90vh]'>
                <div className='w-full xl:w-35 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex justify-evenly items-center text-xs sm:text-sm xl:text-[18px] w-full text-[#E3E2E5]'>
                    <img src={image4} className='w-5 xl:w-7 object-contain' alt="" /> Python
                  </h3>
                </div>
                <div className='w-full xl:w-44 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex justify-evenly items-center text-xs sm:text-sm xl:text-[18px] w-full text-[#E3E2E5]'>
                    <Box className='w-5 xl:w-7' color='#B8C4FF'/> Flask
                  </h3>
                </div>
                <div className='w-full xl:w-35 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex justify-evenly items-center text-xs sm:text-sm xl:text-[18px] w-full text-[#E3E2E5]'>
                    <img src={image9} className='w-5 xl:w-7 object-contain' alt="" /> HTML5
                  </h3>
                </div>
                <div className='w-full xl:w-35 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex justify-evenly items-center text-xs sm:text-sm xl:text-[18px] w-full text-[#E3E2E5]'>
                    <img src={image10} className='w-5 xl:w-8 object-contain' alt="" /> CSS3
                  </h3>
                </div>
                <div className='w-full xl:w-55 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex justify-evenly items-center text-xs sm:text-sm xl:text-[18px] w-full text-[#E3E2E5]'>
                    <img src={image11} className='w-5 xl:w-7 object-contain' alt="" /> JavaScript
                  </h3>
                </div>
                <div className='w-full xl:w-35 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex justify-evenly items-center text-xs sm:text-sm xl:text-[18px] w-full text-[#E3E2E5]'>
                    <img src={image12} className='w-5 xl:w-7 object-contain' alt="" /> AWS
                  </h3>
                </div>
                <div className='w-full xl:w-35 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex justify-center items-center text-xs sm:text-sm xl:text-[18px] w-full text-[#E3E2E5]'>
                    <img src={image13} className='w-5 xl:w-7 object-contain' alt="" /> Mongo DB
                  </h3>
                </div>
              </div>

              {/* buttons */}
              <div className='flex flex-col sm:flex-row justify-evenly mt-6 gap-4'>
                <div className='w-full sm:w-auto [-webkit-tap-highlight-color:transparent]'>
                  <a href='https://pratham9469.github.io/Sri-Anandha-jewelers/' target='_blank' rel='noreferrer' className='[-webkit-tap-highlight-color:transparent]'>
                    <button className='para20 flex items-center justify-center gap-3 w-full sm:w-75 h-14 xl:h-17 bg-[#9dadff] text-[#151627] text-base xl:text-[20px] font-bold rounded-2xl cursor-pointer [-webkit-tap-highlight-color:transparent]'>
                      Explore Project <MoveUpRight color='#151627' size={23} strokeWidth={2.8}/>
                    </button>
                  </a>
                </div>
                <div className='w-full sm:w-auto [-webkit-tap-highlight-color:transparent]'>
                  <a href='https://github.com/Pratham9469/Sri-Anandha-jewelers' target='_blank' rel='noreferrer' className='[-webkit-tap-highlight-color:transparent]'>
                    <button className='para21 flex items-center justify-center gap-3 w-full sm:w-75 h-14 xl:h-17 bg-[#0A0E14] text-[#E9E9EB] text-base xl:text-[20px] font-bold rounded-2xl border-2 border-[#B8C4FF] cursor-pointer [-webkit-tap-highlight-color:transparent]'>
                      View Source Code <Code color='#B8C4FF' size={23} strokeWidth={2.8}/>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* right side image (order-1 on mobile) */}
            <div className='w-full xl:w-[90vh] h-64 sm:h-80 xl:h-full rounded-2xl xl:rounded-4xl overflow-hidden shrink-0 order-1 xl:order-2'>
              <img src={image8} className='w-full h-full object-cover rounded-2xl xl:rounded-4xl' alt="Sri Anandha Jewelers" />
            </div>
          </div>



          {/* ================= THIRD PROJECT ================= */}
          <div className='project-card xl:absolute xl:inset-0 w-full xl:h-[65vh] mb-8 xl:mb-0 xl:mt-10 rounded-3xl xl:rounded-4xl p-5 sm:p-6 flex flex-col xl:flex-row gap-6 xl:gap-4 border-2 border-gray-700 bg-[#06111A] brightness-[0.9] shadow-2xl will-change-transform'>

            {/* image div */}
            <div className='w-full xl:w-[90vh] h-64 sm:h-80 xl:h-full rounded-2xl xl:rounded-4xl overflow-hidden shrink-0'>
              <img src={image14} className='w-full h-full object-cover rounded-2xl xl:rounded-4xl' alt="ReadyEd" />
            </div>

            {/* right side */}
            <div className='w-full xl:w-[95vh] p-2 xl:p-6 flex flex-col justify-between'>
              <div>
                <div className='bg-[#0E0F11] w-fit h-10 px-5 py-1 rounded-full flex items-center'>
                  <h1 className='para16 uppercase flex items-center text-sm xl:text-[20px] gap-3 text-[#97C330] font-bold'>
                    <GraduationCap size={20} color='#97C330'/> 03 / 03 - Education
                  </h1>
                </div>

                <div className='mt-3'>
                  <h1 className='para17 uppercase font-bold text-3xl sm:text-4xl xl:text-[50px] text-[#E3E2E5]'>
                    Ready<span className='text-[#B8C4FF]'>ED</span>
                  </h1>
                </div>

                <div className='mt-1'>
                  <h1 className='para18 text-base xl:text-[22px] text-[#97C330] font-medium tracking-wider'>
                    Disaster Preparedness & Response Education
                  </h1>
                </div>

                <div className='mt-3 xl:mt-5'>
                  <p className='para19 text-sm sm:text-base xl:text-[20px] text-[#E3E2E5] tracking-wider leading-relaxed xl:leading-8'>
                    ReadyEd is a <span className='text-[#B8C4FF]'>cross-platform disaster preparedness and response education application</span> designed to improve disaster awareness and safety among students. Built with <span className='text-[#B8C4FF]'>Flutter and Firebase,</span> it provides <span className='text-[#B8C4FF]'>disaster-specific learning modules, interactive quizzes, and survival scenarios,</span> along with emergency kit checklists, first-aid guidance, emergency directories, and <span className='text-[#B8C4FF]'>disaster-related updates</span> sourced from official NDMA RSS feeds. The platform combines educational content with interactive learning to help users understand safety procedures and prepare for emergency situations.
                  </p>
                </div>
              </div>


              {/* tech badges */}
              <div className='mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 w-full xl:w-[90vh]'>
                <div className='w-full xl:w-35 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex justify-center items-center text-xs sm:text-sm xl:text-[18px] text-[#E3E2E5] gap-2'>
                    <img src={image2} className='w-5 xl:w-15 object-contain' alt="" /> Android
                  </h3>
                </div>
                <div className='w-full xl:w-35 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex justify-evenly items-center text-xs sm:text-sm xl:text-[18px] w-full text-[#E3E2E5]'>
                    <img src={image3} className='w-5 xl:w-7 object-contain' alt="" /> Flutter
                  </h3>
                </div>
                <div className='w-full xl:w-35 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex justify-evenly items-center text-xs sm:text-sm xl:text-[18px] w-full text-[#E3E2E5]'>
                    <img src={image5} className='w-5 xl:w-7 object-contain' alt="" /> Firebase
                  </h3>
                </div>
                <div className='w-full xl:w-55 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex justify-evenly items-center text-xs sm:text-sm xl:text-[18px] w-full text-[#E3E2E5]'>
                    <img src={image15} className='w-5 xl:w-7 object-contain' alt="" /> NDMA RSS Feeds
                  </h3>
                </div>
                <div className='w-full xl:w-55 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex justify-evenly items-center text-xs sm:text-sm xl:text-[18px] w-full text-[#E3E2E5]'>
                    <img src={image16} className='w-5 xl:w-7 object-contain' alt="" /> Cloud Firestore
                  </h3>
                </div>
                <div className='w-full xl:w-55 h-10 rounded-full bg-[#151B25] flex items-center px-3'>
                  <h3 className='flex justify-evenly items-center text-xs sm:text-sm xl:text-[18px] w-full text-[#E3E2E5]'>
                    <img src={image17} className='w-5 xl:w-7 object-contain' alt="" /> Chart.js
                  </h3>
                </div>
              </div>

              {/* buttons */}
              <div className='flex justify-evenly mt-6'>
                <div className='w-full sm:w-auto [-webkit-tap-highlight-color:transparent]'>
                  <a href='https://github.com/Pratham9469/ReadyEd' target='_blank' rel='noreferrer' className='[-webkit-tap-highlight-color:transparent]'>
                    <button className='para21 flex items-center justify-center gap-3 w-full sm:w-75 h-14 xl:h-17 bg-[#0A0E14] text-[#E9E9EB] text-base xl:text-[20px] font-bold rounded-2xl border-2 border-[#B8C4FF] cursor-pointer [-webkit-tap-highlight-color:transparent]'>
                      View Source Code <Code color='#B8C4FF' size={23} strokeWidth={2.8}/>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default Projects;