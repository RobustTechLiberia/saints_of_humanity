import React from "react";

class CoreValues extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white md:mt-5 mt-8 flex flex-wrap justify-center items-center">
          <h1 className="capitalize text-3xl text-center font-serif font-medium md:mt-5 py-8">
            our core values
          </h1>
        </div>
        <div className="bg-white flex flex-wrap md:justify-evenly justify-center items-center mx-8 md:mx-20 h-auto">
          <p className="text-xl font-serif text-left md:w-3xl">
            <ul className="list-none">
              <li className="py-3">
                <b>Humanitarian Engagement:</b> Recruiting and training
                dedicated members, known as SAINTS, to serve communities and
                implement our mission.
              </li>
              <li>
                <b>Support for Vulnerable Populations:</b> Providing food,
                shelter, medical care, counseling, and rehabilitation for
                homeless, mentally ill, and underserved individuals.
              </li>
              <li className="py-3">
                <b>Education and Healthcare:</b> Operating schools, clinics, and
                outreach programs, including the Teachers Assistance Program
                (TAP) and Physician Assistant Program (PAP), to deliver quality
                education and healthcare in urban and rural areas.
              </li>
              <li className="py-3">
                <b>Environmental Conservation:</b>
                Protecting natural resources through tree planting, waste
                cleanup, reforestation, water system construction, and wildlife
                preservation.
              </li>
            </ul>
          </p>
        </div>
      </>
    );
  }
}

export default CoreValues;
