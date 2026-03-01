import './Services.css'

interface Service {
  icon: string
  title: string
  description: string
}

const defaultServices: Service[] = [
  {
    icon: '🔧',
    title: 'Service One',
    description: 'High-quality service tailored to your needs with attention to detail.',
  },
  {
    icon: '⚡',
    title: 'Service Two',
    description: 'Fast and efficient solutions that save you time and money.',
  },
  {
    icon: '🛡️',
    title: 'Service Three',
    description: 'Reliable and trustworthy work backed by our satisfaction guarantee.',
  },
]

interface ServiceCardProps {
  service: Service
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="service-card">
      <span className="service-icon">{service.icon}</span>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
    </div>
  )
}

interface ServicesProps {
  title?: string
  services?: Service[]
}

function Services({ title = 'Our Services', services = defaultServices }: ServicesProps) {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="services-heading">{title}</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Default export renders component in isolation for preview
export default function ServicesPreview() {
  return (
    <div className="preview-container">
      <Services />
      <div style={{ marginTop: 32 }}>
        <h3 style={{ margin: '0 0 16px', color: '#666' }}>Single card:</h3>
        <ServiceCard service={defaultServices[0]} />
      </div>
    </div>
  )
}

export { Services, ServiceCard }
export type { Service }
