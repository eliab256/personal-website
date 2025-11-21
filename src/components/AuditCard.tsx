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
      className="group relative flex flex-col justify-between items-center border border-white/30 rounded-3xl w-full md:w-[42%] lg:w-[18%] aspect-square m-2.5 bg-white/10 backdrop-blur-sm text-white cursor-pointer p-6 hover:scale-[1.02] hover:bg-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl hover:border-white/60"
    >
      <div className="w-full h-[55%] flex items-center justify-center mb-3 overflow-hidden rounded-2xl bg-white/5 p-4">
        <img src={image} alt={name} className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="flex-1 flex flex-col justify-between items-center w-full">
        <h3 className="text-white text-center mb-2 font-normal text-lg md:text-xl lg:text-2xl">{name}</h3>
        <div className="flex flex-col gap-2 items-center w-full">
          <span className="text-xs md:text-sm text-white/70 uppercase tracking-wider">{projectClass}</span>
          <div className="flex flex-row gap-2 justify-center items-center flex-wrap">
            {programmingLanguage.map((lang, index) => (
              <span key={index} className="px-2 py-1 bg-white/10 border border-white/30 rounded-full text-xs text-white backdrop-blur-sm">
                {lang}
              </span>
            ))}
            <span className="px-2 py-1 bg-white/10 border border-white/30 rounded-full text-xs text-white/60 backdrop-blur-sm">{developmentFramework}</span>
          </div>
          {findingsCount && (
            <div className="flex gap-2 mt-2">
              <span className="px-2 py-0.5 bg-green-500/20 border border-green-500/40 rounded text-xs text-green-300">L:{findingsCount[0]}</span>
              <span className="px-2 py-0.5 bg-yellow-500/20 border border-yellow-500/40 rounded text-xs text-yellow-300">M:{findingsCount[1]}</span>
              <span className="px-2 py-0.5 bg-red-500/20 border border-red-500/40 rounded text-xs text-red-300">H:{findingsCount[2]}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuditCard;
