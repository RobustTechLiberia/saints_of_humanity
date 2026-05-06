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
        <div className="bg-white">
          <div className="flex flex-col gap-3 py-2 md:grid md:grid-cols-3 md:items-center">
            {/* logo */}
            <div className="flex items-center justify-center md:col-start-2">
              <img src={logo} alt="LOGO" className="mx-5 h-36 w-auto" />
            </div>
            {/* contact */}
            <div className="bg-white mx-5 md:mx-20">
              <ul className="flex list-none flex-wrap items-center justify-center gap-x-5 gap-y-2 font-serif text-sm md:mx-32 md:flex-nowrap md:justify-center md:text-base">
                <li>
                  <a
                    href="tel:+231770163850"
                    className="flex items-center gap-2"
                  >
                    <FontAwesomeIcon icon={faMobileScreenButton} />
                    <span>+231770163850</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@saintsofhumanity.org"
                    className="flex items-center gap-2"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>info@sanitsofhumanity.org</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden md:block" />
          </div>
          <div className="bg-white h-10 md:mx-20 mx-2 md:border-none md:border-black md:border-t-2 md:border-b-2">
            <ul className="font-serif uppercase  font-normal gap-5 text-md py-2 flex justify-center items-center">
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
        </div>
      </>
    );
  }
}

export default NavBar;
