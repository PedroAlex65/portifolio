import { Section, Container_Projects, Box } from "./styled";
import ProjectFrame from "../../assets/projectOne.svg";
import Fire from "../../assets/fogo.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
        <Box>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >

            <SwiperSlide className="slide-swiper">
              <div className="box-projects">
                <img className="image-projects" src={ProjectFrame} alt="" />
                <h1>Shop Mood</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="live">
                  <h2>LIVE PREVIEW</h2>
                  <img src={Fire} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-swiper">
              <div className="box-projects">
                <img className="image-projects" src={ProjectFrame} alt="" />
                <h1>Social Dog</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="live">
                  <h2>LIVE PREVIEW</h2>
                  <img src={Fire} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-swiper">
              <div className="box-projects">
                <img className="image-projects" src={ProjectFrame} alt="" />
                <h1>Social Cat</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="live">
                  <h2>LIVE PREVIEW</h2>
                  <img src={Fire} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-swiper">
              <div className="box-projects">
                <img className="image-projects" src={ProjectFrame} alt="" />
                <h1>Facebook</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="live">
                  <h2>LIVE PREVIEW</h2>
                  <img src={Fire} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-swiper">
              <div className="box-projects">
                <img className="image-projects" src={ProjectFrame} alt="" />
                <h1>Instagram</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="live">
                  <h2>LIVE PREVIEW</h2>
                  <img src={Fire} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-swiper">
              <div className="box-projects">
                <img className="image-projects" src={ProjectFrame} alt="" />
                <h1>SpaceX</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="live">
                  <h2>LIVE PREVIEW</h2>
                  <img src={Fire} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container_Projects>
    </Section>
  );
};

export default Projects;
