import React from "react";
import img1 from "../assets/images/IMG-20261021-WA0011.jpg";
import img2 from "../assets/images/IMG-20261021-WA0016.jpg";
import img3 from "../assets/images/IMG-20261021-WA0019.jpg";

class RecentProjects extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap md:justify-evenly md:h-180 lg:h-180 h-auto bg-white">
          {/* projects */}
          <div className="md:my-20 lg:my-20 md:mx-10 lg:mx-16 my-5 mx-3 md:w-xl lg:w-xl w-auto bg-white flex flex-col">
            <span className="font-serif text-3xl md:mx-0 mx-3 my-4 md:my-0 lg:my-0 lg:mx-0 md:text-3xl capitalize font-semibold">
              recent <span className="text-orange-600">projects</span>
            </span>
            <p className="md:py-3 py-3 md:mx-0 mx-3 md:text-md text-xl font-serif capitalize">
              Through its multifaceted approach, the organization seeks to build
              resilient communities, protect ecosystems, and promote justice and
              equity for all.
            </p>

            <div className="flex flex-wrap md:justify-start md:items-start justify-center items-center md:gap-20 mt-8 gap-52 md:h-auto h-auto sm:gap-52">
              <div className="w-80 md:w-60 bg-gray-800 h-52 mb-5 md:mb-0">
                <img
                  src={img1}
                  alt=""
                  className="w-80 md:w-60 h-52 object-cover"
                />
                {/* description */}
                <div className="w-auto h-28 bg-white font-serif font-semibold capitalize md:text-xl md:py-5 lg:py-5 py-8 lg:text-xl text-2xl">
                  conducted an <span className="uppercase">hiv/aids</span>{" "}
                  awareness campaign at konuwah high school, barnesville estate,
                  monrovia, liberia
                </div>
              </div>

              <div className="w-80 md:w-60 bg-gray-800 h-52 mb-28 md:mb-0">
                <img
                  src={img2}
                  alt=""
                  className="w-80 md:w-60 h-52 object-cover"
                />
                {/* description */}
                <div className="w-auto h-28 bg-white font-serif font-semibold capitalize md:text-xl md:py-5 lg:py-5 py-8 lg:text-xl text-2xl">
                  a successful school feeding program
                </div>
              </div>
            </div>
          </div>
          {/* events */}
          <div className="lg:w-lg md:w-auto w-auto bg-white md:my-20 lg:my-20 my-5 mx-3">
            <span className="font-serif text-3xl md:text-3xl md:mx-0 lg:mx-0 mx-4 capitalize text-left font-semibold">
              events{" "}
            </span>
            <p className="md:py-3 py-3 md:mx-0 mx-3 md:text-md text-xl font-serif capitalize">
              focuses on a broad range of activities including food
              distribution, shelter provision, healthcare access, education
              support, mental health services, and disaster relief.
            </p>

            <div className="flex flex-col my-5 md:justify-start md:mx-0 lg:mx-0 mx-3 md:items-start h-auto bg-white">
              <div className="w-20 bg-gray-800 h-20 flex flex-wrap justify-start items-start">
                <img src={img1} alt="" className="w-20 h-20 object-cover" />
              </div>
            </div>
            <div className="flex flex-col my-10 md:justify-start md:mx-0 lg:mx-0 mx-3 md:items-start h-auto bg-white">
              <div className="w-20 bg-gray-800 h-20">
                <img src={img2} alt="" className="w-20 h-20 object-cover" />
              </div>
            </div>
            <div className="flex flex-col my-10 md:justify-start md:mx-0 lg:mx-0 mx-3 md:items-start h-auto bg-white">
              <div className="w-20 bg-gray-800 h-20">
                <img src={img3} alt="" className="w-20 h-20 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RecentProjects;
