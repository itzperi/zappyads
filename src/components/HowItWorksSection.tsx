"use client";

import { StepForward, ArrowBigRight, FileDigit, ChevronsRight, LayoutPanelTop } from "lucide-react";

interface StepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

function Step({ number, icon, title, description, isLast }: StepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Step Card */}
      <div className="bg-card border border-border p-6 lg:p-8 w-full max-w-xs relative z-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Step Number */}
        <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-md">
          {number}
        </div>

        {/* Icon */}
        <div className="text-primary mb-4 flex justify-center">
          <div className="w-16 h-16 flex items-center justify-center">
            {icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Connecting Arrow */}
      {!isLast && (
        <div className="absolute top-1/2 -translate-y-1/2 -right-6 lg:-right-12 z-20 hidden lg:block">
          <ArrowBigRight className="w-8 h-8 text-primary opacity-60" />
        </div>
      )}

      {/* Mobile Connector */}
      {!isLast && (
        <div className="mt-6 mb-6 lg:hidden flex justify-center">
          <ChevronsRight className="w-6 h-6 text-primary opacity-60" />
        </div>
      )}
    </div>
  );
}

export default function HowItWorksSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919444420367', '_blank');
  };

  const steps = [
    {
      number: "1",
      icon: <FileDigit className="w-8 h-8" />,
      title: "Book Free Consultation",
      description: "Schedule a no-obligation call with our experts. We'll analyze your business and create a custom strategy at zero cost to you."
    },
    {
      number: "2",
      icon: <StepForward className="w-8 h-8" />,
      title: "Start 7-Day Trial",
      description: "Launch your campaigns risk-free. No upfront costs, no long-term commitments. See our system in action with your actual business."
    },
    {
      number: "3",
      icon: <LayoutPanelTop className="w-8 h-8" />,
      title: "See Results",
      description: "Watch qualified leads flow in within days. Our proven system delivers measurable results you can track in real-time."
    },
    {
      number: "4",
      icon: <ChevronsRight className="w-8 h-8" />,
      title: "Scale Up",
      description: "Once you see the results, expand your campaigns. Pay only when you profit. It's that simple and risk-free."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. No risk, no complexity, just results in 4 easy steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Step
              key={step.number}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to get started? Your success is guaranteed or you pay nothing.
          </p>
          <button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            onClick={handleWhatsAppClick}
          >
            Book Your Free Consultation Now
          </button>
        </div>
      </div>
    </section>
  );
}