import React from "react";
import "./player.css";
import sideBar from "./sidebar/sideBar";
import Body from "../player/body/body";
import Footer from "../player/footer/footer";

function Player() {
  return (
    <div className="player">
      <div className="player__body">
        <sideBar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
