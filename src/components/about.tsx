function About() {
  return (
    <section id="about" className="bg-[#2a2a2a] px-5 py-[100px] text-white">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="mb-0 text-[2.5rem] text-[#61dafb]">關於我</h2>

        <div className="mt-10 flex flex-col gap-[50px] md:flex-row md:items-start">
          <div className="md:flex-1">
            <p className="mb-5 text-[1.1rem] leading-[1.8] text-[#ddd] last:mb-0">
              你好！我是熱愛前端的開發者。 雖然剛開始接觸
              React，但我已經動手打造了自己的作品集網站，享受從零到有完成每個功能的成就感。
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
