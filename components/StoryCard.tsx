import Image from "next/image";

interface StoryCardProps {
  name: string;
  src: string;
  profile: string;
}

const StoryCard = ({ name, src, profile }: StoryCardProps) => {
  return (
    <div
      className="
      relative
      h-52
      w-36 
      cursor-pointer
      overflow-hidden
      rounded-xl
      "
    >
      <div
        className="
      absolute 
      left-3
      top-5
      z-10
      inline-flex
      rounded-full
      border-[3px]
    border-blue-500"
      >
        <Image
          className=" rounded-full  opacity-100"
          src={src}
          width={40}
          height={40}
          layout="fixed"
          objectFit="cover"
        />
      </div>
      <Image
        className="
          transform
          object-cover
          brightness-75
          filter 
          transition
          duration-200 
          ease-in 
          hover:scale-[1.03]"
        src={profile}
        layout="fill"
      />
    </div>
  );
};

export default StoryCard;
