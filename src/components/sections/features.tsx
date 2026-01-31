import React from "react";

import { PocketKnife } from "lucide-react";
import SectionHeader from "../elements/section-header";
import FeaturesList from "../elements/features-list";

const Features = () => {
  return (
    <section id="smart-productivity" className="pt-12 lg:pt-20">
      <div className="border-y">
        <SectionHeader
          iconTitle="Services"
          title="End-to-end MVP development"
          icon={PocketKnife}
          description={
            "From idea validation to launch, we handle every step of building your minimum viable product."
          }
        />
      </div>

      <div className="container border-x lg:!px-0">
        <FeaturesList />
      </div>

      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export default Features;
