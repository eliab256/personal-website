import { type ProjectCardData } from "../types/projectTypes";
import { useDispatch } from "react-redux";
import { setSelectedProject } from "../redux/selectedProjectSlice";

export interface ProjectCardProps {
  projectProp: ProjectCardData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectProp }) => {
  const dispatch = useDispatch();
  const { name, image, projectType, programmingLanguage } = projectProp;

  return (
    <div onClick={() => dispatch(setSelectedProject(name))} role="button" className="">
      <div className="item-image-box">
        <img src={image} alt={name} className="logo-programming-language" />
      </div>
      <div className="item-title-box">
        <h3>{name}</h3>
      </div>
      <div className="basicInfoContainer">
        <h4>{projectType}</h4>
        <h4>{programmingLanguage}</h4>
      </div>
    </div>
  );
};

export default ProjectCard;
