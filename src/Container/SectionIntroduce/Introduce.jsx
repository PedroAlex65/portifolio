import {
  Section,
  Container_In_Section,
  Container_Texts,
  Container,
  Container_Introduce,
} from "./styled";


const Introduce = () => {
  return (
    <Section>
      <Container_In_Section>
        <h3>
          Minha<span>.</span>Introdução
        </h3>
        <Container>
          <Container_Texts>
            <div className="teste">
              <h4>Linguagens</h4>
              <h5>
                Usando ={" "}
                <span className="languages-in-frameworks">
                  “Html”, “Css”, “JavaScript”
                </span>
              </h5>
            </div>
            <div className="teste">
              <h4>Frameworks</h4>
              <h5>
                Usando ={" "}
                <span className="languages-in-frameworks">
                  “React”, “Tailwind”, “BootStrap”, “Scss”
                </span>
              </h5>
            </div>
            <div className="teste">
              <h4>Habilidades </h4>
              <h5>
                Usando ={" "}
                <span className="languages-in-frameworks">
                  “Proactivity”, “Creativity”, “Leadership”, “TeamWork”
                </span>
              </h5>
            </div>
          </Container_Texts>

          <Container_Introduce>
            <h1>I am Pedro,</h1>
            <p>
              Olá! Sou um desenvolvedor front-end em constante evolução,
              atualmente cursando análise e desenvolvimento de sistemas.<br /><br /> Com um
              ano de experiência, adquiri habilidades sólidas em HTML, CSS,
              Tailwind, JavaScript, Python e React.<br /><br /> Meu entusiasmo em criar
              projetos pessoais inovadores me motiva a contribuir com minha
              expertise no mundo do desenvolvimento web.<br /><br /> Estou sempre em busca
              de novos desafios para aprimorar minhas habilidades e agregar
              valor às equipes de trabalho.
            </p>
            <a href="#">Entre em contato comigo</a>
          </Container_Introduce>
        </Container>
      </Container_In_Section>
    </Section>
  );
};

export default Introduce;
