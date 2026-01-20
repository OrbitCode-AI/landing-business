import './Footer.css';

interface FooterProps {
  businessName?: string;
  tagline?: string;
}

function Footer({
  businessName = 'Business Name',
  tagline = 'Quality service since 2014',
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="footer-logo">{businessName}</h3>
          <p className="footer-tagline">{tagline}</p>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-section">
            <h4>Hours</h4>
            <p>Mon-Fri: 9am - 6pm</p>
            <p>Sat: 10am - 4pm</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {year} {businessName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Default export renders component in isolation for preview
export default function FooterPreview() {
  return (
    <div className="preview-container">
      <Footer />
    </div>
  );
}

export { Footer };
