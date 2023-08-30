import ProjectFrame from "../../assets/projectOne.svg";
import Fire from "../../assets/fogo.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { useEffect, useState } from "react";

const SwiperSlider = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function displayMobile() {
      if (window.innerWidth > 449) {
        setMobile(true);
        console.log("Tela Maior que 449px");
      } else {
        console.log("Tela Menor que 449px");
      }
    }
    displayMobile();

    window.addEventListener("resize", displayMobile);

    return () => {
      window.removeEventListener("resize", displayMobile);
    };
  }, []);

  return (
    <>
      {mobile ? (
        <Swiper
          className="mySwiperPagination"
          slidesPerView={3}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {" "}
          <SwiperSlide className="cardSlider">
            <div className="box-projects">
              <img className="image-projects" src={ProjectFrame} alt="" />
              <h1>Shop Mood</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="live">
                <h2>LIVE PREVIEW</h2>
                <img src={Fire} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cardSlider">
            <div className="box-projects">
              <img className="image-projects" src={ProjectFrame} alt="" />
              <h1>Shop Mood</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="live">
                <h2>LIVE PREVIEW</h2>
                <img src={Fire} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cardSlider">
            <div className="box-projects">
              <img className="image-projects" src={ProjectFrame} alt="" />
              <h1>Shop Mood</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="live">
                <h2>LIVE PREVIEW</h2>
                <img src={Fire} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cardSlider">
            <div className="box-projects">
              <img className="image-projects" src={ProjectFrame} alt="" />
              <h1>Shop Mood</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="live">
                <h2>LIVE PREVIEW</h2>
                <img src={Fire} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cardSlider">
            <div className="box-projects">
              <img className="image-projects" src={ProjectFrame} alt="" />
              <h1>Shop Mood</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="live">
                <h2>LIVE PREVIEW</h2>
                <img src={Fire} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cardSlider">
            <div className="box-projects">
              <img className="image-projects" src={ProjectFrame} alt="" />
              <h1>Shop Mood</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="live">
                <h2>LIVE PREVIEW</h2>
                <img src={Fire} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cardSlider">
            <div className="box-projects">
              <img className="image-projects" src={ProjectFrame} alt="" />
              <h1>Shop Mood</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="live">
                <h2>LIVE PREVIEW</h2>
                <img src={Fire} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiperPagination"
        >
           <SwiperSlide className="cardSlider">
            <div className="box-projects">
              <img className="image-projects" src={ProjectFrame} alt="" />
              <h1>Shop Mood</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="live">
                <h2>LIVE PREVIEW</h2>
                <img src={Fire} alt="" />
              </div>
            </div>
          </SwiperSlide>
           <SwiperSlide className="cardSlider">
            <div className="box-projects">
              <img className="image-projects" src={ProjectFrame} alt="" />
              <h1>Shop Mood</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="live">
                <h2>LIVE PREVIEW</h2>
                <img src={Fire} alt="" />
              </div>
            </div>
          </SwiperSlide>
           <SwiperSlide className="cardSlider">
            <div className="box-projects">
              <img className="image-projects" src={ProjectFrame} alt="" />
              <h1>Shop Mood</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="live">
                <h2>LIVE PREVIEW</h2>
                <img src={Fire} alt="" />
              </div>
            </div>
          </SwiperSlide>
           <SwiperSlide className="cardSlider">
            <div className="box-projects">
              <img className="image-projects" src={ProjectFrame} alt="" />
              <h1>Shop Mood</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="live">
                <h2>LIVE PREVIEW</h2>
                <img src={Fire} alt="" />
              </div>
            </div>
          </SwiperSlide>
           <SwiperSlide className="cardSlider">
            <div className="box-projects">
              <img className="image-projects" src={ProjectFrame} alt="" />
              <h1>Shop Mood</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="live">
                <h2>LIVE PREVIEW</h2>
                <img src={Fire} alt="" />
              </div>
            </div>
          </SwiperSlide>
           <SwiperSlide className="cardSlider">
            <div className="box-projects">
              <img className="image-projects" src={ProjectFrame} alt="" />
              <h1>Shop Mood</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="live">
                <h2>LIVE PREVIEW</h2>
                <img src={Fire} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
};

export default SwiperSlider;
