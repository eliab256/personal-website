import { useSelector } from "react-redux";
import { useEffect } from "react";
import { type ProjectName } from "../redux/selectedProjectSlice";
import ProjectCard from "./ProjectCard";
import projectCardData from "../data/ProjectCardData";
import { schools } from "../types/projectTypes";
import ProjectSummary from "./ProjectSummary";

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
    <div className="flex flex-col justify-center items-center w-full">
      <div className="title text-center">
        <h1>Dev Portfolio</h1>
      </div>
      <div className="flex flex-col flex-1 mt-3 w-full">
        {schools.map((school) => {
          const projectsForSchool = projectCardData.filter((project) => project.school === school);

          if (projectsForSchool.length === 0) {
            return null;
          }

          return (
            <div className="flex flex-col items-stretch w-full pb-4" key={school}>
              <div className="flex items-center justify-center h-auto border-b-2 border-white border-dashed mx-[10%]">
                <h2 className="text-center">{school}</h2>
              </div>
              <div className="w-full flex flex-row flex-wrap justify-center pt-0.5 pb-0.5 px-2">
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
