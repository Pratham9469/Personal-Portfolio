import React, { useState, useRef, useEffect } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loading = () => {
  const [num, setNum] = useState(0)
  const [lines, setLines] = useState("INITIALIZING EXPERIENCE");
  const [isFinished, setIsFinished] = useState(false);

  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;

    if (!title) return;

    const chars = title.querySelectorAll(".loading-char");

    let mouseX = -1000;
    let mouseY = -1000;

    const state = Array.from(chars, () => ({
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
    }));

    let rects = [];

    // Get the original position of every letter
    const measure = () => {
      rects = Array.from(chars, (char) => {
        const rect = char.getBoundingClientRect();

        return {
          cx: rect.left + rect.width / 2,
          cy: rect.top + rect.height / 2,
        };
      });
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Touch support for mobile interaction preview
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("resize", measure);

    measure();

    let animationId;

    const lerp = (a, b, n) => a + (b - a) * n;

    const animate = () => {
      // Move each letter away from the mouse / touch point
      chars.forEach((char, i) => {
        const rect = rects[i];

        if (!rect) return;

        const dx = rect.cx - mouseX;
        const dy = rect.cy - mouseY;
        const distance = Math.hypot(dx, dy);

        const radius = 140;
        const strength = 34;

        if (distance < radius) {
          const falloff = 1 - distance / radius;
          const angle = Math.atan2(dy, dx);

          state[i].tx = Math.cos(angle) * falloff * strength;
          state[i].ty = Math.sin(angle) * falloff * strength;
        } else {
          state[i].tx = 0;
          state[i].ty = 0;
        }

        // Smoothly return each letter to its original position using lerp
        state[i].x = lerp(state[i].x, state[i].tx, 0.14);
        state[i].y = lerp(state[i].y, state[i].ty, 0.14);

        char.style.transform = `
          translate3d(${state[i].x}px, ${state[i].y}px, 0)
        `;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up when the component unmounts
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", measure);
    };
  }, []);

  useGSAP(() => {
    const obj = { value: 0 }

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(".loader", {
          yPercent: -100,
          duration: 1,
          ease: "power2.out",
          force3D: true,
          onComplete: () => {
            setIsFinished(true); // Unmounts cleanly to prevent any blink or re-trigger
            window.dispatchEvent(new Event("navbarDone"));
          }
        })
      }
    })

    // Animate to 25%
    tl.to(obj, {
      value: 25,
      duration: 1.25,
      ease: "none",
      onStart: () => {
        setLines("INITIALIZING EXPERIENCE")
      },
      onUpdate: () => {
        setNum(Math.round(obj.value))
        gsap.set(".progress-bar", {
          width: `${obj.value}%`,
          force3D: true
        })
      }
    })

      // Short pause
      .to({}, { duration: 0.2 })

      // Animate to 50%
      .to(obj, {
        value: 50,
        duration: 1.25,
        ease: "none",
        onStart: () => {
          setLines("LOADING CREATIVITY");

          gsap.fromTo(".loading-font2",
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, force3D: true }
          );
        },
        onUpdate: () => {
          setNum(Math.round(obj.value))
          gsap.set(".progress-bar", {
            width: `${obj.value}%`,
            force3D: true
          })
        }
      })

      .to({}, { duration: 0.2 })

      // Animate to 75%
      .to(obj, {
        value: 75,
        duration: 1.25,
        ease: "none",
        onStart: () => {
          setLines("ALMOST THERE");

          gsap.fromTo(".loading-font2",
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, force3D: true }
          );
        },
        onUpdate: () => {
          setNum(Math.round(obj.value))
          gsap.set(".progress-bar", {
            width: `${obj.value}%`,
            force3D: true
          })
        }
      })

      .to({}, { duration: 0.2 })

      // Finish at 100%
      .to(obj, {
        value: 100,
        duration: 1.25,
        ease: "none",
        onStart: () => {
          setLines("GETTING THINGS READY")
          gsap.fromTo(".loading-font2",
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, force3D: true }
          );
        },
        onUpdate: () => {
          setNum(Math.round(obj.value))
          gsap.set(".progress-bar", {
            width: `${obj.value}%`,
            force3D: true
          })
        }
      })
      .to({}, { duration: 0.6 })
      .to(obj, {
        value: 100,
        duration: 1.25,
        ease: "none",
        onStart: () => {
          setLines("WELCOME")
          gsap.fromTo(".loading-font2",
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, force3D: true }
          );
        }
      })
  }, { dependencies: [] })

  if (isFinished) return null;

  return (
    <>
      <section className="bg-black fixed inset-0 z-100 w-full h-screen loader select-none [-webkit-tap-highlight-color:transparent]">

        <div
          ref={titleRef}
          className='flex flex-col items-center justify-center h-full px-4 text-center'
        >
          <h1 className='loading-name loading-font font-extrabold text-[38px] sm:text-[80px] lg:text-[100px] leading-none uppercase text-[#E3E2E5]'>
            {"Pratham".split("").map((char, index) => (
              <span key={index} className="loading-char inline-block will-change-transform">
                {char}
              </span>
            ))}
          </h1>

          <h1 className='loading-name loading-font font-extrabold text-[38px] sm:text-[80px] lg:text-[100px] leading-none uppercase text-[#B8C4FF] mt-2'>
            {"Seth".split("").map((char, index) => (
              <span key={index} className="loading-char inline-block will-change-transform">
                {char}
              </span>
            ))}
          </h1>
        </div>

        <div className='absolute top-[65%] left-1/2 -translate-x-1/2 text-center w-full px-4'>
          <h1 className='loading-font2 text-[16px] sm:text-[26px] tracking-wider uppercase text-[#a5a5a5] will-change-transform'>{lines}</h1>
        </div>

        <div className='absolute top-[80%] sm:top-[83%] right-8 sm:right-10'>
          <h3 className='loading-font3 text-[50px] sm:text-[80px] font-bold text-[#E3E2E5]'>{num}%</h3>
        </div>

        <div className='absolute bottom-15 left-8 right-8 h-0.75 bg-gray-800 overflow-hidden'>
          <div className='progress-bar h-full w-0 bg-[#4159d2] will-change-transform'></div>
        </div>
      </section>
    </>
  )
}

export default Loading;