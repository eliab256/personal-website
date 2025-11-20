import personalPicture from "../assets/img/personalPicture.jpg";

const Home: React.FC = () => {
  return (
    <>
      <div className="title">
        <h1>Who I am</h1>
      </div>
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 w-full px-4 lg:px-0">
        {/* Description */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <p>
            Hi, I’m Elia, a smart contract developer specializing in blockchain security. I began my journey with Start2Impact, choosing a hands-on approach
            that allowed me to build real projects from the very first months: basic smart contracts, a complex DAO, and an NFT management platform. During
            development I learned how to use tools like Hardhat, write comprehensive tests, create deployment scripts, and follow best practices such as
            Checks-Effects-Interactions and OpenZeppelin standards. After these projects I shifted my focus toward security, studying exploits like flash-loan
            attacks, DoS, gas griefing, and reentrancy through Johnny Time’s Smart Contract Hacking Course. I’m currently focusing on competitive audits on
            Code4rena and Sherlock, with the goal of refining my analytical skills and helping build more secure protocols. My next professional step is to join
            an auditing team, collaborate with other researchers, and continue growing in the field of web3 security.
          </p>
        </div>

        {/* Personal Picture */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={personalPicture}
            alt="personalPicture"
            className="rounded-[10%] border-4 md:border-5 lg:border-[5px] border-white shadow-2xl max-w-[60%] max-h-[40vh] md:max-w-[50%] md:max-h-[50vh] lg:max-w-[70%] lg:max-h-[60vh] object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
