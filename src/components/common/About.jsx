import React, { Component } from "react";
import about from "../../images/banner/about.jpg";

class About extends Component {
  render() {
    return (
      <div id="about-section">
        <div className="container">
          <div className="row gap-2dot4">
            <div className="col-lg-6 col-md-12">
              <img src={about} alt="" />
            </div>
            <div className="col-lg-6 col-md-12 col-text">
              <h4>
                <span></span> GIỚI THIỆU
              </h4>
              <h1>miracle luxury hotel</h1>
              <h1 className="heading">NHA TRANG</h1>
              <p>
                Khách sạn Miracle Luxury, nơi quy tụ không gian sang trọng, đẳng
                cấp
              </p>
              <ul>
                <li>
                  <i className="fa fa-gift" aria-hidden="true"></i>
                  <p>
                    Nơi lưu giữ những trải nghiệm, điểm đến an toàn và sự hài
                    lòng của quý khách
                  </p>
                </li>
                <li>
                  <i className="fa fa-gift" aria-hidden="true"></i>
                  <p>
                    Check-in với các hạng phòng sang trọng, đầy đủ các tiện
                    nghi, ban công hướng biển…
                  </p>
                </li>
                <li>
                  <i className="fa fa-gift" aria-hidden="true"></i>
                  <p>
                    Tọa lạc ngay trung tâm thành phố, gần các trung tâm vui chơi
                    giải trí, mua sắm và ăn uống...
                  </p>
                </li>
                <li>
                  <i className="fa fa-gift" aria-hidden="true"></i>
                  <p>
                    Miễn phí tận hưởng các Dịch vụ tiện ích Khách sạn: Hồ bơi,
                    Gym, Xông hơi, Xông khô, Wifi…
                  </p>
                </li>
                <li>
                  <i className="fa fa-gift" aria-hidden="true"></i>
                  <p>
                    Miễn phí trang trí phòng Honey moon dành cho các cặp đôi
                  </p>
                </li>
                <li>
                  <i className="fa fa-gift" aria-hidden="true"></i>
                  <p>
                    Hỗ trợ cho khách hàng nhận phòng sớm và trả phòng trễ tùy
                    theo tình trạng phòng có sẵn.
                  </p>
                </li>
              </ul>
              <button className="btn">
                XEM THÊM{" "}
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
