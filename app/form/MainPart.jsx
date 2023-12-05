"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import close from "../../public/svg/close.svg";
import { useRouter } from "next/navigation";
import axios from "axios";
 
const MainPart = () => {
  const route = useRouter();
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    body: "",
  });
  const handleChange = (e) => {
  
      setErrorForm({...ErrorForm, name:true})
      console.log(ErrorForm.name)

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if(formData.body === ""){
      setErrorForm({...ErrorForm , body:false})
    }
    else if (formData.name === "") {
      setErrorForm({...ErrorForm ,name:false})
    } else if (formData.email === "") {
      setErrorForm({...ErrorForm ,email:false})
    } else {
      try {
        const res = await axios.post('http://localhost:3000/api/query', formData)
      //console.log(res.status);
      route.push("/thank");
      } catch (error) {
        if(error.code === 'ERR_BAD_REQUEST')
          route.push('/Page_Not_Found')
      }
    }
  };

  const [ErrorForm, setErrorForm] = useState({
    body: true,
      name: true,
      email: true,
  })

  return (
    <>
      <div>
        <div ref={borderRef} className="cursor-border"></div>
        <div ref={dotRef} className="cursor-point"></div>
      </div>
      <div
        className={`cursor-none justify-center items-center flex h-screen w-full top-0 right-0 left-0 bottom-0 fixed bg-[#0f0d15]`}
      >
        <div>
          <div
            className="top-5 right-5 absolute "
            onClick={() => {
              route.push("/");
            }}
            onMouseEnter={() => {
              mdot.pooint.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
            onMouseLeave={() => {
              mdot.pooint.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
          >
            <Image src={close} alt="close" />
          </div>
          <div className="flex justify-center items-center text-3xl font-bold">
            Get in touch!
          </div>
          <div className="flex justify-center items-center cursor-none">
            <div className=" border-[1px] border-[#4b4646] w-40 h-0"></div>
          </div>
          <div className="flex">
            <div className="w-full flex my-28 text-xl font-mono">
              Hi, my name is
              <div
                className="input-container"
                onMouseEnter={() => {
                  mdot.pooint.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
                }}
                onMouseLeave={() => {
                  mdot.pooint.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
                }}
              >
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className={`px-3  border-white border-b-2 ${ErrorForm.body ? "focus-within:border-blue-800" : "border-red-800"} `}
                />

              </div>
              and my email is
              <div
                className="input-container"
                onMouseEnter={() => {
                  mdot.pooint.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
                }}
                onMouseLeave={() => {
                  mdot.pooint.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
                }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  required
                  className={`px-3 border-b-2 ${ErrorForm.body ? "focus-within:border-blue-800" : "border-red-800"}`}
                />
          
              </div>
            </div>
            
          </div>
          <div>
          <div
                className="input-container"
                onMouseEnter={() => {
                  mdot.pooint.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
                }}
                onMouseLeave={() => {
                  mdot.pooint.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
                }}
              >
                <textarea
                rows={5}
                placeholder="Your Message"
                  type="text"
                  name="body"
                  onChange={handleChange}
                  required
                  className={`border-b-2 bg-transparent w-full font-mono outline-none ${ErrorForm.body ? "focus-within:border-blue-800" : "border-red-800"} cursor-none`}
                />
                
              </div>
          </div>
          <div className="flex justify-center items-center mt-10 gap-5">
            <div className="deactivate ">STEP 1/1</div>
            <motion.button
              onMouseEnter={() => {
                mdot.pooint.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
              }}
              onMouseLeave={() => {
                mdot.pooint.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
              }}
              whileHover={{ scale: 1.2 }}
              className="btn shadow rounded-3xl w-[150px] h-[50px] font-mono font-semibold px-2 py-2  text-xl cursor-none "
              onClick={handleSubmit}
            >
              SUBMIT&#8594;
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPart;
