import React from "react";

class SubForm extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-col justify-start items-start bg-white py-3 md:mt-10">
          <form
            action="post"
            className="w-auto h-auto bg-white md:mx-28 lg:mx-28 mx-5"
          >
            <legend className="font-serif font-semibold text-3xl md:text-4xl  text-left md:py-8 py-5 capitalize">
              leave us a message{" "}
            </legend>
            <div className="py-3">
              <input
                type="email"
                name="email"
                id="email"
                className="bg-white md:py-4 lg:py-4 py-3 px-3 md:w-lg lg:w-lg w-auto border border-gray-500 lowercase text-gray-800 font-serif"
                placeholder="john@example.com"
              />
            </div>
            <div className="py-3">
              <textarea
                name="message"
                id="message"
                className="px-3 md:w-lg lg:w-lg font-serif w-80 md:h-52 lg:h-52 h-32 border border-gray-500 lowercase"
              ></textarea>
            </div>
            <div className="py-3">
              <input
                type="submit"
                value="send"
                className="py-3 px-4 uppercase font-serif border-0 text-white bg-black"
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SubForm;
