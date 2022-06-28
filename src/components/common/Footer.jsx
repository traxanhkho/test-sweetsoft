import React, { Component } from "react";
import logo from "../../images/logo/footer.png";
import qr from "../../images/logo/qr-code.jpg";

class Footer extends Component {
  render() {
    return (
      <div id="footer-section">
        <div className="bg-footer">
          <div className="container">
            <div className="row footer-above">
              <div className="col-12 col-lg-3 mt-30">
                <img src={logo} alt="" />
                <div className="list-social">
                  <button>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </button>
                  <button>
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  </button>
                  <button>
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div className="col-12 col-lg-3 mt-30">
                <div className="title">
                  <h2>LIÊN KẾT NHANH</h2>
                  <div className="horizontal">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <span></span>
                  </div>
                </div>
                <div className="row title_row">
                  <div className="col-12 col-lg-6">
                    <ul>
                      <li>
                        <i className="fa fa-circle" aria-hidden="true"></i>{" "}
                        Phòng
                      </li>
                      <li>
                        <i className="fa fa-circle" aria-hidden="true"></i>{" "}
                        Khuyến Mãi
                      </li>
                      <li>
                        <i className="fa fa-circle" aria-hidden="true"></i> Hình
                        Ảnh
                      </li>
                      <li>
                        <i className="fa fa-circle" aria-hidden="true"></i> Điểm
                        Đến
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-6">
                    <ul>
                      <li>
                        <i className="fa fa-circle" aria-hidden="true"></i> Giới
                        Thiệu
                      </li>
                      <li>
                        <i className="fa fa-circle" aria-hidden="true"></i> Dịch
                        Vụ
                      </li>
                      <li>
                        <i className="fa fa-circle" aria-hidden="true"></i> Tin
                        Tức
                      </li>
                      <li>
                        <i className="fa fa-circle" aria-hidden="true"></i> Liên
                        Hệ
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mt-30">
                <div className="contact title">
                  <h2>LIÊN HỆ</h2>
                  <div className="horizontal">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <span></span>
                  </div>
                  <ul>
                    <li>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <p>
                        23 Hoàng Diệu,Vĩnh Hòa,Thành phố Nha Trang, Khánh Hòa
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <p>0258 3909 666</p>
                    </li>
                    <li>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <p>sales.miracleluxuryhotel@gmail.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row footer-below">
              <div className="col-12 col-lg-4 footer-below_left">
                <p>
                  <i className="fa fa-copyright" aria-hidden="true"></i> 2022
                  Miracle Luxury Hotel <span>Nha Trang</span>
                </p>
              </div>
              <div className="col-12 col-lg-4 footer-below_qrcode">
                <img src={qr} alt="" />
              </div>
              <div className="col-12 col-lg-4 footer-below_right">
                <p>
                  Thiết kế và phát triển bởi <span>SweetSoft JSC</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
