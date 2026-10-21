import React from "react";
import Subscribe from "../components/subscribe/subscribe";

class Subscription extends React.Component {
  render() {
    return (
      <>
        <div className="md:h-80 h-32 bg-white">
          <Subscribe />
        </div>{" "}
      </>
    );
  }
}

export default Subscription;
