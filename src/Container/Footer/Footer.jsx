import { Container_Footer, Content_Footer } from "./styled";

import Image_Email from "../../assets/Email.svg";
import GitHub from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";
import Gmail from "../../assets/gmail.svg";

const Footer = () => {
  return (
    <Container_Footer>
      <Content_Footer>
        <img className="image-email" src={Image_Email} alt="" />

        <div className="texts-footer">
          <h1>Entre em Contato Comigo</h1>
          <p>
            Estou interessado em novas oportunidades. No entanto, se você tiver
            outra solicitação ou pergunta, não hesite em usar o formulário.
          </p>
          <form>
            <input type="text" placeholder="Seu Nome" />
            <input type="text" placeholder="Seu Email" />
            <input type="text" placeholder="Deixe sua mensagem aqui." />
            <button>ENVIAR</button>
          </form>
          <div className="midia">
            <a href="https://github.com/PedroAlex65"><img src={GitHub} alt="" /></a>
            <a href="https://www.linkedin.com/in/pedro-alex-rosa-brito-63749b235/"><img src={Linkedin} alt="" /></a>
            <a href="mailto:pedroalex663@gmail.com"><img src={Gmail} alt="" /></a>
            
          </div>
        </div>
      </Content_Footer>
    </Container_Footer>
  );
};

export default Footer;
