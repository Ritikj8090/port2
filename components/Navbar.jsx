"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import menu from "../public/svg/menu.svg";
import close from "../public/svg/close.svg";
import { NavBarOrder } from "@/constant";

const NavBar = ({ dot, border }) => {
  const [prevScroll, setprevScroll] = useState(0);
  const [isActive, setIsActive] = useState('1');
  const [menutoggle, setMenutoggle] = useState(true);

  const handleScroll = () => {
    setprevScroll(window.scrollY);
    if (prevScroll < 1000) {
      setIsActive('1')
    }
    if (prevScroll > 1000 && prevScroll < 2550) {
      setIsActive('2')
    }
    if (prevScroll > 2550 && prevScroll < 3600) {
      setIsActive('3')
    }
    if (prevScroll > 3600) {
      setIsActive('4')
    }
    scroll();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScroll]);

  function scroll() {
    if (document.documentElement.scrollTop >= prevScroll) {
      document.getElementById("navlist").style.top = "-60px";
    } else {
      document.getElementById("navlist").style.top = "0";
    }
  }
  //console.log(isActive)
  return (
    <nav id="navlist" className="flex p-4 items-center justify-between w-full top-0 ease-in-out duration-500 fixed z-50">
      <span

        className="flex items-center cursor-none"
        onClick={() => { window.scrollTo(0, 0); setIsActive('1') }}
        onMouseEnter={() => {
          border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
        }}
        onMouseLeave={() => {
          border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
        }}
      >
        <span className="text-3xl pri-col tracking-wider mr-1">&lt;</span>
        <span className="text-5xl tracking-wider">RITIK</span>
        <span className="text-3xl pri-col tracking-wider ml-1">/&gt;</span>
      </span>
      <div className="text-2xl hidden md:flex ">
        <ul className="list-none tracking-wide">
          {
            NavBarOrder.map((nav) => {
              return (
                <span
                  className={`${isActive === nav.number ? "active" : "deactivate"}
             cursor-none hover:${isActive !== nav.name ? "text-gray-400" : "activate"
                    } mr-3 ease-in-out duration-500`}
                  key={nav.number}
                  onClick={() => { scrollTo(nav.x, nav.y); setIsActive(nav.number); }}
                  onMouseEnter={() => { border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;` }}
                  onMouseLeave={() => { border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;` }}
                >
                  {nav.name}
                </span>

              )
            })
          }
        </ul>
      </div>
      <div className="md:hidden flex">
        <Image src={menutoggle ? menu : close} alt="menu" className="h-10 w-16 " onClick={() => { setMenutoggle(!menutoggle) }} />
        <div className={`${menutoggle ? "hidden" : "flex"} p-6 black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none tracking-wide  flex justify-end items-start flex-col gap-2">
            {
              NavBarOrder.map((nav) => {
                return (
                  <span
                    className={`${isActive === nav.name ? "active" : "deactivate"
                      } cursor-none hover:${isActive !== nav.name ? "text-gray-400" : "activate"
                      } mr-3 ease-in-out duration-500`}
                    key={nav.number}
                    onClick={() => { scrollTo(nav.x, nav.y); setMenutoggle(!menutoggle) }}
                    onMouseEnter={() => { border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;` }}
                    onMouseLeave={() => { border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;` }}
                  >
                    {nav.name}
                  </span>

                )
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
