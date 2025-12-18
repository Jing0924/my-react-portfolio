// src/components/Projects.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

function Projects() {
  // 確保切換頁面回來時動畫也會運作
  useEffect(() => {
    AOS.refresh();
  }, []);

  // 1. 這裡改成更豐富的資料結構
  const projectList = [
    {
      title: "個人作品集網站",
      description:
        "使用 React + Vite 從零打造的響應式個人網站，包含 AOS 動畫與深色模式設計。",
      tags: ["React", "CSS3", "RWD", "Netlify"], // 👈 新增：技術標籤
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      demoLink: "https://golden-queijadas-9fa6d6.netlify.app/#contact", // 👈 新增：演示連結
      repoLink: "https://github.com/Jing0924/my-react-portfolio", // 👈 新增：程式碼連結
    },
    // 👇 1. 新增：智慧分帳 App (放在第一個最顯眼)
    {
      title: "智慧分帳 App (Split Bill)",
      description:
        "解決團體旅遊分帳煩惱的 Web App。內建「自動債務簡化演算法」能計算出最少轉帳次數，並具備 Midnight Pro 深色模式與 RWD 響應式設計。",

      // 👇 技術標籤：強調演算法 (Algorithm) 是加分項
      tags: ["React", "Algorithm", "CSS Variables", "LocalStorage"],

      // 👇 選了一張跟財務/計算相關的 Unsplash 圖片
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",

      // ⚠️ 請記得把這裡換成你剛剛部署好的 Netlify 網址
      demoLink: "https://jing-splitbillapp.netlify.app/",

      // ⚠️ 請記得把這裡換成你的 GitHub 網址
      repoLink: "https://github.com/Jing0924/split-bill-app",
    },

    {
      title: "毛玻璃特效登入頁",
      // 👇 描述改為強調 CSS 與視覺設計
      description:
        "專注於現代 UI 設計的練習。運用 CSS backdrop-filter 實現磨砂玻璃質感，並搭配 Keyframes 動畫製作漂浮背景。",

      // 👇 標籤改為相關技術
      tags: ["React", "CSS3", "Animation", "Glassmorphism"],

      // 👇 圖片換成這張抽象的紫色/粉色漸層圖，跟你的專案風格很像
      image:
        "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",

      demoLink: "https://idyllic-starship-613010.netlify.app/",
      repoLink: "https://github.com/Jing0924/glass-login",
    },
    {
      title: "Markdown 筆記軟體",
      description:
        "支援 Markdown 語法即時預覽、搜尋過濾與 CRUD 功能。使用 React + TypeScript 開發，並透過 LocalStorage 實現自動存檔與資料持久化。",

      // 👇 這裡展示了你用到的關鍵技術 (TypeScript 是加分項！)
      tags: ["React", "TypeScript", "Markdown", "LocalStorage"],

      // 👇 這是一張筆記/筆電風格的圖片
      image:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",

      // 👇 【重要】請把這裡換成你剛剛在 Netlify 拿到的網址 (例如 https://jingde-notes.netlify.app)
      demoLink: "https://heroic-panda-ebac69.netlify.app/",

      // 👇 這是你剛剛推送到 GitHub 的網址
      repoLink: "https://github.com/Jing0924/my-notes-app",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title" data-aos="fade-down">
        我的作品
      </h2>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div
            className="project-card"
            key={project.title}
            data-aos="fade-up"
            data-aos-delay={index * 100} // 波浪延遲效果
          >
            {/* 圖片區 */}
            <div className="card-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
            </div>

            {/* 內容區 */}
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* 技術標籤 */}
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* 按鈕區 */}
              <div className="project-links">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-demo"
                >
                  Live Demo
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-repo"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
