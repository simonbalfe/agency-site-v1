import { SquarePen, CalendarClock, ChartBar } from "lucide-react";

import DiagonalPattern from "./diagonal-pattern";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FEATURES_DATA = [
  {
    title: "Product Strategy",
    description:
      "We help you define your MVP scope, identify core features, and create a roadmap that gets you to market fast while maximizing value for users.",
    icon: SquarePen,
    image: "/images/homepage/features-1.png",
  },
  {
    title: "Rapid Development",
    description:
      "Our experienced team uses modern tech stacks and agile methodologies to build your product quickly without sacrificing quality or scalability.",
    icon: CalendarClock,
    image: "/images/homepage/features-2.png",
  },
  {
    title: "Launch Support",
    description:
      "From deployment to user onboarding, we ensure a smooth launch. Get analytics setup, performance monitoring, and post-launch iteration support.",
    icon: ChartBar,
    image: "/images/homepage/features-3.png",
  },
];

const FeaturesList = () => {
  return (
    <Tabs
      defaultValue={FEATURES_DATA[0].title}
      className="flex items-center max-lg:flex-col lg:divide-x"
    >
      <TabsList className="flex h-auto flex-1 flex-col bg-transparent p-0 max-lg:border-x lg:border-t">
        {FEATURES_DATA.map((item) => (
          <TabsTrigger
            key={item.title}
            value={item.title}
            className="group relative whitespace-normal border-b px-1 py-5 text-start data-[state=active]:shadow-none lg:px-8"
          >
            <div
              className={`absolute bottom-[-1px] left-0 z-10 h-[1px] w-0 bg-gradient-to-r from-blue-600 via-sky-300 to-transparent transition-all duration-300 group-data-[state=active]:w-1/2`}
            />
            <div className="">
              <div className="flex items-center gap-1.5">
                <item.icon className="size-4" />
                <h3 className="text-lg tracking-[-0.36px]">{item.title}</h3>
              </div>
              <p className="text-muted-foreground mt-2.5 tracking-[-0.32px]">
                {item.description}
              </p>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="flex-1">
        {FEATURES_DATA.map((item, index) => (
          <TabsContent
            key={index}
            value={item.title}
            className="m-0 px-6 py-[38px] max-lg:border-x"
          >
            <div className="flex justify-center">
              <div>
                <div className="px-6 lg:px-10">
                  <DiagonalPattern className="h-6 lg:h-10" />
                </div>
                <div className="relative grid grid-cols-[auto_1fr_auto] items-stretch">
                  <DiagonalPattern className="h-full w-6 lg:w-10" />
                  <img
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={510}
                    className="m-3 rounded-md object-contain shadow-md lg:rounded-xl lg:shadow-lg dark:invert"
                  />
                  <DiagonalPattern className="w-6 lg:w-10" />
                </div>
                <div className="px-6 lg:px-10">
                  <DiagonalPattern className="h-6 lg:h-10" />
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export default FeaturesList;
