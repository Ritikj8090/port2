"use client"
import About from '@/components/About'
import Background from '@/components/Background'
import Contact from '@/components/Contact'
import Lab from '@/components/Lab'
import Navbar from '@/components/Navbar'
import Start from '@/components/Start'
import Work from '@/components/Work'
import { useEffect, useRef, useState } from 'react'


export default function Main() {
  const dotRef = useRef(null);
  const borderRef = useRef(null);
  const [mdot, setmdot] = useState({
    doot: 0,
    pooint: 0,
  });
  useEffect(() => {
    const dot = dotRef.current;
    const border = borderRef.current;
    setmdot({
      doot: dotRef.current,
      pooint: borderRef.current,
    });

    window.addEventListener("mousemove", function (e) {
      const posX = e?.clientX;
      const posY = e?.clientY;

      dot.style.left = `${posX}px`;
      dot.style.top = `${posY}px`;

      border.style.left = `${posX}px`;
      border.style.top = `${posY}px`;
 
      border.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    });
  }, []);
  return (
    
    <div className='relative w-full overflow-hidden'>
      <div ref={borderRef} className="cursor-border"></div>
      <div ref={dotRef} className="cursor-point"></div>
     <div className='absolute'> <Background/></div>
      <Navbar dot={mdot.doot} border={mdot.pooint} />
      <Start dot={mdot.doot} border={mdot.pooint} />
      <Work dot={mdot.doot} border={mdot.pooint} />
      <About dot={mdot.doot} border={mdot.pooint} />
      <Lab dot={mdot.doot} border={mdot.pooint} />
      <Contact dot={mdot.doot} border={mdot.pooint} />
    </div>

  )
}
