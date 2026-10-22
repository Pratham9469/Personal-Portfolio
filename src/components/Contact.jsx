import { Copyright, Dot, MoveRight, MoveUpRight } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

const Contact = () => {
  useGSAP(() => {
    let mm = gsap.matchMedia();
    let ctx = gsap.context(() => {
      // DESKTOP & LARGE LAPTOP (1280px and up)
      mm.add("(min-width: 1280px)", () => {
        gsap.set(".contact-gsap", { y: 100, opacity: 0 });
        gsap.set(".contact-gsap2", { y: 100, opacity: 0 });
        gsap.set(".contact-gsap3", { x: -50, opacity: 0 });
        gsap.set(".contact-gsap4", { x: 50, opacity: 0 });
        gsap.set([".gsap-btn1", ".gsap-btn2", ".gsap-btn3"], { x: 100, opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.contact-scroll',
            start: 'top 50%',
            toggleActions: 'play none none reverse'
          }
        });

        tl.to(".contact-gsap", { y: 0, duration: 0.7, opacity: 1, force3D: true })

        gsap.to(".contact-gsap2", {
          y: 0,
          duration: 1,
          opacity: 1,
          force3D: true,
          scrollTrigger: {
            trigger: '.contact-gsap2',
            start: 'top 98%',
            toggleActions: 'play none none reverse'
          }
        });

        gsap.to(".contact-gsap3", {
          x: 0,
          duration: 1,
          opacity: 1,
          force3D: true,
          scrollTrigger: {
            trigger: '.contact-gsap3',
            start: 'top 95%',
            toggleActions: 'play none none reverse'
          }
        });

        gsap.to(".contact-gsap4", {
          x: 0,
          duration: 1,
          opacity: 1,
          force3D: true,
          scrollTrigger: {
            trigger: '.contact-gsap4',
            start: 'top 95%',
            toggleActions: 'play none none reverse'
          }
        });

        gsap.to([".gsap-btn1", ".gsap-btn2", ".gsap-btn3"], {
          x: 0,
          duration: 1,
          opacity: 1,
          stagger: 0.2,
          force3D: true,
          scrollTrigger: {
            trigger: '.contact5',
            start: 'top 96%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // MOBILE, TABLETS & IPADS (under 1280px)
      mm.add("(max-width: 1279px)", () => {
        gsap.set([".contact-gsap", ".contact-gsap2", ".contact-gsap3", ".contact-gsap4", ".gsap-btn1", ".gsap-btn2", ".gsap-btn3"], {
          y: 40,
          opacity: 0
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.contact-scroll',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });

        tl.to(".contact-gsap", { y: 0, duration: 0.6, opacity: 1, force3D: true })
          .to(".contact-gsap2", { y: 0, duration: 0.6, opacity: 1, force3D: true }, "-=0.3")
          .to(".contact-gsap3", { y: 0, duration: 0.6, opacity: 1, force3D: true }, "-=0.3")
          .to(".contact-gsap4", { y: 0, duration: 0.6, opacity: 1, force3D: true }, "-=0.3");

        gsap.to([".gsap-btn1", ".gsap-btn2", ".gsap-btn3"], {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          force3D: true,
          scrollTrigger: {
            trigger: '.contact5',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        });
      });
    });

    return () => ctx.revert();
  }, [])

  return (
    <>
      <section className='contact-scroll min-h-screen bg-[#0E0F10] px-6 sm:px-12 xl:px-20 pt-12 overflow-x-hidden' id='contact'>

        {/* Main Heading */}
        <div className='contact leading-[1.15] sm:leading-18 xl:leading-20'>
          <h1 className='uppercase inline-block font-extrabold text-[#E3E2E5] contact-gsap w-full will-change-transform'>
            <span className='text-[36px] sm:text-[80px] xl:text-[150px]'>Let's</span> <br />
            <span className='text-[36px] sm:text-[80px] xl:text-[150px]'>Make</span> <br />
            <span className='contact1 text-[#B8C4FF] text-[32px] sm:text-[80px] xl:text-[150px]'>Something</span> <br />
            <span className='text-[28px] sm:text-[80px] xl:text-[150px]'>Interesting</span>
          </h1>
        </div>

        {/* Subtitle Description */}
        <div className='mt-6 xl:mt-0 will-change-transform'>
          <p className='contact2 text-[#C2C3D5] text-sm sm:text-lg xl:text-[23px] tracking-wider contact-gsap2'>
            I am open to frontend developer roles, creative web projects, and <br className='hidden xl:block' />interactive UI collaborations. Reach out via email or explore my <br className='hidden xl:block' />profiles.
          </p>
        </div>

        {/* Call to Action & Email: Single row starting at md (tablet 768px+) */}
        <div className='flex flex-col md:flex-row items-start md:items-center mt-10 xl:mt-15 gap-6 md:gap-8 xl:gap-10'>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prathamseth9469@gmail.com" target="_blank" rel="noopener noreferrer" className='w-full sm:w-auto shrink-0 [-webkit-tap-highlight-color:transparent]'>
            <button className='contact-gsap3 contact-btn uppercase font-bold w-full sm:w-72 xl:w-80 h-16 xl:h-20 bg-[#E3E2E5] text-[#0E0F10] text-base sm:text-lg xl:text-[25px] rounded-2xl flex items-center justify-center gap-4 cursor-pointer will-change-transform [-webkit-tap-highlight-color:transparent]'>
              Get in touch <MoveRight size={28} strokeWidth={2} />
            </button>
          </a>

          <div className='contact-gsap4 break-all will-change-transform'>
            <h1 className='contact3 text-sm sm:text-base xl:text-[20px] text-[#8f91a5]'>Email :</h1>
            <h1 className='contact4 text-sm sm:text-lg xl:text-[23px] tracking-wider text-[#B8C4FF] cursor-pointer'>
              prathamseth9469@gmail.com
            </h1>
          </div>
        </div>

        {/* Social / Profile Cards */}
        <div className='contact5 mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 pb-16 w-full max-w-6xl'>

          <a href='https://github.com/Pratham9469' target='_blank' rel='noreferrer' className='rounded-2xl w-full [-webkit-tap-highlight-color:transparent]'>
            <div className='gsap-btn1 group bg-[#292A2C] w-full px-5 py-4 rounded-2xl hover:bg-[#c7cacf46] transition-colors duration-500 cursor-pointer will-change-transform [-webkit-tap-highlight-color:transparent]'>
              <h3 className='uppercase text-[#8f91a5] tracking-widest text-xs sm:text-sm whitespace-nowrap'>Code Repository</h3>
              <h3 className='flex uppercase tracking-wider text-base sm:text-[18px] justify-between text-[#E3E2E5] group-hover:text-[#B8C4FF] transition-colors duration-500 mt-1'>
                Github <MoveUpRight size={19} />
              </h3>
            </div>
          </a>

          <a href='https://www.linkedin.com/in/pratham-seth-a73454380/' target='_blank' rel='noreferrer' className='rounded-2xl w-full [-webkit-tap-highlight-color:transparent]'>
            <div className='gsap-btn2 group bg-[#292A2C] w-full px-5 py-4 rounded-2xl hover:bg-[#c7cacf46] transition-colors duration-500 cursor-pointer will-change-transform [-webkit-tap-highlight-color:transparent]'>
              <h3 className='uppercase text-[#8f91a5] tracking-widest text-xs sm:text-sm whitespace-nowrap'>Professional Network</h3>
              <h3 className='flex uppercase tracking-wider text-base sm:text-[18px] justify-between text-[#E3E2E5] group-hover:text-[#B8C4FF] transition-colors duration-500 mt-1'>
                Linkedin <MoveUpRight size={19} />
              </h3>
            </div>
          </a>

          <a href='https://leetcode.com/u/pratham9469/' target='_blank' rel='noreferrer' className='rounded-2xl w-full [-webkit-tap-highlight-color:transparent]'>
            <div className='gsap-btn3 group bg-[#292A2C] w-full px-5 py-4 rounded-2xl hover:bg-[#c7cacf46] transition-colors duration-500 cursor-pointer will-change-transform [-webkit-tap-highlight-color:transparent]'>
              <h3 className='uppercase text-[#8f91a5] tracking-widest text-xs sm:text-sm whitespace-nowrap'>Problem solving</h3>
              <h3 className='flex uppercase tracking-wider text-base sm:text-[18px] justify-between text-[#E3E2E5] group-hover:text-[#B8C4FF] transition-colors duration-500 mt-1'>
                Leetcode <MoveUpRight size={19} />
              </h3>
            </div>
          </a>

        </div>

      </section>
    </>
  )
}

export default Contact;