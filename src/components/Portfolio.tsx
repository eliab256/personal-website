import { useSelector } from "react-redux";
import { useEffect } from "react";
import { type ProjectName } from "../redux/selectedProjectSlice";
import ProjectCard from "./ProjectCard";
import projectCardData from "../data/ProjectCardData";
// import type { ProjectType, SchoolType, ProgrammingLanguagesType } from "../types/projectTypes";
import { schools } from "../types/projectTypes";
import ProjectSummary from "./ProjectSummary";
import "../assets/css/portfolio.css";

const Portfolio: React.FC = () => {
  const currentProjectSelected = useSelector((state: { selectedProject: { name: ProjectName } }) => state.selectedProject.name);
  const selectedProject = projectCardData.find((ex) => ex.name === currentProjectSelected);

  useEffect(() => {
    if (currentProjectSelected !== null) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
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
