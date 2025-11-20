import type { ProjectCardData } from "../types/projectTypes";
import blockchainIntroduction from "../assets/img/logosPorgrammingLanguage/blockchainIntroduction.png";
import HTMLandCSS from "../assets/img/logosPorgrammingLanguage/HTMLandCSSLogo.png";
import EthereumBasic from "../assets/img/logosPorgrammingLanguage/EthereumColor.png";
import JavascriptBasic from "../assets/img/logosPorgrammingLanguage/Javascript.png";
import React from "../assets/img/logosPorgrammingLanguage/ReactLogo.png";
import ReactAndTypescript from "../assets/img/logosPorgrammingLanguage/Typescript+React.png";
import ReactAndTypescriptAndWeb3 from "../assets/img/logosPorgrammingLanguage/Typescript+React+Web3.png";
import SolidityBasic from "../assets/img/logosPorgrammingLanguage/Solidity.png";
import HardhatProject from "../assets/img/logosPorgrammingLanguage/Hardhat.png";
import FoundryProject from "../assets/img/logosPorgrammingLanguage/Foundry.png";
// import DVD1 from "../assets/img/DamnVulnerableDefiImgs/DVD1.png";
// //import DVD2 from "../assets/img/DamnVulnerableDefiImgs/DVD2.png";
// import DVD3 from "../assets/img/DamnVulnerableDefiImgs/DVD3.png";
// import DVD4 from "../assets/img/DamnVulnerableDefiImgs/DVD4.png";
// //import DVD5 from "../assets/img/DamnVulnerableDefiImgs/DVD5.png";
// //import DVD6 from "../assets/img/DamnVulnerableDefiImgs/DVD6.png";
// //import DVD7 from "../assets/img/DamnVulnerableDefiImgs/DVD7.png";
// //import DVD8 from "../assets/img/DamnVulnerableDefiImgs/DVD8.png";
// //import DVD9 from "../assets/img/DamnVulnerableDefiImgs/DVD9.png";

const projectCardData: ProjectCardData[] = [
    //START2Impact
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
        name: "Ethereum Basic",
        image: EthereumBasic,
        school: "start2impact",
        description:
            "The startup wants to explore Ethereum protocols to prepare a new educational course on Web3. Your role is to research and analyze leading Ethereum dApps, focusing on their functionality, benefits, and limitations. The study will cover DeFi protocols like Aave (lending and flash loans), Uniswap (token swaps and liquidity pools), and dYdX (derivatives trading), as well as NFT-based platforms such as CryptoKitties. The final objective is to provide the company with an overview of the opportunities and risks of using NFTs and to recommend the adoption of a specific Ethereum protocol for future training and development.",
        projectType: "blockchain",
        programmingLanguage: [],
        gitHubLink: "none",
        presentationDownloadLink:
            "https://www.dropbox.com/scl/fi/2uy3t9i09sblmgm8ngvdy/Elia-Bordoni-Ethereum-Basic-Project.pdf?rlkey=mrof4ionlsa4z5wqcqcmmpqey&st=kirkfgke&dl=1",
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
    {
        name: "Counter",
        image: JavascriptBasic,
        school: "start2impact",
        description:
            "Build a simple counter web app in pure JavaScript where the initial value is 0 and can be increased or decreased with +/− buttons, creating the entire interface dynamically through DOM manipulation without using frameworks.",
        projectType: "frontEnd",
        programmingLanguage: ["javascript"],
        gitHubLink: "https://github.com/eliab256/Progetto-Javascript-Basic-di-Elia-Bordoni.git",
        websiteLink: "https://eliab256.github.io/Progetto-Javascript-Basic-di-Elia-Bordoni/",
        presentationDownloadLink:
            "https://www.dropbox.com/scl/fi/qu52g3heyhtv5jl4li14t/Elia-Bordoni-s-Javascript-Project.pdf?rlkey=rtz22i9pngl9xflsjiqu00ykq&st=f5wq8kmj&dl=1",
    },
    {
        name: "Meditation Website",
        image: React,
        school: "start2impact",
        description:
            "A web app for meditation must be developed. The application should include a user-programmable timer that can be paused and restarted. It should feature references to meditation, such as images or text, and provide a simple and intuitive user interface and user experience. The structure of the app should be well organized and easy to understand, while the overall design must be fully responsive.",
        projectType: "frontEnd",
        programmingLanguage: ["react"],
        gitHubLink: "https://github.com/eliab256/Progetto-React-Di-Elia-Bordoni.git",
        websiteLink: "https://s2imeditation-website.netlify.app/",
        presentationDownloadLink:
            "https://www.dropbox.com/scl/fi/0x1onf4j9wken4dy65wy1/Elia-Bordoni-React-Project.pdf?rlkey=zqo6k59m495oxvn3y3i7vm0dk&st=xp0hsxy6&dl=1",
    },
    {
        name: "EcoQuiz App",
        image: ReactAndTypescript,
        school: "start2impact",
        description: "Build a eco quiz app using React and typescript",
        projectType: "frontEnd",
        programmingLanguage: ["react", "typescript"],
        gitHubLink: "https://github.com/eliab256/progetto-Typescript-e-React-di-Elia-Bordoni.git",
        websiteLink: "https://ecoquizapp.netlify.app/",
        presentationDownloadLink:
            "https://www.dropbox.com/scl/fi/3j3ncp18y2yeuw49zae4d/Elia-Bordoni-s-React-Typescript-Project.pdf?rlkey=kdg2gbc2o34n3uonhek4nu3b8&st=5jb17egs&dl=1",
    },
    {
        name: "Yoyo Exercise Web3 MarketPlace",
        image: ReactAndTypescriptAndWeb3,
        school: "start2impact",
        description:
            "Gianni, a yoga studio owner, wants to innovate by launching a Web3 e-commerce dApp to sell yoga exercise packages, accepting ETH as the only payment method. The application, built with React, TypeScript, and ethers.js, will let users connect their wallets (e.g., MetaMask), view their balance, browse a product gallery, and securely complete purchases on the Ethereum testnet (Sepolia).",
        projectType: "fullstack",
        programmingLanguage: ["react", "typescript", "solidity"],
        gitHubLink: "https://github.com/eliab256/Yoyo-Exercise-Ecommerce-React-Wagmi-TS.git",
        websiteLink: "https://yoyo-exercise-marketplace.vercel.app",
        presentationDownloadLink:
            "https://www.dropbox.com/scl/fi/1eg6njobepwwvqe6g7t46/Elia-Bordoni-s-React-Typescript-web3-project-presentationi.pdf.pdf?rlkey=qsbe14vpioi9xm47q6qnrq9cd&st=5p70w6eb&dl=1",
    },
    {
        name: "Bonny, loans on-chain",
        image: SolidityBasic,
        school: "start2impact",
        description:
            "Bonny, an Italian startup, wants a blockchain-based peer-to-peer lending platform to improve access to credit. The project requires building a Solidity smart contract (LoanManager.sol) that manages loans by tracking borrowers, lenders, amounts, interest rates, repayment periods, and loan status. It must support creating loans, repaying them (with penalties if late), canceling loans, and fetching loan details. Repayments must always be in one exact installment.",
        projectType: "blockchain",
        programmingLanguage: ["solidity"],
        gitHubLink: "https://github.com/eliab256/Progetto-Smart-Contract-Con-Solidity.git",
        etherscanLink: [
            "https://sepolia.etherscan.io/address/0xC625Dc93B7464cc414834Ccc49ee19826A2B413F",
            "https://sepolia.etherscan.io/address/0x5fd6eb55d12e759a21c09ef703fe0cba1dc9d88d",
        ],
        presentationDownloadLink:
            "https://www.dropbox.com/scl/fi/17gtz1t9f2c3ptkgnx0gr/Elia-Bordoni-s-Smart-Contract-with-Solidity-Project.pdf?rlkey=6m16ped65xw56ugoaq6vit6v5&st=j5hn843c&dl=1",
    },
    {
        name: "Moove Governance DAO",
        image: HardhatProject,
        school: "start2impact",
        description:
            "Moove, a leading company in shared micro-mobility across several European cities, wants to give its users a stronger voice and actively involve them in company decisions. To achieve this, we are creating a DAO, a Decentralized Autonomous Organization, which allows users to participate directly in the governance of the platform. The governance model can be set up in two ways: with direct democracy, where each member votes on every decision, or with liquid democracy, which allows members to vote directly or delegate their vote to someone else, providing flexibility and representative decision-making. Through the governance smart contract, users can become members of the DAO by purchasing shares in exchange for ERC-20 tokens at a fixed price. Administrators will have the ability to close the token sale, finalizing the initial phase. Members will be able to propose decisions to be voted on, and each vote will be weighted according to the number of shares held. Decisions that achieve a majority of weighted votes will be approved, and all proposals and voting activity will be recorded on the contract to ensure transparency. Members will be able to vote for, against, or optionally abstain from a decision. Certain decisions may also involve transferring ERC-20 tokens from the DAO to an external Ethereum address. Finally, the contract will be thoroughly tested using Hardhat to ensure security, reliability, and proper functionality.",
        projectType: "blockchain",
        programmingLanguage: ["solidity", "typescript"],
        gitHubLink: "https://github.com/eliab256/Progetto-Solidity-Advanced-Di-Elia-Bordoni.git",
        etherscanLink: ["https://sepolia.etherscan.io/address/0xDcA1ecf6343117FDeA387c847746Ed299d6d32A1#internaltx"],
        presentationDownloadLink:
            "https://www.dropbox.com/scl/fi/9sihmtlvinmde0t6gvbnv/Elia-Bordoni-Solidity-Advanced-Project.pdf?rlkey=uajbp3f0uyv5q46hy2bsgn2yq&st=gnu205zf&dl=1",
    },
    {
        name: "Yoyo Nft Coaching Platform",
        image: FoundryProject,
        school: "start2impact",
        description:
            "YoYo aims to make yoga accessible to everyone, including those with mobility challenges, by creating a personalized coaching platform on Ethereum using NFTs. The smart contract implements an ERC721 NFT collection and leverages Chainlink VRF to generate unique, verifiable random attributes for each NFT. Users can mint NFTs with distinct traits, view metadata and collection details, and trade them using standard ERC721 functions. The contract also defines creation costs and limits for the collection. Each NFT unlocks advanced yoga courses and coach feedback, while the random attributes enable a gamified loyalty system that rewards lucky users with special sessions, discounts, or other perks. The contract is carefully tested using Foundry and deployed on the Sepolia test network, combining blockchain technology, gamification, and personalized yoga training to engage users in a unique way.",
        projectType: "blockchain",
        programmingLanguage: ["solidity"],
        gitHubLink: "https://github.com/eliab256/Yoyo-NFT-coaching-platform.git",
        etherscanLink: ["https://sepolia.etherscan.io/address/0x54B3baABA19A85E9231D9545570FEE3C7Fd97f71#code"],
        presentationDownloadLink:
            "https://www.dropbox.com/scl/fi/mt54w5gw63nnjwp7eu4kk/Elia-Bordoni-s-Ethereum-Advanced-Project.pdf?rlkey=w3j9u6q7j5ne9m70sngwfazo3&st=b0z3rof0&dl=1",
    },
    //DAMN VULNERABLE DEFI
    // {
    //     name: "Unstoppable",
    //     image: DVD1,
    //     school: "damn vulnerable defi",
    //     description:
    //         "There’s a tokenized vault with a million DVT tokens deposited. It’s offering flash loans for free, until the grace period ends. To catch any bugs before going 100% permissionless, the developers decided to run a live beta in testnet. There’s a monitoring contract to check liveness of the flashloan feature. Starting with 10 DVT tokens in balance, show that it’s possible to halt the vault. It must stop offering flash loans.",
    //     projectType: "blockchain",
    //     programmingLanguage: ["solidity"],
    //     gitHubLink: "https://github.com/eliab256/damn-vulnerable-defi-project.git",
    //     presentationDownloadLink:
    //         "https://www.dropbox.com/scl/fi/2py0mq1l3nqncqthslzg5/Unstoppable-Reports.zip?rlkey=mnj0hoyx45s314de9d3s8y7gw&st=hcdt3xhm&dl=1",
    // },
    // {
    //     name: "Truster",
    //     image: DVD3,
    //     school: "damn vulnerable defi",
    //     description:
    //         "More and more lending pools are offering flashloans. In this case, a new pool has launched that is offering flashloans of DVT tokens for free. The pool holds 1 million DVT tokens. You have nothing. To pass this challenge, rescue all funds in the pool executing a single transaction. Deposit the funds into the designated recovery account.",
    //     projectType: "blockchain",
    //     programmingLanguage: ["solidity"],
    //     gitHubLink: "https://github.com/eliab256/damn-vulnerable-defi-project.git",
    //     presentationDownloadLink:
    //         "https://www.dropbox.com/scl/fi/nuwa6tl9a8a8uapq8a6sjay/Truster-Reports.tar.gz?rlkey=6yxhvg7d5w81h85mgtrxr9him&st=wek0yjxa&dl=1",
    // },
    // {
    //     name: "Side-Entrance",
    //     image: DVD4,
    //     school: "damn vulnerable defi",
    //     description:
    //         "A surprisingly simple pool allows anyone to deposit ETH, and withdraw it at any point in time. It has 1000 ETH in balance already, and is offering free flashloans using the deposited ETH to promote their system. You start with 1 ETH in balance. Pass the challenge by rescuing all ETH from the pool and depositing it in the designated recovery account.",
    //     projectType: "blockchain",
    //     programmingLanguage: ["solidity"],
    //     gitHubLink: "https://github.com/eliab256/damn-vulnerable-defi-project.git",
    //     presentationDownloadLink:
    //         "https://www.dropbox.com/scl/fi/23301zmix8ofz70arjj97/Side-Entrance-Reports.zip?rlkey=9h611e7pf7cctbd9rb02n2nas&st=70p3c8dh&dl=1",
    // },
];

export default projectCardData;
