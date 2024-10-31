import Image from "next/image";

const WatchExample = ({ watchColor, watchBackground }) => {
  return (
    <li className="">
      <Image
        src={watchColor}
        alt="Picture of iWatch with navy watch strap"
        placeholder="blur"
        className="grid-start-1 grid-span-2 ${watchBackground}"
      />

      <div className=""></div>
      {/* <div className="bg-[#434558] bg-opacity-60 rounded-md h-4 grid-start-2 grid-span-2"></div> */}
    </li>
  );
};

export default WatchExample;
