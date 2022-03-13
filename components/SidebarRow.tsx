import Image from "next/image";
import { SVGProps } from "react";

interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;
interface SidebarProps {
  title: string | null | undefined;
  src?: string | StaticImport;
  Icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

const SidebarRow = (props: SidebarProps) => {
  const { title, src, Icon } = props;
  return (
    <div className="flex cursor-pointer items-center space-x-2 rounded-xl p-3 pr-48 hover:bg-gray-200">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={35}
          height={35}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-7 w-7 text-blue-500" />}
      <p className=" font-small sm:inline-flex">{title}</p>
    </div>
  );
};

export default SidebarRow;
