import personalPhoto from '../assets/personal_photo.png'

function Hero() {
  return (
    <div
      id="home"
      className="mx-auto flex max-w-[1000px] items-center justify-center gap-[50px] bg-[#222] px-5 pb-[90px] pt-[120px] text-white max-md:flex-col-reverse max-md:gap-[30px] max-md:pb-[50px] max-md:pt-[120px] max-md:text-center"
    >
      <div
        className="max-w-[540px] text-left max-md:max-w-full max-md:text-center"
        data-aos="fade-right"
      >
        <p className="mb-3 mt-0 text-[0.85rem] uppercase tracking-[0.08em] text-[#9fd8ea]">
          Frontend Developer Portfolio
        </p>
        <h1 className="mb-2.5 text-5xl text-[#61dafb] max-md:text-[2.5rem]">
          Jing Liao
        </h1>
        <p className="mb-5 text-[1.35rem] text-[#dadada]">
          React 前端工程師 | 求職中
        </p>
        <p className="mb-8 text-[1.05rem] leading-[1.7] text-[#cccccc]">
          專注打造易用、響應式且具視覺質感的網頁產品，
          透過實作專案持續累積前端開發與介面設計能力。
        </p>
        <div className="flex flex-wrap gap-3 max-md:justify-center">
          <a
            href="#projects"
            className="inline-block rounded-lg bg-[#61dafb] px-6 py-3 font-bold text-[#222] no-underline transition-[background-color,transform] duration-200 hover:-translate-y-px hover:bg-[#4fa8d1] max-md:min-w-[140px]"
          >
            查看作品案例
          </a>
          <a
            href="#contact"
            className="inline-block rounded-lg border border-[#61dafb] bg-transparent px-6 py-3 font-bold text-[#61dafb] no-underline transition-[background-color,transform] duration-200 hover:-translate-y-px hover:bg-[rgba(97,218,251,0.12)] max-md:min-w-[140px]"
          >
            聯絡我
          </a>
        </div>
      </div>

      <div data-aos="fade-left">
        <div className="group h-[300px] w-[300px] overflow-hidden rounded-full border-[5px] border-[#61dafb]">
          <img
            src={personalPhoto}
            alt="Jing Liao 頭像"
            className="h-full w-full scale-100 object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.2]"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
