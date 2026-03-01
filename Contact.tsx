import { useVar } from 'orbitcode'
import './Contact.css'

interface ContactInfo {
  icon: string
  label: string
  value: string
}

const defaultContactInfo: ContactInfo[] = [
  { icon: '📍', label: 'Address', value: '123 Main Street, City, ST 12345' },
  { icon: '📞', label: 'Phone', value: '(555) 123-4567' },
  { icon: '✉️', label: 'Email', value: 'info@business.com' },
]

interface ContactProps {
  title?: string
  contactInfo?: ContactInfo[]
}

function Contact({ title = 'Get in Touch', contactInfo = defaultContactInfo }: ContactProps) {
  const [name, setName] = useVar('contactName', '')
  const [email, setEmail] = useVar('contactEmail', '')
  const [message, setMessage] = useVar('contactMessage', '')

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    alert(`Thanks ${name}! We'll be in touch soon.`)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">{title}</h2>
          <p className="contact-subtitle">
            Ready to get started? Reach out and we'll get back to you within 24 hours.
          </p>
          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <span className="contact-item-icon">{info.icon}</span>
                <div>
                  <p className="contact-item-label">{info.label}</p>
                  <p className="contact-item-value">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onInput={e => setName((e.target as HTMLInputElement).value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onInput={e => setEmail((e.target as HTMLInputElement).value)}
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            value={message}
            onInput={e => setMessage((e.target as HTMLTextAreaElement).value)}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

// Default export renders component in isolation for preview
export default function ContactPreview() {
  return (
    <div className="preview-container">
      <Contact />
    </div>
  )
}

export { Contact }
