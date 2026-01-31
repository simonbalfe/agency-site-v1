import React from "react";

import { Eye } from "lucide-react";
import SectionHeader from "../elements/section-header";
import OptimizeList from "../elements/optimize-list";

const Optimize = () => {
  return (
    <section id="optimized-scheduling" className="">
      <div className="border-b">
        <SectionHeader
          iconTitle="Expertise"
          title="We specialize in what matters"
          icon={Eye}
          description={
            "Focus on building products that users love with our expertise in web apps, mobile apps, and SaaS platforms."
          }
        />
      </div>

      <div className="container border-x lg:!px-0">
        <OptimizeList />
      </div>

      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export default Optimize;
