import { useEffect } from "react";

export function cursor() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    // -------- Custom cursor --------
    const cursorDot = document.querySelector(".cursor-dot");
    if (cursorDot) {
      let mouseX = 0;
      let mouseY = 0;
      let currentX = 0;
      let currentY = 0;
      const speed = 0.25;

      const handleMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      const animate = () => {
        currentX += (mouseX - currentX) * speed;
        currentY += (mouseY - currentY) * speed;
        cursorDot.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
        requestAnimationFrame(animate);
      };

      document.addEventListener("mousemove", handleMouseMove);
      animate(); // start animation loop

      // cleanup on unmount
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        observer.disconnect();
      };
    }
  }, []);
}
