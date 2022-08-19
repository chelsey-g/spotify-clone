import "./MainBody.css";
import React from "react";
// import PlaylistCards from "./PlaylistCards";
import MediumCardCollection from "./MediumCardCollection";
// import SmallCardCollection from "./SmallCardCollection";

export default function MainBody({ jumpBackInPlaylist, forYouPlaylist }) {
  return (
    <div className="main-header">
      {/* <PlaylistCards />
      <span className="header-title">Good morning</span>
      <div className="main-playlist-section">
        <SmallCardCollection playlists={jumpBackInPlaylist} />
      </div>
      <div className="main-playlist-section">
        <SmallCardCollection playlists={forYouPlaylist} />
      </div> */}

      <div className="main-dashboard-section">
        <div className="header-title-2">Good afternoon</div>
        <div className="main-dashboard-section">
          <MediumCardCollection playlists={jumpBackInPlaylist} />
        </div>
        <div className="dashboard-section-2">
          <span className="header-title-3">Good evening</span>
          <MediumCardCollection playlists={jumpBackInPlaylist} />
        </div>
      </div>
    </div>
  );
}
