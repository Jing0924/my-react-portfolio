// src/components/Hero.jsx
import "./Hero.css";
import personalPhoto from "../assets/personal_photo.png";

function Hero() {
  return (
    <div id="home" className="hero">
      <div className="hero-content" data-aos="fade-right">
        <p className="hero-eyebrow">Frontend Developer Portfolio</p>
        <h1 className="hero-title">Jing Liao</h1>
        <p className="hero-subtitle">React 前端工程師 | 求職中</p>
        <p className="hero-description">
          專注打造易用、響應式且具視覺質感的網頁產品，
          透過實作專案持續累積前端開發與介面設計能力。
        </p>
        <div className="hero-actions">
          <a href="#projects" className="hero-btn">
            查看作品案例
          </a>
          <a href="#contact" className="hero-btn hero-btn-secondary">
            聯絡我
          </a>
        </div>
      </div>

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
  );
}

export default Hero;