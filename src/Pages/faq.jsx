import React from "react";
import NavBar from "../components/nav";
import FAQ from "../components/faq";
import Footer from "../components/footer";
import OurMission from "../components/our_mission";

class FaqPage extends React.Component {
  render() {
    return (
      <>
        <title>FAQ - Saints of Humanity || Liberia</title>
        <meta
          name="description"
          content="We exist to restore dignity, hope, and opportunity to the most vulnerable, homeless individuals, the mentally ill, displaced persons, and underserved communities across the world. We mobilize compassionate individuals, known as “Saints”, to provide humanitarian aid, healthcare, education, disaster relief, and social support. Our mission also includes environmental conservation, heritage preservation, criminal justice reform, and community development, all aimed at building resilient, empowered, and sustainable communities."
        />
        <NavBar />
        <OurMission />

        <FAQ />
        <Footer />
      </>
    );
  }
}

export default FaqPage;
