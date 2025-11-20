import personalPicture from "../assets/img/personalPicture.jpg";
import "../assets/css/home.css";

const Home: React.FC = () => {
    return (
        <>
            <div className="title">
                <h1>Who I am</h1>
            </div>
            <div className="mainContainer">
                <div className="mainItems myDescription">
                    <p>
                        Hi, I’m Elia, a smart contract developer specializing in blockchain security. I began my journey with Start2Impact, choosing a hands-on
                        approach that allowed me to build real projects from the very first months: basic smart contracts, a complex DAO, and an NFT management
                        platform. During development I learned how to use tools like Hardhat, write comprehensive tests, create deployment scripts, and follow
                        best practices such as Checks-Effects-Interactions and OpenZeppelin standards. After these projects I shifted my focus toward security,
                        studying exploits like flash-loan attacks, DoS, gas griefing, and reentrancy through Johnny Time’s Smart Contract Hacking Course. I’m
                        currently focusing on competitive audits on Code4rena and Sherlock, with the goal of refining my analytical skills and helping build
                        more secure protocols. My next professional step is to join an auditing team, collaborate with other researchers, and continue growing
                        in the field of web3 security.
                    </p>
                </div>
                <div className=" personalPicture">
                    <img src={personalPicture} alt="personalPicture" />
                </div>
            </div>
        </>
    );
};

export default Home;
