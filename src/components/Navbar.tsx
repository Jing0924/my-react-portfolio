import { useEffect, useState } from 'react'

interface NavItem {
  id: string
  label: string
}

const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', label: '首頁' },
  { id: 'about', label: '關於我' },
  { id: 'projects', label: '作品集' },
  { id: 'contact', label: '聯絡資訊' },
]

/** 與 App 主內容 `pt-20` 對齊，當作固定導覽列佔用的視窗上方高度（px） */
const NAV_TOP_OFFSET_PX = 80
/** 基準線落在「導覽列下方剩餘視窗高度」的比例（偏下較利於最後一段與慢滑） */
const ANCHOR_LINE_RATIO = 0.58

function getAnchorLineY(): number {
  const h = window.innerHeight
  const usable = Math.max(0, h - NAV_TOP_OFFSET_PX)
  return NAV_TOP_OFFSET_PX + usable * ANCHOR_LINE_RATIO
}

function pickSectionAtLine(sectionIds: readonly string[], lineY: number): string {
  let current = sectionIds[0]
  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (!el) continue
    if (el.getBoundingClientRect().top <= lineY) {
      current = id
    }
  }
  return current
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open)
  }

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id)

    const update = () => {
      const lineY = getAnchorLineY()
      const next = pickSectionAtLine(sectionIds, lineY)
      setActiveSection((prev) => (prev === next ? prev : next))
    }

    let scrollRaf = 0
    const onScrollOrResize = () => {
      if (scrollRaf !== 0) return
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0
        update()
      })
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    let cancelled = false
    let frames = 0
    const maxFrames = 1200
    const bootTick = () => {
      if (cancelled) return
      update()
      frames += 1
      const allReady = sectionIds.every((id) => document.getElementById(id))
      if (!allReady && frames < maxFrames) {
        requestAnimationFrame(bootTick)
      }
    }
    requestAnimationFrame(bootTick)

    return () => {
      cancelled = true
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      if (scrollRaf !== 0) cancelAnimationFrame(scrollRaf)
    }
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 z-[1000] box-border flex w-full items-center justify-between border-b border-[#2d2d2d] bg-[rgba(26,26,26,0.92)] px-5 py-2.5 text-white backdrop-blur-[8px]"
      aria-label="主要導覽"
    >
      <div className="text-[1.35rem] font-bold">Jing的個人網站</div>

      <button
        type="button"
        className="hidden cursor-pointer border-0 bg-transparent text-[1.8rem] text-white max-md:block"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? '關閉選單' : '開啟選單'}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      <ul
        className={`m-0 flex list-none gap-5 p-0 max-md:absolute max-md:top-full max-md:min-h-screen max-md:w-full max-md:flex-col max-md:items-center max-md:justify-start max-md:bg-black/92 max-md:pt-[50px] max-md:transition-[left] max-md:duration-300 max-md:ease-in-out ${
          isMenuOpen ? 'max-md:left-0' : 'max-md:-left-full'
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.id} className="max-md:my-5">
            <a
              href={`#${item.id}`}
              onClick={() => {
                setIsMenuOpen(false)
                setActiveSection(item.id)
              }}
              className={`rounded-lg px-3 py-2 text-base text-[#e8e8e8] no-underline transition-[color,background-color] duration-200 ease-in-out hover:bg-[rgba(97,218,251,0.08)] hover:text-[#61dafb] max-md:text-[1.1rem] ${
                activeSection === item.id
                  ? 'bg-[rgba(97,218,251,0.15)] text-[#61dafb]'
                  : ''
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
