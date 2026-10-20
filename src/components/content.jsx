import React from "react";
import { Progress } from "flowbite-react";

class Section extends React.Component {
  render() {
    const customProgressTheme = {
      base: "overflow-hidden bg-gray-200 dark:bg-gray-700 rounded-none",
      color: {
        orange: "bg-orange-600 dark:bg-orange-600 rounded-none",
      },
    };

    return (
      <>
        <div className="bg-white">
          <div className="md:mt-20 mt-5">
            <div className="mx-4 flex flex-wrap items-start justify-center gap-2  md:mx-32 md:justify-start md:gap-0 lg:gap-0">
              <div className="h-96 w-full max-w-[23.5rem] bg-orange-600 md:w-96">
                <h1 className="mx-6 mt-10 font-serif text-3xl font-semibold capitalize sm:mx-10">
                  our core values
                </h1>
                <p className="mx-6 py-5 font-serif text-base text-white sm:mx-10">
                  Assisting communities affected by natural or man-made
                  disasters with shelter, food, education, and essential
                  services. Supporting initiatives aligned with the United
                  Nations Sustainable Development Goals (SDGs) and conducting
                  research to inform humanitarian and social programs.
                </p>
              </div>
              <div
                className="h-96 w-full max-w-[23.5rem] bg-gray-950 bg-blend-overlay bg-cover bg-top bg-no-repeat md:max-w-none md:flex-1 lg:w-162 lg:flex-none"
                id="content"
              >
                <h1 className="mx-6 mt-10 font-serif text-3xl font-semibold capitalize text-orange-700 sm:mx-10 md:text-4xl">
                  our mission
                </h1>
                <p className="mx-6 py-3 font-serif text-base text-white sm:mx-10">
                  We envision resilient communities empowered through education,
                  healthcare, humanitarian aid, environmental stewardship,
                  disaster preparedness, and social justice, with compassionate
                  “Saints” leading the world.
                </p>
                <div className="text-base font-medium dark:text-white"></div>
                <div className="my-8 w-full">
                  <Progress
                    progress={45}
                    size="md"
                    className="rounded-none md:mx-10 mx-5 md:w-xl w-80"
                    theme={customProgressTheme}
                    color="orange"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Section;
