import React from "react";

class MainSection extends React.Component {
  render() {
    return (
      <>
        <div className="bg-gray-950 md:h-60 h-auto py-16 md:py-0">
          <div className="flex flex-wrap md:justify-evenly justify-center gap-12 md:gap-0 px-4 max-w-7xl mx-auto h-full items-center">
            <div className="min-w-[200px] flex flex-col items-center">
              <span className="text-center text-orange-600 md:text-2xl text-2xl capitalize font-serif font-semibold leading-snug">
                <span className="text-white md:text-5xl text-4xl block font-serif">
                  250+
                </span>
                <span className="mt-2 block md:mx-0 mx-20">
                  community engagement
                </span>
              </span>
            </div>

            <div className="min-w-[200px] flex flex-col items-center">
              <span className="text-center text-orange-600 md:text-2xl text-lg capitalize font-serif font-semibold leading-snug">
                <span className="text-white md:text-5xl text-4xl block font-serif ">
                  150+
                </span>
                <span className="mt-2 block font-serif md:text-2xl text-2xl md:mx-0 mx-20">
                  youth empowerment
                </span>
              </span>
            </div>

            <div className="min-w-[200px] flex flex-col items-center">
              <span className="text-center text-orange-600 md:text-2xl text-2xl capitalize font-serif font-semibold leading-snug">
                <span className="text-white md:text-5xl text-4xl block font-serif">
                  50+
                </span>
                <span className="mt-2 block md:mx-0 mx-20">
                  humanitarian aid
                </span>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainSection;
