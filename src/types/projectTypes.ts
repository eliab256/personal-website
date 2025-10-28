export type ProjectType = "frontEnd" | "blockchain" | "fullstack";
export const projectTypes: ProjectType[] = ["frontEnd", "blockchain", "fullstack"];

export type SchoolType = "start2impact" | "cyfrin Updraft" | "selfmade" | "damn vulnerable defi";
export const schools: SchoolType[] = ["start2impact", "cyfrin Updraft", "selfmade", "damn vulnerable defi"];

export type ProgrammingLanguagesType = "solidity" | "assembly" | "typescript" | "HTML and CSS" | "javascript" | "react" | "cairo";
export const programmingLanguages: ProgrammingLanguagesType[] = ["solidity", "assembly", "typescript", "HTML and CSS", "javascript", "react", "cairo"];

export interface ProjectCardData {
  name: string;
  image: string;
  school: SchoolType;
  description: string;
  projectType: ProjectType;
  programmingLanguage: ProgrammingLanguagesType[];
  gitHubLink: string;
  etherscanLink?: string | string[];
  websiteLink?: string;
  presentationDownloadLink: string;
}
