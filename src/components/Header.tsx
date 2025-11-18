import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/pagesSlice";
import "../assets/css/header.css";
import logoImage from "../assets/img/PersonalLogos/personalLogoWithNoBackgroundTextWrappedOnTheRightCropped.png";
import linkedinImage from "../assets/img/LinkedinLogo.png";
import gitHubImage from "../assets/img/githubMark.png";
import s2iLogo from "../assets/img/S2ILogo.png";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <div className="header-container width-controller">
        <div className="header-items logo">
          <div className="logo-items" onClick={() => dispatch(setCurrentPage("home"))} role="button">
            <img src={logoImage} alt="Logo" />
          </div>
        </div>
        <div className="header-items menu">
          <button onClick={() => dispatch(setCurrentPage("aboutMe"))}>About Me</button>
          <button onClick={() => dispatch(setCurrentPage("certifications"))}>Certifications</button>
          <button onClick={() => dispatch(setCurrentPage("portfolio"))}>Portfolio</button>
          <button onClick={() => dispatch(setCurrentPage("contactMe"))}>ContactMe</button>
        </div>
        <div className="header-items social-links">
          <div className="social-link-items">
            <a href="https://www.linkedin.com/in/elia-bordoni" rel="noopener" target="_blank">
              <img src={linkedinImage} alt="linkedin link" />
            </a>
          </div>
          <div className="social-link-items">
            <a href="https://github.com/eliab256" rel="noopener" target="_blank">
              <img src={gitHubImage} alt="github link" />
            </a>
          </div>
          <div className="social-link-items">
            <a href="https://talent.start2impact.it/profile/elia-bordoni-856a171d-db43-4743-a606-e3bb8d631f35" rel="noopener" target="_blank">
              <img src={s2iLogo} alt="start2impact link" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
