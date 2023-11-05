import React from "react";
import Slider from "react-slick";

const Slidersetting = {
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

function TextFlow() {
  return (
    <>
      <div className="textFlow_list white_cover">
        <Slider
          className="Slick-Menu"
          id="text_list_flow"
          {...Slidersetting}
          arrows={false}
          rtl={true}
          slidesToShow={10}
          autoplay={true}
          autoplaySpeed={2000}
          style={{ width: 5697 }}
        >
          <div className="item">
            <div className="text_block">
              <span>Beta 300 RR</span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span>Husqvarna</span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span>Gas Gas</span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span> KTM </span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span>Sherco</span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span>Ribeye</span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span> Gas Gas </span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span>KTM</span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span> Honda </span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span>Yamaha</span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span>KTM</span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span> Ribeye </span>
              <span className="mark_star">*</span>
            </div>
          </div>
        </Slider>
      </div>
      <div className="menu_list_section rotet_down">
        <Slider
          className="Slick-Menu"
          id="menu_list_flow"
          {...Slidersetting}
          arrows={false}
          slidesToShow={10}
          autoplay={true}
          infinite={true}
          autoplaySpeed={2000}
          style={{ width: 5697 }}
        >
          <div className="item">
            <div className="text_block">
              <span>Best Enduro</span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span>Yamaha</span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span>Ribeye</span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span> MotorBikes </span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span>Brasov</span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span>Nature</span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span>Fine Dining</span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span>BBQ</span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span> Tasty meals </span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span>Fine Dining</span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span> Best Riders </span>
              <span className="mark_star">*</span>
            </div>
          </div>
          <div className="item">
            <div className="text_block">
              <span>Good Food</span>
              <span className="mark_star">*</span>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default TextFlow;
