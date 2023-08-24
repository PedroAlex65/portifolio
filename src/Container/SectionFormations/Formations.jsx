import { Section, Container_Section } from "./styled";
import Lupa from "../../assets/lupa.svg";
import FronEnd from "../../assets/front-end.svg";
import Word from "../../assets/world-wide-web.svg";
import UxDesign from "../../assets/interface-ux.svg";

const Formations = () => {
  return (
    <Section>
      <Container_Section className="container_in_section">
        <h3>
          Minhas<span>.</span>Formações
        </h3>

        <div className="box-formations">
          <div className="box">
            <img className="image" src={Lupa} alt="" />
            <h2>Análise e Desenvolvimento de Sistemas</h2>
            <p>
              Como analista e desenvolvedor de sistemas, eu desempenho um
              papel crucial na concepção, análise, desenvolvimento e
              implementação de soluções de software para atender às necessidades
              específicas de uma organização ou cliente. 
            </p>
          </div>
          <div className="box">
            <img className="image" src={FronEnd} alt="" />
            <h2>Front-End Developer</h2>
            <p>
              Como desenvolvedor front-end, eu sou especializado em criar a
              parte visual e interativa das aplicações web.
            </p>
          </div>
          <div className="box">
            <img className="image" src={Word} alt="" />
            <h2>Website Development</h2>
            <p>
              Eu uso várias tecnologias da web para desenvolver sites atraentes.
              Desenvolvo layouts de sites criativos e responsivos.
            </p>
          </div>
          <div className="box">
            <img className="image" src={UxDesign} alt="" />
            <h2>UX Design</h2>
            <p>
              Como UX Design, eu sou profissional especializado em criar
              experiências positivas e significativas para os usuários em
              produtos e serviços digitais.
            </p>
          </div>
        </div>
      </Container_Section>
    </Section>
  );
};

export default Formations;
