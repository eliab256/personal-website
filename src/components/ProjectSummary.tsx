import type { ProjectCardData } from "../types/projectTypes";
import "../assets/css/projectSummary.css";

export interface ProjectSummaryProps {
  selectedProjectProp: ProjectCardData;
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({ selectedProjectProp }) => {
  const { name, image, school, description, projectType, programmingLanguage, gitHubLink, etherscanLink, websiteLink, presentationDownloadLink } = selectedProjectProp;
  return (
    <>
      <div className="ProjectSummaryContainer"></div>
    </>
  );
};

export default ProjectSummary;
