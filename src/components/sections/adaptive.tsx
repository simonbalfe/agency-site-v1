import React from "react";

import { Shapes } from "lucide-react";
import SectionHeader from "../elements/section-header";
import AdaptiveList from "../elements/adaptive-list";

const Adaptive = () => {
  return (
    <section id="adaptive-workflows" className="">
      <div className="border-b">
        <SectionHeader
          iconTitle="Tech Stack"
          title="Modern technologies, proven results"
          icon={Shapes}
          description={
            "We use cutting-edge tools and frameworks to build scalable, maintainable products."
          }
        />
      </div>

      <div className="container border-x lg:!px-0">
        <AdaptiveList />
      </div>

      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export default Adaptive;
