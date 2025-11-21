const AboutMe: React.FC = () => {
  return (
    <div className="flex justify-center flex-row flex-wrap w-full">
      {/* Left Column: Who I Am + Professional Experiences */}
      <div className="flex flex-col items-center w-full mb-8 lg:w-1/2 lg:border-r-2 lg:border-white lg:border-dashed lg:pr-8 lg:mb-0 lg:pb-8">
        <div className="title">
          <h1>Who I am</h1>
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-2.5">
          <p className="text-white">
            Hi, I'm Elia, and at 27 years old I decided to rewrite my path.
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
      </div>
    </div>
  );
};

export default AboutMe;
