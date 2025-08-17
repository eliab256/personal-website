export type ProjectType = "frontEnd" | "blockchain" | "fullstack";
export const projectTypes: ProjectType[] = ["frontEnd", "blockchain", "fullstack"];

export type SchoolType = "start2impact" | "cyfrin Updraft" | "selfmade";
export const schools: SchoolType[] = ["start2impact", "cyfrin Updraft", "selfmade"];

export type ProgrammingLanguagesType = "solidity" | "assembly" | "typescript" | "HTML and CSS" | "javascript" | "react";
export const programmingLanguages: ProgrammingLanguagesType[] = ["solidity", "assembly", "typescript", "HTML and CSS", "javascript", "react"];

export interface ProjectCardData {
  name: string;
  image: string;
  school: SchoolType;
  description: string;
  projectType: ProjectType;
  programmingLanguage: ProgrammingLanguagesType | ProgrammingLanguagesType[];
  gitHubLink: string;
  etherscanLink?: string | string[];
  websiteLink?: string;
  presentationDownloadLink: string;
}
