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

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open)
  }

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6],
      },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
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
