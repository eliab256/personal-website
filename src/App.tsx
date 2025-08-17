import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import ContactMe from "./components/ContactMe";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import "./App.css";
import { useSelector } from "react-redux";
import { type PageState } from "./redux/pagesSlice";

function App() {
  const currentOpenPage = useSelector((state: { currentPage: { currentPage: PageState } }) => state.currentPage.currentPage);

  const pageComponents = {
    home: <Home />,
    portfolio: <Portfolio />,
    aboutMe: <AboutMe />,
    contactMe: <ContactMe />,
  };

  return (
    <>
      <div className="page">
        <Header />
        <main>{pageComponents[currentOpenPage]}</main>
        <Footer />
      </div>
    </>
  );
}

export default App;
