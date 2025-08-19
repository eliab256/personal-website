import type { ProjectCardData } from "../types/projectTypes";
import { useDispatch } from "react-redux";
import { clearSelectedProject } from "../redux/selectedProjectSlice";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "../assets/css/projectSummary.css";

export interface ProjectSummaryProps {
  selectedProjectProp: ProjectCardData;
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({ selectedProjectProp }) => {
  const dispatch = useDispatch();
  const { name, image, description, programmingLanguage, gitHubLink, etherscanLink, websiteLink, presentationDownloadLink } = selectedProjectProp;
  return (
    <>
      <div className="ProjectSummaryContainer">
        {/* Close Button */}
        <div className="XContainer" onClick={() => dispatch(clearSelectedProject())}>
          <XMarkIcon className="iconClose" />
        </div>
        {/* Title */}
        <div className="titleContainer">
          <h2 className="titleText">{name}</h2>
        </div>

        {/* Image */}
        <div className="imageContainer">
          <img src={image} alt={name} className="imageElement" />
        </div>

        {/* Description */}
        <div className="descriptionContainer">
          <p className="descriptionText">{description}</p>
        </div>

        {/* Programming Language */}
        <div className="programmingLanguagesContainer">
          {programmingLanguage.map((lang, index) => (
            <div className="programmingLanguagesItem" key={index}>
              {lang}
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="gitHubLinkContainer">
          <a className="githubLink" target="_blank" rel="noopener" href={gitHubLink}>
            GitHub repository link
          </a>
        </div>

        {/* Etherscan Link */}
        <div className="etherscanLinkContainer">
          <a
            className="etherscanLink"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (Array.isArray(etherscanLink)) {
                etherscanLink.forEach((link) => {
                  window.open(link, "_blank");
                });
              } else {
                window.open(etherscanLink, "_blank", "noopener,noreferrer");
              }
            }}
            rel="noopener"
          >
            {`Open ${Array.isArray(etherscanLink) ? etherscanLink.length : 1} link${Array.isArray(etherscanLink) && etherscanLink.length > 1 ? "s" : ""} on Etherscan`}
          </a>
        </div>

        {/* Website Link */}
        <div className="websiteContainer">
          <a className="websiteLink" target="_blank" rel="noopener" href={websiteLink}>
            Website link
          </a>
        </div>

        {/* Presentation Link */}
        <div className="PresentationContainer">
          <a className="PresentationLink" target="_blank" rel="noopener" href={presentationDownloadLink}>
            Presentation PDF download
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectSummary;
