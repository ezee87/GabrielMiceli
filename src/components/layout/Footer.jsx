import { WHATSAPP_GENERAL_QUESTION_URL } from '../../constants'

const social = [
  ['Instagram', 'https://www.instagram.com/gmiceli_/'],
  ['TikTok', 'https://www.tiktok.com/@gabimiceli87?_r=1&_t=ZS-99A2pMwcwVx'],
  ['WhatsApp', WHATSAPP_GENERAL_QUESTION_URL],
]

function FooterLinks({ title, links }) {
  return (
    <div>
      <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-turquoise">{title}</h2>
      <nav className="flex flex-col gap-3" aria-label={title}>
        {links.map(([label, href]) => (
          <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="w-fit text-sm font-semibold text-white/70 transition-colors hover:text-turquoise">{label}</a>
        ))}
      </nav>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-deep-slate px-6 pb-6 pt-8 text-white lg:px-10 lg:pb-8 lg:pt-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-6 border-b border-white/10 pb-6 sm:grid-cols-[1.6fr_0.7fr] lg:gap-20 lg:pb-7">
          <div className="max-w-md">
            <p className="font-display text-xl font-extrabold">Gabriel Miceli</p>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-turquoise">× Revolution</p>
            <p className="text-[15px] leading-relaxed text-white/65">Te explico cómo funciona Revolution, qué incluye cada beca y cómo empezar con claridad antes de tomar una decisión.</p>
          </div>
          <FooterLinks title="Redes" links={social} />
        </div>
        <p className="mt-5 max-w-4xl text-sm leading-relaxed text-white/45 lg:mt-6">El trading implica riesgo. No existen ganancias garantizadas. La formación, la comunidad y las herramientas de Revolution pueden ayudarte a aprender con más criterio, pero cada decisión es responsabilidad del usuario.</p>
      </div>
    </footer>
  )
}
