import { useEffect } from "react";

export const useStaticEffect = (canvasId: string): void => {
  useEffect(() => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };

    resize();
    window.addEventListener("resize", resize);

    const drawStatic = () => {
      const w = canvas.width;
      const h = canvas.height;
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;

      const hFlicker =
        Math.random() < 0.04 ? Math.floor(Math.random() * h) : -1;
      const hShift =
        Math.random() < 0.06 ? Math.floor((Math.random() - 0.5) * 12) : 0;

      for (let y = 0; y < h; y++) {
        const isHLine = y === hFlicker;
        const scanShift = isHLine ? Math.floor(Math.random() * 20) : hShift;

        for (let x = 0; x < w; x++) {
          const sx = (x + scanShift + w) % w;
          const i = (y * w + sx) * 4;

          let brightness: number;
          if (isHLine) {
            brightness = 180 + Math.floor(Math.random() * 75);
          } else {
            const base = Math.random();
            const noise =
              base < 0.5 ? base * base * 2 : 1 - (1 - base) * (1 - base) * 2;
            brightness = Math.floor(noise * 230 + 15);
            if (Math.random() < 0.003)
              brightness = 240 + Math.floor(Math.random() * 15);
            if (Math.random() < 0.001)
              brightness = 10 + Math.floor(Math.random() * 20);
          }

          data[i] = brightness;
          data[i + 1] = Math.floor(brightness * 0.97 + Math.random() * 8);
          data[i + 2] = Math.floor(brightness * 0.88 + Math.random() * 18);
          data[i + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);

      if (Math.random() < 0.008) {
        ctx.fillStyle = "rgba(255,255,255,0.05)";
        ctx.fillRect(0, Math.floor(Math.random() * h), w, 2);
      }

      requestAnimationFrame(drawStatic);
    };

    drawStatic();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [canvasId]);
};
