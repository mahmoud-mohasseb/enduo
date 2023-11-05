import React, { useState } from "react";
import { Link } from "react-router-dom";
import reviewimg from "../../assets/images/review_01.png";
import reviewimg3 from "../../assets/images/review_03.png";
import videoplay from "../../assets/images/play.png";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
function Review() {
  const [video, setvideo] = useState(false);

  return (
    <>
      <section className="row_am review_section">
        <div className="container">
          <div className="title">
            <h2 className="review_text">reviews</h2>
          </div>
          <div className="review_list">
            <div className="review_box with_text">
              <span className="quotes left_quote">
                <i className="icofont-duotone icofont-quote-left" />
              </span>
              <div className="user_img">
                <img src={reviewimg} alt="img" />
              </div>
              <div className="review">
                <div className="star">
                  <span>
                    <AiOutlineStar />
                  </span>
                  <span>
                    <AiOutlineStar />
                  </span>
                  <span>
                    <AiOutlineStar />
                  </span>
                  <span>
                    <AiOutlineStar />
                  </span>
                  <span>
                    <AiOutlineStar />
                  </span>
                </div>
                <p>It’s a great experience. wish to repeat.</p>
                <h3 className="name">- robin24h7 </h3>
              </div>
              <span className="quotes right_quote">
                <i className="icofont-duotone icofont-quote-right" />
              </span>
            </div>
            <div className="review_box with_video">
              <span className="quotes left_quote">
                <i className="icofont-duotone icofont-quote-left" />
              </span>
              <div className="video_box" onClick={() => setvideo(true)}>
                <Link
                  to="#"
                  onClick={() => setvideo(true)}
                  className="popup-youtube play-button"
                  data-toggle="modal"
                  data-target="#myModal"
                  title="XJj2PbenIsU"
                >
                  <img src={videoplay} alt="img" />
                </Link>
              </div>
              <span className="quotes right_quote">
                <i className="icofont-duotone icofont-quote-right" />
              </span>
            </div>
            <div className="review_box with_text">
              <span className="quotes left_quote">
                <i className="icofont-duotone icofont-quote-left" />
              </span>
              <div className="user_img">
                <img src={reviewimg3} alt="img" />
              </div>
              <div className="review">
                <div className="star">
                  <span>
                    <AiOutlineStar />
                  </span>
                  <span>
                    <AiOutlineStar />
                  </span>
                  <span>
                    <AiOutlineStar />
                  </span>
                  <span>
                    <AiOutlineStar />
                  </span>
                  <span>
                    <AiOutlineStar />
                  </span>
                </div>
                <p>
                  It’s a great experience. realy very welcoming and charming.
                  Amazing food, wines and services.
                </p>
                <h3 className="name">- robin24h7</h3>
              </div>
              <span className="quotes right_quote">
                <i className="icofont-duotone icofont-quote-right" />
              </span>
            </div>
            <div className="review_box with_text">
              <span className="quotes left_quote">
                <i className="icofont-duotone icofont-quote-left" />
              </span>
              <div className="user_img">
                <img src={reviewimg} alt="img" />
              </div>
              <div className="review">
                <div className="star">
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </div>
                <p>It’s a great experience. Massive Weekend 🙌.</p>
                <h3 className="name">- duncan.d36</h3>
              </div>
              <span className="quotes right_quote">
                <i className="icofont-duotone icofont-quote-right" />
              </span>
            </div>
            <div className="review_box with_video">
              <span className="quotes left_quote">
                <i className="icofont-duotone icofont-quote-left" />
              </span>
              <div className="video_box">
                <Link
                  to="#"
                  onClick={() => setvideo(true)}
                  className="popup-youtube play-button"
                  data-toggle="modal"
                  data-target="#myModal"
                  title="XJj2PbenIsU"
                >
                  <img src={videoplay} alt="img" />
                </Link>
              </div>
              <span className="quotes right_quote">
                <i className="icofont-duotone icofont-quote-right" />
              </span>
            </div>
            <div className="review_box with_text">
              <span className="quotes left_quote">
                <i className="icofont-duotone icofont-quote-left" />
              </span>
              <div className="user_img">
                <img src={reviewimg3} alt="img" />
              </div>
              <div className="review">
                <div className="star">
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </div>
                <p>It’s a great experience , will repeat it 🔥 🔥 🔥 🔥</p>
                <h3 className="name">- Willium Joe</h3>
              </div>
              <span className="quotes right_quote">
                <i className="icofont-duotone icofont-quote-right" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {video && (
        <div
          className="modal fade youtube-video show"
          id="myModal"
          tabIndex={-1}
          role="dialog"
          style={{ paddingRight: 17, display: "block" }}
          aria-modal="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content" onClick={() => setvideo(false)}>
              <button
                id="close-video"
                type="button"
                className="button btn btn-default text-right"
                data-dismiss="modal"
                onClick={() => setvideo(false)}
              >
                {/* <i className="icofont-close-line-circled" /> */}
                <AiFillCloseCircle />
              </button>
              <div className="modal-body">
                <div id="video-container" className="video-container">
                  {/* <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/jN9bK1xNEZg?si=cGIEVnwWZ3lk1RxK"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe> */}
                  <iframe
                    id="youtubevideo"
                    width={640}
                    height={360}
                    allowFullScreen=""
                    src="https://www.youtube.com/embed/jN9bK1xNEZg?si=cGIEVnwWZ3lk1RxK"
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

export default Review;
