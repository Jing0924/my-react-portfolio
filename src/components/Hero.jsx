// src/components/Hero.jsx
import './Hero.css'
import personalPhoto from '../assets/personal_photo.png';

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
          這是我的作品集個人網站。<br />
          正在一步步打造屬於自己的數位名片！
        </p>
        <a href="#projects" className="hero-btn">看我的作品</a>
      </div>

      {/* 右邊：圖片區 */}
      <div className="hero-image-container" data-aos="fade-left">
        <div className="hero-img-frame">
          <img 
            src={personalPhoto}
            alt="我的頭像" 
            className="hero-img" 
          />
        </div>
      </div>
    </div>
  )
}

export default Hero