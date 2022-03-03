import Image from 'next/image'
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  ViewGridIcon,
} from '@heroicons/react/outline'
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridAddIcon,
} from '@heroicons/react/solid'
import HeaderIcon from './HeaderIcon'
const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center bg-white p-2 shadow-md lg:px-5">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="ml-2 flex items-center rounded-full  bg-gray-100 p-2">
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
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center justify-end sm:space-x-2">
        <p className="whitespace-nowrap pr-3 font-semibold ">Viết Sang</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  )
}

export default Header
