import React, { useEffect } from "react";
import Layout from "../compoents/Layout";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { BiLogoJquery } from "react-icons/bi";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import AOS from 'aos';

AOS.init({
  duration:1000
});

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Layout>
        <div>
          {/* introduction section */}
          <div className="h-screen bg-black">
            <div className="grid md:grid-cols-2 grid-cols-1 h-screen items-center md:border-4 border-white md:transform md:rotate-12   md:mx-20  bg-black">
              {/* Animated Section */}
              <div className="h-full w-full flex justify-center items-center">
                <DotLottieReact
                  src="https://lottie.host/4b859d0d-a2e9-4fda-87c3-90ec8034963f/ISOYXEZCYI.lottie"
                  loop
                  autoplay
                />
              </div>

              {/* Name Section */}
              <div className="font-bold px-5 text-center md:text-left">
                <h1 data-aos='slide-right' className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-8xl">
                  Hi, I am <b className="text-amber-500">SHARDUL</b>
                </h1>
                <h1   data-aos='slide-left' className="text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-4">
                  <b className="text-red-500">
                    <u>Front-end Developer</u>
                  </b>
                </h1>
              </div>
            </div>
          </div>

          {/* technologies section */}

          <div className="mt-20">
            <h1 className="text-4xl text-blue-800 font-bold text-center my-8 "  data-aos='slide-up'>
              Technologies I USE
            </h1>

            <div className="grid md:grid-cols-4 grid-cols-1 ">
              <FaReact
                size={180}
                color="cyan"
                className="w-full text-center mt-20"
              />
              <FaJsSquare
                size={180}
                color="yellow"
                className="w-full text-center mt-20 animate-bounce"
              />
              <FaHtml5
                size={180}
                color="orange"
                className="w-full text-center mt-20 animate-bounce"
              />
              <FaCss3Alt
                size={180}
                color="blue"
                className="w-full text-center mt-20"
              />
              <BiLogoJquery
                size={180}
                color="blue"
                className="w-full text-center mt-20"
              />
              <FaBootstrap
                size={180}
                color="purple"
                className="w-full text-center mt-20  animate-bounce"
              />
              <SiTailwindcss
                size={180}
                color="cyan"
                className="w-full text-center mt-20"
              />
              <SiRedux
                size={180}
                color="purple"
                className="w-full text-center mt-20 animate-bounce"
              />
            </div>
          </div>

          {/* javascript buff */}

          <div className="my-20">
            <div className="text-center h-52 bg-blue-400">
              <h1 className="text-white font-bold text-4xl py-10">
                Yes You Are Right...I am Javascript Buff
              </h1>
            </div>

            <div className="md:mx-32 mx-5  shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
              <div className="md:h-96  " data-aos='zoom-in'>
                <DotLottieReact
                  src="https://lottie.host/9d744f49-b6b5-4286-a24b-31b280f0e82b/AqW8XUD1dF.lottie"
                  loop
                  autoplay
                />
              </div>

              <p className="text-xl my-5 font-semibold md:px-14 px-5 py-10">
                JavaScript is one of the most top-ranked programming languages
                because of its ubiquitous use on all platforms and mass
                adoption. Main Use Cases: Web Development.
              </p>
            </div>
          </div>

          {/* dev stack section */}

          <div className="my-20">
            <div className="text-center h-52 bg-red-500">
              <h1 className="text-white font-bold text-4xl py-10">
                My DEV Stack
              </h1>
            </div>

            <div className="md:mx-32 mx-5  shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
              <div className=" md:h-96  "  data-aos='zoom-in'>
                <DotLottieReact
                  src="https://lottie.host/bfc8fa08-0b81-470b-8cc0-bd80bc79a881/cWvOgXCzIS.lottie"
                  loop
                  autoplay
                />
              </div>

              <div className="flex w-full justify-center gap-5 p-5">
                <div className="flex flex-col items-center justify-center ">
                  <h1 className="  md:text-7xl font-extrabold  text-center ">
                    Front-End Skills
                  </h1>
                  <hr className="w-full " />
                  <div className="md:flex justify-center w-full gap-5">
                    <div className="flex flex-col items-center">
                      <img
                        src="/html.png"
                        alt="HTML"
                        className="h-16 w-16  mt-10"
                      />
                      <b className="text-center mt-2">
                        <u>HTML</u>
                      </b>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="/css.png"
                        alt="CSS"
                        className="h-16 w-16 mt-10"
                      />
                      <b className="text-center mt-2">
                        <u>CSS</u>
                      </b>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="/react.png"
                        alt="React"
                        className="h-16 w-16 mt-10"
                      />
                      <b className="text-center mt-2">
                        <u>React</u>
                      </b>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="/bootstrap.png"
                        alt="Bootstrap"
                        className="h-16 w-16 mt-10"
                      />
                      <b className="text-center mt-2">
                        <u>Bootstrap</u>
                      </b>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="/tailwind.png"
                        alt="Tailwind CSS"
                        className="h-16 w-16 mt-10"
                      />
                      <b className="text-center mt-2">
                        <u>Tailwind CSS</u>
                      </b>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="/javascript.png"
                        alt="JavaScript"
                        className="h-16 w-16 mt-10"
                      />
                      <b className="text-center mt-2">
                        <u>JavaScript</u>
                      </b>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="/jquery-4.svg"
                        alt="jQuery"
                        className="h-16 w-16 mt-10"
                      />
                      <b className="text-center mt-2">
                        <u>jQuery</u>
                      </b>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="/redux.svg"
                        alt="Redux"
                        className="h-16 w-16 mt-10"
                      />
                      <b className="text-center mt-2">
                        <u>Redux</u>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* dev info section */}

          <div>
            <h1 className="text-4xl text-gray-500 text-center font-bold">
              Who is Shardul ?
            </h1>

            <div className="md:h-screen relative text-gray-800">
              <div className="md:h-full h-96">
                <DotLottieReact
                  src="https://lottie.host/94d146bc-1895-4ab7-8aec-a3d585539ddf/Cr41sJe5gE.lottie"
                  loop
                  autoplay
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">
                  Hi , Hello , Namaste...
                  <hr />
                  <pre className="md:text-xl text-sm my-5 font-mont font-semibold">
                    {JSON.stringify(
                      {
                        name: "Shardul maidkar",
                        age: null,
                        gender: "Male",
                        country: "INDIA",
                      },
                      null,
                      2
                    )}
                  </pre>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
