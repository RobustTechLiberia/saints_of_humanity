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
        <meta
          name="description"
          content="To create a world where every individual, regardless of circumstance, has access to dignity, opportunity, and support. We envision resilient communities empowered through education, healthcare, humanitarian aid, environmental stewardship, disaster preparedness, and social justice, with compassionate “Saints” leading the way in fostering sustainable change across the world."
        />
        <NavBar />
        <OurVision />
        <div className="mx-8 flex h-auto flex-wrap items-center justify-center bg-white md:mx-auto md:mb-20 md:max-w-6xl md:px-8">
          <h1 className="py-8 text-3xl font-serif font-medium capitalize md:pt-8">
            our impact
          </h1>
          <div className="flex h-auto w-full flex-wrap items-start justify-center gap-5 bg-white md:pt-2">
            <div className="h-auto w-80 bg-white md:w-[31%]">
              <div className="w-auto bg-black bg-blend-overlay">
                <img
                  src={img1}
                  alt="sanitation"
                  className="aspect-4/3 w-full cursor-pointer object-cover hover:brightness-50"
                />
                <div className="bg-white">
                  <p className="mx-0 py-3 text-left text-2xl font-serif capitalize md:text-xl">
                    community enagement- providing safe drinking water
                  </p>
                </div>
              </div>
            </div>
            <div className="h-auto w-80 bg-white md:w-[31%]">
              <div className="w-auto bg-black bg-blend-overlay">
                <img
                  src={img2}
                  alt="Education"
                  className="aspect-4/3 w-full cursor-pointer object-cover hover:brightness-50"
                />
                <div className="bg-white">
                  <p className="mx-0 py-3 text-left text-2xl font-serif capitalize md:text-xl">
                    youth empowerment - affordable education
                  </p>
                </div>
              </div>
            </div>
            <div className="h-auto w-80 bg-white md:w-[31%]">
              <div className="w-auto bg-black bg-blend-overlay">
                <img
                  src={img3}
                  alt="health care"
                  className="aspect-4/3 w-full cursor-pointer object-cover hover:brightness-50"
                />
                <div className="bg-white">
                  <p className="mx-0 py-3 text-left text-2xl font-serif capitalize md:text-xl">
                    community enagement- providing health care services
                  </p>
                </div>
              </div>
            </div>
            {/* row 2 */}
            {/* see more button */}
            <div className="flex w-full justify-center bg-white py-3 md:py-5">
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
