import React from "react";
import img1 from "../assets/images/IMG-20261021-WA0019.jpg";
import img2 from "../assets/images/IMG-20261023-WA0001.jpg";
import img3 from "../assets/images/IMG-20261021-WA0031.jpg";

class Gallery extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap justify-center items-center md:gap-5 lg:gap-8 gap-44 md:my-20 my-20 bg-white">
          <div className="w-80 h-80 bg-gray-200">
            <img
              src={img1}
              alt=""
              srcset=""
              className="w-80 h-80 object-cover"
            />
            <div className="w-auto h-28 bg-white font-serif font-semibold capitalize md:text-xl md:py-5 lg:py-5 py-8 lg:text-xl text-2xl">
              successfully implented its first pilot school feeding program at{" "}
              <span className="uppercase">best</span> foundation school system{" "}
            </div>
          </div>
          <div className="w-80 h-80 bg-gray-200">
            <img
              src={img2}
              alt=""
              srcset=""
              className="w-80 h-80 object-cover"
            />
            <div className="w-auto h-28 bg-white font-serif font-semibold capitalize md:text-xl md:py-5 lg:py-5 py-8 lg:text-xl text-2xl">
              essential goods donation outreach reaching 200 people in need
            </div>
          </div>
          <div className="w-80 h-80 bg-gray-200">
            <img
              src={img3}
              alt=""
              srcset=""
              className="w-80 h-80 object-cover"
            />
            <div className="w-auto h-28 bg-white font-serif font-semibold capitalize md:text-xl md:py-5 lg:py-5 py-8 lg:text-xl text-2xl">
              community medical outreach in gbatta, bong county
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center md:py-32 h-auto lg:my-20 py-28 bg-white">
          <button className="bg-orange-600 text-white font-serif text-xl md:text-xl md:py-5 py-5 px-20 cursor-pointer">
            see more
          </button>
        </div>
      </>
    );
  }
}

export default Gallery;
