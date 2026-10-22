import React from "react";
import { Link } from "react-router-dom";
import {
  Footer as FlowbiteFooter,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

class Footer extends React.Component {
  render() {
    return (
      <>
        <FlowbiteFooter className="md:h-120 h-auto min-h-120 flex flex-col justify-between bg-black rounded-none p-0">
          <div className="w-full h-full flex flex-col justify-between ">
            <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:mt-10 md:text-4xl text-lg font-serif md:mx-20 mx-3 md:grid-cols-4">
              <div>
                <FooterTitle
                  title="Links"
                  className="text-orange-500 text-lg md:text-xl"
                />
                <FooterLinkGroup col className="text-white text-lg md:text-xl">
                  <FooterLink href="#" className="hover:text-white">
                    About
                  </FooterLink>
                  <FooterLink href="#" className="hover:text-white">
                    Who We Are
                  </FooterLink>
                  <FooterLink href="#" className="hover:text-white">
                    Our Projects
                  </FooterLink>
                  <FooterLink href="#" className="hover:text-white">
                    Blog
                  </FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle
                  title="Follow Us"
                  className="text-orange-500 text-lg md:text-xl"
                />
                <FooterLinkGroup col className="text-white text-lg md:text-xl">
                  <FooterLink href="#" className="hover:text-white">
                    Facebook
                  </FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle
                  title="Resource Links"
                  className="text-orange-500 text-lg md:text-xl"
                />
                <FooterLinkGroup
                  col
                  className="text-gray-400 text-lg md:text-xl"
                >
                  <FooterLink href="#" className="hover:text-white">
                    Privacy Policy
                  </FooterLink>
                  <FooterLink href="#" className="hover:text-white">
                    Licensing
                  </FooterLink>
                  <FooterLink href="#" className="hover:text-white">
                    Terms &amp; Conditions
                  </FooterLink>
                </FooterLinkGroup>
              </div>
              <div>{/* Cleaned up broken comment layout here */}</div>
            </div>

            <div className="w-full bg-orange-500 border-t-0 border-neutral-800 px-6 py-6 sm:flex sm:items-center sm:justify-between">
              <FooterCopyright
                href="#"
                by="saints of humanity"
                year={2023}
                className="text-black font-serif lowercase"
              />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-black">
                <FooterIcon
                  href="#"
                  icon={BsFacebook}
                  className="hover:text-black text-black"
                />
                <FooterIcon
                  href="#"
                  icon={BsInstagram}
                  className="hover:text-black text-black"
                />
                <FooterIcon
                  href="#"
                  icon={BsTwitter}
                  className="hover:text-black text-black"
                />
              </div>
            </div>
          </div>
        </FlowbiteFooter>
      </>
    );
  }
}

export default Footer;
