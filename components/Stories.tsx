import StoryCard from "./StoryCard";

const Stories = () => {
  const stories: { name: string; src: string; profile: string }[] = [
    {
      name: "Sonny Sangha",
      src: "https://links.papareact.com/zof",
      profile: "https://links.papareact.com/l4v",
    },
    {
      name: "Elon Musk",
      src: "https://links.papareact.com/4zn",
      profile: "https://links.papareact.com/kxk",
    },
    {
      name: "Sangseu",
      src: "https://links.papareact.com/k2j",
      profile: "https://links.papareact.com/f0p",
    },
    {
      name: "Mark Zuckerberg",
      src: "https://links.papareact.com/xql",
      profile: "https://links.papareact.com/snf",
    },
    {
      name: "Bill Gates",
      src: "https://links.papareact.com/4u4",
      profile: "https://links.papareact.com/zvy",
    },
  ];
  return (
    <div className="mx-auto flex justify-center space-x-2 overflow-scroll  ">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
