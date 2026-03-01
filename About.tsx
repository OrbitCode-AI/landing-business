import './About.css'

interface AboutProps {
  title?: string
  description?: string
  stats?: { value: string; label: string }[]
}

const defaultStats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Happy Customers' },
  { value: '100%', label: 'Satisfaction' },
]

function About({
  title = 'About Our Business',
  description = "We've been serving our community for over a decade, building lasting relationships with our customers through quality work and honest service. Our team of experienced professionals is dedicated to exceeding your expectations on every project.",
  stats = defaultStats,
}: AboutProps) {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">{title}</h2>
          <p className="about-description">{description}</p>
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="about-stat">
                <span className="about-stat-value">{stat.value}</span>
                <span className="about-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-image">
          <div className="about-placeholder">
            <span>👥</span>
            <p>Team Photo</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Default export renders component in isolation for preview
export default function AboutPreview() {
  return (
    <div className="preview-container">
      <About />
    </div>
  )
}

export { About }
