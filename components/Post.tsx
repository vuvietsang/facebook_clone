import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

interface PostProps {
  name: string;
  message: string;
  email: string;
  timeStamp: any;
  image: string;
  postImage: string;
}
const Post = ({
  name,
  image,
  message,
  email,
  postImage,
  timeStamp,
}: PostProps) => {
  return (
    <div className="mt-5 flex flex-col  overflow-y-auto rounded-lg bg-white shadow-md">
      <div className="space-y-1 p-4">
        <div className="flex space-x-2">
          <img src={image} width={40} height={40} className="rounded-full" />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-500">
              {new Date(timeStamp.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p>{message}</p>
      </div>
      <img
        src={postImage}
        className="w-full object-contain"
        height={200}
        alt=""
      />
      <div className="my-1 flex justify-between space-x-2 border-t border-gray-300   p-1   ">
        <div className="flex grow cursor-pointer items-center justify-center space-x-2 rounded-md  p-2 text-center text-xs text-gray-500 hover:bg-gray-200 sm:text-base ">
          {" "}
          <ThumbUpIcon className="h-4" /> <p>Like</p>{" "}
        </div>
        <div className="flex grow cursor-pointer items-center justify-center space-x-2 rounded-md p-2 text-xs text-gray-500 hover:bg-gray-200 sm:text-base ">
          {" "}
          <ChatAltIcon className="h-4" /> <p>Comment</p>{" "}
        </div>
        <div className="flex grow cursor-pointer items-center justify-center space-x-2 rounded-md p-2 text-xs text-gray-500 hover:bg-gray-200 sm:text-base ">
          {" "}
          <ShareIcon className="h-4" /> <p>Share</p>{" "}
        </div>
      </div>
    </div>
  );
};
export default Post;
