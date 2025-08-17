import "../assets/css/aboutMe.css";
import personalPicture from "../assets/img/personalPicture.jpg";

const AboutMe: React.FC = () => {
  return (
    <div className="main-container width-controller">
      <div className="main-container-whoIam">
        <div className="title">
          <h1>Who I am</h1>
        </div>
        <div className="main-items-whoIam my-description">
          <p>
            Hi, my name is Elia Bordoni, I'm 27 years old, and I live in a town near Milan. My educational journey started in high school where I attended the Gallini
            Agricultural Technical Institute in Voghera. After finishing school, I realized that it wasn't what I wanted to do. At that time, my greatest passion was
            music, so I decided to pursue this path and try to make it a career.
            <br />
            <br />
            I attended various schools and online courses (all self-funded) while working as an electrician in my father's company. For about seven years, I juggled my
            job as an electrician and my passion for music. This passion allowed and, in a sense, forced me to develop various soft skills, opening up the world of
            personal growth and inner development, of which I am a great enthusiast.
            <br />
            <br />
            Among the various aspects of life that I wanted to develop was the economic side. This led me to study personal finance and investments, as well as to foster
            a strong interest in cryptocurrencies and blockchain technology. After years, I realized that music and creativity were not for me, and I abandoned this life
            project. After an initial period of coping with the blow, I settled down and, deciding what to do with my future.
            <br />
            <br />I decided to combine my passion for cryptocurrencies with my latent interest in computer science. This is why I decided to start studying the
            Start2Impact master program, confident that it will help me create a career that excites me and brings great satisfaction after the disappointment of
            abandoning my music project.
          </p>
        </div>
        <div className="main-items-whoIam my-photo">
          <img src={personalPicture} alt="personal-picture" className="personal-picture" />
        </div>
      </div>
      <div className="main-container-mySkills">
        <div className="title">
          <h2>My skills</h2>
        </div>
        <div className="main-items-mySkills my-softskills">
          <p>
            Among the various training and personal development courses I did, I have also attended this management school, which utilizes an innovative tool designed to
            assess skills, attitudes, and potential.
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
                <p>Agricultural Technical Institute (high school)</p>
                <p>Gallini Institute, Voghera (PV)</p>
                <p>2010 - 2015</p>
              </li>
              <li>
                <p>Blockchain dev Master</p>
                <p>Start2impact University</p>
                <p>2024 - present</p>
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
