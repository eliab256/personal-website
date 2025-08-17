import type { ProjectCardData } from "../types/projectTypes";
import blockchainIntroduction from "../assets/img/logosPorgrammingLanguage/blockchainIntroduction.png";
import HTMLandCSS from "../assets/img/logosPorgrammingLanguage/HTMLandCSSLogo.png";

const projectCardData: ProjectCardData[] = [
  {
    name: "Blockchain Introduction",
    image: blockchainIntroduction,
    school: "start2impact",
    description:
      "A small non-profit organization wants to build a blockchain-based fundraising portal. As a prototype, you are asked to develop a single smart contract that manages one fundraising campaign. The contract must track the total balance, the manager’s address, the fundraising goal, the number of donors, and whether the campaign is closed. It should allow people to donate Ether, update the donor count, let only the manager withdraw funds, enable closing the campaign, and verify whether the fundraising goal has been reached.",
    projectType: "blockchain",
    programmingLanguage: ["solidity"],
    gitHubLink: "https://github.com/eliab256/Blockchain-Intro-Project-Elia-Bordoni.git",
    presentationDownloadLink:
      "https://www.dropbox.com/scl/fi/dxhzs817d05urcckyw28k/Blockchain-Intro-project-Elia-Bordoni.pdf?rlkey=sv08vtjh29a6q0xntd5x7tipi&st=9fgfg26j&dl=1",
  },
  {
    name: "Build Your Website",
    image: HTMLandCSS,
    school: "start2impact",
    description:
      "The project must be created using only HTML and CSS. You are required to design at least two pages, one of which must be a CV page written strictly in HTML format. In order to demonstrate your ability to apply the concepts learned during the course, the website should also include a “Contact Me” page containing a form. If you wish, you may optionally use services such as EmailJS to send the content of the form to your email address. The project must also integrate a front-end framework such as Bootstrap or Materialize, include a favicon, and feature a sticky menu, at least in the mobile version of the site. Furthermore, at least one of the pages, whether it is among those requested or one of your own design, must implement its layout using FlexBox or a Grid System, or even a combination of both. Finally, the entire website must be fully responsive.",
    projectType: "frontEnd",
    programmingLanguage: ["HTML and CSS", "javascript"],
    gitHubLink: "https://github.com/eliab256/Progetto-HTML-e-CSS-di-Elia-Bordoni",
    websiteLink: "https://elia-bordoni-blockchain-dev.netlify.app/",
    presentationDownloadLink:
      "https://www.dropbox.com/scl/fi/m84wrp5zxltwok6lnnmi2/Elia-Bordoni-HTML-and-CSS-Project.pdf?rlkey=9y5hyq8fa1d3asrkwmp8h2k83&st=hhsc7ffh&dl=1",
  },
];

export default projectCardData;

// export interface ProjectCardData {
//   name: string;
//   image: string;
//   school: SchoolType;
//   description: string;
//   projectType: ProjectType;
//   programmingLanguage: ProgrammingLanguagesType | ProgrammingLanguagesType[];
//   gitHubLink: string;
//   etherscanLink?: string | string[];
//   websiteLink?: string;
//   presentationDownloadLink: string;
// }
