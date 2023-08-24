import Arrow from "../../assets/seta.svg";
import ImageLanguages from "../../assets/image-languages.svg";
import { Home_H, ContainerHome, ContainerTexts } from "./styled";
import Header from "../../Componentes/Header/Header";
import Introduce from "../SectionIntroduce/Introduce.jsx";
import Formations from "../SectionFormations/Formations.jsx";
import Projects from "../SectionProjects/Projects.jsx";
import Footer from "../Footer/Footer.jsx";

const Home = () => {
  return (
    <>
      <Home_H>
        <Header />
        <ContainerHome className="container-home">
          <ContainerTexts className="container-text">
            <h3>
              Desenvolvedor<span>.</span>Web
            </h3>
            <h1>Hello World !</h1>
            <p>
              Sou Desenvolvedor Front-End, gosto de construir coisas e dar vida
              às ideias na máquina.
            </p>
            <img src={Arrow} alt="" />
            <a href="#">Sobre min.</a>
          </ContainerTexts>
          <img className="image-logo" src={ImageLanguages} alt="" />
        </ContainerHome>
      </Home_H>
      <Introduce/>
      <Formations/>
      <Projects/>
      <Footer/>
    </>
  );
};

export default Home;
