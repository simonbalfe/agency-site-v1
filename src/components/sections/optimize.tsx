import React from "react";

import { Layers } from "lucide-react";
import SectionHeader from "../elements/section-header";
import OptimizeList from "../elements/optimize-list";

const Optimize = () => {
  return (
    <section id="services" className="">
      <div className="border-b">
        <SectionHeader
          iconTitle="Services"
          title="What we build"
          icon={Layers}
          description={
            "We help startups and businesses launch digital products across web, mobile, and automation."
          }
        />
      </div>

      <div className="container border-x lg:!px-0">
        <OptimizeList />
      </div>

      <div className="h-8 w-full border-y md:h-12 lg:h-[56px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export default Optimize;
