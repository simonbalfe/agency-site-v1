import { Globe, Smartphone, Zap } from "lucide-react";

const OPTIMIZE_DATA = [
  {
    title: "Web Applications",
    description:
      "Full-stack web apps with responsive design, real-time features, and seamless user experiences.",
    icon: Globe,
  },
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile apps for iOS and Android that feel fast and polished.",
    icon: Smartphone,
  },
  {
    title: "Automations",
    description:
      "Custom integrations, APIs, and automated workflows that save time and reduce errors.",
    icon: Zap,
  },
];

const OptimizeList = () => {
  return (
    <div className="grid flex-1 max-lg:divide-y max-lg:border-x lg:grid-cols-3 lg:divide-x">
      {OPTIMIZE_DATA.map((item, index) => (
        <div
          key={index}
          className="relative isolate px-1 py-8 text-start lg:px-8 lg:py-12"
        >
          <div className="bg-muted mb-4 flex size-12 items-center justify-center rounded-xl border">
            <item.icon className="text-foreground size-6" />
          </div>
          <h3 className="text-xl tracking-[-0.36px]">
            {item.title}
          </h3>
          <p className="text-muted-foreground mt-2 tracking-[-0.32px]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OptimizeList;
