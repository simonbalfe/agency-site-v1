import React from "react";

import { Handshake } from "lucide-react";

import { Card } from "../ui/card";
import SectionHeader from "../elements/section-header";

const testimonials: TestimonialProps[] = [
  {
    logo: {
      src: "/images/logos/zerostatic.png",
      alt: "Zerostatic logo",
      width: 155,
      height: 36,
    },
    quote:
      "LaunchFast delivered our MVP in just 6 weeks. The quality exceeded our expectations and we were able to raise our seed round with the product they built.",
    author: {
      name: "Abdulsalam Abdulsalam",
      role: "CEO & Founder, Zerostatic",
      image: "/images/testimonials/1.png",
    },
  },
  {
    logo: {
      src: "/images/logos/notion.svg",
      alt: "Notion logo",
      width: 96.75,
      height: 36,
    },
    quote:
      "Their team understood our vision from day one. The communication was excellent and they delivered exactly what we needed to validate our idea.",
    author: {
      name: "Emma Lee",
      role: "Product Manager",
      image: "/images/testimonials/2.png",
    },
  },
  {
    logo: {
      src: "/images/logos/slack.svg",
      alt: "Slack logo",
      width: 90.75,
      height: 36,
    },
    quote:
      "We went from concept to paying customers in under 2 months. The LaunchFast team was instrumental in helping us move fast without breaking things.",
    author: {
      name: "Ryan Chen",
      role: "Founder & CTO",
      image: "/images/testimonials/3.png",
    },
  },
  {
    logo: {
      src: "/images/logos/github.svg",
      alt: "GitHub logo",
      width: 101.25,
      height: 36,
    },
    quote:
      "The codebase they delivered was clean, well-documented, and easy for our in-house team to take over. That handoff was seamless.",
    author: {
      name: "Ryan Patel",
      role: "Engineering Manager",
      image: "/images/testimonials/4.png",
    },
  },
  {
    logo: {
      src: "/images/logos/figma.svg",
      alt: "Figma logo",
      width: 81.75,
      height: 36,
    },
    quote:
      "As a non-technical founder, I appreciated how they guided me through the process. They translated my ideas into a product users love.",
    author: {
      name: "Carlos Diaz",
      role: "Founder & CEO",
      image: "/images/testimonials/5.png",
    },
  },
  {
    logo: {
      src: "/images/logos/loom.svg",
      alt: "Loom logo",
      width: 87.75,
      height: 36,
    },
    quote:
      "We&apos;ve worked with several dev agencies before, but LaunchFast stands out. They actually care about the success of your product, not just billing hours.",
    author: {
      name: "Matthew Kim",
      role: "Head of Product",
      image: "/images/testimonials/6.png",
    },
  },
];

const Testimonials = ({ withBorders = true }: { withBorders?: boolean }) => {
  return (
    <section className="">
      <div className={withBorders ? "border-b" : ""}>
        <SectionHeader
          iconTitle="Success Stories"
          title="What founders are saying"
          icon={Handshake}
          description="Trusted by startups to bring their ideas to life"
          className={withBorders ? "" : "border-none"}
        />
      </div>

      <div className="container mt-10 grid gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>

      {withBorders && (
        <div className="mt-12 h-8 w-full border-y md:h-12 lg:h-[112px]">
          <div className="container h-full w-full border-x"></div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;

interface TestimonialProps {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  quote: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}
function TestimonialCard({ logo, quote, author }: TestimonialProps) {
  return (
    <Card className="bg-background flex flex-col gap-6 rounded-md p-6 shadow-sm">
      <img
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className="object-contain dark:invert"
      />

      <blockquote className="text-muted-foreground-subtle text-lg font-normal italic">{`“${quote}”`}</blockquote>

      <div className="mt-auto flex items-center gap-4">
        <img
          src={author.image}
          alt={`${author.name}'s profile picture`}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-lg tracking-[-0.36px]">{author.name}</p>
          <p className="text-muted-foreground">{author.role}</p>
        </div>
      </div>
    </Card>
  );
}
