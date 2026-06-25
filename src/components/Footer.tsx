import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold gradient-text">RAJ ALAM</span>
            <p className="text-slate-400 text-sm mt-1">
              Frontend Developer based in Kathmandu, Nepal
            </p>
          </div>

          <nav className="flex items-center gap-6">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-1">
            © {currentYear} RAJ ALAM. Made with{' '}
            <Heart size={14} className="text-red-500 fill-red-500" /> using
            React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
