"use client";

import { Button } from "@/components/ui/button";
import { Shield, ShieldCheck, ChartColumnBig } from "lucide-react";

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919444420367', '_blank');
  };

  return (
    <section className={`bg-background text-foreground py-16 lg:py-24 ${className || ""}`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">7-Day FREE Trial</span>
                <br />
                Only Pay When You
                <br />
                <span className="text-primary">See Results</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Risk-free Facebook and Google Ads management for SMEs. 
                Get dedicated ad experts working for your business with zero upfront commitment.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-lg border border-border">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Zero Upfront Risk</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-lg border border-border">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Dedicated Ad Experts</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-lg border border-border">
                <ChartColumnBig className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Proven Results</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={handleWhatsAppClick}
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-secondary/20 px-8 py-6 text-lg font-semibold transition-all duration-200"
                onClick={handleWhatsAppClick}
              >
                Book a Call
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>No credit card required • Cancel anytime • 100% Risk-free</span>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-150"></div>
            
            {/* Main Visual Container */}
            <div className="relative bg-secondary/20 border border-border rounded-2xl p-8 lg:p-12">
              {/* Icon Grid */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="flex flex-col items-center space-y-3 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-xs text-muted-foreground">Risk Free</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-3 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
                    <ChartColumnBig className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">7</div>
                    <div className="text-xs text-muted-foreground">Days Free</div>
                  </div>
                </div>
              </div>

              {/* Results Preview */}
              <div className="space-y-4">
                <div className="bg-background/50 border border-border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Ad Performance</span>
                    <span className="text-sm font-semibold text-primary">+127%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="bg-background/50 border border-border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">ROAS</span>
                    <span className="text-sm font-semibold text-primary">4.2x</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Start Today!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}