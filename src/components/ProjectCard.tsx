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
    <div
      onClick={() => dispatch(setSelectedProject(name))}
      role="button"
      className="group relative flex flex-col justify-between items-center border border-white/30 rounded-3xl w-[70%] md:w-[42%] lg:w-[18%] aspect-square m-2.5 bg-white/10 backdrop-blur-sm text-white cursor-pointer p-4 md:p-6 hover:scale-[1.02] hover:bg-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl hover:border-white/60"
    >
      <div className="w-full h-[60%] flex items-center justify-center mb-4 overflow-hidden rounded-2xl bg-white/30 p-4">
        <img src={image} alt={name} className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="flex-1 flex flex-col justify-between items-center w-full">
        <h3 className="text-white text-center mb-3 font-normal text-lg md:text-xl lg:text-2xl">{name}</h3>
        <div className="flex flex-col gap-2 items-center w-full">
          <div className="flex flex-row gap-2 justify-center items-center flex-wrap">
            {(Array.isArray(projectType) ? projectType : [projectType]).map((type, index) => (
              <span key={index} className="text-xs md:text-sm text-white/70 uppercase tracking-wider">
                {type}
              </span>
            ))}
          </div>
          <div className="flex flex-row gap-2 justify-center items-center flex-wrap">
            {programmingLanguage.map((lang, index) => (
              <span key={index} className="px-3 py-1 bg-white/10 border border-white/30 rounded-full text-xs md:text-sm text-white backdrop-blur-sm">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
