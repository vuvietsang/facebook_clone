interface Icons {
  Icon: any;
  active?: boolean;
}
function HeaderIcon({ Icon, active }: Icons) {
  return (
    <div className={`${active && "border-b-2  border-b-blue-500 "}`}>
      <div
        className={`flex  cursor-pointer items-center rounded-lg sm:mt-1  sm:mb-1 sm:h-12 md:px-12  ${
          active ? "hover:bg-none" : "md:hover:bg-gray-100"
        } `}
      >
        <Icon
          className={`mx-auto text-gray-500 sm:h-7   ${
            active && "text-blue-500"
          }`}
        />
      </div>
    </div>
  );
}

export default HeaderIcon;
