const DATA = [
  {
    subTitle: "Frontend",
    title: "React & Next.js",
    description:
      "Build fast, responsive user interfaces with the most popular frontend frameworks used by top companies.",
    icon: "CircleHelp",
    image: "/images/homepage/adaptive-1.png",
  },
  {
    subTitle: "Backend",
    title: "Node.js & Python",
    description:
      "Scalable server architecture that handles growth from your first users to millions, with clean APIs.",
    icon: "Volume2",
    image: "/images/homepage/adaptive-2.png",
  },
  {
    subTitle: "Infrastructure",
    title: "Cloud Native",
    description:
      "Deploy on AWS, Vercel, or your preferred cloud with CI/CD pipelines and infrastructure as code.",
    icon: "Lightbulb",
    image: "/images/homepage/adaptive-3.png",
  },
];
const AdaptiveList = () => {
  return (
    <div className="items-center">
      <div className="grid flex-1 max-lg:divide-y max-lg:border-x lg:grid-cols-3 lg:divide-x">
        {DATA.map((item, index) => (
          <div
            key={index}
            className={`relative isolate pt-5 text-start lg:pt-20`}
          >
            <span className="px-1 tracking-[-0.32px] lg:px-8">
              {item.subTitle}
            </span>
            <h3 className={`mt-2 px-1 text-lg tracking-[-0.36px] lg:px-8`}>
              {item.title}
            </h3>
            <p className="text-muted-foreground px-1 py-4 tracking-[-0.32px] lg:px-8">
              {item.description}
            </p>
            <div className="border-t py-4 lg:px-2">
              <img
                src={item.image}
                alt={item.title}
                width={416}
                height={233}
                className="rounded-md shadow-md lg:rounded-xl lg:shadow-lg dark:invert"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdaptiveList;
