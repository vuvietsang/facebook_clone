import { useSession } from "next-auth/react";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";
const Sidebar = () => {
  const session = useSession();
  return (
    <div className="mt-2 hidden flex-col p-2 md:max-w-xl lg:inline-flex">
      <SidebarRow
        src={session.data?.user?.image}
        title={session.data?.user?.name}
      />
      <SidebarRow Icon={UserIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Friends" />
      <SidebarRow Icon={ShoppingBagIcon} title="Groups" />
      <SidebarRow Icon={DesktopComputerIcon} title="Marketplace" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
};

export default Sidebar;
