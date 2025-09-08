"use client";

import { TrendingUp, Percent, ThumbsUp, Quote, ShieldCheck } from "lucide-react";

interface CaseStudyCardProps {
  metric: string;
  description: string;
  timeframe: string;
  industry: string;
  icon: React.ReactNode;
}

function CaseStudyCard({ metric, description, timeframe, industry, icon }: CaseStudyCardProps) {
  return (
    <div className="bg-white p-8 border border-blue-200 hover:border-primary transition-all duration-300 group">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
          {industry}
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-4xl font-bold text-primary mb-2">
          {metric}
        </h3>
        <p className="text-lg text-foreground font-medium">
          {description}
        </p>
        <p className="text-sm text-muted-foreground">
          {timeframe}
        </p>
      </div>
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  name: string;
  business: string;
  businessType: string;
}

function TestimonialCard({ quote, name, business, businessType }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 border border-blue-200 relative">
      <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
      
      <blockquote className="text-lg text-foreground leading-relaxed mb-6">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{business}</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">{businessType}</p>
        </div>
      </div>
    </div>
  );
}

export default function SocialProofSection() {
  const caseStudies = [
    {
      metric: "3x Sales",
      description: "Tripled monthly revenue through targeted Facebook ad campaigns",
      timeframe: "Within 30 days",
      industry: "E-commerce",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      metric: "150+ Leads",
      description: "Generated qualified leads for local service business",
      timeframe: "In one week",
      industry: "Home Services",
      icon: <Percent className="w-6 h-6" />
    },
    {
      metric: "450% ROI",
      description: "Achieved exceptional return on ad spend for B2B client",
      timeframe: "First quarter",
      industry: "Professional Services",
      icon: <ThumbsUp className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      quote: "ZappyAds transformed our online presence. We went from struggling to find customers to having more leads than we could handle. The team understood our business immediately.",
      name: "Sarah Mitchell",
      business: "Mitchell's Bakery",
      businessType: "Local Business"
    },
    {
      quote: "I was skeptical about digital advertising, but ZappyAds made it simple. They managed everything while I focused on my patients. The results speak for themselves.",
      name: "Dr. James Chen",
      business: "Family Dental Practice",
      businessType: "Healthcare"
    },
    {
      quote: "The best investment we've made for our business. Professional, reliable, and they deliver exactly what they promise. Our booking calendar is finally full again.",
      name: "Maria Rodriguez",
      business: "Elite Fitness Studio",
      businessType: "Fitness & Wellness"
    },
    {
      quote: "ZappyAds doesn't just run ads - they understand small business challenges. They've become our trusted marketing partner, not just a service provider.",
      name: "Tom Bradley",
      business: "Bradley Plumbing",
      businessType: "Trade Services"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Proven Results
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real Success Stories from
            <span className="text-primary"> Real Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of SME owners who've transformed their businesses with our proven advertising strategies
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-8 py-4 border border-primary/20">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">
              Trusted by 100+ SMEs across Australia
            </span>
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h3>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from business owners who've seen real results
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Bottom Trust Elements */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-foreground">95% Client Retention</h4>
            <p className="text-muted-foreground">Our clients stay because our strategies work</p>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
              <Percent className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-foreground">Average 300% ROI</h4>
            <p className="text-muted-foreground">Every dollar invested returns threefold</p>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
              <ThumbsUp className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-foreground">30-Day Guarantee</h4>
            <p className="text-muted-foreground">See results or get your money back</p>
          </div>
        </div>
      </div>
    </section>
  );
}