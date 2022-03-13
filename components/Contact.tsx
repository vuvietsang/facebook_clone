import Image from "next/image";

interface ContactProps {
  name: string;
  image: string;
}
const Contact = ({ name, image }: ContactProps) => {
  return (
    <div className="relative mb-2 flex cursor-pointer items-center space-x-3 rounded-lg p-2 hover:bg-gray-200 ">
      <Image
        className="rounded-full"
        src={image}
        objectFit="cover"
        width={50}
        height={50}
      />
      <p>{name}</p>
      <div className="absolute bottom-2 left-7 h-3 w-3 rounded-full bg-green-400"></div>
    </div>
  );
};

export default Contact;
