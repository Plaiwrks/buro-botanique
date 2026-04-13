const TICKER_TEXT = 'Tuinontwerp op maat'
const TICKER_REPEAT = 12

export default function MarqueeTicker() {
  const items = Array.from({ length: TICKER_REPEAT }, (_, i) => (
    <span key={i} className="mx-4 whitespace-nowrap">
      {TICKER_TEXT} <span className="font-script text-lg">~</span>
    </span>
  ))

  return (
    <div className="bg-ticker-bg overflow-hidden py-4 relative z-[5]">
      <div className="flex animate-marquee">
        <div className="flex shrink-0 items-center font-body text-sm uppercase tracking-[0.15em] text-text-dark">
          {items}
        </div>
        <div className="flex shrink-0 items-center font-body text-sm uppercase tracking-[0.15em] text-text-dark" aria-hidden="true">
          {items}
        </div>
      </div>
    </div>
  )
}
