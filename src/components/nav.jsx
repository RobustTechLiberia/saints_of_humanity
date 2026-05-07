import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo.png";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white border-none border-t-2 border-b-2 border-black md:mx-10 mx-2 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 py-3">
            {/* logo */}
            <div className="flex justify-center md:justify-start md:mx-8">
              <img
                src={logo}
                alt="LOGO"
                className="sm:h-36 md:h-36 lg:h-36 h-36 w-auto"
              />
            </div>

            {/* navigation */}
            <div className="flex justify-center overflow-x-auto">
              <ul
                className="font-serif uppercase font-normal 
              flex items-center 
              gap-2 sm:gap-4 md:gap-5 
              text-lg sm:text-xs md:text-sm lg:text-base 
              whitespace-nowrap px-2"
              >
                <li>
                  <Link to="/" className="hover:text-gray-900">
                    home
                  </Link>
                </li>

                <li>
                  <Link to="/about" className="hover:text-gray-900">
                    about
                  </Link>
                </li>

                <li>
                  <Link to="/blog" className="hover:text-gray-900">
                    blog
                  </Link>
                </li>

                <li>
                  <Link to="/faq" className="hover:text-gray-900">
                    faq
                  </Link>
                </li>

                <li>
                  <Link to="/job" className="hover:text-gray-900">
                    job
                  </Link>
                </li>
              </ul>
            </div>

            {/* contact */}
            <div className="flex justify-center md:justify-end">
              <ul
                className="flex flex-col lg:flex-row items-center 
              gap-x-4 gap-y-1 
              font-serif 
              text-lg sm:text-xs md:text-sm lg:text-base 
              md:mr-3 break-all"
              >
                <li>
                  <a
                    href="tel:+231770163850"
                    className="flex items-center gap-1"
                  >
                    <FontAwesomeIcon icon={faMobileScreenButton} />
                    <span>+231770163850</span>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:info@saintsofhumanity.org"
                    className="flex items-center gap-1"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>info@saintsofhumanity.org</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
