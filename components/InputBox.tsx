import {
  CameraIcon,
  EmojiHappyIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { ChangeEvent, MutableRefObject, useRef, useState } from "react";
import { db } from "../firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "firebase/storage";

const InputBox = () => {
  const storage = getStorage();
  const { data: session } = useSession();
  const sendBox = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (!inputref?.current?.value) return;

    // Add a new document in collection "post"
    await addDoc(collection(db, "post"), {
      message: inputref?.current?.value,
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
      timeStamp: new Date(),
    }).then((doc) => {
      //funky upload stuff for image
      if (imageToPost) {
        const uploadTask = ref(storage, `posts/${doc.id}`);
        uploadString(uploadTask, imageToPost, "data_url")
          .then((snapshot) => {
            console.log("Uploaded a blob or file!");
          })
          .then(() => {
            getDownloadURL(ref(storage, `posts/${doc.id}`)).then((url) => {
              const xhr = new XMLHttpRequest();
              xhr.responseType = "blob";
              xhr.onload = (event) => {
                const blob = xhr.response;
              };
              xhr.open("GET", url);
              xhr.send();
              // Or inserted into an <img> element
              console.log(url + "HIHIHIHI");
              updateDoc(doc, {
                postImage: url,
              });
            });
          });
        removeImage();
      }
    });
    inputref.current.value = "";
  };

  const inputref: MutableRefObject<any> = useRef(null);
  const filePickerRef: MutableRefObject<any> = useRef(null);

  const [imageToPost, setImageToPost] = useState<any>(null);

  const addImageToPost = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (event.target.files != null) {
      if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
      }
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target?.result);
    };
  };
  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="mt-6  rounded-lg bg-white  px-2 pb-2 font-medium text-gray-500 shadow-md">
      <div className="flex items-center space-x-4 p-4">
        <Image
          className="rounded-full"
          src={session?.user?.image}
          height={40}
          width={40}
          layout="fixed"
        />
        <form className="flex flex-1 ">
          <input
            className="h-12 flex-grow rounded-full bg-gray-100 px-5 focus:bg-gray-200 focus:outline-none "
            type="text"
            placeholder={`What's on your mind, ${session?.user?.name}?`}
            ref={inputref}
          />
          <button hidden onClick={sendBox}>
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className="trasnfrom flex cursor-pointer flex-col  transition duration-150 hover:scale-105 hover:brightness-150"
          >
            <img src={imageToPost} className="h-10 object-fill" alt="" />
          </div>
        )}
      </div>
      <div className="flex justify-around border-t py-1 pl-7">
        <div className="flex flex-grow cursor-pointer items-center justify-center space-x-1 rounded-md p-1  hover:bg-gray-200">
          <VideoCameraIcon className="h-7 text-red-400" />
          <p className="text-xs sm:text-sm xl:text-base">Live video</p>
        </div>

        <div
          onClick={() => {
            filePickerRef.current.click();
          }}
          className="flex flex-grow cursor-pointer  items-center justify-center space-x-1 rounded-md p-1  hover:bg-gray-200"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photos/Videos</p>
          <input
            type="file"
            hidden
            onChange={addImageToPost}
            ref={filePickerRef}
          />
        </div>

        <div className="flex flex-grow cursor-pointer items-center justify-center space-x-1 rounded-md p-1  hover:bg-gray-200">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activities</p>
        </div>
      </div>
    </div>
  );
};
export default InputBox;
