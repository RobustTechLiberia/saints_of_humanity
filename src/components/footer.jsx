import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white">
          <div className="h-28 md:h-20" aria-hidden="true" />
          <footer className="fixed bottom-0 left-0 w-full bg-white p-4 md:flex md:items-center md:justify-between md:p-6 z-50">
            <span className="text-sm text-black font-serif sm:text-center">
              © 2026{" "}
              <a href="#" className="font-serif text-black capitalize">
                robust technology
              </a>
              . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
              <li>
                <Link
                  to="/"
                  className="font-serif text-black uppercase me-4 md:me-6"
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-serif text-black uppercase me-4 md:me-6"
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="font-serif text-black uppercase me-4 md:me-6"
                >
                  blog
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="font-serif text-black uppercase me-4 md:me-6"
                >
                  faq
                </Link>
              </li>
              <li>
                <Link to="/job" className="font-serif text-black uppercase">
                  job
                </Link>
              </li>
            </ul>
          </footer>
        </div>
      </>
    );
  }
}

export default Footer;
