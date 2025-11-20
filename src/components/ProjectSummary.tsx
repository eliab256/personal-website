import type { ProjectCardData, AuditCardData } from "../types/projectTypes";
import { useDispatch } from "react-redux";
import { clearSelectedProject } from "../redux/selectedProjectSlice";
import { XMarkIcon } from "@heroicons/react/24/solid";

export interface ProjectSummaryProps {
  selectedProjectProp: ProjectCardData | AuditCardData;
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({ selectedProjectProp }) => {
  const dispatch = useDispatch();
  const { name, image, description, programmingLanguage, gitHubLink, presentationDownloadLink } = selectedProjectProp;

  // Type guards to check if it's ProjectCardData or AuditCardData
  const isProjectCard = (project: ProjectCardData | AuditCardData): project is ProjectCardData => {
    return "school" in project;
  };

  const etherscanLink = isProjectCard(selectedProjectProp) ? selectedProjectProp.etherscanLink : undefined;
  const websiteLink = isProjectCard(selectedProjectProp) ? selectedProjectProp.websiteLink : undefined;

  // Funzioni helper per verificare se i link sono validi
  const isValidLink = (link: string | string[] | undefined | null): boolean => {
    if (!link) return false;
    if (typeof link === "string") return link.trim() !== "";
    if (Array.isArray(link)) return link.length > 0 && link.some((l) => l.trim() !== "");
    return false;
  };

  const hasValidEtherscanLink = isValidLink(etherscanLink);
  const hasValidWebsiteLink = isValidLink(websiteLink);

  return (
    <>
      <div className="fixed top-[42px] md:top-[55px] lg:top-[85px] bottom-0 z-50 flex justify-center flex-col items-center rounded-2xl bg-white/95 backdrop-blur-sm p-1 mx-auto border border-gray-300 shadow-lg overflow-y-auto cursor-default w-[90%] sm:w-[90%] md:w-[80%] lg:w-[60%] lg:p-12">
        {/* Close Button */}
        <div
          className="absolute top-4 right-4 bg-red-500 rounded-[40px] transition-transform duration-150 shadow-md p-2 cursor-pointer active:scale-95 active:bg-red-600 hover:bg-red-600"
          onClick={() => dispatch(clearSelectedProject())}
        >
          <XMarkIcon className="w-6 h-6 text-white" />
        </div>
        {/* Title */}
        <div className="flex flex-col items-center w-full mb-4">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center text-black">{name}</h2>
        </div>

        {/* Image */}
        <div className="flex flex-col items-center w-full pt-0 md:pt-6">
          <img src={image} alt={name} className="w-full max-w-[180px] md:max-w-[220px] lg:max-w-[220px] h-auto object-cover rounded-md" />
        </div>

        {/* Description */}
        <div className="flex flex-col items-center w-full mb-2 px-4 md:px-6 lg:px-8 text-xs md:text-base lg:text-lg">
          <p className="text-gray-600 text-justify">{description}</p>
        </div>

        {/* Programming Language */}
        <div className="flex flex-wrap gap-2 justify-center my-4">
          {programmingLanguage.map((lang, index) => (
            <div className="px-3 py-1 bg-logo-blue text-white rounded-full text-sm" key={index}>
              {lang}
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="my-2">
          <a className="text-logo-blue hover:underline font-medium" target="_blank" rel="noopener" href={gitHubLink}>
            GitHub repository link
          </a>
        </div>

        {/* Etherscan Link */}
        {hasValidEtherscanLink && (
          <div className="my-2">
            <a
              className="text-logo-blue hover:underline font-medium"
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
              {`Open ${Array.isArray(etherscanLink) ? etherscanLink.length : 1} link${
                Array.isArray(etherscanLink) && etherscanLink.length > 1 ? "s" : ""
              } on Etherscan`}
            </a>
          </div>
        )}

        {/* Website Link */}
        {hasValidWebsiteLink && (
          <div className="my-2">
            <a className="text-logo-blue hover:underline font-medium" target="_blank" rel="noopener" href={websiteLink}>
              Website link
            </a>
          </div>
        )}

        {/* Presentation Link */}
        <div className="my-2">
          <a className="text-logo-blue hover:underline font-medium" target="_blank" rel="noopener" href={presentationDownloadLink}>
            Presentation PDF download
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectSummary;
