import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/images/large.png";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <div className="pt-10 bg-white">
          <div className="flex flex-wrap md:justify-center md:items-center justify-evenly gap-2">
            <div className=" bg-white md:mx-20 mx-0 w-28 ">
              {/* <img src={logo} alt="LOGO" className="h-auto w-28" /> */}
              {/* <h2 className="text-lg font-serif font-medium uppercase">
                saints of <sapn className="text-sm">humanity                    </sapn>
              </h2> */}
            </div>
            <div className=" bg-white">
              {/* <ul className="list-none md:mx-20 mx-5">
                <li>
                  <a href="tel +23177">+231770163850</a>
                </li>
                <li>
                  <a href="info@saintsofhumanity.org">
                    info@sanitsofhumanity.org
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="bg-white h-10 md:mx-20 mx-2 border-black border-t-2 border-b-2">
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
