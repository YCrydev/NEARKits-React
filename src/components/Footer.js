import React from "react";
import Twitter from "./icons/Twitter";
import Discord from "./icons/Discord";

const Footer = () => {
  return (
    <div className="flex justify-center w-full px-3 py-5 mx-auto sm:justify-between">
      <div className="flex flex-row items-start justify-start space-x-2 fill-darkText">
        <a
          href="https://twitter.com/NearKits_io"
          rel="noreferrer noopener"
          target="_blank"
          className="transition duration-200 ease-in-out transform hover:-translate-y-2"
        >
          <Twitter />
        </a>
        <a
          href="https://discord.com/invite/NEARKits "
          rel="noreferrer noopener"
          target="_blank"
          className="transition duration-200 ease-in-out transform hover:-translate-y-2"
        >
          <Discord />
        </a>
      </div>
      <div className="flex items-end justify-end text-sm text-darkText">
        Copyright © NEARKits
      </div>
    </div>
  );
};

export default Footer;
