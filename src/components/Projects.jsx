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
      title: "天氣查詢 App",
      description:
        "串接 OpenWeatherMap API，讓使用者輸入城市名稱即可查詢即時氣溫與濕度。",
      tags: ["React", "API Fetch", "Async/Await"],
      image:
        "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      demoLink: "#",
      repoLink: "#",
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
