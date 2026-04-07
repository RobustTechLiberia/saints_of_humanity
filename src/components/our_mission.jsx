import React from "react";

class OurMission extends React.Component {
  render() {
    return (
      <>
        <div className="mt-8 flex flex-wrap items-center justify-center bg-white md:mt-3 md:justify-evenly">
          <h1 className="capitalize text-3xl text-left font-serif font-medium md:mt-2 py-8">
            mission
          </h1>
        </div>
        <div className="mx-8 flex h-auto flex-wrap items-center justify-center bg-white md:mx-auto md:max-w-4xl md:px-8 md:justify-evenly">
          <p className="text-left text-xl font-serif md:max-w-3xl">
            <span className="capitalize font-serif">W</span>e exist to restore
            dignity, hope, and opportunity to the most vulnerable, homeless
            individuals, the mentally ill, displaced persons, and underserved
            communities across the world. We mobilize compassionate individuals,
            known as “Saints”, to provide humanitarian aid, healthcare,
            education, disaster relief, and social support. Our mission also
            includes environmental conservation, heritage preservation, criminal
            justice reform, and community development, all aimed at building
            resilient, empowered, and sustainable communities.
          </p>
        </div>
      </>
    );
  }
}

export default OurMission;
