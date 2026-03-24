import React from "react";

class AboutBanner extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap justify-center md:mx-20 bg-white md:mt-20 mt-10">
          <div className="bg-gray-900 bg-blend-overlay w-95 md:w-3xl h-96"></div>
        </div>
        <div className="bg-white flex flex-wrap justify-center">
          <h1 className="text-4xl text-center font-serif font-medium md:py-8 py-8 capitalize">
            who we are?
          </h1>
        </div>
      </>
    );
  }
}

export default AboutBanner;
