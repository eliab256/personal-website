import type { AuditCardData } from "../types/projectTypes";
import { useDispatch } from "react-redux";
import { clearSelectedProject } from "../redux/selectedProjectSlice";
import { XMarkIcon, DocumentArrowDownIcon } from "@heroicons/react/24/solid";
import githubLogo from "../assets/img/githubMark.png";

export interface AuditSummaryProps {
  selectedAuditProp: AuditCardData;
}

const AuditSummary: React.FC<AuditSummaryProps> = ({ selectedAuditProp }) => {
  const dispatch = useDispatch();
  const {
    name,
    image,
    description,
    programmingLanguage,
    gitHubLink,
    presentationDownloadLink,
    platform,
    projectClass,
    technologyStack,
    findingsCount,
    platformLink,
  } = selectedAuditProp;

  const formatStack = (stack: AuditCardData["technologyStack"]): string => (Array.isArray(stack) ? stack.join(", ") : stack);

  // Funzione helper per verificare se il link è valido
  const isValidLink = (link: string | undefined | null): boolean => {
    if (!link) return false;
    return link.trim() !== "";
  };

  const hasValidPlatformLink = isValidLink(platformLink);

  return (
    <>
      <div className="fixed top-[42px] md:top-[55px] lg:top-[85px] bottom-[25px] md:bottom-[40px] lg:bottom-[65px] z-50 flex justify-center flex-col items-center rounded-2xl bg-white/95 backdrop-blur-sm py-3 px-2 md:py-4 md:px-4 lg:py-5 lg:px-6 mx-auto border border-gray-300 shadow-lg overflow-y-auto cursor-default w-[90%] sm:w-[90%] md:w-[80%] lg:w-[60%]">
        {/* Close Button */}
        <div
          className="absolute top-2 right-2 md:top-3 md:right-3 bg-red-500 rounded-[40px] transition-transform duration-150 shadow-md p-1.5 md:p-2 cursor-pointer active:scale-95 active:bg-red-600 hover:bg-red-600"
          onClick={() => dispatch(clearSelectedProject())}
        >
          <XMarkIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
        {/* Title */}
        <div className="flex flex-col items-center w-full mb-2 md:mb-3">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-black px-8">{name}</h2>
        </div>

        {/* Image */}
        <div className="flex flex-col items-center w-full mb-2 md:mb-3">
          <img src={image} alt={name} className="w-full max-w-[120px] md:max-w-[150px] lg:max-w-[180px] h-auto object-cover rounded-md shadow-lg" />
        </div>

        {/* Description */}
        <div className="flex flex-col items-center w-full mb-2 md:mb-3 px-6 md:px-8 lg:px-10 text-xs md:text-sm lg:text-sm">
          <p className="text-gray-600 text-justify line-clamp-6">{description}</p>
        </div>

        {/* Audit Information Grid */}
        <div className="w-full px-3 md:px-4 lg:px-6 mb-2 md:mb-3">
          <div className="flex flex-col gap-2 text-xs md:text-sm">
            <div className="flex flex-wrap justify-around items-center gap-2">
              <div className="text-gray-700 border border-blue-200 bg-blue-50/30 rounded-full px-2 md:px-3 py-1 shadow-sm text-center">
                <span className="font-semibold">Platform:</span> {platform}
              </div>
              <div className="text-gray-700 border border-purple-200 bg-purple-50/30 rounded-full px-2 md:px-3 py-1 shadow-sm text-center">
                <span className="font-semibold">Type:</span> {projectClass}
              </div>
            </div>
            <div className="flex flex-wrap justify-around items-center gap-2">
              <div className="text-gray-700 border border-orange-200 bg-orange-50/30 rounded-full px-2 md:px-3 py-1 shadow-sm text-center">
                <span className="font-semibold">Framework:</span> {formatStack(technologyStack)}
              </div>
              <div className="text-gray-700 border border-green-200 bg-green-50/30 rounded-full px-2 md:px-3 py-1 shadow-sm text-center">
                <span className="font-semibold">Languages:</span> {programmingLanguage.join(", ")}
              </div>
            </div>
          </div>
        </div>

        {/* Findings Count */}
        {findingsCount && findingsCount.some((count) => count > 0) && (
          <div className="flex flex-wrap gap-2 justify-center mb-2 md:mb-3">
            {findingsCount[0] > 0 && (
              <div className="px-2 py-0.5 bg-red-500/20 border border-red-500/40 rounded text-xs text-red-700">High: {findingsCount[0]}</div>
            )}
            {findingsCount[1] > 0 && (
              <div className="px-2 py-0.5 bg-yellow-500/20 border border-yellow-500/40 rounded text-xs text-yellow-700">Medium: {findingsCount[1]}</div>
            )}
            {findingsCount[2] > 0 && (
              <div className="px-2 py-0.5 bg-green-500/20 border border-green-500/40 rounded text-xs text-green-700">Low: {findingsCount[2]}</div>
            )}
          </div>
        )}

        {/* Links Section */}
        <div className="flex flex-col gap-2 mb-2">
          {/* GitHub Link */}
          <a
            className="flex items-center gap-2 text-logo-blue hover:underline font-medium justify-center text-sm"
            target="_blank"
            rel="noopener"
            href={gitHubLink}
          >
            <img src={githubLogo} alt="GitHub" className="w-4 h-4" />
            <span>GitHub repository</span>
          </a>

          {/* Platform Link */}
          {hasValidPlatformLink && (
            <a
              className="flex items-center gap-2 text-logo-blue hover:underline font-medium justify-center text-sm"
              target="_blank"
              rel="noopener"
              href={platformLink}
            >
              <span>View on {platform}</span>
            </a>
          )}

          {/* Audit Report Link */}
          <a
            className="flex items-center gap-2 text-logo-blue hover:underline font-medium justify-center text-sm"
            target="_blank"
            rel="noopener"
            href={presentationDownloadLink}
          >
            <DocumentArrowDownIcon className="w-4 h-4" />
            <span>Audit Report</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default AuditSummary;
