"use client";

import { Button } from "@/components/ui/button";
import { Rocket, Phone, Check, FlagTriangleRight } from "lucide-react";

export default function FinalCTASection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919444420367', '_blank');
  };

  return (
    <section className="bg-primary py-16 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        {/* Urgent headline */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Don't Miss Your Chance to <span className="text-accent">Grow Risk-Free</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Join the smart SME owners who've already discovered the power of guaranteed results
          </p>
        </div>

        {/* Key benefits reminder */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="flex items-center justify-center gap-3 bg-white/10 rounded-lg p-4">
            <Check className="h-6 w-6 text-accent shrink-0" />
            <span className="text-white font-medium">Guaranteed Results</span>
          </div>
          <div className="flex items-center justify-center gap-3 bg-white/10 rounded-lg p-4">
            <Check className="h-6 w-6 text-accent shrink-0" />
            <span className="text-white font-medium">No Upfront Costs</span>
          </div>
          <div className="flex items-center justify-center gap-3 bg-white/10 rounded-lg p-4">
            <Check className="h-6 w-6 text-accent shrink-0" />
            <span className="text-white font-medium">Expert Management</span>
          </div>
        </div>

        {/* Urgency/scarcity element */}
        <div className="bg-white/15 border border-white/20 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <FlagTriangleRight className="h-5 w-5 text-accent" />
            <span className="text-white font-semibold">Limited Availability</span>
          </div>
          <p className="text-primary-foreground/90 mb-4">
            Join 100+ successful SMEs already growing with ZappyAds
          </p>
          <p className="text-sm text-primary-foreground/80">
            We only take on 20 new clients per month to ensure quality service
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold min-w-[250px]"
            onClick={handleWhatsAppClick}
          >
            <Rocket className="mr-2 h-5 w-5" />
            Start Your Free Trial Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold min-w-[250px]"
            onClick={handleWhatsAppClick}
          >
            <Phone className="mr-2 h-5 w-5" />
            Schedule Strategy Call
          </Button>
        </div>

        {/* Risk reduction messaging */}
        <div className="text-center">
          <p className="text-primary-foreground/80 text-sm mb-2">
            ✓ No contracts, cancel anytime
          </p>
          <p className="text-primary-foreground/80 text-sm mb-2">
            ✓ 100% satisfaction guarantee
          </p>
          <p className="text-primary-foreground/80 text-sm">
            ✓ Results within 30 days or your money back
          </p>
        </div>
      </div>
    </section>
  );
}