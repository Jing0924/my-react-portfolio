// src/components/Hero.jsx
import './Hero.css'

function Hero() {
  return (
    <div id="home" className="hero">
      {/* 左邊：文字介紹區 */}
      <div className="hero-content" data-aos="fade-right">
        <h1 className="hero-title">Jing</h1>
        <p className="hero-subtitle">
          前端工程師 / 求職者
        </p>
        <p className="hero-description">
          這裡是用來練習 React 與 CSS 的個人網站。
          正在一步步打造屬於自己的數位名片！
        </p>
        <a href="#projects" className="hero-btn">看我的作品</a>
      </div>

      {/* 右邊：圖片區 */}
      <div className="hero-image-container" data-aos="fade-left">
        <div className="hero-img-frame">
          <img 
            src="https://p8.itc.cn/q_70/images03/20221012/f431503a85664b0ab618ac0aa2e905c3.jpeg" 
            alt="我的頭像" 
            className="hero-img" 
          />
        </div>
      </div>
    </div>
  )
}

export default Hero