import React from "react";
import CoreValues from "./our_core_values";
import Mission from "./our_mission";
import OurVision from "./our_vision";
class AboutSection extends React.Component {
  render() {
    return (
      <>
        <CoreValues />
        <Mission />
        <OurVision />
      </>
    );
  }
}

export default AboutSection;
