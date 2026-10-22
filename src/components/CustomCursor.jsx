import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useGSAP(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Only enable cursor logic on desktop/laptop viewports with a mouse
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px) and (pointer: fine)", () => {
      let mouseX = 0;
      let mouseY = 0;
      let cx = 0;
      let cy = 0;
      let lastX = 0;
      let lastY = 0;
      let rafId = null;
      let isMoving = false;

      const lerp = (a, b, n) => a + (b - a) * n;
      const clamp = (v, min, max) =>
        Math.max(min, Math.min(max, v));

      const handleMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.opacity = 1;

        if (!isMoving) {
          isMoving = true;
          lastX = mouseX;
          lastY = mouseY;
          rafId = requestAnimationFrame(animate);
        }
      };

      const animate = () => {
        cx = lerp(cx, mouseX, 0.2);
        cy = lerp(cy, mouseY, 0.2);

        const vx = mouseX - lastX;
        const vy = mouseY - lastY;

        lastX = mouseX;
        lastY = mouseY;

        const speed = clamp(Math.hypot(vx, vy), 0, 30);
        const stretch = 1 + speed / 30;
        const angle = Math.atan2(vy, vx) * (180 / Math.PI);
        const scaleY = 1 / Math.sqrt(stretch);

        cursor.style.transform = `
          translate3d(${cx}px, ${cy}px, 0)
          rotate(${angle}deg)
          scale(${stretch}, ${scaleY})
        `;

        const distance = Math.hypot(mouseX - cx, mouseY - cy);

        if (distance > 0.5) {
          rafId = requestAnimationFrame(animate);
        } else {
          cx = mouseX;
          cy = mouseY;
          isMoving = false;
          rafId = null;
        }
      };

      window.addEventListener("mousemove", handleMouseMove, {
        passive: true,
      });

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
        }
      };
    });

    return () => mm.revert();
  }, []);

  return <div ref={cursorRef} className="custom-cursor hidden lg:block" />;
};

export default CustomCursor;