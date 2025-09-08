import { 
  Shield, 
  DollarSign, 
  Users, 
  Settings, 
  Calendar, 
  Eye 
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Zero Upfront Risk",
    description: "Start your campaign with complete confidence. No hidden fees, setup costs, or long-term contracts required."
  },
  {
    icon: DollarSign,
    title: "Pay Only for Results",
    description: "Revolutionary performance-based pricing. You only pay when our ads generate real leads for your business."
  },
  {
    icon: Users,
    title: "Dedicated Ad Experts",
    description: "Your personal team of certified marketing professionals handles everything from strategy to optimization."
  },
  {
    icon: Settings,
    title: "Full Control Over Budget",
    description: "Set your own spending limits and adjust anytime. Complete transparency with real-time budget tracking."
  },
  {
    icon: Calendar,
    title: "7-Day Free Trial",
    description: "Experience the ZappyAds difference risk-free. See real results before spending a single dollar on ads."
  },
  {
    icon: Eye,
    title: "Transparent Pricing",
    description: "No complex packages or surprise charges. Crystal clear pricing structure with detailed performance reports."
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-16 px-4 bg-background" id="about">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why ZappyAds is Different from Other Agencies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Traditional agencies charge upfront and hope for results. We flip that model completely—
            you only succeed when your business succeeds.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Text */}
        <div className="text-center mt-12">
          <p className="text-lg text-foreground font-medium">
            Ready to experience advertising that actually works for your business?
          </p>
          <p className="text-muted-foreground mt-2">
            Join hundreds of SMEs who've transformed their lead generation with ZappyAds.
          </p>
        </div>
      </div>
    </section>
  );
}