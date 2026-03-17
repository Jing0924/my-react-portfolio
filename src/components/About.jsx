// src/components/About.jsx
import "./About.css";

function About() {
  return (
    // 👇 這裡設定 id="about"，讓導覽列的按鈕可以跳過來
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">關於我</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              你好！我是熱愛前端的開發者。 雖然剛開始接觸
              React，但我已經動手打造了自己的作品集網站，享受從零到有完成每個功能的成就感。
            </p>
            <p>
              我專注掌握 HTML、CSS 與 JavaScript，持續學習現代化框架，
              目標是做出既好用又好看的網頁產品，邊做邊學，不斷挑戰自我。
            </p>
          </div>

          {/* 右邊放技能列表 */}
          <div className="skills-container">
            <h3 className="skills-title">我的技能樹</h3>
            <div className="skills-tags">
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
