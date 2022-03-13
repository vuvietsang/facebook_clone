import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

interface Contacts {
  name: string;
  image: string;
}
const Chatbar = () => {
  const contacts: Contacts[] = [
    { name: "Jeff Bezoz", image: "https://links.papareact.com/f0p" },
    { name: "Elon Musk", image: "https://links.papareact.com/kxk" },
    { name: "Bill Gates", image: "https://links.papareact.com/zvy" },
    { name: "Mark Zuckerberg", image: "https://links.papareact.com/snf" },
    { name: "Harry Potter", image: "https://links.papareact.com/d0c" },
    { name: "The Queen", image: "https://links.papareact.com/6gg" },
    { name: "James Bond", image: "https://links.papareact.com/r57" },
  ];
  return (
    <div className="mt-5 hidden w-80 flex-col p-2 lg:flex">
      <div className="mb-5 flex items-center justify-between text-gray-500">
        <h2>Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact
          key={contact.image}
          name={contact.name}
          image={contact.image}
        />
      ))}
    </div>
  );
};

export default Chatbar;
