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
            Hi, my name is Elia and I am 27 years old. I started studying the blockchain master program here on start2impact to give a new direction to my career and my
            life. I initially attended the Agricultural Technical Institute but soon realized it wasn't my path. Passionate about music, I pursued it while working as an
            electrician in my father's company. This dual path developed my soft skills and interest in personal growth. Over time, I also delved into personal finance,
            investments, and cryptocurrencies. After several years, I decided music wasn't for me and shifted my focus. Combining my interest in cryptocurrencies with a
            new found enthusiasm for computer science, I started the Start2Impact master program, aiming to build an exciting and satisfying career as a blockchain
            developer.
          </p>
        </div>
        <div className="mainItems personalPicture">
          <img src={personalPicture} alt="personalPicture" />
        </div>
      </div>
    </>
  );
};

export default Home;
