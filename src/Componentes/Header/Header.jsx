import { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import { ContainerHeader, Container_Header } from "./styles.js";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [itens, setItens] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 449) {
        setMobile(true);
        setItens(false);
      } else {
        setMobile(false);
        setItens(true);
      }
    };

    handleResize();

    // Adicionar um ouvinte de redimensionamento para monitorar mudanças no tamanho da tela
    window.addEventListener("resize", handleResize);

    // Serve paraa limpar ouvinte quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container_Header>
      <ContainerHeader className="container-header">
        <img src={Logo} alt="logo" />
        {mobile ? (
          <span
            onClick={() => setItens(!itens)}
            className="menu  material-symbols-outlined"
          >
            menu
          </span>
        ) : null}

        {itens ? (
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
        ) : null}
      </ContainerHeader>
    </Container_Header>
  );
};

export default Header;
