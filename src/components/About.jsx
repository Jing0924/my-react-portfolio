// src/components/About.jsx
import './About.css'

function About() {
  return (
    // 👇 這裡設定 id="about"，讓導覽列的按鈕可以跳過來
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">關於我</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              你好！我是一個充滿熱情的網頁開發初學者。
              雖然我才剛開始接觸 React，但我非常享受從無到有建立網站的過程。
            </p>
            <p>
              目前的目標是熟練掌握前端三劍客 (HTML/CSS/JS)，
              並深入學習現代化框架，希望能做出更多好用又好看的產品。
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
              <span className="skill-tag">Tailwind (學習中)</span>
              <span className="skill-tag">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About