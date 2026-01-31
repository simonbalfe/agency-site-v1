"use client";

import React from "react";

import {
  Rocket,
  Briefcase,
  Building,
  BadgeDollarSign,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

import { Button } from "../ui/button";
import SectionHeader from "../elements/section-header";

interface PricingPlan {
  icon: LucideIcon;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
}

interface ComparisonFeature {
  name: string;
  basic: string | boolean;
  business: string | boolean;
  enterprise: string | boolean;
}

interface FeatureSection {
  category: string;
  features: ComparisonFeature[];
}

const pricingPlans: PricingPlan[] = [
  {
    icon: Rocket,
    name: "Starter MVP",
    price: {
      monthly: 15,
      yearly: 15,
    },
    features: [
      "4-6 week delivery",
      "Core features only",
      "Responsive web app",
      "Basic analytics setup",
      "2 rounds of revisions",
    ],
  },
  {
    icon: Briefcase,
    name: "Growth MVP",
    price: {
      monthly: 30,
      yearly: 30,
    },
    features: [
      "6-8 week delivery",
      "Advanced features",
      "Web + mobile apps",
      "Full analytics & monitoring",
      "User authentication",
      "Payment integration",
    ],
  },
  {
    icon: Building,
    name: "Scale MVP",
    price: {
      monthly: 50,
      yearly: 50,
    },
    features: [
      "8-12 week delivery",
      "Complex features & integrations",
      "Multi-platform apps",
      "Admin dashboard",
      "API development",
      "3 months post-launch support",
    ],
  },
];

const comparisonFeatures: FeatureSection[] = [
  {
    category: "Development",
    features: [
      {
        name: "Core Features",
        basic: "5",
        business: "10",
        enterprise: "Unlimited",
      },
      {
        name: "Responsive Design",
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        name: "User Authentication",
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Mobile Apps",
        basic: false,
        business: true,
        enterprise: true,
      },
      {
        name: "Admin Dashboard",
        basic: false,
        business: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Integrations",
    features: [
      {
        name: "Third-party APIs",
        basic: "1",
        business: "3",
        enterprise: "Unlimited",
      },
      {
        name: "Analytics Setup",
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Payment Processing",
        basic: false,
        business: true,
        enterprise: true,
      },
      {
        name: "Email Services",
        basic: false,
        business: true,
        enterprise: true,
      },
      {
        name: "Custom API",
        basic: false,
        business: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Support & Delivery",
    features: [
      {
        name: "Revision Rounds",
        basic: "2",
        business: "4",
        enterprise: "Unlimited",
      },
      {
        name: "Weekly Updates",
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Code Handoff",
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Documentation",
        basic: false,
        business: true,
        enterprise: true,
      },
      {
        name: "Post-launch Support",
        basic: false,
        business: false,
        enterprise: true,
      },
    ],
  },
];

const Pricing = ({ withBorders = true }: { withBorders?: boolean }) => {
  const [isMonthly, setIsMonthly] = React.useState(true);

  return (
    <section className="">
      <div className={withBorders ? "border-b" : ""}>
        <SectionHeader
          className={
            withBorders ? "" : "border-none lg:items-center lg:text-center"
          }
          iconTitle="Packages"
          title="Transparent pricing"
          icon={BadgeDollarSign}
          description="Fixed-price packages tailored to your MVP needs"
        />
      </div>

      <div className="container mt-10 lg:mt-14">
        <section className="grid border max-lg:divide-y lg:grid-cols-3 lg:divide-x">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              index={index}
              isMonthly={isMonthly}
            />
          ))}
        </section>

        {!withBorders && (
          <section className="py-14 md:py-20 lg:py-24">
            <div className="flex justify-center">
              <div className="inline-flex gap-[2px] rounded-md border p-[2px]">
                <Button
                  variant={isMonthly ? "default" : "outline"}
                  onClick={() => setIsMonthly(true)}
                  className="transition-colors"
                >
                  Monthly
                </Button>
                <Button
                  variant={!isMonthly ? "default" : "outline"}
                  onClick={() => setIsMonthly(false)}
                  className="transition-colors"
                >
                  Yearly
                </Button>
              </div>
            </div>
            <div className="mt-12 overflow-x-auto">
              <PlanHeaders isMonthly={isMonthly} />
              <FeatureSections />
            </div>
          </section>
        )}
      </div>

      {withBorders && (
        <div className="mt-12 h-8 w-full border-y md:h-12 lg:h-[112px]">
          <div className="container h-full w-full border-x"></div>
        </div>
      )}
    </section>
  );
};

const PricingCard = ({
  plan,
  index,
  isMonthly,
}: {
  plan: PricingPlan;
  index: number;
  isMonthly: boolean;
}) => {
  const Icon = plan.icon;
  return (
    <div className="flex flex-col justify-between p-6">
      <div className="space-y-2 border-b pb-6">
        <div className="text-muted-foreground flex items-center gap-2.5">
          <Icon className="size-4" />
          <h3 className="text-xl tracking-[-0.8px]">{plan.name}</h3>
        </div>

        <PriceDisplay plan={plan} isMonthly={isMonthly} />
      </div>

      <FeatureList features={plan.features} />

      <Button variant={index === 1 ? "default" : "secondary"} className="mt-12">
        Get started
      </Button>
    </div>
  );
};

const PriceDisplay = ({
  plan,
  isMonthly,
}: {
  plan: PricingPlan;
  isMonthly: boolean;
}) => (
  <>
    <div className="flex items-baseline font-medium">
      <span className="text-[3.5rem] leading-[120%] tracking-[-3.92px]">
        ${plan.price.monthly}K
      </span>
    </div>
    <p className="text-muted-foreground">
      Fixed price, no surprises
    </p>
  </>
);

const FeatureList = ({ features }: { features: string[] }) => (
  <div className="pt-6">
    <h4 className="text-muted-foreground-subtle">Features Included</h4>
    <ul className="mt-4 space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-4">
          <BadgeCheck className="text-muted-foreground size-6" />
          <span className="text-muted-foreground tracking-[-0.32px]">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const PlanHeaders = ({ isMonthly }: { isMonthly: boolean }) => (
  <div className="grid grid-cols-4">
    <div className="col-span-1 max-lg:hidden"></div>
    <div className="col-span-4 grid gap-4 border-t max-lg:divide-y max-lg:border lg:col-span-3 lg:grid-cols-3 lg:divide-x">
      {pricingPlans.map((plan, index) => (
        <div key={index} className="flex flex-col p-6">
          <div className="space-y-2 pb-6">
            <div className="text-muted-foreground flex items-center gap-2.5">
              <plan.icon className="size-4" />
              <h3 className="text-xl tracking-[-0.8px]">{plan.name}</h3>
            </div>
            <PriceDisplay plan={plan} isMonthly={isMonthly} />
          </div>
          <Button className="mt-auto">Get started</Button>
        </div>
      ))}
    </div>
  </div>
);

const FeatureSections = () => (
  <>
    {comparisonFeatures.map((section, sectionIndex) => (
      <div
        key={sectionIndex}
        className={`border-b first:border-t ${sectionIndex === 0 ? "border-t" : ""}`}
      >
        <div className="py-4">
          <h3 className="text-lg tracking-[-0.36px]">{section.category}</h3>
        </div>
        {section.features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            className="text-muted-foreground grid border-t tracking-[-0.32px] max-lg:grid-rows-[auto_1fr] lg:grid-cols-4"
          >
            <span className="inline-flex items-center py-4">
              {feature.name}
            </span>
            <div className="col-span-3 grid grid-cols-3 divide-x text-center max-lg:border-t">
              {[feature.basic, feature.business, feature.enterprise].map(
                (value, i) => (
                  <FeatureValue key={i} value={value} />
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    ))}
  </>
);

const FeatureValue = ({ value }: { value: string | boolean }) => (
  <div className={`flex items-center justify-center py-4`}>
    {typeof value === "boolean" ? (
      value ? (
        <BadgeCheck className="text-muted-foreground mx-auto size-5" />
      ) : null
    ) : (
      <span className="text-muted-foreground-subtle font-semibold">
        {value}
      </span>
    )}
  </div>
);

export default Pricing;
