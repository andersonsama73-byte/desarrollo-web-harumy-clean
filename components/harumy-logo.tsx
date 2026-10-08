import { cn } from '@/lib/utils'

export function HarumyLogo({
  className,
  variant = 'dark',
}: {
  className?: string
  variant?: 'dark' | 'light'
}) {
  return (
    <span
      className={cn(
        'inline-flex flex-col items-center rounded-md border px-4 py-1.5 leading-none',
        variant === 'dark'
          ? 'border-ink/25 text-ink'
          : 'border-white/30 text-white',
        className,
      )}
    >
      <span className="font-serif text-base font-semibold tracking-[0.12em]">
        HARUMY
      </span>
      <span className="mt-0.5 text-[0.55rem] font-medium tracking-[0.55em]">
        CLEAN
      </span>
    </span>
  )
}
