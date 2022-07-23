import React from "react";
import defaults from "../../assets/images/Gallery/default.png";
import city from "../../assets/images/Gallery/the_city.png";
import asac from "../../assets/images/Gallery/asac.png";

const GalleryCard = ({ name, src, smallDesc }) => {
  return (
    <div className="container h-auto max-w-full mx-auto">
      <div className="relative flex flex-col min-w-0 break-words bg-white border dark:bg-primaryDark dark:border-primaryDark border-secondaryGrey rounded-nearkits">
        <img src={src} alt={`index-of-${src}`} className="rounded-t-nearkits" />
        <div id="card-body" className="flex flex-col px-6 py-7">
          <div className="flex justify-start">
            <h5 className="mb-4 text-black capitalize dark:text-white">
              {name}
            </h5>
          </div>
          <div className="flex justify-start">
            <p className="mb-4 text-black capitalize dark:text-white">
              {smallDesc}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="w-full px-2 py-1 text-white border dark:bg-disabled bg-primaryGrey border-disabled rounded-nearkits"
              disabled
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomizeGallery = () => {
  return (
    <>
      <div className="container w-full mx-auto">
        <div className="grid grid-cols-3 gap-2">
          <GalleryCard
            src={defaults}
            name={"Default"}
            smallDesc="NearKits Basic UI"
          />
          <GalleryCard
            src={city}
            name={"The City"}
            smallDesc="Start Of something"
          />
          <GalleryCard src={asac} name={"Asac"} smallDesc="Return to Monke" />
        </div>
      </div>
    </>
  );
};

export default CustomizeGallery;
