import { type ProjectCardData } from "../types/projectTypes";
import { useDispatch } from "react-redux";
import { setSelectedProject } from "../redux/selectedProjectSlice";
import "../assets/css/projectCard.css";

export interface ProjectCardProps {
  projectProp: ProjectCardData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectProp }) => {
  const dispatch = useDispatch();
  const { name, image, projectType, programmingLanguage } = projectProp;

  return (
    <div onClick={() => dispatch(setSelectedProject(name))} role="button" className="worksGridItem">
      <div className="itemImageBox">
        <img src={image} alt={name} />
      </div>
      <div className="itemTitleBox">
        <h3>{name}</h3>
      </div>
      <div className="basicInfoContainer">
        <h4>{projectType}</h4>
        <div className="programmingLanguageContainer">
          {programmingLanguage.map((lang, index) => (
            <h4 key={index}>{lang}</h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
