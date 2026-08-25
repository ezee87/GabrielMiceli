import { WHATSAPP_URL } from '../../constants'

const links = [
  ['Instagram', 'https://www.instagram.com/gmiceli_/'],
  ['TikTok', 'https://www.tiktok.com/@gabimiceli87?_r=1&_t=ZS-99A2pMwcwVx'],
  ['WhatsApp', WHATSAPP_URL],
  ['Página principal', '/'],
]

export default function VariantFooter() {
  return (
    <footer className="border-t border-white/10 bg-dk-bg px-6 py-7">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-display text-sm font-bold text-dk-text">Gabriel Miceli <span className="font-medium text-turquoise">× Revolution</span></p>
        <nav aria-label="Redes y enlaces" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {links.map(([label, href]) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-xs font-semibold text-dk-muted transition-colors hover:text-turquoise">{label}</a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
