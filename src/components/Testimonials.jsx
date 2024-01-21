import React from "react";
import Carousel from "./Carousel";

const Testimonials = () => {
  let slides = [
    {
      id: 0,
      name: "Helen Abell",
      title: "Contract Software Engineer",
      testimonial:
        "Adam is not afraid to dive into new technologies and figure out how they work. He has leveraged this skill to build an impressive portfolio, including projects integrating OpenAI. His curiosity and initiative also served him well when collaborating with teammates.",
      image: "/helen.jpg",
      linkedin: "helen-abell",
      linkedinLink: "helen-abell",
    },
    // {
    //   id: 1,
    //   name: "Siyu Duan",
    //   title: "Architecture Engineer",
    //   testimonial:
    //     "Adam is a dynamic and talented individual who consistently brings enthusiasm and innovation to the table. I wholeheartedly recommend Adam for any collaborative project, as he not only excels in his technical capabilities but also adds immeasurable value to the overall team dynamic.",
    //   image: "/siyu.jpg",
    //   linkedin: "Siyu-Duan",
    //   linkedinLink: "siyu-duan-2021",
    // },
    {
      id: 1,
      name: "Jade Wilson",
      title: "Microsoft Software Engineer",
      testimonial:
        "It's been really refreshing watching his journey from where we started one month ago, to where we are now, he has a clear picture of what he needs to do next in order to achieve his goals and, well, he is just getting on with them. Always a pleasure speaking with you Adam..",
      image: "/jade.jpg",
      linkedin: "Jade-Wilson",
      linkedinLink: "jade-codes",
    },
    {
      id: 2,
      name: "Jacob Field",
      title: "Software Developer",
      testimonial:
        "What sets Adam apart is not just his technical expertise but also his positive attitude and ability to boost team morale. Even in tough situations, he maintained a motivating environment, fostering collaboration among the team.",
      image: "/jacob.jpg",
      linkedin: "Jacob-Field",
      linkedinLink: "jacob-field-683122186",
    },
  ];

  return (
    <div>
      <section className="border-[0.3rem] border-white mb-[4rem] rounded-xl overflow-hidden">
        <Carousel slides={slides} />
      </section>
    </div>
  );
};

export default Testimonials;
