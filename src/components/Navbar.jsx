import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CodeXml, Folder, House, Menu, User, X, Mail, Award, MoveRight } from 'lucide-react';
import { useState, useRef } from 'react';

// Reusable Desktop Animated Nav Link Component
const DesktopNavItem = ({ label, href }) => {
  const frameRef = useRef(null);

  useGSAP(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const spans = frame.querySelectorAll('.nav-span');
      const lerp = (x, y, a) => x * (1 - a) + y * a;

      const handleMouseMove = (dets) => {
        const dims = frame.getBoundingClientRect();
        const xstart = dims.x;
        const xend = dims.x + dims.width;

        // Map mouse X position to a 0 - 1 range across the element width
        const zerone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

        // Slide stacked text up to reveal duplicate and colorize
        gsap.to(spans, {
          color: "#B8C4FF",
          duration: 0.3,
          y: "-100%",
          ease: "power2.out"
        });

        // Magnetic X offset movement based on lerp
        gsap.to(spans, {
          x: lerp(-12, 12, zerone),
          duration: 0.2,
          ease: "power1.out"
        });
      };

      const handleMouseLeave = () => {
        // Reset vertical position, color, and horizontal magnetic offset
        gsap.to(spans, {
          color: "#c9c9c9",
          duration: 0.3,
          y: "0%",
          x: 0,
          ease: "power2.out"
        });
      };

      frame.addEventListener("mousemove", handleMouseMove);
      frame.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        frame.removeEventListener("mousemove", handleMouseMove);
        frame.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    return () => mm.revert();
  }, { scope: frameRef });

  return (
    <a href={href} className="[-webkit-tap-highlight-color:transparent] inline-block">
      <div ref={frameRef} className="frame overflow-hidden h-7 cursor-pointer relative flex flex-col justify-start">
        <span className="nav-span text-[18px] xl:text-[20px] font-semibold text-[#c9c9c9] tracking-wide uppercase h-7 flex items-center shrink-0 leading-none">
          {label}
        </span>
        <span className="nav-span text-[18px] xl:text-[20px] font-semibold text-[#c9c9c9] tracking-wide uppercase h-7 flex items-center shrink-0 leading-none">
          {label}
        </span>
      </div>
    </a>
  );
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const containerRef = useRef(null);

  // Smooth entrance animation when mobile menu opens
  useGSAP(() => {
    if (menu) {
      const tl = gsap.timeline();

      tl.fromTo(
        ".mobile-overlay",
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
      );

      tl.fromTo(
        ".mobile-link",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: "power2.out" },
        "-=0.25"
      );
    }
  }, { scope: containerRef, dependencies: [menu] });

  // Smooth exit animation before closing state
  const closeMenu = (tabName) => {
    if (tabName) setActiveTab(tabName);

    const tl = gsap.timeline({
      onComplete: () => setMenu(false)
    });

    tl.to(".mobile-link", {
      y: 20,
      opacity: 0,
      duration: 0.2,
      stagger: 0.04,
      ease: "power2.in"
    });

    tl.to(".mobile-overlay", {
      y: "-100%",
      opacity: 0,
      duration: 0.4,
      ease: "power3.in"
    }, "-=0.1");
  };

  const toggleMenu = () => {
    if (menu) {
      closeMenu();
    } else {
      setMenu(true);
    }
  };

  const navItems = [
    { id: 'home', label: 'HOME', href: '#home', icon: House },
    { id: 'about', label: 'ABOUT', href: '#about', icon: User },
    { id: 'skills', label: 'SKILLS', href: '#skills', icon: CodeXml },
    { id: 'projects', label: 'PROJECTS', href: '#projects', icon: Folder },
    { id: 'certificate', label: 'CERTIFICATION', href: '#certificate', icon: Award },
    { id: 'contact', label: 'CONTACT', href: '#contact', icon: Mail },
  ];

  return (
    <>
      <section ref={containerRef} className='navbar-section fixed top-0 left-0 w-full z-50 bg-[#0E0F10]'>
        {/* Main Navbar Header */}
        <div className='navbar flex justify-between items-center px-6 sm:px-12 lg:px-22 py-5 sm:py-6 border-b-2 border-b-gray-700 relative z-20 bg-[#0E0F10]'>

          {/* Logo */}
          <a href='#home' className='no-tap-highlight outline-none focus:outline-none [-webkit-tap-highlight-color:transparent]'>
            <nav className='logo font-bold uppercase text-[#E3E2E5] text-[22px] sm:text-[24px] lg:text-[26px] tracking-tighter cursor-pointer select-none [-webkit-tap-highlight-color:transparent]'>
              Pratham Seth
            </nav>
          </a>

          {/* Animated Desktop Navigation Links */}
          <ul className='list hidden lg:flex items-center gap-8 xl:gap-15'>
            <DesktopNavItem label="About" href="#about" />
            <DesktopNavItem label="Skills" href="#skills" />
            <DesktopNavItem label="Projects" href="#projects" />
            <DesktopNavItem label="Certification" href="#certificate" />
            <DesktopNavItem label="Contact" href="#contact" />
          </ul>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <button
              className='cursor-pointer p-1 focus:outline-none [-webkit-tap-highlight-color:transparent]'
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {menu ? (
                <X color='#c9c9c9' size={28} strokeWidth={3} />
              ) : (
                <Menu color='#B8C4FF' size={28} strokeWidth={3} />
              )}
            </button>
          </div>
        </div>

        {/* GSAP Animated Mobile Overlay */}
        {menu && (
          <div className='mobile-overlay fixed inset-0 top-0 left-0 w-full h-screen bg-[#090D14] z-10 pt-28 px-6 sm:px-10 flex flex-col justify-start lg:hidden overflow-y-auto'>
            <div className='flex flex-col gap-3.5 w-full max-w-md mx-auto pb-10'>
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => closeMenu(item.id)}
                    className='mobile-link w-full [-webkit-tap-highlight-color:transparent]'
                  >
                    <div
                      className={`flex items-center justify-between px-6 py-4.5 rounded-full transition-all duration-300 ${isActive
                          ? 'bg-[#111A24] border border-[#B3E860]/30 shadow-lg'
                          : 'bg-transparent hover:bg-[#111A24]/60'
                        }`}
                    >
                      <div className='flex items-center gap-6'>
                        <IconComponent
                          size={24}
                          className={isActive ? 'text-[#B3E860]' : 'text-[#8E9AAF]'}
                          strokeWidth={2.2}
                        />
                        <span
                          className={`text-base sm:text-lg font-bold tracking-widest ${isActive ? 'text-[#B3E860]' : 'text-[#A0ABC0]'
                            }`}
                        >
                          {item.label}
                        </span>
                      </div>

                      <MoveRight
                        size={20}
                        className={isActive ? 'text-[#B3E860]' : 'text-[#8E9AAF]'}
                        strokeWidth={2.2}
                      />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Navbar;