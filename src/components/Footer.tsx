import { PhoneCall, ContactRound, Shield, House, Copyright, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border" id="contact">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Contact */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-6 bg-white rounded-sm transform rotate-12"></div>
              </div>
              <span className="text-xl font-bold text-foreground">ZappyAds</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              High-impact digital advertising solutions for SMEs across India.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <PhoneCall className="w-4 h-4 text-primary" />
                <span className="text-foreground">+91 94444420367</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <ContactRound className="w-4 h-4 text-primary" />
                <span className="text-foreground">thezappyads@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <House className="w-4 h-4 text-primary" />
                <span className="text-foreground">Chennai, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Google Ads Management
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Facebook Advertising
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Performance Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Campaign Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Refund Policy
                </a>
              </li>
            </ul>
            <div className="flex items-center space-x-2 text-sm text-primary">
              <Shield className="w-4 h-4" />
              <span className="font-medium">Trusted by 500+ SMEs</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Copyright className="w-4 h-4" />
              <span>2024 ZappyAds. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <p className="text-sm text-muted-foreground">
                Trusted by SMEs across India
              </p>
              <div className="flex items-center space-x-2">
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors p-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}