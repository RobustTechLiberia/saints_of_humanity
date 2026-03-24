import React from "react";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import OurVision from "../components/our_vision";
import img1 from "../assets/images/istockphoto-618053488-612x612.jpg";
import img2 from "../assets/images/istockphoto-523255548-612x612.jpg";
import img3 from "../assets/images/istockphoto-183306792-612x612.jpg";
import OurTeam from "../components/our_team";

class BlogPage extends React.Component {
  render() {
    return (
      <>
        <title>Blog - Saints of Humanity || Liberia</title>
        <NavBar />
        <OurVision />
        <div className="bg-white md:mx-20 h-auto md:mb-20 mx-8 flex flex-wrap justify-center items-center">
          <h1 className="text-3xl font-serif font-medium capitalize md:pt-8 py-8">
            our impact
          </h1>
          <div className="md:mx-20 flex flex-wrap md:justify-center md:pt-2 items-center justify-center md:gap-5 gap-5  md:h-96 h-auto">
            <div className="md:w-80 w-80 bg-white h-80">
              <div className="w-auto h-28 bg-black bg-blend-overlay">
                <img
                  src={img1}
                  alt="sanitation"
                  className="cursor-pointer hover:brightness-50"
                />
                <p className="font-serif  md:mx-0 mx-0 text-2xl md:text-xl py-3 capitalize text-left">
                  community enagement- providing safe drinking water
                </p>
              </div>
            </div>
            <div className="md:w-80 w-80 bg-white h-80">
              <div className="w-auto h-28 bg-black bg-blend-overlay">
                <img
                  src={img2}
                  alt="Education"
                  className="cursor-pointer hover:brightness-50"
                />
                <p className="font-serif  md:mx-0 mx-0 text-2xl md:text-xl py-3 capitalize text-left">
                  youth empowerment - affordable education
                </p>
              </div>
            </div>
            <div className="md:w-80 w-80 bg-white h-80">
              <div className="w-auto h-28 bg-black bg-blend-overlay">
                <img
                  src={img3}
                  alt="health care"
                  className="cursor-pointer hover:brightness-50"
                />
                <p className="font-serif  md:mx-0 mx-0 text-2xl md:text-xl py-3 capitalize text-left">
                  community enagement- providing health care services
                </p>
              </div>
            </div>
            {/* row 2 */}
            {/* see more button */}
            <div className="bg-white md:py-5 py-3">
              <button
                className="bg-black px-5 py-2 cursor-pointer text-white font-serif font-normal"
                id="see_more"
              >
                see more
              </button>
            </div>
          </div>
        </div>
        <OurTeam />
        <Footer />
      </>
    );
  }
}

export default BlogPage;
