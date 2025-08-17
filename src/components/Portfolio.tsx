import { useSelector } from "react-redux";
import { useEffect } from "react";
import { type ProjectName } from "../redux/selectedProjectSlice";
import ProjectCard from "./ProjectCard";
import projectCardData from "../data/ProjectCardData";
import type { ProjectType, SchoolType, ProgrammingLanguagesType } from "../types/projectTypes";

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
    <div className="main-container-portfolio width-controller">
      <div className="title">
        <h1>Portfolio</h1>
      </div>
      <div className="all-works">
        <div className="school-works">
          <div className="name-school-works">
            <h2>start2impact works</h2>
          </div>
          <div className="works-grid"></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
