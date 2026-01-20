import './Hero.css';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

function Hero({
  title = 'Professional Services for Your Business',
  subtitle = 'We deliver quality solutions that help your business grow. Trusted by hundreds of local businesses.',
  ctaText = 'Get Started',
  ctaHref = '#contact',
}: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-actions">
          <a href={ctaHref} className="hero-cta">{ctaText}</a>
          <a href="#services" className="hero-secondary">Learn More</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-placeholder">
          <span>📍</span>
          <p>Your Business Photo</p>
        </div>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function HeroPreview() {
  return (
    <div className="preview-container">
      <Hero />
    </div>
  );
}

export { Hero };
