import React from "react";

import "../App.css";

class AboutContent extends React.Component {
  render() {
    return (
      <>
        <div className="mt-5 flex flex-wrap items-start justify-center gap-8 h-auto md:mb-0 mb-20 bg-white px-6 md:mx-20 md:mt-8 md:justify-start md:gap-10 md:px-0 lg:mx-14 lg:gap-2">
          <div className="w-full max-w-lg bg-white">
            <h1 className="my-3 font-serif text-3xl font-semibold capitalize text-orange-600 md:mx-20 md:mt-8">
              who we are?
            </h1>
            <p className="py-2 font-serif text-lg capitalize md:mx-20 md:py-0 md:text-base">
              The organization focuses on a broad range of activities including
              food distribution, shelter provision, healthcare access, education
              support, mental health services, and disaster relief.
            </p>
            {/* core values */}
            <div className="md:mt-8 mt-3 md:h-80 h-auto bg-white">
              <h1 className="py-0 font-serif text-3xl font-semibold capitalize md:mx-20 md:py-3">
                core ethics
              </h1>
              <ul className="mx-5 text-lg md:mx-28 md:text-xl" id="ul">
                <li className="text-xl py-3 font-serif font-semibold text-orange-600">
                  Diaster Relief
                </li>
                <li className="text-xl py-3 font-serif font-semibold text-orange-600">
                  Criminal Justice and Reintegration
                </li>
                <li className="text-xl py-3 font-serif font-semibold text-orange-600">
                  Community Development and Research
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full max-w-xs bg-white md:w-80">
            <div className="mx-0 mt-8 md:mt-8">
              <h1 className="font-serif font-semibold capitalize text-3xl md:text-4xl">
                humanitarian engagement
              </h1>
              <div className="md:my-2 my-2">
                <div className="h-1 bg-orange-600 w-14"></div>
              </div>
              <p className="font-serif text-lg capitalize md:py-3 md:text-base">
                Recruiting and training dedicated members, known as SAINTS, to
                serve communities and implement our mission.
              </p>
            </div>
          </div>
          <div className="w-full max-w-xs h-auto bg-white md:w-80">
            <div className="mx-0 mt-5 md:mt-10">
              <h1 className="font-serif font-semibold capitalize text-3xl md:text-4xl">
                Support for Vulnerable Populations
              </h1>
              <div className="md:my-2 my-2">
                <div className="h-1 bg-orange-600 w-14"></div>
              </div>
              <p className="font-serif text-lg capitalize md:py-3 md:text-base">
                Recruiting and training dedicated members, known as SAINTS, to
                serve communities and implement our mission.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutContent;
