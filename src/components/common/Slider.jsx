import React, { Component } from "react";
import s1 from "../../images/slide/1.jpg";
import s2 from "../../images/slide/2.jpg";
import s3 from "../../images/slide/3.jpg";
import s4 from "../../images/slide/4.jpg";
import s5 from "../../images/slide/5.jpg";

class Slider extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          id="slider-section"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={s1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={s2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={s3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={s4} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={s5} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="#slider-section"
            data-slide="prev"
          >
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-target="#slider-section"
            data-slide="next"
          >
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>

          <div className="box-info container">
            <div className="content">
              <h2>CHÀO ĐÓN TUẦN LỄ KHAI TRƯƠNG</h2>
              <h1>GIẢM GIÁ CỰC SỐC LÊN ĐẾN 50%</h1>
              <p>
                Miễn phí tận hưởng các dịch vụ tiện ích khách sạn: Hồ bơi ,Gym
                ,Xông hơi, Wifi...
              </p>
              <p>Miễn phí trang trí phòng Honey moon dành cho các cặp đôi</p>
              <div className="box-info_button">
                <button className="btn">Khám phá</button>
                <button className="btn outline">gọi ngay</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Slider;
