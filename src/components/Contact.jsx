// src/components/Contact.jsx
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">聯絡我</h2>
      <p className="contact-text">
        如果你有任何工作機會或想聊聊技術，歡迎隨時聯絡我！
      </p>
      
      <div className="contact-links">
        {/* Email 按鈕: mailto: 可以直接喚起郵件軟體 */}
        <a href="mailto:liao860924@gmail.com" className="contact-btn">
          寫信給我
        </a>
        
        {/* 社交連結範例 */}
        <a href="https://github.com/Jing0924/" target="_blank" rel="noreferrer" className="contact-btn">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/jing-undefined-54815029b/" target="_blank" rel="noreferrer" className="contact-btn">
          LinkedIn
        </a>
      </div>

      <footer className="footer">
        <p>&copy; 2025 My Personal Website. All rights reserved.</p>
      </footer>
    </section>
  )
}

export default Contact