import React, { useState, useEffect } from "react";

const Carousel = (props) => {
  const slides = props.slides;
  let [current, setCurrent] = useState(0);
  let prevSlide = () => {
    switch (current) {
      case 0:
        setCurrent(2);
        break;
      case 1:
        setCurrent(0);
        break;
      case 2:
        setCurrent(1);
        break;
      default:
        setCurrent(0);
        break;
    }
  };

  let nextSlide = () => {
    switch (current) {
      case 0:
        setCurrent(1);
        break;
      case 1:
        setCurrent(2);
        break;
      case 2:
        setCurrent(0);
        break;
      default:
        setCurrent(0);
        break;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  });

  function visitLinkedIn() {
    window.open(`https://www.linkedin.com/in/${slides[current].linkedinLink}/`);
  }

  return (
    <div>
      <div className="flex">
        <div
          className={`max-w-screen-xl px-4 py-8 mx-auto text-center lg:pt-16 lg:pb-2 lg:px-6 flex  `}
        >
          {slides.map((s) => (
            <div
              key={s.id}
              className={`flex flex-col justify-between transform transition ease-out duration-500 `}
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              <div className=" mx-[1.4rem]">
                <svg
                  className="h-12 mx-auto mb-3 text-gray-400 "
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="w-[49rem]  text-center">
                  <p className="text-2xl w-[78%]  m-auto font-medium text-gray-900 ">
                    "{s.testimonial}"
                  </p>
                </div>
                <div className=" justify-center ">
                  <div className="flex items-center justify-center mt-6 space-x-3 ">
                    <img
                      className="w-14 h-14 rounded-full border border-gray-200"
                      src={s.image}
                      alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 ">
                      <div className="pr-3 font-medium text-gray-900 ">
                        {s.name}
                      </div>
                      <div className="pl-3 text-sm  text-gray items-start">
                        {s.title}
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center  space-x-1 justify-center cursor-pointer"
                    onClick={visitLinkedIn}
                  >
                    <img className="w-5 h-5 " src="/linkedin.PNG" />
                    <h1 className="text-sm font-semibold m-0 p-0">
                      @{s.linkedin}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-[3.5rem] mb-5">
        <div className="mr-1 w-[1.5rem] cursor-pointer " onClick={prevSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="text-gray-400"
          >
            <path
              d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM11.289,4.3,12.711,5.7l-4.3,4.344L12.7,14.289,11.3,15.711,5.586,10.063Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div
          className=" ml-1 w-[1.5rem]  text-gray-400 cursor-pointer"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="text-gray-400"
          >
            <path
              d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM8.711,4.3l5.7,5.766L8.7,15.711,7.3,14.289l4.289-4.242L7.289,5.7Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
