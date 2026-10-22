import React, { useEffect, useRef } from 'react';

export default function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    // Compact fixed dimensions ideal for embedded/footer use
    const size = 120;
    const pixelScale = 4;
    canvas.width = size;
    canvas.height = size;

    const config = {
      dilationRadius: 100,
      maxDilation: 1.7,
      easeSpeed: 0.12,
    };

    // Tracking positions relative to canvas center
    const mouseTarget = { x: size / 2, y: size / 2 };
    const mouseCurrent = { x: size / 2, y: size / 2 };

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX);
      const clientY = e.clientY ?? (e.touches && e.touches[0]?.clientY);

      if (clientX !== undefined && clientY !== undefined) {
        mouseTarget.x = clientX - rect.left;
        mouseTarget.y = clientY - rect.top;
      }
    };

    class MonochromePixelEye {
      constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;

        this.irisX = x;
        this.irisY = y;

        this.pupilDilation = 1.0;
        this.blinkProgress = 0;
        this.isBlinking = false;
        this.blinkSpeed = 0.2;

        this.generateVeins();
      }

      generateVeins() {
        this.veins = [];
        const count = 6;
        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
          const length = 0.35 + Math.random() * 0.35;
          this.veins.push({ angle, length });
        }
      }

      triggerBlink() {
        if (!this.isBlinking) {
          this.isBlinking = true;
          this.blinkProgress = 0;
          this.blinkSpeed = 0.2;
        }
      }

      update() {
        // Lerp coordinates
        mouseCurrent.x += (mouseTarget.x - mouseCurrent.x) * config.easeSpeed;
        mouseCurrent.y += (mouseTarget.y - mouseCurrent.y) * config.easeSpeed;

        // Blinking logic
        if (this.isBlinking) {
          this.blinkProgress += this.blinkSpeed;
          if (this.blinkProgress >= 1) {
            this.blinkProgress = 1;
            this.blinkSpeed = -0.2;
          } else if (this.blinkProgress <= 0 && this.blinkSpeed < 0) {
            this.blinkProgress = 0;
            this.isBlinking = false;
          }
        } else if (Math.random() < 0.004) {
          this.triggerBlink();
        }

        // Proximity dilation distance relative to canvas
        const dx = mouseCurrent.x - this.x;
        const dy = mouseCurrent.y - this.y;
        const distance = Math.hypot(dx, dy);

        if (distance < config.dilationRadius) {
          const proximity = 1 - distance / config.dilationRadius;
          const curve = Math.pow(proximity, 1.3);
          const targetDilation = 1.0 + curve * (config.maxDilation - 1.0);
          this.pupilDilation += (targetDilation - this.pupilDilation) * 0.15;
        } else {
          this.pupilDilation += (1.0 - this.pupilDilation) * 0.15;
        }

        // Iris positioning within boundary
        const maxIrisOffset = this.radius * 0.4;
        let targetIrisX = this.x;
        let targetIrisY = this.y;

        if (distance > 0) {
          const offset = Math.min(distance, maxIrisOffset);
          targetIrisX = this.x + (dx / distance) * offset;
          targetIrisY = this.y + (dy / distance) * offset;
        }

        this.irisX += (targetIrisX - this.irisX) * config.easeSpeed;
        this.irisY += (targetIrisY - this.irisY) * config.easeSpeed;
      }

      draw(ctx) {
        const snap = (v) => Math.round(v / pixelScale) * pixelScale;

        const qX = snap(this.x);
        const qY = snap(this.y);
        const qR = snap(this.radius);

        ctx.save();

        // 1. Sclera Outer Edge / Glow (White/Grey Accent)
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 6;
        this.drawPixelCircle(ctx, qX, qY, qR, pixelScale, '#ffffff');
        ctx.shadowBlur = 0;

        // 2. Sclera Inner Fill
        this.drawPixelCircle(
          ctx,
          qX - qR * 0.1,
          qY - qR * 0.1,
          qR * 0.85,
          pixelScale,
          '#d1d5db'
        );

        // 3. Subtle Dark Greyscale Veins
        ctx.fillStyle = '#9ca3af';
        this.veins.forEach((vein) => {
          const startR = qR * 0.45;
          const endR = qR * (0.45 + vein.length * 0.4);
          const steps = Math.floor((endR - startR) / pixelScale);

          for (let s = 0; s < steps; s++) {
            const currentR = startR + s * pixelScale;
            const vx = snap(qX + Math.cos(vein.angle) * currentR);
            const vy = snap(qY + Math.sin(vein.angle) * currentR);
            if (Math.hypot(vx - qX, vy - qY) < qR - pixelScale) {
              ctx.fillRect(vx, vy, pixelScale, pixelScale);
            }
          }
        });

        // 4. Iris Rings (Greyscale Gradient)
        const qIx = snap(this.irisX);
        const qIy = snap(this.irisY);

        const baseIrisR = qR * 0.48;
        const qIrisR = snap(baseIrisR * (1 + (this.pupilDilation - 1) * 0.2));

        // Outer Dark Iris
        this.drawPixelCircle(ctx, qIx, qIy, qIrisR, pixelScale, '#1f2937');
        // Inner Mid-Grey Iris Ring
        this.drawPixelCircle(
          ctx,
          qIx,
          qIy,
          snap(qIrisR * 0.72),
          pixelScale,
          '#4b5563'
        );

        // 5. Deep Black Dilating Pupil
        const basePupilR = qIrisR * 0.42;
        const dilatedPupilR = snap(basePupilR * this.pupilDilation);
        this.drawPixelCircle(ctx, qIx, qIy, dilatedPupilR, pixelScale, '#000000');

        // 6. Crisp White Specular Catchlight
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(
          snap(qIx - qIrisR * 0.3),
          snap(qIy - qIrisR * 0.3),
          pixelScale,
          pixelScale
        );

        // 7. Eyelid Blinking (Solid Black)
        if (this.blinkProgress > 0) {
          ctx.fillStyle = '#000000';
          const lidHeight = qR * 2.2 * this.blinkProgress;

          ctx.fillRect(
            qX - qR - pixelScale * 2,
            qY - qR - pixelScale * 2,
            qR * 2.4,
            lidHeight
          );
          ctx.fillRect(
            qX - qR - pixelScale * 2,
            qY + qR + pixelScale * 2 - lidHeight,
            qR * 2.4,
            lidHeight
          );

          // Eyelid White Outline Detail
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(
            qX - qR - pixelScale * 2,
            qY - qR - pixelScale * 2 + lidHeight - pixelScale,
            qR * 2.4,
            pixelScale
          );
          ctx.fillRect(
            qX - qR - pixelScale * 2,
            qY + qR + pixelScale * 2 - lidHeight,
            qR * 2.4,
            pixelScale
          );
        }

        ctx.restore();
      }

      drawPixelCircle(ctx, cx, cy, radius, pixelScale, color) {
        ctx.fillStyle = color;
        const rSq = radius * radius;

        for (let y = -radius; y <= radius; y += pixelScale) {
          for (let x = -radius; x <= radius; x += pixelScale) {
            if (x * x + y * y <= rSq) {
              ctx.fillRect(
                Math.round((cx + x) / pixelScale) * pixelScale,
                Math.round((cy + y) / pixelScale) * pixelScale,
                pixelScale,
                pixelScale
              );
            }
          }
        }
      }
    }

    const eye = new MonochromePixelEye(size / 2, size / 2, 42);

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    let animationFrameId;
    const render = () => {
      ctx.clearRect(0, 0, size, size);
      eye.update();
      eye.draw(ctx);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
    };
  }, []);

  return (
    <div className="inline-flex items-center justify-center cursor-default select-none">
      <canvas
        ref={canvasRef}
        className="w-25 h-25"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  );
}