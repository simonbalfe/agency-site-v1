import React from "react";

import { Code2 } from "lucide-react";
import SectionHeader from "../elements/section-header";
import AdaptiveList from "../elements/adaptive-list";

const Adaptive = () => {
  return (
    <section id="tech-stack" className="">
      <div className="border-b">
        <SectionHeader
          iconTitle="Tech Stack"
          title="Built with modern tools"
          icon={Code2}
          description={
            "We use industry-standard technologies to build fast, scalable products."
          }
        />
      </div>

      <div className="container border-x lg:!px-0">
        <AdaptiveList />
      </div>

      <div className="h-8 w-full border-y md:h-12 lg:h-[56px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export default Adaptive;
