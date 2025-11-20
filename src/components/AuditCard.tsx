import { type AuditCardData } from "../types/projectTypes";
import { useDispatch } from "react-redux";
import { setSelectedProject } from "../redux/selectedProjectSlice";

export interface AuditCardProps {
  auditProp: AuditCardData;
}

const AuditCard: React.FC<AuditCardProps> = ({ auditProp }) => {
  const dispatch = useDispatch();
  const { name, image, projectClass, programmingLanguage, developmentFramework, findingsCount } = auditProp;

  return (
    <div
      onClick={() => dispatch(setSelectedProject(name))}
      role="button"
      className="flex flex-col justify-between items-center border border-white md:border-2 lg:border-[3px] rounded-[60px] w-full md:w-[42%] lg:w-[18%] aspect-square m-2.5 bg-white/60 text-black cursor-pointer p-[0.3%] hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl"
    >
      <div className="aspect-square flex items-center justify-center w-4/5 h-[65%] mx-auto flex-1 p-[2%] relative overflow-hidden">
        <img src={image} alt={name} className="max-w-full max-h-full object-contain w-full h-full" />
      </div>
      <div className="flex justify-center text-center items-center w-full z-[2] h-[20%] mb-6">
        <h3 className="text-black">{name}</h3>
      </div>
      <div className="h-[13%] flex flex-col justify-center items-center w-full">
        <h4 className="text-black">{projectClass}</h4>
        <div className="flex flex-row gap-2.5 justify-center items-center flex-wrap mb-4">
          {programmingLanguage.map((lang, index) => (
            <h4 key={index} className="text-black">
              {lang}
            </h4>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <h4 className="text-black">{developmentFramework}</h4>
        </div>
        {findingsCount && (
          <div className="flex justify-center items-center">
            <h4 className="text-black">
              Findings: Low {findingsCount[0]} | Medium {findingsCount[1]} | High {findingsCount[2]}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuditCard;
