import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import WeImg from "../../assets/images/motorbike.png";
import WeIcon from "../../assets/images/knife_icon.png";
import Weimg from "../../assets/images/bodganjump.png";
import Wechef from "../../assets/images/chef.jpeg";
// import Wetext from "../../assets/images/who_text.png";
import gallery01 from "../../assets/images/bogdanenduro.png";
import gallery02 from "../../assets/images/bodgan1.png";
import gallery03 from "../../assets/images/bogdan2.png";
import gallery04 from "../../assets/images/bodgan3.png";
import gallery05 from "../../assets/images/bogdan4.png";
import gallery06 from "../../assets/images/bogdan5.png";
import gallery07 from "../../assets/images/bogdan6.png";
import gallery08 from "../../assets/images/bogdan7.png";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const Whoslider = {
  infinite: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
};

function WhoWe() {
  return (
    <>
      <div className="row_am who_we_section bg_white_textcher">
        <div
          className="sider_shape"
          data-aos="fade-in"
          data-aos-duration={1500}
        >
          <img src={WeImg} alt="img" />
        </div>
        <div className="container">
          <div
            className="section_title d-flex justify-content-center align-items-start"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="icon">
              <img src={WeIcon} alt="img" />
            </div>
            <div className="text">
              <span className="sub_text">Who we are</span>
              <h2>
                Luxurious stay with A Tasty food Pathfinderenduro
                <br /> you can’t find anywhere .{" "}
              </h2>
            </div>
          </div>
          <div className="row row_am">
            <div className="col-md-6">
              <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                <img className="img-fluid radius_img" src={Weimg} alt="img" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="who_We_text">
                <p data-aos="fade-up" data-aos-duration={1500}>
                  Enduro isn't just a sport; it's a journey that takes riders
                  through rugged terrain, testing their limits, and forging a
                  connection with nature. At Pathfinderenduro, we understand
                  that it's not just about the ride; it's about the experience.
                  Whether you're conquering challenging trails or savoring local
                  cuisine, we're here to make every aspect of your enduro
                  adventure unforgettable .
                </p>
                <div
                  className="chef_block d-flex justify-content-center align-items-center"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                >
                  <img className="chef_img" src={Wechef} alt="img" />
                  {/* <img className="text_img" src={Wetext} alt="img" /> */}
                </div>
                <div
                  className="action_block"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                >
                  <ul className="social_media d-flex align-content-center">
                    <li>
                      <Link to="#">
                        <FaFacebookF class="BiLogoFacebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <RiTwitterXLine className="icofont-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <AiOutlineInstagram className="icofont-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <BsPinterest className="icofont-pinterest" />
                      </Link>
                    </li>
                  </ul>
                  <Link to="/contact" className="btn btn_primary">
                    Get direction <i className="icofont-location-pin" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery_direction_right gallery_slider">
          <Slider
            className="Slider-Who"
            {...Whoslider}
            id="gallery_flow_right"
            data-aos="fade-in"
            data-aos-duration={1500}
            slidesToShow={11.5}
            arrows={false}
            autoplay={true}
            autoplaySpeed={1000}
          >
            <div className="item">
              <div className="img">
                <img src={gallery01} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery02} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery03} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery04} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery01} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery02} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery03} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery04} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery01} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery02} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery03} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery04} alt="img" />
              </div>
            </div>
          </Slider>
          <Slider
            className="Slider-Who"
            {...Whoslider}
            id="gallery_flow_left"
            data-aos="fade-in"
            data-aos-duration={1500}
            rtl={true}
            slidesToShow={11.5}
            arrows={false}
            autoplay={true}
            autoplaySpeed={1000}
          >
            <div className="item">
              <div className="img">
                <img src={gallery05} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery06} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery07} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery08} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery05} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery06} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery07} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery08} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery05} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery06} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery07} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery08} alt="img" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default WhoWe;
