import React, { useState, useEffect } from "react";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  let [showContent, setShowContent] = useState(false);
  let [isNavOpen, setIsNavOpen] = useState(false);
  let [showHoverImg, setShowHoverImg] = useState(false);
  let [showHoverImgLucia, setShowHoverImgLucia] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = React.useRef(null);
  // Navbar section refs
  const jasonRef = React.useRef(null);
  const viceCityRef = React.useRef(null);
  let navCloseTimeout = React.useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });

    // Navigation menu animation
    if (isNavOpen) {
      gsap.fromTo(
        ".nav-menu",
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.8, ease: "Power4.easeOut" }
      );
    } else {
      gsap.to(".nav-menu", {
        x: "-100%",
        opacity: 0,
        duration: 0.8,
        ease: "Power4.easeIn",
      });
    }
  }, [showContent, isNavOpen]);

  useEffect(() => {
    if (!showContent) return;
    // Animate text highlight (yellow, bold)
    gsap.fromTo(
      ".highlight-text",
      { backgroundPosition: "100% 0", color: "#fff" },
      {
        backgroundImage: "linear-gradient(90deg, #fff 50%, #ffe066 50%)",
        backgroundSize: "200% 100%",
        backgroundPosition: "0% 0",
        color: "#ffe066",
        fontWeight: "bold",
        duration: 1,
        scrollTrigger: {
          trigger: ".highlight-text",
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
    // Animate image in
    gsap.to(".character-img", {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".character-img",
        start: "top 85%",
        end: "bottom 60%",
        scrub: true,
      },
    });
    // Animate the entire Jason Duval section
    gsap.fromTo(
      ".jason-section-animate",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".jason-section-animate",
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
    // Animate pop-out images on hover (Jason)
    if (showHoverImg) {
      gsap.to(".jason-pop-1", {
        opacity: 1,
        scale: 1,
        x: -160,
        y: -100,
        duration: 0.5,
        pointerEvents: "auto",
        ease: "power3.out",
      });
      gsap.to(".jason-pop-2", {
        opacity: 1,
        scale: 1,
        x: 160,
        y: 100,
        duration: 0.5,
        pointerEvents: "auto",
        ease: "power3.out",
      });
    } else {
      gsap.to([".jason-pop-1", ".jason-pop-2"], {
        opacity: 0,
        scale: 0.7,
        x: 0,
        y: 0,
        duration: 0.5,
        pointerEvents: "none",
        ease: "power3.in",
      });
    }
    // Animate Lucia section
    gsap.fromTo(
      ".lucia-section-animate",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".lucia-section-animate",
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
    // Animate pop-out images on hover (Lucia)
    if (showHoverImgLucia) {
      gsap.to(".lucia-pop-1", {
        opacity: 1,
        scale: 1,
        x: -160,
        y: -100,
        duration: 0.5,
        pointerEvents: "auto",
        ease: "power3.out",
      });
      gsap.to(".lucia-pop-2", {
        opacity: 1,
        scale: 1,
        x: 160,
        y: 100,
        duration: 0.5,
        pointerEvents: "auto",
        ease: "power3.out",
      });
    } else {
      gsap.to([".lucia-pop-1", ".lucia-pop-2"], {
        opacity: 0,
        scale: 0.7,
        x: 0,
        y: 0,
        duration: 0.5,
        pointerEvents: "none",
        ease: "power3.in",
      });
    }
  }, [showContent, showHoverImg, showHoverImgLucia]);

  // Handlers for nav auto-close
  const handleNavMouseEnter = () => {
    if (navCloseTimeout.current) {
      clearTimeout(navCloseTimeout.current);
    }
  };
  const handleNavMouseLeave = () => {
    navCloseTimeout.current = setTimeout(() => {
      setIsNavOpen(false);
    }, 300);
  };

  // Update audio volume when volume state changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <>
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/gtavi.mp3"
        autoPlay
        loop
        style={{ display: "none" }}
      />
      {/* Volume Slider */}
      <div
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000,
          background: "rgba(0,0,0,0.7)",
          borderRadius: 12,
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span style={{ color: "#ffe066", fontWeight: 700, fontSize: 18 }}>
          🔊
        </span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          style={{ width: 120 }}
        />
      </div>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div
                  className="lines flex flex-col gap-[5px] cursor-pointer"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  onMouseEnter={handleNavMouseEnter}
                  onMouseLeave={handleNavMouseLeave}
                >
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            {/* Navigation Menu */}
            <div
              className="nav-menu fixed top-0 left-0 w-[300px] h-screen bg-black/90 backdrop-blur-md z-50 p-10"
              onMouseEnter={handleNavMouseEnter}
              onMouseLeave={handleNavMouseLeave}
            >
              <div className="flex flex-col gap-8 mt-20">
                <a
                  href="/"
                  className="text-white text-3xl hover:text-yellow-500 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.reload();
                  }}
                >
                  Home
                </a>
                <a
                  href="#games"
                  className="text-white text-3xl hover:text-yellow-500 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavOpen(false);
                    setTimeout(() => {
                      viceCityRef.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }, 200);
                  }}
                >
                  Games
                </a>
                <a
                  href="#characters"
                  className="text-white text-3xl hover:text-yellow-500 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavOpen(false);
                    setTimeout(() => {
                      jasonRef.current?.scrollIntoView({ behavior: "smooth" });
                    }, 200);
                  }}
                >
                  Characters
                </a>
                <a
                  href="https://www.rockstargames.com/VI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl hover:text-yellow-500 transition-colors"
                >
                  Support
                </a>
                <a
                  href="https://store.playstation.com/en-gb/concept/10000730"
                  target="-blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl hover:text-yellow-500 transition-colors"
                >
                  Store
                </a>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[12rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[12rem] leading-none ml-20">theft</h1>
                <h1 className="text-[12rem] leading-none -ml-40">auto</h1>
              </div>
              <img
                className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2  scale-[3] rotate-[-20deg]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          {/* Character Introduction Section: Jason */}
          <div
            ref={jasonRef}
            className="w-full min-h-[60vh] flex items-center justify-center bg-black py-24"
          >
            <div className="jason-section-animate flex flex-row items-center w-full max-w-[1100px] mx-auto px-10 gap-16">
              {/* Text Section */}
              <div className="flex-1">
                <h2 className="text-5xl font-bold mb-6 text-7xl font-bold leading-tight text-yellow-500">
                  Jason Duval
                </h2>
                <p className="text-xl font-[Helvetica_Now_Display] leading-relaxed mb-4 text-white">
                  Jason wants an easy life, but things just keep getting harder.
                </p>
                <p className="text-xl font-[Helvetica_Now_Display] leading-relaxed text-white">
                  Jason grew up around grifters and crooks. After a stint in the
                  Army trying to shake off his troubled teens, he found himself
                  in the Keys doing what he knows best, working for local drug
                  runners. It might be time to try something new.
                </p>
              </div>
              {/* Image Section */}
              <div className="flex-1 flex justify-center items-center relative">
                <img
                  className="character-img max-w-[650px] w-full h-auto z-10"
                  src="./Jason.jpg"
                  alt="Jason Duval"
                  onMouseEnter={() => setShowHoverImg(true)}
                  onMouseLeave={() => setShowHoverImg(false)}
                />
                {/* Pop-out images */}
                <img
                  className="jason-pop-1 absolute top-1/2 left-1/2 max-w-[220px] w-full h-auto rounded-lg shadow-lg z-20"
                  src="./Jason1.jpg"
                  alt="Jason Pop 1"
                  style={{
                    opacity: 0,
                    transform: "translate(-50%, -50%) scale(0.7)",
                    pointerEvents: "none",
                  }}
                />
                <img
                  className="jason-pop-2 absolute top-1/2 left-1/2 max-w-[220px] w-full h-auto rounded-lg shadow-lg z-20"
                  src="./Jason2.jpg"
                  alt="Jason Pop 2"
                  style={{
                    opacity: 0,
                    transform: "translate(-50%, -50%) scale(0.7)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Character Introduction Section: Lucia */}
          <div className="w-full min-h-[60vh] flex items-center justify-center bg-black py-24">
            <div className="lucia-section-animate flex flex-row items-center w-full max-w-[1100px] mx-auto px-10 gap-16">
              {/* Text Section */}
              <div className="flex-1">
                <h2 className="text-5xl font-bold mb-6 text-7xl font-bold leading-tight text-yellow-500">
                  Lucia Caminos
                </h2>
                <p className="text-xl font-[Helvetica_Now_Display] leading-relaxed mb-4 text-white">
                  Lucia's father taught her to fight as soon as she could walk.
                </p>
                <p className="text-xl font-[Helvetica_Now_Display] leading-relaxed text-white">
                  Life has been coming at her swinging ever since. Fighting for
                  her family landed her in the Leonida Penitentiary. Sheer luck
                  got her out. Lucia's learned her lesson — only smart moves
                  from here.
                </p>
              </div>
              {/* Image Section */}
              <div className="flex-1 flex justify-center items-center relative">
                <img
                  className="lucia-img max-w-[650px] w-full h-auto z-10"
                  src="./Lucia.jpg"
                  alt="Lucia Caminos"
                  onMouseEnter={() => setShowHoverImgLucia(true)}
                  onMouseLeave={() => setShowHoverImgLucia(false)}
                />
                {/* Pop-out images */}
                <img
                  className="lucia-pop-1 absolute top-1/2 left-1/2 max-w-[220px] w-full h-auto rounded-lg shadow-lg z-20"
                  src="./Lucia1.jpg"
                  alt="Lucia Pop 1"
                  style={{
                    opacity: 0,
                    transform: "translate(-50%, -50%) scale(0.7)",
                    pointerEvents: "none",
                  }}
                />
                <img
                  className="lucia-pop-2 absolute top-1/2 left-1/2 max-w-[220px] w-full h-auto rounded-lg shadow-lg z-20"
                  src="./lucia2.jpg"
                  alt="Lucia Pop 2"
                  style={{
                    opacity: 0,
                    transform: "translate(-50%, -50%) scale(0.7)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Welcome to Vice City Section */}
          <div
            ref={viceCityRef}
            className="w-full min-h-screen flex items-center justify-center bg-black"
          >
            <div className="cntnr flex flex-row items-center text-white w-full max-w-[1100px] mx-auto px-10 py-20 gap-12">
              <div className="flex-1 flex justify-center items-center">
                <img
                  className="max-w-[650px] w-full h-auto"
                  src="./imag.png"
                  alt="GTA VI Character"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-7xl font-bold leading-tight">Welcome to</h1>
                <h1 className="text-7xl font-bold leading-tight text-yellow-500">
                  Vice City
                </h1>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display] leading-relaxed">
                  Experience the neon-lit streets of Vice City in the most
                  ambitious and immersive Grand Theft Auto game to date. Set in
                  the vibrant and dangerous world of Leonida, where the sun
                  never sets on the American Dream.
                </p>
                <p className="mt-6 text-xl font-[Helvetica_Now_Display] leading-relaxed">
                  As Lucia and Jason, navigate the treacherous waters of
                  organized crime, build your empire, and make choices that will
                  shape your destiny in this sprawling open world.
                </p>
                <p className="mt-6 text-xl font-[Helvetica_Now_Display] leading-relaxed">
                  From the sun-soaked beaches to the neon-lit nightlife, every
                  corner of Vice City tells a story. Are you ready to write
                  yours?
                </p>
                <div className="flex gap-6 mt-10">
                  <a
                    href="https://store.playstation.com/en-gb/concept/10000730"
                    target="-blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-yellow-500 px-8 py-6 text-black text-2xl font-bold hover:bg-yellow-400 transition-colors">
                      Pre-Order Now
                    </button>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=VQRLujxTm3c"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="border-2 border-white px-8 py-6 text-white text-2xl font-bold hover:bg-white/10 transition-colors">
                      Watch Trailer
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
