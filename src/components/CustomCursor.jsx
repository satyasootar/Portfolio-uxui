import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const animationRef = useRef();
  const [isHovering, setIsHovering] = useState(false);

  // Configurable variables
  const sensitivity = 0.2; // Higher for more responsive movement
  const cursorSize = 22; // Small cursor size
  const hoverWidth = 120; // Width when hovering
  const hoverHeight = 40; // Height when hovering

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Adjust positioning based on cursor state
      const currentWidth = isHovering ? hoverWidth : cursorSize;
      const currentHeight = isHovering ? hoverHeight : cursorSize;

      mouseX.current = e.clientX - currentWidth / 2;
      mouseY.current = e.clientY - currentHeight / 2;
    };

    const handleMouseEnter = (e) => {
      // Check if hovering over a card or any element with data-cursor-hover attribute
      if (e.target.closest('.card, [data-cursor-hover="true"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      // Check if leaving a card or any element with data-cursor-hover attribute
      if (!e.relatedTarget || !e.relatedTarget.closest('.card, [data-cursor-hover="true"]')) {
        setIsHovering(false);
      }
    };

    const animate = () => {
      // Use the configurable sensitivity
      currentX.current += (mouseX.current - currentX.current) * sensitivity;
      currentY.current += (mouseY.current - currentY.current) * sensitivity;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX.current}px, ${currentY.current}px, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize cursor position to center of screen
    currentX.current = window.innerWidth / 2 - cursorSize / 2;
    currentY.current = window.innerHeight / 2 - cursorSize / 2;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);
    animationRef.current = requestAnimationFrame(animate);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
      // Restore default cursor
      document.body.style.cursor = 'auto';
    };
  }, [sensitivity, isHovering]);

  return (
    <div className="hidden md:block">
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed z-50 transition-all duration-300 ease-out flex items-center justify-center gap-2 ${isHovering
          ? 'rounded-[20px] bg-black border-2 opacity-70 border-gray-500 border-opacity-30 backdrop-blur-sm'
          : 'rounded-full bg-white'
          }`}
        style={{
          width: isHovering ? `${hoverWidth}px` : `${cursorSize}px`,
          height: isHovering ? `${hoverHeight}px` : `${cursorSize}px`,
          mixBlendMode: isHovering ? 'normal' : 'difference',
        }}
      >
        {isHovering && (
          <>
            <span className="text-white text-xl font-lexend">View</span>
            <svg
              className="w-3 h-3 text-white"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </>
        )}
      </div>
    </div>
  );

}

export default CustomCursor;