interface Icons {
  Icon: any
  active?: boolean
}
function HeaderIcon({ Icon, active }: Icons) {
  return (
    <div className=" flex cursor-pointer items-center rounded-xl active:border-b-2 active:border-blue-500 sm:h-14 md:px-10 md:hover:bg-gray-100">
      <Icon
        className={`mx-auto h-5 text-gray-500 hover:text-blue-500 sm:h-7 ${
          active && 'text-blue-500'
        }`}
      />
    </div>
  )
}

export default HeaderIcon
