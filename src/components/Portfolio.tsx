import { useSelector } from "react-redux";
import { useEffect } from "react";
import { type ProjectName } from "../redux/selectedProjectSlice";
import ProjectCard from "./ProjectCard";
import AuditCard from "./AuditCard";
import projectCardData from "../data/ProjectCardData";
import auditCardData from "../data/AuditCardData";
// import type { ProjectType, SchoolType, ProgrammingLanguagesType } from "../types/projectTypes";
import { schools } from "../types/projectTypes";
import ProjectSummary from "./ProjectSummary";
import "../assets/css/portfolio.css";

const Portfolio: React.FC = () => {
  const currentProjectSelected = useSelector((state: { selectedProject: { name: ProjectName } }) => state.selectedProject.name);
  const selectedProject = projectCardData.find((ex) => ex.name === currentProjectSelected);

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
    <div className="mainContainerPortfolio">
      <div className="title">
        <h1>Portfolio</h1>
      </div>
      <div className="allWorks">
        {schools.map((school) => {
          const projectsForSchool = projectCardData.filter((project) => project.school === school);

          if (projectsForSchool.length === 0) {
            return null;
          }

          return (
            <div className="schoolWorks" key={school}>
              <div className="nameSchool">
                <h2>{school}</h2>
              </div>
              <div className="worksGrid">
                {projectsForSchool.map((project) => (
                  <ProjectCard key={project.name} projectProp={project} />
                ))}
              </div>
            </div>
          );
        })}

        {schools.map((platform) => {
          const projectsForPlatform = auditCardData.filter((project) => project.platform === platform);

          if (projectsForPlatform.length === 0) {
            return null;
          }

          return (
            <div className="schoolWorks" key={platform}>
              <div className="nameSchool">
                <h2>{platform}</h2>
              </div>
              <div className="worksGrid">
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

export default Portfolio;
