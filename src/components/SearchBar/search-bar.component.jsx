import { SearchIcon } from "@heroicons/react/outline";
const SearchBar = ({ dashboardStyle }) => {
  if (dashboardStyle) {
    return (
      <form className="relative inline-flex w-full">
        <div className="relative flex flex-row items-stretch w-full">
          <input
            type={"text"}
            className="w-full p-2 text-sm text-white bg-white border border-black outline-none rounded-tl-nearkits rounded-bl-nearkits dark:bg-secondaryDark"
            placeholder="Search Nft collection"
            defaultValue={""}
            readOnly
          />
          <button
            type="submit"
            className="px-3 py-2 bg-white border border-black dark:bg-primaryDark rounded-tr-nearkits rounded-br-nearkits"
          >
            <SearchIcon className="w-6 text-darkText" />
          </button>
        </div>
      </form>
    );
  } else {
    return (
      <form className="relative inline-flex">
        <div className="relative flex flex-row items-stretch w-full">
          <input
            type={"text"}
            className="w-full p-2 text-sm text-white bg-white border border-black outline-none rounded-tl-nearkits rounded-bl-nearkits dark:bg-secondaryDark"
            placeholder="Search Nft collection"
            readOnly
          />
          <button
            type="submit"
            className="px-2 bg-white border border-black dark:bg-primaryDark rounded-tr-nearkits rounded-br-nearkits"
          >
            <SearchIcon className="w-6 text-darkText" />
          </button>
        </div>
      </form>
    );
  }
};

export default SearchBar;
