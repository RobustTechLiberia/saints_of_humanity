import React from "react";

class AboutSection extends React.Component {
  render() {
    return (
      <>
        <div className="mx-2 h-auto bg-white md:mx-auto md:mb-0 md:max-w-5xl md:px-8 md:pt-2">
          <div className="flex flex-wrap items-center justify-center md:justify-evenly">
            <h1 className="font-serif md:py-8 pt-10 font-medium text-4xl text-left capitalize">
              who we are?
            </h1>
            <p className="mx-5 py-8 text-left text-lg font-normal font-serif text-black md:mx-auto md:max-w-3xl md:pt-0">
              A nonprofit organization established to provide comprehensive
              humanitarian services to vulnerable populations while actively
              addressing climate change challenges. Founded under the Liberia
              Association Code, the organization is driven by a mission to
              mobilize compassionate individuals referred to as “SAINTS,” who
              dedicate themselves to advancing social welfare and environmental
              sustainability without boundaries.
              <br />
              <br />
              The organization focuses on a broad range of activities including
              food distribution, shelter provision, healthcare access, education
              support, mental health services, and disaster relief.
              Additionally, it implements specialized programs such as Teachers
              Assistance Programs (TAP) and Physician Assistant Programs (PAP)
              to serve underserved urban and rural communities. SAINTS OF
              HUMANITY also lead environmental initiatives aimed at combating
              climate change through reforestation, cleanups, water sanitation,
              and conservation of natural and cultural heritage sites. Through
              its multifaceted approach, the organization seeks to build
              resilient communities, protect ecosystems, and promote justice and
              equity for all.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default AboutSection;
