import React, { useEffect } from "react";
import Layout from "../compoents/Layout";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import projectsData from "../resources/projects";
import AOS from "aos";

AOS.init({
  duration: 1000,
});

const Projectes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout>
        <div className="mt-20">
          <div className="md:h-screen">
            <div className="md:h-3/4">
              <DotLottieReact
                src="https://lottie.host/82a0586d-95fd-4e72-bb94-31395afb3734/KrQbHVU3YF.lottie"
                loop
                autoplay
              />
            </div>
            <p className="text-xl font-semibold text-center">
              Good ideas are not adopted automatically. They must be driven into
              practice with courageous patience
            </p>
            <h1
              className="text-4xl text-center font-bold mt-5"
              data-aos="slide-up"
            >
              Because
            </h1>

            <div className="font-bold text-center bg-red-500 md:p-20 md:mx-20 mt-10  md:mt-20 text-white rounded-tl-full rounded-br-full mx-5">
              <h1 className="md:text-8xl text-3xl" data-aos="slide-left">
                THE GAME IS...
              </h1>
              <h1 className="md:text-8xl text-3xl" data-aos="slide-right">
                CONSISTANCY
              </h1>
            </div>
          </div>
        </div>

        <div className="grid  mt-20 md:mt-[450px] md:grid-cols-2 grid-cols-1 items-center justify-center gap-10 mx-20 md:mx-5 ">
          {projectsData.map((project) => {
            return (
              <div>
                <div className="relative md:p-10 md:border-2 border-2  text-center rounded-lg   md:rounded-tr-3xl md:rounded-bl-3xl border-gray-400">
                  <img
                    src={project.image}
                    className="md:w-full object-contain md:h-90 text-center w-full "
                    alt=""
                  />

                  <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black md:hover:opacity-80 rounded-tr-3xl rounded-bl-3xl">
                    <h1 className="text-4xl font-semibold text-white">
                      {project.title}
                    </h1>

                    <a href={project.link}>
                      <button className="md:border-2 rounded border-white py-2 md:hover:bg-green-500 md:px-5 mt-5 text-white">
                        GITHUB CODE
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default Projectes;
