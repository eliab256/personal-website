import "../assets/css/aboutMe.css";

const AboutMe: React.FC = () => {
    return (
        <div className="main-container width-controller">
            <div className="main-container-whoIam">
                <div className="title">
                    <h1>Who I am</h1>
                </div>
                <div className="main-items-whoIam my-description">
                    <p>
                        Hi, I’m Elia, and at 27 years old I decided to rewrite my path.
                        <br />
                        <br />
                        For years I followed very different paths: agricultural studies, music, work as an electrician. All experiences that gave me discipline,
                        independence, and a strong desire to improve myself. Meanwhile, my curiosity for the crypto world was growing, until I realized that
                        what fascinated me wasn’t just the markets… but the technology that makes them possible.
                        <br />
                        <br />
                        So I started a practical path with Start2Impact, choosing to build real projects instead of studying for years without touching code.
                        While learning, I pushed myself further with Cyfrin Updraft: there I discovered how much smart contracts fascinated me and the way they
                        give life to decentralized systems.
                        <br />
                        <br />
                        After my first projects — including a DAO that really challenged me — I understood what I truly wanted to do: make web3 a safer place. I
                        studied security through Johnny Time’s course, learning to analyze and prevent vulnerabilities such as reentrancy, flash-loan attacks,
                        DoS, and gas griefing.
                        <br />
                        <br />
                        Today I hunt for bugs and vulnerabilities through competitive audits on Code4rena and Sherlock. And while continuing to improve my
                        skills, I look ahead: I would like to join an auditing team, collaborate with other researchers, and contribute to the development of
                        increasingly secure protocols.
                        <br />
                    </p>
                </div>
            </div>
            <div className="main-container-mySkills">
                <div className="title">
                    <h2>My skills</h2>
                </div>
                <div className="main-items-mySkills my-softskills">
                    <p>
                        Among the various training and personal development courses I did, I have also attended this management school, which utilizes an
                        innovative tool designed to assess skills, attitudes, and potential.
                    </p>
                </div>
                <div className="main-items-mySkills skills-scheme">
                    <h4 className="title">Soft Skills</h4>
                    <div className="skills-area">
                        <div className="skill">
                            <div className="skill-name">Self-motivation</div>
                            <div className="skill-bar"></div>
                            <div className="self-motivation skill-fill">
                                <span className="skill-percent">57%</span>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="skill-name">Organization</div>
                            <div className="skill-bar"></div>
                            <div className="organization skill-fill">
                                <span className="skill-percent">85%</span>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="skill-name">Self-discipline</div>
                            <div className="skill-bar"></div>
                            <div className="self-discipline skill-fill">
                                <span className="skill-percent">79%</span>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="skill-name">Pressure management</div>
                            <div className="skill-bar"></div>
                            <div className="pressure-management skill-fill">
                                <span className="skill-percent">60%</span>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="skill-name">Proactivity</div>
                            <div className="skill-bar"></div>
                            <div className="proactivity skill-fill">
                                <span className="skill-percent">71%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-items-mySkills my-softskills">
                    <p>
                        Here you can see a in-depth description of my softskills. Every value above 30 can be considerate immutable. Watch the full report
                        <a href="i-Profile.html" rel="noopener" target="_blank">
                            here
                        </a>
                        .
                    </p>
                </div>
                <div className="main-items-mySkills experiences">
                    <div className="title">
                        <h3>Professional experinces</h3>
                    </div>
                    <div className="list">
                        <ul>
                            <li>
                                <p>industrial automation wiring electrician</p>
                                <p>Tecnoten S.r.l. Vellezzo Bellini (PV)</p>
                                <p>june 2016 - present</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-items-mySkills school">
                    <div className="title">
                        <h3>Educational Background</h3>
                    </div>
                    <div className="list">
                        <ul>
                            <li>
                                <p>Blockchain development Master</p>
                                <p>Start2impact University</p>
                                <p>2024 - present</p>
                            </li>
                            <li>
                                <p>Smart Contract Development and Security</p>
                                <p>Cyfrin Updraft</p>
                                <p>2024 - present</p>
                            </li>
                            <li>
                                <p>Smart Contract Auditing</p>
                                <p>Smart Contract Hacking Course by Johnny Time</p>
                                <p>september 2025 - december 2025</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-items-mySkills personal-growth">
                    <div className="title">
                        <h3>Personal growth background</h3>
                    </div>
                    <div className="list">
                        <ul>
                            <li>
                                <p>How to study properly and memory tecniques</p>
                                <p>Genius 21 days</p>
                                <p>2017</p>
                            </li>
                            <li>
                                <p>Development of Softskills as public speaking, decision making, problem solving and time management</p>
                                <p>Softskills Academy</p>
                                <p>2017-2020</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
