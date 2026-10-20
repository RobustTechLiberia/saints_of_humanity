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
          className="absolute top-0 left-0 z-50 h-20 w-full bg-inherit! md:bg-inherit! dark:bg-inherit! dark:md:bg-inherit!"
        >
          {/* REMOVED: as={Link} */}
          <NavbarBrand href="https://flowbite-react.com">
            {/* <img
              src="/favicon.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            /> */}
            <span className="self-center md:mx-32 uppercase md:text-4xl font-serif text-orange-600 text-3xl whitespace-nowrap  mx-8 font-semibold dark:text-white">
              soh{" "}
            </span>
          </NavbarBrand>
          <NavbarToggle className="!border-0 !bg-transparent hover:!bg-transparent focus:!bg-transparent active:!bg-transparent focus:!ring-0" />
          <NavbarCollapse className="!mt-5 !w-full !border-0 !bg-gray-800 md:!mt-0 md:!w-auto md:!bg-gray-900 dark:!bg-gray-800 dark:md:!bg-gray-900">
            <NavbarLink
              href="/"
              active
              className="!w-full !border-0 !bg-gray-800 !text-white hover:!bg-transparent focus:!bg-transparent active:!bg-transparent md:!w-auto md:!bg-gray-900 dark:!bg-gray-800 dark:md:!bg-gray-900"
            >
              Home
            </NavbarLink>
            {/* REMOVED: as={Link} and changed href to target your route */}
            <NavbarLink
              href="/about"
              className="!w-full !border-0 !bg-gray-800 !text-white hover:!bg-transparent focus:!bg-transparent active:!bg-transparent md:!w-auto md:!bg-gray-900 dark:!bg-gray-800 dark:md:!bg-gray-900"
            >
              About
            </NavbarLink>
            <NavbarLink
              href="/services"
              className="!w-full !border-0 !bg-gray-800 !text-white hover:!bg-transparent focus:!bg-transparent active:!bg-transparent md:!w-auto md:!bg-gray-900 dark:!bg-gray-800 dark:md:!bg-gray-900"
            >
              Services
            </NavbarLink>
            <NavbarLink
              href="/pricing"
              className="!w-full !border-0 !bg-gray-800 !text-white hover:!bg-transparent focus:!bg-transparent active:!bg-transparent md:!w-auto md:!bg-gray-900 dark:!bg-gray-800 dark:md:!bg-gray-900"
            >
              Pricing
            </NavbarLink>
            <NavbarLink
              href="/contact"
              className="!w-full !border-0 !bg-gray-800 !text-white hover:!bg-transparent focus:!bg-transparent active:!bg-transparent md:!w-auto md:!bg-gray-900 dark:!bg-gray-800 dark:md:!bg-gray-900"
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
