import React from "react";
import Gallery from "../components/gallery";
class Engagements extends React.Component {
  render() {
    return (
      <>
        <div
          className="md:h-250 lg:h-250 h-auto md:my-20 my-10 bg-white"
          id="projects"
        >
          <h1 className="font-serif md:text-4xl lg:text-4xl text-4xl md:my-10 lg:my-20 my-8 capitalize  font-semibold text-center">
            community <span className="text-orange-600">engagements</span>
          </h1>
          <p className="font-serif text-md md:text-md md:text-center md:flex md:flex-wrap md:justify-center md:items-center md:my-10 my-5 mx-4 md:mx-80 lg:mx-80 capitalize">
            our proposed patient indentification and referral initiative aims to
            help bridge this gap by identifying people who may need treatment
            for obstetric fistula, cervical cancer, clubfoot, or cataracts and
            connecting with existing qualified healthcare providers and
            treatment facilities.
            <span className="text-orange-500 font-serif hover:underline">
              <a href="#">Read more</a>
            </span>
          </p>

          <Gallery />
        </div>
      </>
    );
  }
}

export default Engagements;
