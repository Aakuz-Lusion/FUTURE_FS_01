import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '9810101010',
    href: 'tel:9810101010',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'rajkhan.arol@gmail.com',
    href: 'mailto:rajkhan.arol@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Kathmandu, Nepal',
    href: 'https://maps.google.com/?q=Kathmandu,Nepal',
  },
]

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value

    const mailtoLink = `mailto:rajkhan.arol@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sky-400 font-semibold tracking-wider uppercase text-sm">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
            Let's work <span className="gradient-text">together</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-slate-400 mb-8">
              I'm currently open to new opportunities, freelance projects, and
              collaborations. Whether you're a recruiter, client, or fellow
              developer, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Address' ? '_blank' : undefined}
                  rel={item.label === 'Address' ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-4 glass-card rounded-xl hover:bg-slate-800/50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-indigo-500 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="text-white" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">{item.label}</p>
                    <p className="text-lg font-medium text-slate-100">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-slate-400 mb-4">Connect with me on social media</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-full text-slate-300 hover:text-white hover:bg-sky-500/20 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-full text-slate-300 hover:text-white hover:bg-sky-500/20 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a
                  href="mailto:rajkhan.arol@gmail.com"
                  className="p-3 glass-card rounded-full text-slate-300 hover:text-white hover:bg-sky-500/20 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-indigo-600 transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
