import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/pagesSlice";
import logoImage from "../assets/img/PersonalLogos/personalLogoWithNoBackgroundTextWrappedOnTheRightCropped.png";
import linkedinImage from "../assets/img/LinkedinLogo.png";
import gitHubImage from "../assets/img/githubMark.png";
import s2iLogo from "../assets/img/S2ILogo.png";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <header className="w-full h-[80px] md:h-[50px] lg:h-[80px] border-b-2 md:border-b-4 lg:border-b-4 border-logo-dark bg-white fixed top-0 left-0 right-0 z-[100] flex justify-center shadow-lg">
      <div className="h-full flex flex-col md:flex-row justify-between items-center w-full max-w-full px-4 py-1 md:py-0">
        {/* First Row on Mobile: Logo and Social Links */}
        <div className="flex md:hidden w-full justify-between items-center h-[35px]">
          {/* Logo Section Mobile */}
          <div className="flex h-[30px] items-center">
            <div
              className="flex justify-center h-full cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
              onClick={() => dispatch(setCurrentPage("home"))}
              role="button"
            >
              <img src={logoImage} alt="Logo" className="h-full" />
            </div>
          </div>

          {/* Social Links Section Mobile */}
          <div className="flex justify-center items-center h-[20px] gap-3">
            <a
              href="https://www.linkedin.com/in/elia-bordoni"
              rel="noopener"
              target="_blank"
              className="h-full transition-transform duration-200 hover:scale-110 active:scale-95"
            >
              <img src={linkedinImage} alt="linkedin link" className="h-full" />
            </a>
            <a
              href="https://github.com/eliab256"
              rel="noopener"
              target="_blank"
              className="h-full transition-transform duration-200 hover:scale-110 active:scale-95"
            >
              <img src={gitHubImage} alt="github link" className="h-full" />
            </a>
            <a
              href="https://talent.start2impact.it/profile/elia-bordoni-856a171d-db43-4743-a606-e3bb8d631f35"
              rel="noopener"
              target="_blank"
              className="h-full transition-transform duration-200 hover:scale-110 active:scale-95"
            >
              <img src={s2iLogo} alt="start2impact link" className="h-full" />
            </a>
          </div>
        </div>

        {/* Logo Section Desktop */}
        <div className="hidden md:flex h-[35px] lg:h-[55px] items-center text-[13px] md:text-[15px] lg:text-[25px] justify-center flex-1">
          <div
            className="flex justify-center h-full cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
            onClick={() => dispatch(setCurrentPage("home"))}
            role="button"
          >
            <img src={logoImage} alt="Logo" className="h-full" />
          </div>
        </div>

        {/* Menu Section - Second Row on Mobile, Center on Desktop */}
        <div className="flex h-[35px] md:h-[35px] lg:h-[55px] items-center justify-center text-[11px] md:text-[15px] lg:text-[25px] gap-[2%] md:gap-[1.5%] lg:gap-[3%] flex-[2] w-full md:w-auto">
          <button
            onClick={() => dispatch(setCurrentPage("aboutMe"))}
            className="bg-transparent border-none text-black h-full relative font-inherit transition-all duration-500 hover:text-logo-light-blue group whitespace-nowrap px-1"
          >
            About Me
            <span className="absolute bottom-[0.3em] left-0 w-0 h-[0.15em] bg-gradient-to-r from-logo-light-blue to-logo-dark rounded-[30px] transition-all duration-500 group-hover:w-full group-focus:w-full group-focus:transition-none"></span>
          </button>
          <button
            onClick={() => dispatch(setCurrentPage("certifications"))}
            className="bg-transparent border-none text-black h-full relative font-inherit transition-all duration-500 hover:text-logo-light-blue group whitespace-nowrap px-1"
          >
            Certifications
            <span className="absolute bottom-[0.3em] left-0 w-0 h-[0.15em] bg-gradient-to-r from-logo-light-blue to-logo-dark rounded-[30px] transition-all duration-500 group-hover:w-full group-focus:w-full group-focus:transition-none"></span>
          </button>
          <button
            onClick={() => dispatch(setCurrentPage("auditPortfolio"))}
            className="bg-transparent border-none text-black h-full relative font-inherit transition-all duration-500 hover:text-logo-light-blue group whitespace-nowrap px-1"
          >
            Audit Portfolio
            <span className="absolute bottom-[0.3em] left-0 w-0 h-[0.15em] bg-gradient-to-r from-logo-light-blue to-logo-dark rounded-[30px] transition-all duration-500 group-hover:w-full group-focus:w-full group-focus:transition-none"></span>
          </button>
          <button
            onClick={() => dispatch(setCurrentPage("portfolio"))}
            className="bg-transparent border-none text-black h-full relative font-inherit transition-all duration-500 hover:text-logo-light-blue group whitespace-nowrap px-1"
          >
            Dev Portfolio
            <span className="absolute bottom-[0.3em] left-0 w-0 h-[0.15em] bg-gradient-to-r from-logo-light-blue to-logo-dark rounded-[30px] transition-all duration-500 group-hover:w-full group-focus:w-full group-focus:transition-none"></span>
          </button>
          <button
            onClick={() => dispatch(setCurrentPage("contactMe"))}
            className="bg-transparent border-none text-black h-full relative font-inherit transition-all duration-500 hover:text-logo-light-blue group whitespace-nowrap px-1"
          >
            Contact Me
            <span className="absolute bottom-[0.3em] left-0 w-0 h-[0.15em] bg-gradient-to-r from-logo-light-blue to-logo-dark rounded-[30px] transition-all duration-500 group-hover:w-full group-focus:w-full group-focus:transition-none"></span>
          </button>
        </div>

        {/* Social Links Section Desktop */}
        <div className="hidden md:flex justify-center items-center h-[20px] lg:h-[30px] flex-1 gap-[4%] lg:gap-[5%]">
          <a
            href="https://www.linkedin.com/in/elia-bordoni"
            rel="noopener"
            target="_blank"
            className="h-full transition-transform duration-200 hover:scale-110 active:scale-95"
          >
            <img src={linkedinImage} alt="linkedin link" className="h-full" />
          </a>
          <a
            href="https://github.com/eliab256"
            rel="noopener"
            target="_blank"
            className="h-full transition-transform duration-200 hover:scale-110 active:scale-95"
          >
            <img src={gitHubImage} alt="github link" className="h-full" />
          </a>
          <a
            href="https://talent.start2impact.it/profile/elia-bordoni-856a171d-db43-4743-a606-e3bb8d631f35"
            rel="noopener"
            target="_blank"
            className="h-full transition-transform duration-200 hover:scale-110 active:scale-95"
          >
            <img src={s2iLogo} alt="start2impact link" className="h-full" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
