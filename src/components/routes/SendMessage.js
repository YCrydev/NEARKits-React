import React from "react";
import newMessageLogo from "../../assets/images/nearkits-message.png";

const SendMessage = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full max-w-5xl px-6 mx-auto space-x-2 bg-white py-7 dark:bg-primaryDark rounded-nearkits">
      <div className="flex flex-col justify-center p-4 space-y-5 md:flex-row md:justify-between md:space-x-10">
        <div className="flex items-center justify-center w-full">
          <img
            src={newMessageLogo}
            alt="new-message-logo"
            className="w-[300px] rounded-nearkits"
          />
        </div>
        <div className="flex flex-col w-full ">
          <form className="flex flex-col justify-start space-y-3 dark:text-white">
            <label
              htmlFor="themeSelect"
              className="text-sm font-medium dark:text-white"
            >
              Select Theme
            </label>
            <select
              name="themeSelect"
              id="x"
              className="px-3 py-2 bg-white border border-black outline-none dark:text-white dark:bg-formDark rounded-nearkits"
            >
              <option value="default">NEARKits Light</option>
              <option value="the-wooks">The Wooks</option>
              <option value="el-cartel">El cafe cartel</option>
              <option value="near-misfits">Near Misfits</option>
            </select>
            <label htmlFor="nearAddress"></label>
            <input
              type="text"
              className="px-3 py-2 bg-white border border-black outline-none dark:text-white dark:bg-formDark rounded-nearkits"
              placeholder="NEAR address"
            />
            <label htmlFor="nearMessages"></label>
            <textarea
              placeholder="Write Message"
              className="h-[162px] px-3 py-2 bg-white border border-black outline-none dark:text-white dark:bg-formDark rounded-nearkits w-[443px]"
            ></textarea>
            <button className="button-base">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
