import { Section, Container_Projects } from "./styled";
import SwiperSlider from "../../Componentes/Swiper/SwiperSlider";

export const Projects = () => {
  return (
    <Section>
      <Container_Projects className="container_in_projects">
        <h3>
          Meus<span>.</span>Projetos
        </h3>
        <div className="categories">
          <button>All Projects</button>
          <button> Desktop Apps</button>
          <button>Websites</button>
        </div>
          <SwiperSlider />
      </Container_Projects>
    </Section>
  );
};

export default Projects;
