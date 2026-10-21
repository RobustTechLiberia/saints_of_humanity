import React from "react";
import img from "../assets/images/african-child-portrait-2356546.jpg";

class ContentSection extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap md:justify-end my-10 md:items-end md:mt-8 justify-center items-center h-auto md:h-96 bg-white md:mx-52 lg:mx-52 mx-5">
          <div className="md:w-96  w-auto h-auto md:my-0 my-28">
            <h1 className="font-serif text-5xl text-center md:text-4xl md:my-10 my-5 font-semibold capitalize">
              "don't hold back, kindly
              <span className="text-orange-500"> be a help </span> "
            </h1>
            <p className="font-serif text-md md:text-md capitalize">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              voluptatum voluptatem modi provident aliquam, minus ut explicabo
              veniam, debitis consectetur voluptates possimus dolorem assumenda
              voluptatibus eum accusamus sequi laboriosam
            </p>{" "}
            <br />
            <span className="text-orange-500 font-serif hover:underline">
              <a href="#">Read more</a>
            </span>
          </div>
          <div className="md:w-80 w-auto lg:w-80  bg-gray-800 md:flex md:flex-col md:justify-end md:items-end lg:flex lg:flex-col lg:justify-end lg:items-end md:h-80 md:mx-96 lg:mx-20 mx-2">
            <img
              src={img}
              alt=""
              srcset=""
              className="md:w-xl w-lg md:h-96 lg:h-96 h-80  object-cover bg-blend-overlay"
            />
          </div>
        </div>
      </>
    );
  }
}

export default ContentSection;
