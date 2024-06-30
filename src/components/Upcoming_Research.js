import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { upcoming_research } from "../data";

export default function Upcoming_Research() {
    return (
        <section id="upcoming_research" className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
              <CodeIcon className="mx-auto inline-block w-10 mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                Soon to be Published Zero-Days
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                These are some of my zero-days that are in the process of being fixed by the vendors and will be published soon.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              {upcoming_research.map((upcoming_research) => (
                <a
                  href={upcoming_research.link}
                  key={upcoming_research.image}
                  className="sm:w-1/2 w-100 p-4">
                  <div className="flex relative">
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src={upcoming_research.image}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {upcoming_research.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {upcoming_research.title}
                      </h1>
                      <p className="leading-relaxed">{upcoming_research.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
    );
}
