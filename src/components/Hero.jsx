import { logo } from "../assets/index";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3 ">
        <img src={logo} alt="logo" className="w-28 object-contain" />

        <button
          type="button"
          className="black_btn"
          onClick={() => window.open("https://github.com/putraa22")}
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles With <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GTP-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summarize, an open-source article summarizer
        that transform lenghty articles into clear and concise summarise.
      </h2>
    </header>
  );
};

export default Hero;
