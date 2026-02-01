import { useVar } from 'orbitcode';
import './Navbar.css';

interface NavbarProps {
  logo?: string;
  links?: { label: string; href: string }[];
}

const defaultLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
];

function Navbar({ logo = 'Business Name', links = defaultLinks }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useVar('navMenuOpen', false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">{logo}</a>
        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((m) => !m)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="navbar-cta" onClick={() => setMenuOpen(false)}>
              Get Quote
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// Default export renders component in isolation for preview
export default function NavbarPreview() {
  return (
    <div className="preview-container">
      <Navbar />
    </div>
  );
}

export { Navbar };
