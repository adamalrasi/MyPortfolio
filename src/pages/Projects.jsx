/* eslint-disable react/jsx-key */
import React from "react";

import { skills } from "../constants";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        👋Hi there, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Adam
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in United Kingdom, specializing in technical
          education through hands on learnign and building applications.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Tech Stack</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front founded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-3/5 h-1/2 object-contain"
                />

                <p className="text-xs">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Projects</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Software Engineer based in United Kingdom, specializing in technical
            education through hands on learnign and building applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
