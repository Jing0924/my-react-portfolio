function About() {
  return (
    <section id="about" className="bg-[#2a2a2a] px-5 py-[100px] text-white">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="mb-0 text-[2.5rem] text-[#61dafb]">關於我</h2>

        <div className="mt-10 flex flex-col gap-[50px] md:flex-row md:items-start">
          <div className="md:flex-1">
            <p className="mb-5 text-[1.1rem] leading-[1.8] text-[#ddd] last:mb-0">
              您好！我是專注於前端技術的開發者，擁有自主學習與實戰經驗。雖然起步於 React，但我已獨立規劃並實現完整的響應式作品集，從需求分析、設計到功能開發皆親力親為，展現工程化思維與解決問題的能力。樂於挑戰技術新知、追求最佳實踐，致力於打造兼具美感與效能的高品質網頁產品。
            </p>
            <p className="mb-5 text-[1.1rem] leading-[1.8] text-[#ddd] last:mb-0">
              我專注掌握 HTML、CSS 與 JavaScript，持續學習現代化框架，
              目標是做出既好用又好看的網頁產品，邊做邊學，不斷挑戰自我。
            </p>
          </div>

          <div className="md:flex-1">
            <h3 className="mb-5 mt-0 text-[#61dafb]">我的技能樹</h3>
            <div className="flex flex-wrap gap-[15px]">
              {['HTML5', 'CSS3', 'JavaScript', 'React', 'Git'].map((skill) => (
                <span
                  key={skill}
                  className="cursor-default rounded-[20px] border border-[#61dafb] bg-[#333] px-4 py-2 text-[0.9rem] text-[#61dafb] transition-all duration-300 hover:scale-110 hover:bg-[#61dafb] hover:text-[#222]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
