// lazy 與 Suspense 是 React 提供的元件與函數，用於程式碼分割與懶加載：
// - lazy：用來動態引入（import）元件，只有當元件真的要渲染時才會下載、執行，減少首屏載入量。
// - Suspense：搭配 lazy 使用，允許你指定「等待被加載的元件時要顯示什麼 fallback UI」，提升用戶體驗。
import { lazy, Suspense, useEffect } from 'react'
// 這兩行需同時引入嗎？
// - `import AOS from 'aos'` 是引入 JS 函式庫，讓我們能在 JS 裡調用 AOS 的功能（如 AOS.init）。
// - `import 'aos/dist/aos.css'` 是把 AOS 的 CSS 樣式也加進專案。如果不引入，動畫樣式（如淡入、滑動等）不會生效。
// 通常這兩行要一起用：一個提供功能，一個提供樣式，AOS 動畫才會完整呈現。
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'

// lazy( () => import('模組路徑') )
// 補充說明：
// - lazy 需要一個回傳 promise 的函數（即動態 import()），例如：lazy(() => import('./MyComponent'))
// - 最終得到的是一個 React 元件，可直接在 JSX 中使用
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))

function SectionFallback() {
  return <div className="min-h-[30vh]" aria-busy="true" />
}

function App() {
  useEffect(() => {
    // 初始化 AOS (Animate On Scroll) 套件，讓頁面元素在滾動進視窗時出現動畫效果
    AOS.init({
      duration: 1000, // 動畫持續時間（毫秒），這裡設為 1000ms = 1秒
      once: false,    // 是否只在第一次滾動到時執行動畫（false 表示每次捲動進入都會觸發）
      offset: 100,    // 元素距離畫面底部多少像素時開始觸發動畫
    })
  }, [])

  return (
    <div className="w-full min-h-screen pt-20 text-center">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </div>
  )
}

export default App
