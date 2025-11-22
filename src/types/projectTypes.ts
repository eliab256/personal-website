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

export type PlatformType = "damn vulnerable defi" | "code4rena" | "sherlock" | "cantinao" | "immunefi" | "cyfrin CodeHawks";
export const platforms: PlatformType[] = ["damn vulnerable defi", "code4rena", "sherlock", "cantinao", "immunefi", "cyfrin CodeHawks"];

export type ProjectClass = "DeFi" | "NFT" | "DAO" | "Bridge" | "RWA";
export const projectClasses: ProjectClass[] = ["DeFi", "NFT", "DAO", "Bridge", "RWA"];

export type DevelopmentFrameworkType = "hardhat" | "foundry" | "brownie";
export const developmentFrameworks: DevelopmentFrameworkType[] = ["hardhat", "foundry", "brownie"];

export interface AuditCardData {
  name: string;
  image: string;
  platform: PlatformType;
  description: string;
  projectClass: ProjectClass;
  programmingLanguage: ProgrammingLanguagesType[];
  developmentFramework: DevelopmentFrameworkType;
  findingsCount?: [number, number, number]; //high , medium , low
  gitHubLink: string;
  presentationDownloadLink: string;
  platformLink?: string;
}
