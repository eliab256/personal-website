import type { AuditCardData } from "../types/projectTypes";
import DVD1 from "../assets/img/DamnVulnerableDefiImgs/DVD1.png";
//import DVD2 from "../assets/img/DamnVulnerableDefiImgs/DVD2.png";
import DVD3 from "../assets/img/DamnVulnerableDefiImgs/DVD3.png";
import DVD4 from "../assets/img/DamnVulnerableDefiImgs/DVD4.png";
//import DVD5 from "../assets/img/DamnVulnerableDefiImgs/DVD5.png";
//import DVD6 from "../assets/img/DamnVulnerableDefiImgs/DVD6.png";
//import DVD7 from "../assets/img/DamnVulnerableDefiImgs/DVD7.png";
//import DVD8 from "../assets/img/DamnVulnerableDefiImgs/DVD8.png";
//import DVD9 from "../assets/img/DamnVulnerableDefiImgs/DVD9.png";

import RaiseBoxFaucetImg from "../assets/img/CodeHawksImgs/RaiseBoxFaucet.png";
import BriVaultImg from "../assets/img/CodeHawksImgs/BriVault.png";
import ThunderLoanImg from "../assets/img/CodeHawksImgs/ThunderLoan.png";

// Import PDF damn vul defi files
import UnstoppablePDF from "../assets/PDF/DamnVulnerableDefi/UnstoppableReport.pdf";
import TrusterPDF from "../assets/PDF/DamnVulnerableDefi/TrusterReport.pdf";
import SideEntrancePDF from "../assets/PDF/DamnVulnerableDefi/SideEntranceReport.pdf";
// Import CodeHawks PDF files
import RaiseBoxFaucetAuditPDF from "../assets/PDF/CodeHawks/RaiseBoxFaucetAudit.pdf";
import BriVaultAuditPDF from "../assets/PDF/CodeHawks/BriVaultAudit.pdf";
import ThunderLoanAuditPDF from "../assets/PDF/CodeHawks/ThunderLoanAudit.pdf";

const auditCardData: AuditCardData[] = [
  //first flight Cyfrin CodeHawks
  {
    name: "RaiseBox Faucet",
    image: RaiseBoxFaucetImg,
    platform: "Cyfrin CodeHawks",
    description:
      "RaiseBox Faucet is a token drip faucet that drips 1000 test tokens to users every 3 days. It also drips 0.005 sepolia eth to first time users. The faucet tokens will be useful for testing the testnet of a future protocol that would only allow interactions using this tokens.",
    projectClass: "DeFi",
    programmingLanguage: ["solidity"],
    technologyStack: "foundry",
    findingsCount: [3, 1, 0],
    gitHubLink: "https://github.com/eliab256/codeHawks-2025-10-raisebox-faucet.git",
    presentationDownloadLink: RaiseBoxFaucetAuditPDF,
    platformLink: "https://codehawks.cyfrin.io/c/2025-10-raisebox-faucet",
  },
  {
    name: "BriVault",
    image: BriVaultImg,
    platform: "Cyfrin CodeHawks",
    description:
      "This smart contract implements a tournament betting vault using the ERC4626 tokenized vault standard. It allows users to deposit an ERC20 asset to bet on a team, and at the end of the tournament, winners share the pool based on the value of their deposits.",
    projectClass: "DeFi",
    programmingLanguage: ["solidity"],
    technologyStack: ["foundry"],
    findingsCount: [2, 0, 0],
    gitHubLink: "https://github.com/eliab256/code-hawks-2025-11-brivault.git",
    presentationDownloadLink: BriVaultAuditPDF,
    platformLink: "https://codehawks.cyfrin.io/c/2025-11-brivault",
  },
  {
    name: "ThunderLoan",
    image: ThunderLoanImg,
    platform: "Cyfrin CodeHawks",
    description:
      "This protocol is a lending protocol inspired by Aave and allows users to take flash loans paying a small fee. On the other side,liquidity providers earn interest on their deposits.",
    projectClass: "DeFi",
    programmingLanguage: ["solidity"],
    technologyStack: ["foundry"],
    findingsCount: [3, 1, 0],
    gitHubLink: "https://github.com/eliab256/codeHawks-2026-02-ai-thunder-loan.git",
    presentationDownloadLink: ThunderLoanAuditPDF,
    platformLink: "https://codehawks.cyfrin.io/c/thunder-loan-cm2g8aww80006fc86k1hbhcph",
  },

  //Damn Vulnerable DeFi
  {
    name: "Unstoppable",
    image: DVD1,
    platform: "damn vulnerable defi",
    description:
      "There’s a tokenized vault with a million DVT tokens deposited. It’s offering flash loans for free, until the grace period ends. To catch any bugs before going 100% permissionless, the developers decided to run a live beta in testnet. There’s a monitoring contract to check liveness of the flashloan feature. Starting with 10 DVT tokens in balance, show that it’s possible to halt the vault. It must stop offering flash loans.",
    projectClass: "DeFi",
    programmingLanguage: ["solidity"],
    technologyStack: ["foundry"],
    gitHubLink: "https://github.com/eliab256/damn-vulnerable-defi-project.git",
    presentationDownloadLink: UnstoppablePDF,
  },
  {
    name: "Truster",
    image: DVD3,
    platform: "damn vulnerable defi",
    description:
      "More and more lending pools are offering flashloans. In this case, a new pool has launched that is offering flashloans of DVT tokens for free. The pool holds 1 million DVT tokens. You have nothing. To pass this challenge, rescue all funds in the pool executing a single transaction. Deposit the funds into the designated recovery account.",
    projectClass: "DeFi",
    programmingLanguage: ["solidity"],
    technologyStack: ["foundry"],
    gitHubLink: "https://github.com/eliab256/damn-vulnerable-defi-project.git",
    presentationDownloadLink: TrusterPDF,
  },
  {
    name: "Side-Entrance",
    image: DVD4,
    platform: "damn vulnerable defi",
    description:
      "A surprisingly simple pool allows anyone to deposit ETH, and withdraw it at any point in time. It has 1000 ETH in balance already, and is offering free flashloans using the deposited ETH to promote their system. You start with 1 ETH in balance. Pass the challenge by rescuing all ETH from the pool and depositing it in the designated recovery account.",
    projectClass: "DeFi",
    programmingLanguage: ["solidity"],
    technologyStack: ["foundry"],
    gitHubLink: "https://github.com/eliab256/damn-vulnerable-defi-project.git",
    presentationDownloadLink: SideEntrancePDF,
  },
];

export default auditCardData;
