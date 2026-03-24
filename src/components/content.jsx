import React from "react";

class Section extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white md:mx-32 md:mt-14 mt-10 flex flex-wrap md:justify-center md:items-center md:gap-3 gap-5 justify-center items-center">
          <div className="md:w-96 w-auto mx-8 bg-white">
            <p className="text-black text-lg font-serif">
              <b>Humanitarian Engagement</b>: Recruiting and training dedicated
              members, known as SAINTS, to serve communities and implement our
              mission. <b>Support for Vulnerable Populations</b>: Providing
              food, shelter, medical care, counseling, and rehabilitation for
              homeless, mentally ill, and underserved individuals.
            </p>
            {/* learn more button */}
            {/* <div className="py-5 bg-white">
              <a href="#" className="px-4 py-3 bg-black text-white font-serif">
                Learn more
              </a>
            </div> */}
          </div>
          <div className="md:w-96 w-auto mx-8 bg-white">
            <p className="text-black text-lg font-serif">
              <b>Education and Healthcare</b>: Operating schools, clinics, and
              outreach programs, including the Teachers Assistance Program (TAP)
              and Physician Assistant Program (PAP), to deliver quality
              education and healthcare in urban and rural areas.{" "}
              <b>Environmental Conservation</b>: Protecting natural resources
              through tree planting, waste cleanup, reforestation, water system
              construction, and wildlife preservation.
            </p>
            {/* learn more button */}
            {/* <div className="py-5 bg-white">
              <a href="#" className="px-4 py-3 bg-black text-white font-serif">
                Learn more
              </a>
            </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default Section;
