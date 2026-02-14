export type ProjectType = "frontEnd" | "blockchain" | "fullstack";
export const projectTypes: ProjectType[] = ["frontEnd", "blockchain", "fullstack"];

export type SchoolType = "start2impact" | "cyfrin Updraft" | "selfmade" | "damn vulnerable defi";
export const schools: SchoolType[] = ["start2impact", "cyfrin Updraft", "selfmade", "damn vulnerable defi"];

export type ProgrammingLanguagesType = "solidity" | "assembly" | "typescript" | "HTML and CSS" | "javascript" | "cairo";
export const programmingLanguages: ProgrammingLanguagesType[] = ["solidity", "assembly", "typescript", "HTML and CSS", "javascript", "cairo"];

export type TechnologyStackType = "remix" | "hardhat" | "foundry" | "brownie" | "chainlink" | "nextjs" | "wagmi" | "react" | "tailwindcss";
export const technologicalStacks: TechnologyStackType[] = ["remix", "hardhat", "foundry", "brownie", "chainlink", "nextjs", "wagmi", "react", "tailwindcss"];

export interface ProjectCardData {
  name: string;
  image: string;
  school: SchoolType;
  description: string;
  projectType: ProjectType | ProjectType[];
  programmingLanguage: ProgrammingLanguagesType[];
  technologyStack: TechnologyStackType | TechnologyStackType[];
  gitHubLink: string;
  etherscanLink?: string | string[];
  websiteLink?: string;
  presentationDownloadLink: string;
}

export type PlatformType = "damn vulnerable defi" | "code4rena" | "sherlock" | "cantinao" | "immunefi" | "Cyfrin CodeHawks";
export const platforms: PlatformType[] = ["damn vulnerable defi", "code4rena", "sherlock", "cantinao", "immunefi", "Cyfrin CodeHawks"];

export type ProjectClass = "DeFi" | "NFT" | "DAO" | "Bridge" | "RWA";
export const projectClasses: ProjectClass[] = ["DeFi", "NFT", "DAO", "Bridge", "RWA"];

export interface AuditCardData {
  name: string;
  image: string;
  platform: PlatformType;
  description: string;
  projectClass: ProjectClass;
  programmingLanguage: ProgrammingLanguagesType[];
  technologyStack: TechnologyStackType | TechnologyStackType[];
  findingsCount?: [number, number, number]; //high , medium , low
  gitHubLink: string;
  presentationDownloadLink: string;
  platformLink?: string;
}
