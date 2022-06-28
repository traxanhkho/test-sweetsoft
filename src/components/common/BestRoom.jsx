import React, { Component } from "react";
import RoomCard from "./RoomCard";
import r1 from "../../images/rooms/1.jpg";
import r2 from "../../images/rooms/2.jpg";
import r3 from "../../images/rooms/3.jpg";
import r4 from "../../images/rooms/4.jpg";
import r5 from "../../images/rooms/5.jpg";
import r6 from "../../images/rooms/6.jpg";

class BestRoom extends Component {
  render() {
    return (
      <div id="room-section">
        <div className="container">
          <h4>
            <span></span> KHÁM PHÁ NGAY
          </h4>
          <h1>PHÒNG TỐT NHẤT</h1>
          <div className="row row-content">
            <RoomCard img={r1} />
            <RoomCard img={r2} />
            <RoomCard img={r3} />
            <RoomCard img={r4} />
            <RoomCard img={r5} />
            <RoomCard img={r6} />
          </div>
        </div>
      </div>
    );
  }
}

export default BestRoom;
