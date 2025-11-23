const AboutMe: React.FC = () => {
  // Calculate age dynamically
  const calculateAge = () => {
    const birthDate = new Date(1996, 10, 30); // Month is 0-indexed, so 10 = November
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // If birthday hasn't occurred yet this year, subtract 1
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  const age = calculateAge();

  return (
    <div className="flex justify-center flex-row flex-wrap w-full px-4 md:px-6 lg:px-0">
      {/* Left Column: Who I Am + Professional Experiences */}
      <div className="flex flex-col items-center w-full mb-8 lg:w-1/2 lg:border-r-2 lg:border-white lg:border-dashed lg:pr-8 lg:mb-0 lg:pb-8">
        <div className="title">
          <h1>Who I am</h1>
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-2.5 px-2 md:px-4 lg:px-0">
          <p className="text-white">
            Hi, I'm Elia, and at {age} years old I decided to rewrite my path.
            <br />
            <br />
            For years I followed very different paths: agricultural studies, music, work as an electrician. All experiences that gave me discipline,
            independence, and a strong desire to improve myself. Meanwhile, my curiosity for the crypto world was growing, until I realized that what fascinated
            me wasn't just the markets… but the technology that makes them possible.
            <br />
            <br />
            So I started a practical path with Start2Impact, choosing to build real projects instead of studying for years without touching code. While
            learning, I pushed myself further with Cyfrin Updraft: there I discovered how much smart contracts fascinated me and the way they give life to
            decentralized systems.
            <br />
            <br />
            After my first projects — including a DAO that really challenged me — I understood what I truly wanted to do: make web3 a safer place. I studied
            security through Johnny Time's course, learning to analyze and prevent vulnerabilities such as reentrancy, flash-loan attacks, DoS, and gas
            griefing.
            <br />
            <br />
            Today I hunt for bugs and vulnerabilities through competitive audits on Code4rena and Sherlock. And while continuing to improve my skills, I look
            ahead: I would like to join an auditing team, collaborate with other researchers, and contribute to the development of increasingly secure
            protocols.
            <br />
          </p>
        </div>

        {/* Professional Experiences */}
        <div className="flex flex-col justify-center items-center w-full mt-8">
          <div className="title">
            <h3>Professional experiences</h3>
          </div>
          <div className="w-full mt-2.5">
            <ul className="list-none p-0">
              <li className="mb-6">
                <p className="text-center m-1.25 text-white">industrial automation wiring electrician</p>
                <p className="text-center m-1.25 text-white">Tecnoten S.r.l. Vellezzo Bellini (PV)</p>
                <p className="text-center m-1.25 text-white">june 2016 - present</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Educational Background */}
        <div className="flex flex-col justify-center items-center w-full mt-8">
          <div className="title">
            <h3>Educational Background</h3>
          </div>
          <div className="w-full mt-2.5">
            <ul className="list-none p-0">
              <li className="mb-6">
                <p className="text-center m-1.25 text-white">Blockchain development Master</p>
                <p className="text-center m-1.25 text-white">Start2impact University</p>
                <p className="text-center m-1.25 text-white">2024 - present</p>
              </li>
              <li className="mb-6">
                <p className="text-center m-1.25 text-white">Smart Contract Development and Security</p>
                <p className="text-center m-1.25 text-white">Cyfrin Updraft</p>
                <p className="text-center m-1.25 text-white">2024 - present</p>
              </li>
              <li className="mb-6">
                <p className="text-center m-1.25 text-white">Smart Contract Auditing</p>
                <p className="text-center m-1.25 text-white">Smart Contract Hacking Course by Johnny Time</p>
                <p className="text-center m-1.25 text-white">september 2025 - december 2025</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Personal Growth */}
        <div className="flex flex-col justify-center items-center w-full mt-8">
          <div className="title">
            <h3>Personal growth background</h3>
          </div>
          <div className="w-full mt-2.5">
            <ul className="list-none p-0">
              <li className="mb-6">
                <p className="text-center m-1.25 text-white">How to study properly and memory techniques</p>
                <p className="text-center m-1.25 text-white">Genius 21 days</p>
                <p className="text-center m-1.25 text-white">2017</p>
              </li>
              <li className="mb-6">
                <p className="text-center m-1.25 text-white">
                  Development of Softskills as public speaking, decision making, problem solving and time management
                </p>
                <p className="text-center m-1.25 text-white">Softskills Academy</p>
                <p className="text-center m-1.25 text-white">2017-2020</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Column: Skills */}
      <div className="flex flex-col items-center w-full lg:w-1/2 lg:pl-8">
        <div className="title">
          <h2>My skills</h2>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="text-white">
            Among the various training and personal development courses I did, I have also attended this management school, which utilizes an innovative tool
            designed to assess skills, attitudes, and potential.
          </p>
        </div>

        {/* Skills Chart */}
        <div className="flex flex-col justify-center items-center w-full lg:bg-transparent bg-logo-blue/15 rounded-[5%]">
          <h4 className="text-white text-center py-2.5">Soft Skills</h4>
          <div className="flex flex-col mt-5 w-4/5">
            {/* Self-motivation */}
            <div className="relative mb-5">
              <div className="mb-1.25 text-white">Self-motivation</div>
              <div className="w-full bg-black/20 h-5 z-[1] rounded-[100px] absolute border border-white/30"></div>
              <div className="bg-gradient-to-r from-logo-blue to-logo-dark h-5 rounded-[100px] flex justify-end items-center pr-7.5 overflow-hidden border border-white/30 w-[57%] animate-[fillWidth_2s_ease-out]">
                <span className="text-[15px] text-white">57%</span>
              </div>
            </div>

            {/* Organization */}
            <div className="relative mb-5">
              <div className="mb-1.25 text-white">Organization</div>
              <div className="w-full bg-black/20 h-5 z-[1] rounded-[100px] absolute border border-white/30"></div>
              <div className="bg-gradient-to-r from-logo-blue to-logo-dark h-5 rounded-[100px] flex justify-end items-center pr-7.5 overflow-hidden border border-white/30 w-[85%] animate-[fillWidth_2s_ease-out]">
                <span className="text-[15px] text-white">85%</span>
              </div>
            </div>

            {/* Self-discipline */}
            <div className="relative mb-5">
              <div className="mb-1.25 text-white">Self-discipline</div>
              <div className="w-full bg-black/20 h-5 z-[1] rounded-[100px] absolute border border-white/30"></div>
              <div className="bg-gradient-to-r from-logo-blue to-logo-dark h-5 rounded-[100px] flex justify-end items-center pr-7.5 overflow-hidden border border-white/30 w-[79%] animate-[fillWidth_2s_ease-out]">
                <span className="text-[15px] text-white">79%</span>
              </div>
            </div>

            {/* Pressure management */}
            <div className="relative mb-5">
              <div className="mb-1.25 text-white">Pressure management</div>
              <div className="w-full bg-black/20 h-5 z-[1] rounded-[100px] absolute border border-white/30"></div>
              <div className="bg-gradient-to-r from-logo-blue to-logo-dark h-5 rounded-[100px] flex justify-end items-center pr-7.5 overflow-hidden border border-white/30 w-[60%] animate-[fillWidth_2s_ease-out]">
                <span className="text-[15px] text-white">60%</span>
              </div>
            </div>

            {/* Proactivity */}
            <div className="relative mb-5">
              <div className="mb-1.25 text-white">Proactivity</div>
              <div className="w-full bg-black/20 h-5 z-[1] rounded-[100px] absolute border border-white/30"></div>
              <div className="bg-gradient-to-r from-logo-blue to-logo-dark h-5 rounded-[100px] flex justify-end items-center pr-7.5 overflow-hidden border border-white/30 w-[71%] animate-[fillWidth_2s_ease-out]">
                <span className="text-[15px] text-white">71%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full mt-4">
          <p className="text-white">
            Here you can see an in-depth description of my softskills. Every value above 30 can be considered immutable. Watch the full report{" "}
            <a href="i-Profile.html" rel="noopener" target="_blank" className="text-white hover:underline">
              here
            </a>
            .
          </p>
        </div>

        {/* Technical Stack */}
        <div className="flex flex-col justify-center items-center w-full mt-8">
          <h4 className="text-white text-center py-2.5">Technical Stack</h4>

          {/* Current Skills */}
          <div className="w-full mt-4 px-4">
            <h5 className="text-white text-center mb-4 text-sm uppercase tracking-wider opacity-80">Current Skills</h5>

            {/* Solidity */}
            <div className="mb-4">
              <h6 className="text-white font-semibold mb-1">Solidity – Advanced</h6>
              <p className="text-white text-sm opacity-80">
                Inheritance, Standard Tokens (ERC20, ERC721, ERC1155), Interfaces, Encode/Decode (abi.encode, abi.encodePacked, abi.decode), Proxy patterns,
                Factory patterns, Multisig patterns, <span className="font-medium">OpenZeppelin Libraries</span>, Checks-Effects-Interactions (C-E-I)
              </p>
            </div>

            {/* TypeScript/JavaScript */}
            <div className="mb-4">
              <h6 className="text-white font-semibold mb-1">TypeScript / JavaScript – Intermediate</h6>
              <p className="text-white text-sm opacity-80">Interfaces, Types, Async Functions (async/await, Promises), Ethers.js / Web3.js integration</p>
            </div>

            {/* EVM */}
            <div className="mb-4">
              <h6 className="text-white font-semibold mb-1">EVM – Advanced</h6>
              <p className="text-white text-sm opacity-80">
                Storage Slots, Atomicity, Function Selectors, Low-level Call Mechanisms, Gas optimization, Hashing & Signatures, Off-chain signing,{" "}
                <span className="font-medium">Reentrancy Protection</span>, <span className="font-medium">MEV awareness</span>
              </p>
            </div>

            {/* Foundry */}
            <div className="mb-4">
              <h6 className="text-white font-semibold mb-1">Foundry – Advanced</h6>
              <p className="text-white text-sm opacity-80">
                Unit Tests, Fuzz Testing, Cheatcodes + Anvil, Local Fork, Dynamic Local Fork, Deploy Scripts, Property-based testing, Coverage & Gas profiling
              </p>
            </div>

            {/* Hardhat */}
            <div className="mb-4">
              <h6 className="text-white font-semibold mb-1">Hardhat – Intermediate</h6>
              <p className="text-white text-sm opacity-80">Ethers.js Integration, Testing Suite, Contract Deployment, Forking mainnet for integration tests</p>
            </div>

            {/* DeFi Protocols */}
            <div className="mb-4">
              <h6 className="text-white font-semibold mb-1">DeFi Protocols – Intermediate</h6>
              <p className="text-white text-sm opacity-80">
                ERC4626 Vaults, AMM (Automated Market Makers), Concentrated Liquidity, Liquidity Pools, Pool Shares, DeFi Math, Uniswap V2/V3/V4, Aave,{" "}
                <span className="font-medium">Flash Loans</span>, <span className="font-medium">Flash Loan Attacks</span>
              </p>
            </div>
          </div>

          {/* Future Learning */}
          <div className="w-full mt-6 px-4">
            <h5 className="text-white text-center mb-4 text-sm uppercase tracking-wider opacity-80">Future Learning Path</h5>

            <div className="mb-3">
              <h6 className="text-white font-semibold mb-1">Cairo</h6>
              <p className="text-white text-sm opacity-80">Planned - StarkNet smart contract language</p>
            </div>

            <div className="mb-3">
              <h6 className="text-white font-semibold mb-1">StarkNet Auditing</h6>
              <p className="text-white text-sm opacity-80">Planned - Security auditing for StarkNet ecosystem</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
