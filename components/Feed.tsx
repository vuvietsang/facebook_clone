import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

const Feed = () => {
  return (
    <div className=" mt-4 h-screen flex-grow overflow-y-auto  pt-2 pb-36  scrollbar-hide">
      {/* Story */}
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        {/* InputBox */}
        <InputBox />
        {/* Post */}
        <Posts />
      </div>
    </div>
  );
};
export default Feed;
