
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  // Use a ref to track if initial position is set to avoid jump from 0,0
  const hasMoved = useRef(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!hasMoved.current) hasMoved.current = true;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check for pointer-cursor elements
      const isLink = target.tagName === 'A' || 
                     target.tagName === 'BUTTON' || 
                     target.closest('a') || 
                     target.closest('button') ||
                     window.getComputedStyle(target).cursor === 'pointer';
                     
      setIsHovering(!!isLink);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!hasMoved.current) return null;

  return (
    <>
      {/* Main Dot - Very snappy, almost no delay */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : 1, // Hide main dot when hovering (ring takes over) or scale up differently
        }}
        transition={{
          type: "spring",
          stiffness: 1000, // Very high stiffness for instant follow
          damping: 50,
          mass: 0.1
        }}
      />
      
      {/* Outer Ring - Follows with slight delay */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)',
        }}
        transition={{
          type: "spring",
          stiffness: 300, 
          damping: 25,
          mass: 0.1
        }}
      >
        {/* Text inside cursor when hovering? Optional */}
      </motion.div>
    </>
  );
};

export default CustomCursor;
