"use client";

interface PricingSectionProps {
  className?: string;
}

import { CircleDollarSign, Tag, TicketPercent, BadgeEuro } from "lucide-react";

export default function PricingSection({ className }: PricingSectionProps) {
  return (
    <section className={`bg-background py-16 lg:py-24 ${className || ""}`} id="pricing">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, risk-free pricing that grows with your success. 
            <span className="text-primary font-semibold"> Pay only if we deliver results.</span>
          </p>
        </div>

        {/* Two-Phase Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Free Trial Phase */}
          <div className="bg-secondary/50 border border-border p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold">
              PHASE 1
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Free Trial Phase</h3>
              <p className="text-muted-foreground">Prove our value with zero risk to you</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CircleDollarSign className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-foreground font-semibold">₹300/day ad spend</div>
                  <div className="text-sm text-muted-foreground">We cover the entire ad budget</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Tag className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-foreground font-semibold">₹0 agency fees</div>
                  <div className="text-sm text-muted-foreground">No upfront costs or hidden charges</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <TicketPercent className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-foreground font-semibold">Full campaign setup</div>
                  <div className="text-sm text-muted-foreground">Complete ads management & optimization</div>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 p-4">
              <p className="text-primary font-semibold text-sm">
                Duration: 7-14 days • You pay nothing unless we generate results
              </p>
            </div>
          </div>

          {/* Success Phase */}
          <div className="bg-primary/5 border-2 border-primary p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold">
              PHASE 2
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Success Phase</h3>
              <p className="text-muted-foreground">Ongoing partnership after proven results</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <BadgeEuro className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-foreground font-semibold">₹10,000/month</div>
                  <div className="text-sm text-muted-foreground">Fixed monthly management fee</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <CircleDollarSign className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-foreground font-semibold">Your ad budget</div>
                  <div className="text-sm text-muted-foreground">You control and pay ad spend directly</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <TicketPercent className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-foreground font-semibold">Continued optimization</div>
                  <div className="text-sm text-muted-foreground">Ongoing campaign management & scaling</div>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 p-4">
              <p className="text-primary font-semibold text-sm">
                Only starts after trial success • Cancel anytime with 30 days notice
              </p>
            </div>
          </div>
        </div>

        {/* Pay Only If We Deliver Results Banner */}
        <div className="bg-primary text-primary-foreground p-8 text-center mb-16">
          <h3 className="text-2xl font-bold mb-2">Pay Only If We Deliver Results</h3>
          <p className="text-lg opacity-90">
            If we don't generate leads or sales during the trial, you owe us nothing. 
            That's our commitment to your success.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Common Pricing Questions
          </h3>
          
          <div className="space-y-8">
            <div className="bg-secondary/30 border border-border p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                What happens if the trial doesn't work?
              </h4>
              <p className="text-muted-foreground">
                You pay nothing. We absorb the ₹300/day ad spend and all our time. 
                This ensures we're only successful when you are.
              </p>
            </div>

            <div className="bg-secondary/30 border border-border p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                How do you define "results" in the trial?
              </h4>
              <p className="text-muted-foreground">
                We track qualified leads, sales, or other agreed KPIs. 
                Results are measured based on your specific business goals, not just clicks or impressions.
              </p>
            </div>

            <div className="bg-secondary/30 border border-border p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Why is ongoing pricing so affordable?
              </h4>
              <p className="text-muted-foreground">
                At ₹10,000/month, we focus on long-term partnerships rather than high fees. 
                Our success comes from helping you scale, not maximizing short-term revenue.
              </p>
            </div>

            <div className="bg-secondary/30 border border-border p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                What's included in the ₹10,000 monthly fee?
              </h4>
              <p className="text-muted-foreground">
                Complete campaign management, optimization, reporting, strategy adjustments, 
                and dedicated account support. You only pay your actual ad spend to platforms.
              </p>
            </div>

            <div className="bg-secondary/30 border border-border p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Can I cancel the ongoing service?
              </h4>
              <p className="text-muted-foreground">
                Yes, with 30 days written notice. We believe in earning your business every month, 
                not locking you into long contracts.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Building Footer */}
        <div className="text-center mt-16 p-8 bg-muted/20 border border-border">
          <p className="text-muted-foreground text-lg">
            <span className="text-primary font-semibold">No contracts.</span> 
            <span className="mx-2">•</span>
            <span className="text-primary font-semibold">No setup fees.</span> 
            <span className="mx-2">•</span>
            <span className="text-primary font-semibold">Results first.</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            We're confident in our ability to deliver because we put our money where our mouth is.
          </p>
        </div>
      </div>
    </section>
  );
}