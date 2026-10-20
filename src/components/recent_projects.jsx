import React from "react";

class RecentProjects extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap md:justify-evenly md:h-96 h-auto bg-white">
          <div className="md:my-10 md:mx-10 my-5 mx-3 md:w-xl w-auto bg-white flex flex-col">
            <span className="font-serif text-3xl md:text-3xl capitalize font-semibold">
              recent <span className="text-orange-600">projects</span>
            </span>
            <p className="md:py-3 py-3 md:text-md text-xl font-serif lowercase">
              Through its multifaceted approach, the organization seeks to build
              resilient communities, protect ecosystems, and promote justice and
              equity for all.
            </p>

            <div className="flex flex-wrap md:justify-start md:items-start justify-center items-center md:gap-20 mt-8 gap-5">
              <div className="w-80 md:w-60 bg-gray-100 h-44"></div>
              <div className="w-80 md:w-60 bg-gray-100 h-44"></div>
            </div>
          </div>

          <div className="lg:w-auto md:w-auto w-auto bg-white md:my-10 my-5 mx-8">
            <span className="font-serif text-3xl md:text-3xl capitalize text-left font-semibold">
              events{" "}
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default RecentProjects;
