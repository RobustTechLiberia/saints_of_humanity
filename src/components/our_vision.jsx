import React from "react";

class OurVision extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white md:mt-5 mt-8 flex flex-wrap justify-center items-center">
          <h1 className="capitalize text-3xl text-center font-serif font-medium md:mt-5 py-8">
            our vision
          </h1>
        </div>
        <div className="bg-white flex flex-wrap md:justify-evenly justify-center items-center mx-8 md:mx-20 h-auto">
          <p className="text-xl font-serif text-left md:w-3xl">
            To create a world where every individual, regardless of
            circumstance, has access to dignity, opportunity, and support. We
            envision resilient communities empowered through education,
            healthcare, humanitarian aid, environmental stewardship, disaster
            preparedness, and social justice, with compassionate “Saints”
            leading the way in fostering sustainable change across the world.
          </p>
        </div>
      </>
    );
  }
}

export default OurVision;
