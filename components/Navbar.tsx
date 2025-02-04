import Image from "next/image";
import ToggleMode from "./ToggleMode";

const Navbar = () => {
  return (
    <div className="px-4 md:px-8 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div className="border flex justify-between items-center w-full px-4 md:py-4 py-2 rounded shadow-md bg-transparent backdrop-blur-lg">
        <Image
          src="/assets/images/logo.gif"
          alt="logo"
          width={75}
          height={75}
          className="object-cover md:w-[70px] md:h-auto w-[50px]"
        />
        <h1 className="font-bold md:text-4xl text-lg bg-gradient-to-r dark:from-indigo-200 dark:to-indigo-500 from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
          Happy Birthday Cassyku
        </h1>
        <ToggleMode />
      </div>
    </div>
  );
};

export default Navbar;
