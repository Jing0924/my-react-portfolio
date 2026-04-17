function Contact() {
  const year = new Date().getFullYear()
  const creditLine = '\u00A9 ' + year + ' My Personal Website. All rights reserved.'

  return (
    <section
      id="contact"
      className="bg-[#222] px-5 pb-5 pt-[100px] text-center text-white"
    >
      <h2 className="mb-5 text-[2.5rem] text-[#61dafb]">聯絡我</h2>
      <p className="mx-auto mb-10 max-w-[600px] text-[1.1rem] text-[#ccc]">
        如果你有任何工作機會或問題，歡迎隨時聯絡我！
      </p>

      <div className="mb-20 flex flex-wrap items-center justify-center gap-5">
        <a
          href="mailto:liao860924@gmail.com"
          className="inline-block min-w-[120px] rounded-[5px] bg-[#61dafb] px-[30px] py-3 font-bold text-[#222] no-underline transition-all duration-300 hover:-translate-y-[3px] hover:bg-[#4fa8d1]"
        >
          寫信給我
        </a>

        <a
          href="https://github.com/Jing0924/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block min-w-[120px] rounded-[5px] bg-[#61dafb] px-[30px] py-3 font-bold text-[#222] no-underline transition-all duration-300 hover:-translate-y-[3px] hover:bg-[#4fa8d1]"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jing-undefined-54815029b/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block min-w-[120px] rounded-[5px] bg-[#61dafb] px-[30px] py-3 font-bold text-[#222] no-underline transition-all duration-300 hover:-translate-y-[3px] hover:bg-[#4fa8d1]"
        >
          LinkedIn
        </a>
      </div>

      <footer className="border-t border-neutral-600 pt-5 text-sm text-neutral-500">
        <p>{creditLine}</p>
      </footer>
    </section>
  )
}

export default Contact
