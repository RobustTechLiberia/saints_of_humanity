import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
// REMOVED: import Link from "next/link";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar
          fluid
          className="absolute top-0 left-0 z-50 h-20 w-full !bg-inherit md:!bg-transparent dark:!bg-inherit dark:md:!bg-transparent"
        >
          {/* REMOVED: as={Link} */}
          <NavbarBrand href="https://flowbite-react.com">
            {/* <img
              src="/favicon.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            /> */}
            <span className="self-center md:mt-5 mt-3 md:mx-52 uppercase md:text-4xl font-serif md:text-orange-500 text-orange-600 text-3xl whitespace-nowrap  mx-8 font-semibold dark:text-white">
              soh{" "}
            </span>
          </NavbarBrand>
          <NavbarToggle className="!border-0 !bg-transparent hover:!bg-transparent focus:!bg-transparent active:!bg-transparent focus:!ring-0" />
          <NavbarCollapse className="!mt-5 !w-full !border-0 !bg-inherit [&>ul]:!bg-inherit [&>ul>li]:!bg-inherit md:!mt-0 md:!w-auto md:!bg-transparent md:[&>ul]:!bg-transparent md:[&>ul>li]:!bg-transparent dark:!bg-inherit dark:md:!bg-transparent">
            <NavbarLink
              href="/"
              active
              className="!w-full md:text-orange-600 lg:text-orange-600 capitalize !border-0 !bg-gray-900 font-serif md:text-lg text-xl !text-white md:mr-0 mr-5 md:hover:!bg-inherit hover:bg-gray-950 focus:!bg-inherit active:!bg-inherit md:!w-auto md:!bg-transparent md:hover:!bg-transparent md:focus:!bg-transparent md:active:!bg-transparent"
            >
              home
            </NavbarLink>
            {/* REMOVED: as={Link} and changed href to target your route */}
            <NavbarLink
              href="/about"
              className="!w-full capitalize !border-0 !bg-gray-900 font-serif md:text-lg text-xl !text-white md:hover:!bg-inherit focus:!bg-inherit active:!bg-inherit md:!w-auto md:!bg-transparent md:hover:!bg-transparent md:focus:!bg-transparent md:active:!bg-transparent"
            >
              about
            </NavbarLink>
            <NavbarLink
              href="/services"
              className="!w-full capitalize !border-0 !bg-gray-900 font-serif md:text-lg text-xl !text-white md:hover:!bg-inherit focus:!bg-inherit active:!bg-inherit md:!w-auto md:!bg-transparent md:hover:!bg-transparent md:focus:!bg-transparent md:active:!bg-transparent"
            >
              blog
            </NavbarLink>
            <NavbarLink
              href="/projects"
              className="!w-full capitalize !border-0 !bg-gray-900 font-serif md:text-lg text-xl !text-white md:hover:!bg-inherit focus:!bg-inherit active:!bg-inherit md:!w-auto md:!bg-transparent md:hover:!bg-transparent md:focus:!bg-transparent md:active:!bg-transparent"
            >
              projects
            </NavbarLink>
            <NavbarLink
              href="/contact"
              className="!w-full !border-0 !bg-gray-900 font-serif md:text-lg md:mr-20 text-xl !text-white md:hover:!bg-inherit focus:!bg-inherit active:!bg-inherit md:!w-auto md:!bg-transparent md:hover:!bg-transparent md:focus:!bg-transparent md:active:!bg-transparent"
            >
              Contact
            </NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
