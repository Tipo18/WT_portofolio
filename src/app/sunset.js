import { useEffect } from "react";

export function sunset() {
  useEffect(() => {
    const glow = document.getElementById("glow");
    if (!glow) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    const speed = 0.125; // smaller = slower trail

    const updateGlow = (x, y) => {
      const scrollY = window.scrollY;
      const fullHeight = document.body.scrollHeight;
      const absoluteY = y + scrollY;
      const ratio = Math.min(absoluteY / fullHeight, 1);

      glow.style.setProperty("--x", `${x}px`);
      glow.style.setProperty("--y", `${y}px`);

      const topColor = [255, 210, 120];
      const midColor = [255, 150, 60];
      const bottomColor = [230, 100, 40];
      const alpha = 0.2 + Math.min(Math.max(ratio / 0.8, 0), 0.8);
      const interpolate = (a, b, t) => a + (b - a) * t;

      let color;
      if (ratio < 0.1) {
        const t = ratio * 2;
        color = topColor.map((c, i) => interpolate(c, midColor[i], t));
      } else {
        const t = (ratio - 0.1) * 2;
        color = midColor.map((c, i) => interpolate(c, bottomColor[i], t));
      }

      glow.style.setProperty(
        "--core-color",
        `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`
      );
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleScroll = () => {
      updateGlow(currentX, currentY);
    };

    const animate = () => {
      // Interpolate current position toward the mouse
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      updateGlow(currentX, currentY);
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    animate(); // start animation loop

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
