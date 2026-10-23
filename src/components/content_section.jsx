import React from "react";
import img from "../assets/images/IMG-20261021-WA0011.jpg";

class ContentSection extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap md:justify-end md:my-10 my-8 md:items-end md:mt-8 justify-center items-center h-auto md:h-96 bg-white md:mx-52 lg:mx-52 mx-3">
          <div className="md:w-96  w-auto h-auto md:my-0 my-3">
            <h1 className="font-serif text-4xl mb:mx-3 lg:mx-3 text-center md:text-left md:text-4xl md:my-10 mt-3 mb-3 font-semibold capitalize">
              "don't hold back, kindly
              <span className="text-orange-500"> be a help </span> "
            </h1>
            <p className="font-serif text-md md:text-md md:mx-3 md:my-0 my-5 mx-3 capitalize">
              Operating schools, clinics, and outreach programs, including the
              Teachers Assistance Program (TAP) and Physician Assistant Program
              (PAP), to deliver quality education and healthcare in urban and
              rural areas <br />
              <span className="text-orange-500 font-serif hover:underline">
                <a href="#">Read more</a>
              </span>
            </p>
          </div>
          <div className="md:w-80 w-auto lg:w-80  bg-gray-800 md:flex md:flex-col md:justify-end md:items-end lg:flex lg:flex-col lg:justify-end lg:items-end md:h-96 md:mx-96 lg:mx-20 mx-2">
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
