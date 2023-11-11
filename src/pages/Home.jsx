/* eslint-disable react/jsx-key */
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { NavLink } from "react-router-dom";

import { skills, experiences } from "../constants";
import { express } from "../assets/icons";

const Home = () => {
  console.log(experiences);
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
          Software Engineer based in United Kingdom, I have experience in
          front-end and back-end development and always eager to tackle any
          challenge that comes my way. While I may not be the best at
          everything, I am a fast learner eager to work hard and get things
          done.
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

      <div className="py-16" id="Projects">
        <h3 className="subhead-text">Projects</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            In the project section below, you will find a selection of my recent
            work. These projects represent my skills and experience in a variety
            of different areas, including front-end development, back-end
            development, and API development. Most of my projects docs is on{" "}
            <NavLink
              className="blue-gradient_text"
              onClick={() => window.open("https://github.com/adamalrasi")}
            >
              Github/adamalrasi⤴
            </NavLink>
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                github={experience.github}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    <span className="text-black-800/50 font-normal text-sm">
                      {experience.company_name}
                      {experience.github}
                    </span>
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point) => (
                    <li
                      key={`experience-point-${point}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-300" id="Contact" />
      <div className="cta">
        <p className="cta-text">
          Let's make it Happen! <br className="sm:block hidden" /> Build
          Something Amazing!🙌
        </p>
        <div className="flex flex-col ">
          <NavLink
            className="btn"
            onClick={() =>
              window.open("https://www.linkedin.com/in/adamalrasi/")
            }
          >
            LinkedIn/adamalrasi
          </NavLink>
          <p className="py-1"></p>
          <NavLink className="btn">Contact@adamalrasi.com</NavLink>
          <p className="py-1"></p>
          <NavLink
            onClick={() => window.open("https://github.com/adamalrasi")}
            className="btn"
          >
            Github/adamalrasi
          </NavLink>{" "}
        </div>
      </div>
    </section>
  );
};

export default Home;
