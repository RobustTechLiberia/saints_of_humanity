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
        <NavBar />
        <OurMission />

        <FAQ />
        <Footer />
      </>
    );
  }
}

export default FaqPage;
