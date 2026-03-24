import React from "react";
import NavBar from "../components/nav";
import Footer from "../components/footer";

class Job extends React.Component {
  render() {
    return (
      <>
        <title>
          Job & Career opportunities - Saints of Humanity || Liberia
        </title>
        <NavBar />
        <div className="bg-white md:mx-20 mx-6 md:py-16 py-10 flex flex-wrap md:justify-evenly justify-center items-center">
          <h1 className="font-serif text-2xl md:text-3xl font-medium capitalize">
            job - career opportunities
          </h1>
          <p className="font-serif text-lg text-black mt-6 max-w-3xl"></p>
        </div>
        <Footer />
      </>
    );
  }
}

export default Job;
