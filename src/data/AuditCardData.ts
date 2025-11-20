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

const auditCardData: AuditCardData[] = [
    //Damn Vulnerable DeFi
    {
        name: "Unstoppable",
        image: DVD1,
        platform: "damn vulnerable defi",
        description:
            "There’s a tokenized vault with a million DVT tokens deposited. It’s offering flash loans for free, until the grace period ends. To catch any bugs before going 100% permissionless, the developers decided to run a live beta in testnet. There’s a monitoring contract to check liveness of the flashloan feature. Starting with 10 DVT tokens in balance, show that it’s possible to halt the vault. It must stop offering flash loans.",
        projectClass: "DeFi",
        programmingLanguage: ["solidity"],
        developmentFramework: "foundry",
        gitHubLink: "https://github.com/eliab256/damn-vulnerable-defi-project.git",
        presentationDownloadLink:
            "https://www.dropbox.com/scl/fi/2py0mq1l3nqncqthslzg5/Unstoppable-Reports.zip?rlkey=mnj0hoyx45s314de9d3s8y7gw&st=hcdt3xhm&dl=1",
    },
    {
        name: "Truster",
        image: DVD3,
        platform: "damn vulnerable defi",
        description:
            "More and more lending pools are offering flashloans. In this case, a new pool has launched that is offering flashloans of DVT tokens for free. The pool holds 1 million DVT tokens. You have nothing. To pass this challenge, rescue all funds in the pool executing a single transaction. Deposit the funds into the designated recovery account.",
        projectClass: "DeFi",
        programmingLanguage: ["solidity"],
        developmentFramework: "foundry",
        gitHubLink: "https://github.com/eliab256/damn-vulnerable-defi-project.git",
        presentationDownloadLink:
            "https://www.dropbox.com/scl/fi/nuwa6tl9a8a8uapq8a6sjay/Truster-Reports.tar.gz?rlkey=6yxhvg7d5w81h85mgtrxr9him&st=wek0yjxa&dl=1",
    },
    {
        name: "Side-Entrance",
        image: DVD4,
        platform: "damn vulnerable defi",
        description:
            "A surprisingly simple pool allows anyone to deposit ETH, and withdraw it at any point in time. It has 1000 ETH in balance already, and is offering free flashloans using the deposited ETH to promote their system. You start with 1 ETH in balance. Pass the challenge by rescuing all ETH from the pool and depositing it in the designated recovery account.",
        projectClass: "DeFi",
        programmingLanguage: ["solidity"],
        developmentFramework: "foundry",
        gitHubLink: "https://github.com/eliab256/damn-vulnerable-defi-project.git",
        presentationDownloadLink:
            "https://www.dropbox.com/scl/fi/23301zmix8ofz70arjj97/Side-Entrance-Reports.zip?rlkey=9h611e7pf7cctbd9rb02n2nas&st=70p3c8dh&dl=1",
    },

    //first flight cyfrin codehawks
];

export default auditCardData;
