// src/components/Navbar.jsx
import { useState } from 'react' // 1. 引入 useState
import './Navbar.css' // 記得引入它的專屬樣式

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">我的網站</div>

      {/* 4. 漢堡選單按鈕 (只在手機版顯示，CSS 會控制) */}
      <div className="menu-icon" onClick={toggleMenu}>
        {/* 如果是開的顯示 "X"，如果是關的顯示 "☰" */}
        {isMenuOpen ? "✕" : "☰"}
      </div>

      {/* 5. 關鍵邏輯：如果 isMenuOpen 是 true，就多加一個 "active" 的 class */}
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        {/* 點擊連結後，順便把選單關起來，體驗比較好 */}
        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>首頁</a></li>
        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>關於我</a></li>
        <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>作品集</a></li>
        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>聯絡資訊</a></li>
      </ul>
    </nav>
  )
}

export default Navbar