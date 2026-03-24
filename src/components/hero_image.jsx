import React from "react";
import { initCarousels } from "flowbite";
import img1 from "../assets/images/istockphoto-474234518-612x612 (1).jpg";
import img2 from "../assets/images/istockphoto-1278834781-612x612.jpg";
import img3 from "../assets/images/istockphoto-1220568307-612x612.jpg";
import img4 from "../assets/images/istockphoto-1319013205-612x612.jpg";
import img5 from "../assets/images/istockphoto-1399267460-612x612.jpg";

const carouselImages = [img1, img2, img3, img4, img5];

class HeroImage extends React.Component {
  componentDidMount() {
    initCarousels();
  }

  render() {
    return (
      <>
        <div className="flex flex-wrap md:mt-16 mt-5 md:justify-center md:items-center justify-center items-center md:pb-10 pb-5 md:mx-20">
          <div className="bg-gray-950 h-80 md:h-96 md:w-3xl md:mx-0 w-96  overflow-hidden rounded-0">
            <div
              id="default-carousel"
              className="relative w-full h-full"
              data-carousel="slide"
              data-carousel-interval="3000"
            >
              {/* Carousel wrapper */}
              <div className="relative h-full">
                {/* Item 1 */}
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item="active"
                >
                  <div className="absolute inset-0 bg-gray-900 opacity-60 z-20" />
                  <img
                    src={carouselImages[0]}
                    className="absolute block w-full h-full object-cover top-0 left-0 z-10"
                    alt="..."
                  />
                </div>
                {/* Item 2 */}
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <div className="absolute inset-0 bg-gray-900 opacity-60 z-20" />
                  <img
                    src={carouselImages[1]}
                    className="absolute block w-full h-full object-cover top-0 left-0 z-10"
                    alt="..."
                  />
                </div>
                {/* Item 3 */}
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <div className="absolute inset-0 bg-gray-900 opacity-60 z-20" />
                  <img
                    src={carouselImages[2]}
                    className="absolute block w-full h-full object-cover top-0 left-0 z-10"
                    alt="..."
                  />
                </div>
                {/* Item 4 */}
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <div className="absolute inset-0 bg-gray-900 opacity-60 z-20" />
                  <img
                    src={carouselImages[3]}
                    className="absolute block w-full h-full object-cover top-0 left-0 z-10"
                    alt="..."
                  />
                </div>
                {/* Item 5 */}
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <div className="absolute inset-0 bg-gray-900 opacity-60 z-20" />
                  <img
                    src={carouselImages[4]}
                    className="absolute block w-full h-full object-cover top-0 left-0 z-10"
                    alt="..."
                  />
                </div>
              </div>
              {/* Slider indicators */}
              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {/* <button
                  type="button"
                  className="w-3 h-3 rounded-base"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                />
                <button
                  type="button"
                  className="w-3 h-3 rounded-base"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                />
                <button
                  type="button"
                  className="w-3 h-3 rounded-base"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                />
                <button
                  type="button"
                  className="w-3 h-3 rounded-base"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                />
                <button
                  type="button"
                  className="w-3 h-3 rounded-base"
                  aria-current="false"
                  aria-label="Slide 5"
                  data-carousel-slide-to="4"
                /> */}
              </div>
              {/* Slider controls */}
              {/* <button
                type="button"
                className="absolute top-0 inset-s-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-5 h-5 text-white rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m15 19-7-7 7-7"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 inset-e-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-5 h-5 text-white rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m9 5 7 7-7 7"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HeroImage;
