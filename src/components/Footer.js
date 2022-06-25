import React from "react";
import Twitter from "./icons/Twitter";
import Discord from "./icons/Discord";

const Footer = () => {
  return (
    <div className="container flex justify-center w-full px-1 py-5 mx-auto sm:justify-between">
      <div className="flex flex-row items-start justify-start space-x-2 fill-darkText">
        <a
          href="https://twitter.com/NearKits_io"
          rel="noreferrer noopener"
          target="_blank"
        >
          <Twitter />
        </a>
        <a
          href="https://discord.com/invite/NEARKits "
          rel="noreferrer noopener"
          target="_blank"
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
