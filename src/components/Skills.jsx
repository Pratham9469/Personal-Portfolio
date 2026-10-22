import { Brain, CodeXml, Database, GitCompareArrows, Lightbulb, MoveRight, Palette, Play, UserGroup } from 'lucide-react'
import image1 from '../assets/images/html.png'
import image2 from '../assets/images/css.png'
import image3 from '../assets/images/js.png'
import image4 from '../assets/images/react.png'
import image5 from '../assets/images/tailwind.png'
import image6 from '../assets/images/gsap.png'
import image7 from '../assets/images/python.png'
import image8 from '../assets/images/sql.png'
import image9 from '../assets/images/mysql.png'
import image10 from '../assets/images/firebase.png'
import image11 from '../assets/images/git.png'
import image12 from '../assets/images/github.png'
import image13 from '../assets/images/docker.png'
import { InteractiveTerminal } from './Terminal'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all'

const Skills = () => {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    // DESKTOP & LARGE LAPTOP (1280px and up): Original directional sliding animations
    mm.add("(min-width: 1280px)", () => {
      gsap.set(".skills1",{
        x: -200,
        opacity: 0,
      })

      gsap.set(".gsap2",{
        x: 100,
        opacity: 0,
      })

      gsap.set(".skill-card",{
        y: 40,
        opacity: 0
      })

      gsap.set(".terminal-gsap",{
        y: 40,
        opacity: 0
      })

      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: ".parent-gsap",
          start: 'top 50%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.to(".skills1",{
        x: 0,
        opacity: 1,
        force3D: true,
      }).to(".gsap2",{
        x: 0,
        opacity: 1,
        force3D: true,
      })

      gsap.to(".skill-card",{
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power2.out',
        force3D: true,
        scrollTrigger:{
          trigger: ".cards-gsap",
          start: 'top 70%',
          toggleActions: "play none none reverse",
        }
      })

      gsap.to(".terminal-gsap",{
        y: 0,
        opacity: 1,
        force3D: true,
        scrollTrigger:{
          trigger: ".terminal-gsap",
          start: 'top 80%',
          toggleActions: "play none none reverse",
        }
      })
    });

    // MOBILE, TABLETS & IPADS (under 1280px): Lightweight vertical fades to eliminate horizontal layout jank
    mm.add("(max-width: 1279px)", () => {
      gsap.set(".skills1, .gsap2, .skill-card, .terminal-gsap", {
        y: 30,
        opacity: 0
      });

      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: ".parent-gsap",
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.to(".skills1", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        force3D: true,
      }).to(".gsap2", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        force3D: true,
      }, "-=0.3");

      gsap.to(".skill-card",{
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        force3D: true,
        scrollTrigger:{
          trigger: ".cards-gsap",
          start: 'top 85%',
          toggleActions: "play none none reverse",
        }
      })

      gsap.to(".terminal-gsap",{
        y: 0,
        opacity: 1,
        duration: 0.6,
        force3D: true,
        scrollTrigger:{
          trigger: ".terminal-gsap",
          start: 'top 85%',
          toggleActions: "play none none reverse",
        }
      })
    });

    return () => mm.revert();
  }, [])

  return (
    <>
      <section className='min-h-screen bg-[#121315] overflow-x-hidden' id='skills'>

        {/* Top section: Stacked on mobile/tablet, side-by-side on xl+ */}
        <div className='parent-gsap flex flex-col xl:flex-row items-start xl:items-center mx-6 sm:mx-12 xl:mx-20 py-12 sm:py-16 xl:py-30 gap-6 xl:gap-0'>

          <div className='skills1 w-full xl:w-auto will-change-transform'>
            <h1 className='skill1 text-[36px] sm:text-[48px] xl:text-[clamp(2.5rem,7vw,86px)] tracking-wider font-bold text-[#E3E2E5] uppercase leading-none'>
              What I Work <span className='skillSpan text-[#8195fb]'>With</span>
            </h1>

            <div className='flex items-center gap-4 uppercase mt-4'>
              <div className='w-16 sm:w-20 h-1 bg-[#8195fb] rounded-full shrink-0'></div>
              <h1 className='skill2 text-[12px] sm:text-xs xl:text-[18px] text-[#888888] font-semibold tracking-widest'>
                Tools &nbsp;/&nbsp; Technologies &nbsp;/&nbsp; Frameworks &nbsp;/&nbsp; Languages &nbsp;
              </h1>
            </div>
          </div>

          <div className='gsap2 ml-0 xl:ml-34 py-4 w-full xl:w-fit flex items-center border-l-0 xl:border-l-3 border-[#8195fb] rounded-2xl bg-[#15171d] xl:bg-transparent p-5 xl:p-0 will-change-transform'>
            <h1 className='skill3 text-sm sm:text-base xl:text-[22px] font-semibold text-[#cccccf] tracking-wider leading-relaxed xl:leading-9 px-4 sm:px-8 xl:px-15'>
              I work with modern web technologies, clean code<br className='hidden xl:block' /> practices and powerful tools to build responsive,<br className='hidden xl:block' /> interactive and scalable web applications.
            </h1>
            <MoveRight size={35} color='#8195fb' className='hidden 2xl:block mx-8 shrink-0' />
          </div>

        </div>

        {/* Cards section: 1 col on mobile, 2 cols on tablet/iPad, 4 cols on desktop */}
        <div className='cards-gsap grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-6 sm:px-12 xl:px-8 items-stretch mb-16'>

          {/* First Card - Frontend */}
          <div className="skill-card min-w-0 w-full h-full bg-[#121418] p-5 sm:p-6 rounded-2xl border-2 border-[#4c58955a] flex flex-col will-change-transform">
            <div className='flex items-center justify-between'>
              <h1 className="skill4 flex min-w-0 items-center gap-2.5 text-[16px] font-medium uppercase tracking-wider text-[#E3E2E5]">
                <CodeXml size={24} color='#8195fb' className='shrink-0' />Frontend
              </h1>
              <h1 className='skill5 text-[#c0a1ffe0] text-[16px]'>01 / 04</h1>
            </div>

            <div>
              <p className="skill6 mt-3 text-[14px] sm:text-[18px] leading-snug sm:leading-6 tracking-wide text-[#74819c]">
                Building responsive and accessible user interfaces with modern web technologies and frameworks.
              </p>
            </div>

            <div className='grid grid-cols-2 gap-3 sm:gap-4 mt-5'>
              <div className="flex min-w-0 items-center gap-2 rounded-full bg-[#4363ff24] px-3 py-2.5">
                <img src={image1} className="h-6 w-6 shrink-0 object-contain" alt="" />
                <span className="skill7 text-[14px] sm:text-[16px] text-[#E3E2E5]">HTML5</span>
              </div>
              <div className="flex min-w-0 items-center gap-2 rounded-full bg-[#4363ff24] px-3 py-2.5">
                <img src={image2} className="h-6 w-6 shrink-0 object-contain" alt="" />
                <span className="skill7 text-[14px] sm:text-[16px] text-[#E3E2E5]">CSS3</span>
              </div>
              <div className="flex min-w-0 items-center gap-2 rounded-full bg-[#4363ff24] px-3 py-2.5">
                <img src={image3} className="h-6 w-6 shrink-0 object-contain" alt="" />
                <span className="skill7 text-[14px] sm:text-[16px] text-[#E3E2E5]">Javascript</span>
              </div>
              <div className="flex min-w-0 items-center gap-2 rounded-full bg-[#4363ff24] px-3 py-2.5">
                <img src={image4} className="h-6 w-6 shrink-0 object-contain" alt="" />
                <span className="skill7 text-[14px] sm:text-[16px] text-[#E3E2E5]">React.js</span>
              </div>
              <div className="flex min-w-0 items-center gap-2 rounded-full bg-[#4363ff24] px-3 py-2.5">
                <img src={image5} className="h-6 w-6 shrink-0 object-contain" alt="" />
                <span className="skill7 text-[14px] sm:text-[16px] text-[#E3E2E5]">Tailwind</span>
              </div>
              <div className="flex min-w-0 items-center gap-2 rounded-full bg-[#4363ff24] px-3 py-2.5">
                <img src={image6} className="h-6 w-6 shrink-0 object-contain" alt="" />
                <span className="skill7 text-[14px] sm:text-[16px] text-[#E3E2E5]">GSAP</span>
              </div>
            </div>

            <div className='mt-auto pt-7 py-2 skill8'>
              <h1 className='skill8 text-[12px] sm:text-[16px] text-[#6ba7fba5] uppercase'>Clean UI &nbsp;/&nbsp; Responsive &nbsp;/&nbsp; Performance</h1>
            </div>
          </div>

          {/* Second Card - Backend & Databases */}
          <div className="skill-card min-w-0 w-full h-full bg-[#121418] p-5 sm:p-6 rounded-2xl border-2 border-[#4c58955a] flex flex-col will-change-transform">
            <div className='flex items-center justify-between'>
              <h1 className="skill4 flex min-w-0 items-center gap-2.5 text-[16px] font-medium uppercase tracking-wider text-[#E3E2E5]">
                <Database size={24} color='#8195fb' className='shrink-0' />Backend & Databases
              </h1>
              <h1 className='skill5 text-[#c0a1ffe0] text-[16px]'>02 / 04</h1>
            </div>

            <div>
              <p className="skill6 mt-3 text-[14px] sm:text-[18px] leading-snug sm:leading-6 tracking-wide text-[#74819c]">
                Building robust server-side logic, APIs and managing data efficiently with scalable databases.
              </p>
            </div>

            <div className='grid grid-cols-2 gap-3 sm:gap-4 mt-5'>
              <div className="flex min-w-0 items-center gap-2 rounded-full bg-[#4363ff24] px-3 py-2.5">
                <img src={image7} className="h-6 w-6 shrink-0 object-contain" alt="" />
                <span className="skill7 text-[14px] sm:text-[16px] text-[#E3E2E5]">Python</span>
              </div>
              <div className="flex min-w-0 items-center gap-2 rounded-full bg-[#4363ff24] px-3 py-2.5">
                <img src={image8} className="h-6 w-6 shrink-0 object-contain" alt="" />
                <span className="skill7 text-[14px] sm:text-[16px] text-[#E3E2E5]">SQL</span>
              </div>
              <div className="flex min-w-0 items-center gap-2 rounded-full bg-[#4363ff24] px-3 py-2.5">
                <img src={image9} className="h-6 w-6 shrink-0 object-contain" alt="" />
                <span className="skill7 text-[14px] sm:text-[16px] text-[#E3E2E5]">MySQL</span>
              </div>
              <div className="flex min-w-0 items-center gap-2 rounded-full bg-[#4363ff24] px-3 py-2.5">
                <img src={image10} className="h-6 w-6 shrink-0 object-contain" alt="" />
                <span className="skill7 text-[14px] sm:text-[16px] text-[#E3E2E5]">Firebase</span>
              </div>
            </div>

            <div className='mt-auto pt-7 py-2 skill8'>
              <h1 className='skill8 text-[12px] sm:text-[16px] text-[#6ba7fba5] uppercase'>APIs &nbsp;/&nbsp; Databases &nbsp;/&nbsp; Scalable</h1>
            </div>
          </div>

          {/* Third Card - Tools & Version Control */}
          <div className="skill-card min-w-0 w-full h-full bg-[#121418] p-5 sm:p-6 rounded-2xl border-2 border-[#4c58955a] flex flex-col will-change-transform">
            <div className='flex items-center justify-between'>
              <h1 className="skill4 flex min-w-0 items-center gap-2.5 text-[16px] font-medium uppercase tracking-wider text-[#E3E2E5]">
                <GitCompareArrows size={24} color='#8195fb' className='shrink-0' />Tools & Version Control
              </h1>
              <h1 className='skill5 text-[#c0a1ffe0] text-[16px]'>03 / 04</h1>
            </div>

            <div>
              <p className="skill6 mt-3 text-[14px] sm:text-[18px] leading-snug sm:leading-6 tracking-wide text-[#74819c]">
                Using modern development tools and version control to maintain clean and efficient workflows.
              </p>
            </div>

            <div className='grid grid-cols-2 gap-3 sm:gap-4 mt-5'>
              <div className="flex min-w-0 items-center gap-2 rounded-full bg-[#4363ff24] px-3 py-2.5">
                <img src={image11} className="h-6 w-6 shrink-0 object-contain" alt="" />
                <span className="skill7 text-[14px] sm:text-[16px] text-[#E3E2E5]">Git</span>
              </div>
              <div className="flex min-w-0 items-center gap-2 rounded-full bg-[#4363ff24] px-3 py-2.5">
                <img src={image12} className="h-6 w-6 shrink-0 object-contain" alt="" />
                <span className="skill7 text-[14px] sm:text-[16px] text-[#E3E2E5]">Github</span>
              </div>
              <div className="flex min-w-0 items-center gap-2 rounded-full bg-[#4363ff24] px-3 py-2.5">
                <img src={image13} className="h-6 w-6 shrink-0 object-contain" alt="" />
                <span className="skill7 text-[14px] sm:text-[16px] text-[#E3E2E5]">Docker</span>
              </div>
            </div>

            <div className='mt-auto pt-7 py-2 skill8'>
              <h1 className='skill8 text-[12px] sm:text-[16px] text-[#6ba7fba5] uppercase'>Collaborate &nbsp;/&nbsp; Deploy &nbsp;/&nbsp; Improve</h1>
            </div>
          </div>

          {/* Fourth Card - Additional Skills */}
          <div className="skill-card min-w-0 w-full h-full bg-[#121418] p-5 sm:p-6 rounded-2xl border-2 border-[#4c58955a] flex flex-col will-change-transform">
            <div className='flex items-center justify-between'>
              <h1 className="skill4 flex min-w-0 items-center gap-2.5 text-[16px] font-medium uppercase tracking-wider text-[#E3E2E5]">
                <Lightbulb size={24} color='#8195fb' className='shrink-0' />Additional Skills
              </h1>
              <h1 className='skill5 text-[#c0a1ffe0] text-[16px]'>04 / 04</h1>
            </div>

            <div>
              <p className="skill6 mt-3 text-[14px] sm:text-[18px] leading-snug sm:leading-6 tracking-wide text-[#74819c]">
                Exploring creative and problem-solving approaches beyond the core stack.
              </p>
            </div>

            <div className='grid grid-cols-2 gap-3 mt-5'>
              <div className="flex min-w-0 items-center gap-2 rounded-full bg-[#4363ff24] px-3 py-2.5">
                <Palette size={20} className="shrink-0 text-[#8195fb]" />
                <span className="skill7 text-[13px] sm:text-[16px] text-[#E3E2E5]">UI/UX Design</span>
              </div>
              <div className='flex min-w-0 items-center gap-2 rounded-full bg-[#4363ff24] px-3 py-2.5'>
                <Play size={20} className="shrink-0 text-[#8195fb]" />
                <span className="skill7 text-[13px] sm:text-[16px] text-[#E3E2E5]">Animation</span>
              </div>
              <div className='flex min-w-0 items-center gap-2 rounded-full bg-[#4363ff24] px-3 py-2.5'>
                <Brain size={20} className="shrink-0 text-[#ed61ffe1]" />
                <span className="skill7 text-[13px] sm:text-[16px] text-[#E3E2E5]">Problem solving</span>
              </div>
              <div className='flex min-w-0 items-center gap-2 rounded-full bg-[#4363ff24] px-3 py-2.5'>
                <UserGroup size={20} className="shrink-0 text-[#8195fb]" />
                <span className="skill7 text-[13px] sm:text-[16px] text-[#E3E2E5]">Teamwork</span>
              </div>
            </div>

            <div className='mt-auto pt-7 py-2 skill8'>
              <h1 className='skill8 text-[12px] sm:text-[16px] text-[#6ba7fba5] uppercase'>Creative &nbsp;/&nbsp; Analytical &nbsp;/&nbsp; Team</h1>
            </div>
          </div>

        </div>

        <div className='terminal-gsap px-6 sm:px-12 xl:px-0 will-change-transform'>
          <InteractiveTerminal />
        </div>

      </section>
    </>
  )
}

export default Skills;