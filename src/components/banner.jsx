import React from "react";
import "../App.css";

class Banner extends React.Component {
  render() {
    return (
      <>
        <div
          className="min-h-[35rem] bg-gray-800 bg-blend-overlay bg-cover bg-top bg-no-repeat md:h-[37.5rem] md:min-h-0 md:w-full md:bg-gray-900"
          id="hero"
        >
          <div className="flex flex-wrap items-start justify-start px-6 pt-32 sm:px-10 md:ml-52 md:px-0 md:pt-56">
            <h1 className="flex flex-wrap items-start justify-start gap-0 font-serif text-4xl font-semibold capitalize text-white sm:text-5xl md:gap-5">
              welcome{" "}
              <span className="text-orange-600">saints of humanity</span>
            </h1>
          </div>
          <div className="my-3 flex flex-wrap items-start justify-start px-6 sm:px-10 md:my-10 md:ml-52 md:max-w-lg md:px-0">
            <p className="w-full max-w-xl font-sans text-base lowercase text-white">
              create a world where every individual, regardless of circumstance,
              has access to dignity, opportunity, and support. We envision
              resilient communities empowered through education, healthcare,
              humanitarian aid, environmental stewardship, disaster
              preparedness, and social justice, with compassionate “Saints”
              leading the world.
            </p>
            <div className="md:my-8 my-8">
              <a
                href="http://"
                className="bg-orange-600 px-10 py-4 font-serif text-base capitalize text-white"
              >
                donate
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Banner;
