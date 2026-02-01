import { 
  Code2, 
  Server, 
  Cloud,
  Figma,
  Database,
  GitBranch
} from "lucide-react";

const DATA = [
  {
    subTitle: "Frontend",
    title: "React & Next.js",
    description:
      "Modern, responsive interfaces with the frameworks trusted by top companies.",
    icons: [Code2, Figma],
  },
  {
    subTitle: "Backend",
    title: "Node.js & Python",
    description:
      "Scalable APIs and server architecture built for growth.",
    icons: [Server, Database],
  },
  {
    subTitle: "Infrastructure",
    title: "Cloud Native",
    description:
      "AWS, Vercel, and modern CI/CD for reliable deployments.",
    icons: [Cloud, GitBranch],
  },
];

const AdaptiveList = () => {
  return (
    <div className="items-center">
      <div className="grid flex-1 max-lg:divide-y max-lg:border-x lg:grid-cols-3 lg:divide-x">
        {DATA.map((item, index) => (
          <div
            key={index}
            className="relative isolate px-1 py-8 text-start lg:px-8 lg:py-12"
          >
            <span className="text-muted-foreground text-sm tracking-[-0.32px]">
              {item.subTitle}
            </span>
            <h3 className="mt-1 text-xl tracking-[-0.36px]">
              {item.title}
            </h3>
            <p className="text-muted-foreground mt-2 text-sm tracking-[-0.32px]">
              {item.description}
            </p>
            <div className="mt-4 flex gap-3">
              {item.icons.map((Icon, iconIndex) => (
                <div
                  key={iconIndex}
                  className="bg-muted flex size-10 items-center justify-center rounded-lg border"
                >
                  <Icon className="text-muted-foreground size-5" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdaptiveList;
