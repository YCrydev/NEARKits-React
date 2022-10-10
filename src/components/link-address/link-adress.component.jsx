import { useState } from "react";
import LinkComponent from "../link-component/link.component";
import { FaDocker } from "react-icons/fa";
import {
  TemplateIcon,
  ChatAltIcon,
  ChatAlt2Icon,
  CollectionIcon,
} from "@heroicons/react/solid";
import {
  DocumentSearchIcon,
  PhotographIcon,
  QrcodeIcon,
} from "@heroicons/react/solid";
import Dropdown from "../Dropdown/Dropdown";

const LinkAdress = () => {
  return (
    <>
      <LinkComponent path={"/"}>
        <TemplateIcon className="w-5 m-3 text-purpleBase" />
        Dashboard
      </LinkComponent>

      <LinkComponent path={"/myNfts"}>
        <CollectionIcon className="w-5 m-3 text-primaryYellow" />
        My NFTs
      </LinkComponent>

      <Dropdown />

      <LinkComponent path={"/sendMessage"}>
        <ChatAltIcon className="w-5 m-3 text-primaryGreen" />
        Send Message
      </LinkComponent>

      <LinkComponent path={"/manageMessage"}>
        <ChatAlt2Icon className="w-5 m-3 text-purpleBase" />
        Manage Message
      </LinkComponent>

      <LinkComponent path={"/customizeGallery"}>
        <PhotographIcon className="w-5 m-3 text-primaryYellow" />
        Customize Gallery
      </LinkComponent>

      <LinkComponent path={"/txHistory"}>
        <QrcodeIcon className="w-5 m-3 text-primaryRed" />
        Transaction History
      </LinkComponent>

      <LinkComponent path={"/token"}>
        <QrcodeIcon className="w-5 m-3 text-primaryRed" />
        Tokens
      </LinkComponent>

      <LinkComponent path={"/snipe"}>
        <DocumentSearchIcon className="w-5 m-3 text-primaryBlue" />
        Snipe
      </LinkComponent>

      <LinkComponent path={"whaleTracker"}>
        <div className="inline-flex items-center">
          <span className="w-5 m-3 text-lg text-primaryGreen">
            <FaDocker />
          </span>
          Whale Tracker
        </div>
      </LinkComponent>
    </>
  );
};

export default LinkAdress;
