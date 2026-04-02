const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid sm:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading font-bold text-lg mb-3">Awakening Insurance</h3>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Specialized employment insurance solutions for businesses of all sizes.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold text-sm mb-3">Services</h4>
          <ul className="space-y-1.5 text-sm text-primary-foreground/70">
            <li>Workers Compensation</li>
            <li>Employer Liability</li>
            <li>Group Health Coverage</li>
            <li>Contractor Insurance</li>
            <li>Payroll & Risk Protection</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-sm mb-3">Contact</h4>
          <ul className="space-y-1.5 text-sm text-primary-foreground/70">
            <li>
              <a href="tel:+13312255247" className="hover:text-primary-foreground transition-colors">
                +1 (331) 225-5247
              </a>
            </li>
            <li>
              <a href="mailto:iali@awakeninginsurance.com" className="hover:text-primary-foreground transition-colors">
                iali@awakeninginsurance.com
              </a>
            </li>
            <li className="hover:text-primary-foreground transition-colors">
              1037 Conrad Ct, Elk Grove Village 60007 IL, USA
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Awakening Insurance LLC. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
