import React from "react";
import { Link } from "react-router-dom";

class Banner extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white mt-16 flex flex-wrap justify-center">
          <h1 className="md:text-5xl font-medium text-5xl  font-serif uppercase text-center">
            saints of <br /> <span className="md:text-6xl">humanity</span>
          </h1>
        </div>
        {/* Donate button */}
        <div className="py-10 bg-white flex flex-wrap justify-center items-center">
          <Link
            to="/donate"
            className="px-8 py-3 cursor-pointer hover:bg-gray-900 bg-black border-0 text-white font-serif text-lg capitalize"
          >
            donate
          </Link>
        </div>
      </>
    );
  }
}

export default Banner;
