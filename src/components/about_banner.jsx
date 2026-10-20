import React from "react";

class AboutBanner extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap justify-center md:mx-20 bg-white md:mt-20 mt-10">
          <div className="h-96 w-full max-w-[23.75rem] bg-gray-900 bg-blend-overlay md:max-w-3xl"></div>
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
