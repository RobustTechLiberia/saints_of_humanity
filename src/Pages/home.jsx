import React from "react";
import NavBar from "../components/nav";
import Banner from "../components/banner";
import Section from "../components/content";
import AboutSection from "../components/about_section";
import MainSection from "../components/mainsection";
import RecentProjects from "../components/recent_projects";
// import HeroImage from "../components/hero_image";
// import FAQ from "../components/faq";
// import Footer from "../components/footer";
import seoImage from "../assets/images/logo.png";
import SectionBanner from "../components/section_banner";
import Subscription from "../components/scribscription";

class HomePage extends React.Component {
  render() {
    const { fadeIn } = this.props;

    return (
      <div className={fadeIn ? "page-fade-in" : ""}>
        <title>Home - Saints of Humanity || Liberia</title>
        <meta
          name="description"
          content="Saints of Humanity supports vulnerable communities through education, healthcare, and humanitarian outreach."
        />
        <meta property="og:title" content="Saints of Humanity" />
        <meta
          property="og:description"
          content="Supporting vulnerable communities through education, healthcare, and humanitarian outreach."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={seoImage} />
        <NavBar />
        <Banner />
        <Section />
        <AboutSection />
        <MainSection />
        <RecentProjects />
        <SectionBanner />
        <Subscription />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default HomePage;
