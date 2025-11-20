import { useSelector } from "react-redux";
import { useEffect } from "react";
import { type ProjectName } from "../redux/selectedProjectSlice";
import AuditCard from "./AuditCard";
import auditCardData from "../data/AuditCardData";
import { schools } from "../types/projectTypes";
import ProjectSummary from "./ProjectSummary";

const AuditPortfolio: React.FC = () => {
  const currentProjectSelected = useSelector((state: { selectedProject: { name: ProjectName } }) => state.selectedProject.name);
  const selectedProject = auditCardData.find((ex) => ex.name === currentProjectSelected);

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
      <div className="title">
        <h1>Audit Portfolio</h1>
      </div>
      <div className="flex flex-col flex-1 mt-5 w-full">
        {schools.map((platform) => {
          const projectsForPlatform = auditCardData.filter((project) => project.platform === platform);

          if (projectsForPlatform.length === 0) {
            return null;
          }

          return (
            <div className="flex flex-col items-stretch w-full pb-6" key={platform}>
              <div className="flex items-center justify-center h-auto border-b-2 border-white border-dashed mx-[10%]">
                <h2 className="text-center">{platform}</h2>
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
          <ProjectSummary selectedProjectProp={selectedProject!} />
        </>
      )}
    </div>
  );
};

export default AuditPortfolio;
