import Image from "next/image";
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";
import { useRef } from "react";
const Header = () => {
  // run this function from an event handler or an effect to execute scroll
  const session = useSession();
  const img = session.data?.user?.image;
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="sticky top-0 z-50 flex items-center bg-white p-0 shadow-md lg:px-5  ">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="ml-2 flex items-center rounded-full bg-gray-100 p-2 pr-8 focus-within:bg-gray-200">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="ml-2  hidden flex-shrink bg-transparent bg-gray-100 outline-none md:inline-flex"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex flex-grow justify-center">
        <div className="flex space-x-1">
          <div onClick={scrollTop}>
            <HeaderIcon active Icon={HomeIcon} />
          </div>

          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center justify-end sm:space-x-2">
        <div className="flex hidden items-center space-x-2 rounded-full p-1 hover:bg-gray-200 lg:inline-flex">
          <Image
            src={img}
            onClick={() => {
              signOut();
            }}
            className="cursor-pointer rounded-full"
            width={37}
            height={37}
            layout="fixed"
          />
          <p className="whitespace-nowrap pr-3 font-semibold ">
            {session.data?.user?.name}
          </p>
        </div>
        <div className="flex space-x-2  ">
          <ViewGridIcon className="icon" />
          <ChatIcon className="icon" />
          <BellIcon className="icon" />
          <ChevronDownIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
