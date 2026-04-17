import { useEffect } from 'react'
import AOS from 'aos'

interface Project {
  title: string
  highlight: string
  description: string
  tags: string[]
  image: string
  demoLink: string
  repoLink: string
}

function Projects() {
  useEffect(() => {
    AOS.refresh()
  }, [])

  const projectList: Project[] = [
    {
      title: '個人作品集網站',
      highlight: 'AOS 動畫與響應式切版整合',
      description:
        '使用 React + Vite 從零打造的響應式個人網站，包含 AOS 動畫與深色模式設計。',
      tags: ['React', 'CSS3', 'RWD', 'Netlify'],
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      demoLink: 'https://golden-queijadas-9fa6d6.netlify.app/#contact',
      repoLink: 'https://github.com/Jing0924/my-react-portfolio',
    },
    {
      title: 'LangAssist（語言輔助）',
      highlight:
        'Voice（Cloud STT／翻譯／TTS）＋ Speaking 文字串流與口說（Pipeline／Gemini Live）',
      description:
        'React + TypeScript + Vite 語言練習站。Voice 串接 Google Cloud 語音辨識、翻譯與朗讀；Speaking 整合 Gemini 串流對話、錄音→STT→模型→TTS 口說流程，以及 Gemini Live 即時語音。使用 React Router、Framer Motion。',
      tags: [
        'React',
        'TypeScript',
        'Vite',
        'Google Cloud API',
        'Gemini API',
        'Framer Motion',
        'React Router',
      ],
      image:
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      demoLink: 'https://langassist.netlify.app/speaking',
      repoLink: 'https://github.com/Jing0924/LangAssist',
    },
    {
      title: '電影書架網站（Cinema Shelf）',
      highlight: '電影瀏覽與收藏介面設計實作',
      description:
        '使用 React 建置的電影書架網站，已部署到 Netlify，可在此查看功能與介面。',
      tags: ['React', 'Netlify', 'RWD'],
      image:
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop',
      demoLink: 'https://react-cineshelf.netlify.app/',
      repoLink: 'https://github.com/Jing0924/react-cineshelf',
    },
    {
      title: '智慧分帳 App (Split Bill)',
      highlight: '債務簡化演算法降低轉帳次數',
      description:
        '解決團體旅遊分帳煩惱的 Web App。內建「自動債務簡化演算法」能計算出最少轉帳次數，並具備 Midnight Pro 深色模式與 RWD 響應式設計。',
      tags: ['React', 'Algorithm', 'CSS Variables', 'LocalStorage'],
      image:
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      demoLink: 'https://jing-splitbillapp.netlify.app/',
      repoLink: 'https://github.com/Jing0924/split-bill-app',
    },
    {
      title: 'EateryRoulette（附近餐廳轉盤）',
      highlight: '依位置與篩選條件隨機抽出附近餐廳，串接 Google Maps',
      description:
        '支援瀏覽器定位與手動輸入地址，可依照距離、價位、評分與是否營業中等條件篩選，一鍵隨機抽出附近餐廳；整合 Google Maps 顯示地點與開啟導航，並以 toast 提示友善處理錯誤情境。',
      tags: ['React', 'TypeScript', 'Vite', 'Google Maps API', 'Netlify'],
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      demoLink: 'https://eateryroulette.netlify.app/',
      repoLink: 'https://github.com/Jing0924/EateryRoulette',
    },
    {
      title: '毛玻璃特效登入頁',
      highlight: 'Glassmorphism 與動態背景互動效果',
      description:
        '專注於現代 UI 設計的練習。運用 CSS backdrop-filter 實現磨砂玻璃質感，並搭配 Keyframes 動畫製作漂浮背景。',
      tags: ['React', 'CSS3', 'Animation', 'Glassmorphism'],
      image:
        'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      demoLink: 'https://idyllic-starship-613010.netlify.app/',
      repoLink: 'https://github.com/Jing0924/glass-login',
    },
    {
      title: 'Markdown 筆記軟體',
      highlight: '即時預覽與 LocalStorage 持久化',
      description:
        '支援 Markdown 語法即時預覽、搜尋過濾與 CRUD 功能。使用 React + TypeScript 開發，並透過 LocalStorage 實現自動存檔與資料持久化。',
      tags: ['React', 'TypeScript', 'Markdown', 'LocalStorage'],
      image:
        'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      demoLink: 'https://heroic-panda-ebac69.netlify.app/',
      repoLink: 'https://github.com/Jing0924/my-notes-app',
    },
  ]

  return (
    <section
      id="projects"
      className="bg-[#1a1a1a] px-5 py-[100px] text-center text-white"
    >
      <h2
        className="mb-[50px] text-[2.5rem] text-[#61dafb]"
        data-aos="fade-down"
      >
        我的作品
      </h2>

      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
        {projectList.map((project, index) => (
          <div
            className="group flex flex-col overflow-hidden rounded-[15px] border border-[#333] bg-[#2a2a2a] transition-[transform,box-shadow,border-color] duration-300 ease-in-out hover:-translate-y-2.5 hover:border-[#61dafb] hover:shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
            key={project.title}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="h-[200px] w-full overflow-hidden">
              <img
                src={project.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="flex flex-grow flex-col p-6 text-left">
              <h3 className="mb-2.5 text-2xl text-white">{project.title}</h3>
              <p className="mb-3 mt-0 text-[0.92rem] font-semibold text-[#8fe4ff]">
                {project.highlight}
              </p>
              <p className="mb-5 flex-grow text-[0.95rem] leading-[1.6] text-[#bbb]">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[20px] border border-[#444] bg-[#333] px-3 py-1 text-[0.8rem] text-[#61dafb]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-[15px]">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg bg-[#61dafb] py-2.5 text-center text-[0.9rem] font-bold text-[#1a1a1a] no-underline transition-colors duration-300 hover:bg-[#4fa8d1]"
                >
                  Live Demo
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg border border-[#61dafb] py-2.5 text-center text-[0.9rem] font-bold text-[#61dafb] no-underline transition-colors duration-300 hover:bg-[rgba(97,218,251,0.1)]"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
