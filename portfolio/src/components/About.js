import React from "react";
import pic from "../assests/Keyur.png";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="max-w-[900px] lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-bold">
            Hi, I'm Keyur.
            <br className="hidden lg:inline-block text-base" />
            Aspiring Web Developer.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm 28, currently on a Web Dev Bootcamp provided by the University
            of Birmingham. Looking forward to improve my skills by making new
            applications and gain experience.
          </p>
          <p className="mb-8 leading-relaxed">
            I had originally taken a degree in Civil Engineering but decided it
            was time to switch careers in a meaningful way, into something I
            enjoyed.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Projects
            </a>
          </div>
        </div>
        <div className="pr-12 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={pic}
          />
        </div>
      </div>
    </section>
  );
}
