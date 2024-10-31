import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";

const PageIndicator = ({ number }) => {
  return (
    <div className="self-end flex gap-2 items-center text-white">
      <HiArrowLongLeft className="size-6" />
      <p>{number}</p>
      <HiArrowLongRight className="size-6" />
    </div>
  );
};

export default PageIndicator;
