import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbSquareRoundedChevronUp } from "react-icons/tb";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillEnvelopePaperFill } from "react-icons/bs";

function Main() {
  const [ytshow, setytShow] = useState(false);

  return (
    <>
      <footer>
        <div className="container">
          <div className="foote_widget contact_info">
            <div className="row py_50">
              <div className="col-md-7 direction_block">
                <p>
                  PathFinderEnduro, Brasov Romania <br />
                  Strada principale ,comuna Sinca <br />
                  Booking :{" "}
                  <Link to="tel:+40 765 569 064">+40 765 569 064</Link>
                </p>
                <Link to="/contact" className="btn_text">
                  get direction <AiOutlineArrowRight />
                  {/* <i className="icofont-long-arrow-right" /> */}
                </Link>
              </div>
              <div className="col-md-5 text-md-right timing_block">
                <p>
                  Monday - Friday : 8AM - 9PM <br />
                  Saturday - Sunday : 8AM - 11PM
                </p>
                <Link
                  to="#"
                  className="btn btn_primary mt-3"
                  id="bookingForm_modelTitle"
                  data-toggle="modal"
                  data-target="#bookingForm_model"
                  onClick={() => setytShow(true)}
                >
                  book a trip
                </Link>
              </div>
            </div>
          </div>
          <div className="foote_widget newsletter_block">
            <div className="row py_50">
              <div className="col-md-7 offer_block">
                <h2>Get News &amp; Offers</h2>
                <p>
                  Subscribe us &amp; Get <span>25% Off.</span>
                </p>
                <form>
                  <div className="form-group">
                    <span className="icon position-absolute">
                      {/* <i className="icofont-envelope-open" /> */}
                      <BsFillEnvelopePaperFill />
                    </span>
                    <input
                      type="text"
                      placeholder="Your email"
                      className="form-control"
                      required=""
                    />
                    <button className="btn btn_primary">subscribe now</button>
                  </div>
                </form>
              </div>
              <div className="col-md-5">
                <ul className="social_media">
                  <li>
                    <a
                      href="https://www.facebook.com/bogdan.popa.3150807"
                      target="_blank"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/pathfinder.enduro/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=iPwxni7L02E"
                      target="_blank"
                    >
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="foote_widget menu_links">
            <div className="row">
              <div className="col-md-12">
                <ul className="links d-flex justify-content-center">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  {/* <li>
                    <Link to="/menulist1">Menu 1</Link>
                  </li>
                  <li>
                    <Link to="/menulist2">Menu 2</Link>
                  </li>
                  <li>
                    <Link to="/menulist3">Menu 3</Link>
                  </li> */}
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  {/* <li>
                    <Link to="/ourchef">Our Activities</Link>
                  </li> */}
                  {/* <li>
                    <Link to="/bloglist">Blog</Link>
                  </li> */}
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 copy_right text-center">
              <p>
                © 2023 PathfinderEnduro. All Rights Reserved | Crafted by{" "}
                <Link to="https://mahmoud-ahmed.netlify.app" target="blog-list">
                  Mahmoud Ahmed
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="go_top" id="Gotop">
          <span>
            {/* <i className="icofont-duotone icofont-rounded-up" /> */}
            <TbSquareRoundedChevronUp size={200} />
          </span>
        </div>
      </footer>
      {ytshow && (
        <div
          className="modal fade booking_model show"
          id="bookingForm_model"
          tabIndex={-1}
          aria-labelledby="bookingForm_modelTitle"
          style={{ display: "block", paddingRight: 17 }}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header text-center border-0 d-block p-0">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setytShow(false)}
                >
                  <span aria-hidden="true">
                    <i className="icofont-close-line" />
                  </span>
                </button>
                <h2 className="mb-2">Online Reservation</h2>
                <p>
                  Booking request{" "}
                  <a href="tel:+40 765 569 064">+40 765 569 064</a> or fill out
                  the order form
                </p>
              </div>
              <div className="modal-body">
                <div className="booking_form">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <span className="icon">
                            <i className="icofont-user-alt-7" />
                          </span>
                          <input
                            type="text"
                            className="form-control has_icon"
                            placeholder="1 Person"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <span className="icon">
                            <i className="icofont-calendar" />
                          </span>
                          <input
                            type="date"
                            className="form-control  flex-row-reverse"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <span className="icon">
                            <i className="icofont-clock-time" />
                          </span>
                          <input
                            type="time"
                            className="form-control has_icon  flex-row-reverse pl-0"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button className="btn btn_primary w-100 ">
                          book a table
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
