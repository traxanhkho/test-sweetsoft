import React, { Component } from "react";

export default class RoomCard extends Component {
  render() {
    return (
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card-room">
          <div className="image">
            <img src={this.props.img} alt="" />
          </div>
          <div className="title">
            <h2>SUPERIOR</h2>
            <ul>
              <li>
                <i className="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
          <div className="price">
            <span>$1,200,000 VND</span>
            <h2>$1,200,000 USD</h2>
          </div>
          <div className="info">
            <span>
              <i className="fa fa-bed" aria-hidden="true"></i> King Bed
            </span>
            <span>
              <i className="fa fa-bath" aria-hidden="true"></i> 2 Bồn Tắm
            </span>
            <span>
              <i className="fa fa-arrows" aria-hidden="true"></i> 30 M2
            </span>
          </div>
          <button className="btn">
            ĐẶT PHÒNG <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}
