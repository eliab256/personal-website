import { type AuditCardData } from "../types/projectTypes";
import { useDispatch } from "react-redux";
import { setSelectedProject } from "../redux/selectedProjectSlice";
import "../assets/css/projectCard.css";

export interface AuditCardProps {
  auditProp: AuditCardData;
}

const AuditCard: React.FC<AuditCardProps> = ({ auditProp }) => {
  const dispatch = useDispatch();
  const { name, image, projectClass, programmingLanguage, developmentFramework, findingsCount } = auditProp;

  return (
    <div onClick={() => dispatch(setSelectedProject(name))} role="button" className="worksGridItem">
      <div className="itemImageBox">
        <img src={image} alt={name} />
      </div>
      <div className="itemTitleBox">
        <h3>{name}</h3>
      </div>
      <div className="basicInfoContainer">
        <h4>{projectClass}</h4>
        <div className="programmingLanguageContainer">
          {programmingLanguage.map((lang, index) => (
            <h4 key={index}>{lang}</h4>
          ))}
        </div>
        <div className="developmentFrameworkContainer">
          <h4>{developmentFramework}</h4>
        </div>
        {findingsCount && (
          <div className="findingsCountContainer">
            <h4>
              Findings: Low {findingsCount[0]} | Medium {findingsCount[1]} | High {findingsCount[2]}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuditCard;
