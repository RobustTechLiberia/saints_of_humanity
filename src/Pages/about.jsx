import React from "react";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import HeroImage from "../components/hero_image";
import AboutSection from "../components/about_section";

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <title>About - Saints of Humanity || Liberia</title>
        <NavBar />
        <HeroImage />
        <AboutSection />
        <Footer />
      </>
    );
  }
}

export default AboutPage;
