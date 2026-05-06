import React from "react";

class Section extends React.Component {
  render() {
    return (
      <>
        <div className="mt-10 flex flex-wrap items-stretch justify-center gap-5 bg-white md:mx-auto md:mt-14 md:max-w-5xl md:gap-6 md:px-8">
          <div className="mx-8 flex w-auto bg-white md:mx-0 md:w-96">
            <p className="h-full text-black text-lg font-serif">
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
          <div className="mx-8 flex w-auto bg-white md:mx-0 md:w-96">
            <p className="h-full text-black text-lg font-serif">
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
