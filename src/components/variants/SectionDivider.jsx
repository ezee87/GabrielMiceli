export default function SectionDivider() {
  return (
    <div className="relative z-10 h-0" aria-hidden="true">
      <div className="absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-turquoise/80 to-transparent shadow-[0_0_14px_rgba(24,183,181,0.65)] sm:w-60" />
    </div>
  )
}
