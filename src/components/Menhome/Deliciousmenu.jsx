import { Link } from "react-router-dom";
import React, { useState } from "react";
import Slider from "react-slick";
import BG from "../../assets/images/background.png";
import icon01 from "../../assets/images/Motocross-Motorcycle.png";
import menu01 from "../../assets/images/menu.png";
import menuimg from "../../assets/images/menu.png";
import videoimg from "../../assets/images/since_round.png";
import playimg from "../../assets/images/play.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
const DeliciousMenu = {
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

function Deliciousmenu() {
  const [ytshow, setytShow] = useState(false);

  return (
    <>
      <section className="row_am delicous_menu">
        <div className="container">
          <div
            className="section_title text-center"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <span className="icon">
              <img src={icon01} alt="img" width={240} height={240} />
            </span>
            <span className="sub_text">Pathfinderenduro</span>
            <h2>
              Where adrenaline meets adventure, and your journey begins. Ride,
              relax, and savor the thrill of enduro. Discover our comfy
              accommodations for tourists, and relish mouthwatering BBQ. Your
              ultimate getaway awaits.
            </h2>
          </div>
          <div className="menu_listing row_am">
            <div
              className="menu_listing_block"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <div className="diplay_state">
                <div className="menu_name">
                  <h3>Dinner</h3>
                </div>
                <div className="list_running">
                  <Slider
                    className=" menuTextSlider"
                    {...DeliciousMenu}
                    slidesToShow={4}
                    autoplay={true}
                    autoplaySpeed={500}
                    arrows={false}
                  >
                    <div className="item">
                      <div className="wrp">
                        <span>Lamb Chops</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Steak au Poivre</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Pork Chops</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Triple-Cooked Fries</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Rib-Eye Steak</span>
                      </div>
                    </div>
                  </Slider>
                </div>
                <span className="direction_pointer">
                  <i className="icofont-long-arrow-right" />
                </span>
              </div>
              <div className="hover_state">
                <div className="menu_img">
                  <img src={menu01} alt="img" />
                </div>
                <div className="menu_name">
                  <h3>
                    <Link to="/menulist1">Dinner</Link>
                  </h3>
                </div>
                <div className="menuMobileLIst">
                  <ul>
                    <li>
                      <span>Lamb Chops</span>
                    </li>
                    <li>
                      <span>Steak au Poivre</span>
                    </li>
                    <li>
                      <span>Pork Chops</span>
                    </li>
                    <li>
                      <span>Triple-Cooked Fries</span>
                    </li>
                    <li>
                      <span>Rib-Eye Steak</span>
                    </li>
                  </ul>
                </div>
                <Link to="/" className="btn btn_primary">
                  View Our Menu <i className="icofont-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="menu_listing_block"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <div className="diplay_state">
                <div className="menu_name">
                  <h3>LUNCH</h3>
                </div>
                <div className="list_running">
                  <Slider
                    className="menuTextSlider"
                    slidesToShow={4}
                    autoplay={true}
                    autoplaySpeed={500}
                    arrows={false}
                  >
                    <div className="item">
                      <div className="wrp">
                        <span>Lamb Chops</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Steak au Poivre</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Pork Chops</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Triple-Cooked Fries</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Rib-Eye Steak</span>
                      </div>
                    </div>
                  </Slider>
                </div>
                <span className="direction_pointer">
                  <i className="icofont-long-arrow-right" />
                </span>
              </div>
              <div className="hover_state">
                <div className="menu_img">
                  <img src={menuimg} alt="img" />
                </div>
                <div className="menu_name">
                  <h3>
                    <Link to="/">LUNCH</Link>
                  </h3>
                </div>
                <div className="menuMobileLIst">
                  <ul>
                    <li>
                      <span>Lamb Chops</span>
                    </li>
                    <li>
                      <span>Steak au Poivre</span>
                    </li>
                    <li>
                      <span>Pork Chops</span>
                    </li>
                    <li>
                      <span>Triple-Cooked Fries</span>
                    </li>
                    <li>
                      <span>Rib-Eye Steak</span>
                    </li>
                  </ul>
                </div>
                <Link to="/" className="btn btn_primary">
                  View Our Menu <i className="icofont-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="menu_listing_block"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <div className="diplay_state">
                <div className="menu_name">
                  <h3>BRUNCH</h3>
                </div>
                <div className="list_running">
                  <Slider
                    className="menuTextSlider"
                    slidesToShow={4}
                    autoplay={true}
                    autoplaySpeed={500}
                    arrows={false}
                  >
                    <div className="item">
                      <div className="wrp">
                        <span>Pork Chops</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Triple-Cooked Fries</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Rib-Eye Steak</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Lamb Chops</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Steak au Poivre</span>
                      </div>
                    </div>
                  </Slider>
                </div>
                <span className="direction_pointer">
                  <i className="icofont-long-arrow-right" />
                </span>
              </div>
              <div className="hover_state">
                <div className="menu_img">
                  <img src={menuimg} alt="img" />
                </div>
                <div className="menu_name">
                  <h3>
                    <Link to="/">BRUNCH</Link>
                  </h3>
                </div>
                <div className="menuMobileLIst">
                  <ul>
                    <li>
                      <span>Pork Chops</span>
                    </li>
                    <li>
                      <span>Triple-Cooked Fries</span>
                    </li>
                    <li>
                      <span>Rib-Eye Steak</span>
                    </li>
                    <li>
                      <span>Lamb Chops</span>
                    </li>
                    <li>
                      <span>Steak au Poivre</span>
                    </li>
                  </ul>
                </div>
                <Link to="/" className="btn btn_primary">
                  View Our Menu <i className="icofont-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="menu_listing_block"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <div className="diplay_state">
                <div className="menu_name">
                  <h3>WINES</h3>
                </div>
                <div className="list_running">
                  <Slider
                    className="menuTextSlider"
                    slidesToShow={4}
                    autoplay={true}
                    autoplaySpeed={500}
                    arrows={false}
                  >
                    <div className="item">
                      <div className="wrp">
                        <span>Steak au Poivre</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Pork Chops</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Triple-Cooked Fries</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Rib-Eye Steak</span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="wrp">
                        <span>Lamb Chops</span>
                      </div>
                    </div>
                  </Slider>
                </div>
                <span className="direction_pointer">
                  <i className="icofont-long-arrow-right" />
                </span>
              </div>
              <div className="hover_state">
                <div className="menu_img">
                  {/* <img src={menuimg} alt="img" /> */}
                </div>
                <div className="menu_name">
                  <h3>
                    <Link to="/menulist1">WINES</Link>
                  </h3>
                </div>
                <div className="menuMobileLIst">
                  <ul>
                    <li>
                      <span>Steak au Poivre</span>
                    </li>
                    <li>
                      <span>Pork Chops</span>
                    </li>
                    <li>
                      <span>Triple-Cooked Fries</span>
                    </li>
                    <li>
                      <span>Rib-Eye Steak</span>
                    </li>
                    <li>
                      <span>Lamb Chops</span>
                    </li>
                  </ul>
                </div>
                <Link to="/" className="btn btn_primary">
                  View Our Menu <i className="icofont-long-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iPwxni7L02E?si=q2Mjjd56X4VoJBTV"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}

        <div className="video_wraper">
          <div className="action_box" style={{ backgroundImage: `url(${BG})` }}>
            <div
              className="play_vtn d-flex justify-content-center align-items-center"
              onClick={() => setytShow(true)}
            >
              <div className="round_anim">
                <img src={videoimg} alt="img" />
              </div>
              <div className="action_btn">
                <Link
                  to="#"
                  className="popup-youtube play-button"
                  data-url="https://www.youtube.com/embed/iPwxni7L02E?si=q2Mjjd56X4VoJBTV"
                  data-toggle="modal"
                  data-target="#myModal"
                  title="XJj2PbenIsU"
                >
                  <img src={playimg} alt="img" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {ytshow && (
        <div
          className="modal fade youtube-video show"
          id="myModal"
          tabIndex={-1}
          role="dialog"
          style={{ paddingRight: 17, display: "block" }}
          aria-modal="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content" onClick={() => setytShow(false)}>
              <button
                id="close-video"
                type="button"
                className="button btn btn-default text-right"
                data-dismiss="modal"
                onClick={() => setytShow(false)}
              >
                {/* <i className="icofont-close-line-circled" /> */}
                <AiOutlineCloseCircle />
                {/*  */}
              </button>
              <div className="modal-body">
                <div id="video-container" className="video-container">
                  <iframe
                    id="youtubevideo"
                    width={640}
                    height={360}
                    allowFullScreen=""
                    src="https://www.youtube.com/embed/iPwxni7L02E?si=q2Mjjd56X4VoJBTV"
                  />
                </div>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Deliciousmenu;
