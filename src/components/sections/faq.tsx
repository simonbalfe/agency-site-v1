import React from "react";

import { MessageCircleQuestion } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "../elements/section-header";

const faqData = [
  {
    question: "How long does it take to build an MVP?",
    answer:
      "Most MVPs are delivered in 4-12 weeks depending on complexity. We'll give you a precise timeline during our discovery call based on your specific requirements.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern, scalable technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Vercel. We choose the best stack for your specific needs.",
  },
  {
    question: "Do I own the code?",
    answer:
      "Yes, 100%. You own all the code, designs, and intellectual property we create for you. We provide full source code access and documentation for handoff.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "Our Scale package includes 3 months of post-launch support. For other packages, we offer ongoing maintenance retainers or you can hire your own team to continue development.",
  },
  {
    question: "Can you help with design too?",
    answer:
      "Absolutely! Our team includes experienced UI/UX designers who create intuitive, beautiful interfaces. Design is included in all our packages.",
  },
  {
    question: "What's included in the discovery call?",
    answer:
      "We'll discuss your idea, target users, must-have features, timeline, and budget. You'll leave with a clear understanding of scope, timeline, and next steps—no obligation.",
  },
];

const Faq = ({ withBorders = true }: { withBorders?: boolean }) => {
  return (
    <section className="">
      <div className="">
        <SectionHeader
          className={
            withBorders
              ? ""
              : "!max-w-[480px] !border-none lg:items-center lg:text-center"
          }
          iconTitle="FAQ"
          title="Everything You Need to Know"
          icon={MessageCircleQuestion}
          description={
            <>
              Looking for quick answers? Check out our{" "}
              <span className="underline">FAQ section</span>.
            </>
          }
        />
      </div>

      <div className={withBorders ? "container border-x" : "container"}>
        <div className="mx-auto max-w-3xl pb-4 pt-8 md:pb-8 lg:pb-[50px] lg:pt-[3.75rem]">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="text-primary rounded-[7px] border px-6 data-[state=open]:pb-2"
              >
                <AccordionTrigger className="py-5 text-base tracking-[-0.32px]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base tracking-[-0.32px]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      {withBorders && (
        <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
          <div className="container h-full w-full border-x"></div>
        </div>
      )}
    </section>
  );
};

export default Faq;
