import { ReactComponent as LoadingGif } from "../../assets/images/loading_circle.svg";

const Spinner = () => {
  return (
    <LoadingGif
      alt="loading-gif"
      className="flex justify-center  max-w-[140px] mx-auto max-h-[140px] w-1/2"
    />
  );
};

export default Spinner;
