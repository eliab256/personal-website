import { useSelector } from "react-redux";
import { useEffect } from "react";
import { type ProjectName } from "../redux/selectedProjectSlice";
import AuditCard from "./AuditCard";
import auditCardData from "../data/AuditCardData";
import { platforms } from "../types/projectTypes";
import AuditSummary from "./AuditSummary";

const AuditPortfolio: React.FC = () => {
  const currentProjectSelected = useSelector((state: { selectedProject: { name: ProjectName } }) => state.selectedProject.name);
  const selectedProject = auditCardData.find((ex) => ex.name === currentProjectSelected);

  // Calcola il totale globale di tutte le vulnerabilità
  const globalTotalFindings = auditCardData.reduce(
    (acc, project) => {
      if (project.findingsCount) {
        acc.high += project.findingsCount[0];
        acc.medium += project.findingsCount[1];
        acc.low += project.findingsCount[2];
      }
      return acc;
    },
    { high: 0, medium: 0, low: 0 }
  );

  useEffect(() => {
    if (currentProjectSelected !== null) {
      document.body.classList.add("bodyNoScroll");
    } else {
      document.body.classList.remove("bodyNoScroll");
    }
    return () => {
      document.body.classList.remove("bodyNoScroll");
    };
  }, [currentProjectSelected]);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="title text-center">
        <h1>Audit Portfolio</h1>
      </div>
      <div className="flex gap-2 items-center justify-center mt-2">
        <span className="text-white text-xs uppercase tracking-wider opacity-70">Total Findings:</span>
        <span className="px-2 py-0.5 bg-red-500/20 border border-red-500/40 rounded text-xs text-red-300">H:{globalTotalFindings.high}</span>
        <span className="px-2 py-0.5 bg-yellow-500/20 border border-yellow-500/40 rounded text-xs text-yellow-300">M:{globalTotalFindings.medium}</span>
        <span className="px-2 py-0.5 bg-green-500/20 border border-green-500/40 rounded text-xs text-green-300">L:{globalTotalFindings.low}</span>
      </div>
      <div className="flex flex-col flex-1 mt-3 w-full">
        {platforms.map((platform) => {
          const projectsForPlatform = auditCardData.filter((project) => project.platform === platform);

          if (projectsForPlatform.length === 0) {
            return null;
          }

          // Calcola il totale delle findings per questa piattaforma
          const totalFindings = projectsForPlatform.reduce(
            (acc, project) => {
              if (project.findingsCount) {
                acc.high += project.findingsCount[0];
                acc.medium += project.findingsCount[1];
                acc.low += project.findingsCount[2];
              }
              return acc;
            },
            { high: 0, medium: 0, low: 0 }
          );

          return (
            <div className="flex flex-col items-stretch w-full pb-4" key={platform}>
              <div className="flex items-center justify-center h-auto border-b-2 border-white border-dashed mx-[10%] gap-3">
                <h2 className="text-center">{platform}</h2>
                {platform !== "damn vulnerable defi" && (
                  <div className="flex gap-2 items-center">
                    <span className="px-2 py-0.5 bg-red-500/20 border border-red-500/40 rounded text-xs text-red-300">H:{totalFindings.high}</span>
                    <span className="px-2 py-0.5 bg-yellow-500/20 border border-yellow-500/40 rounded text-xs text-yellow-300">M:{totalFindings.medium}</span>
                    <span className="px-2 py-0.5 bg-green-500/20 border border-green-500/40 rounded text-xs text-green-300">L:{totalFindings.low}</span>
                  </div>
                )}
              </div>
              <div className="w-full flex flex-row flex-wrap justify-center pt-0.5 pb-0.5 px-2">
                {projectsForPlatform.map((project) => (
                  <AuditCard key={project.name} auditProp={project} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {currentProjectSelected !== null && (
        <>
          <AuditSummary selectedAuditProp={selectedProject!} />
        </>
      )}
    </div>
  );
};

export default AuditPortfolio;
