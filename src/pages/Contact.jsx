import React, { useEffect } from "react";
import Layout from "../compoents/Layout";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <div>
        <div className="md:h-screen mt-10">
          <DotLottieReact
            src="https://lottie.host/4bd8e1f0-9d7d-45d8-97cb-bc53d97cbb99/Lr3CqLnviq.lottie"
            loop
            autoplay
          />
        </div>

        <div className="w-screen flex justify-center">
          <div className="w-full md:w-1/2 p-10 shadow-2xl bg-gray-50">
            <h1 className="text-2xl font-semibold">Contact me to know more</h1>
            <form action="https://formsubmit.co/shardool598@gmail.com" method="POST">
            <input
              type="text"
              placeholder="Name"
              name='name'
              className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
            />
            <input
              type="text"
              placeholder="Email"
              name='email'
              className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
            />
            <textarea
              type="text"
              placeholder="Query"
              name='message'
              className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
            />

            <button type="submit" className="bg-red-500 rounded text-white px-5 py-1 mt-3 cursor-pointer">
              SUBMIT
            </button>

            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
