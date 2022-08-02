import "./MainBody.css";
import React from "react";
import SmallCard from "./SmallCard";
import PlaylistCards from "./PlaylistCards";
import MediumCard from "./MediumCard";
import SmallCardCollection from "./SmallCardCollection";

export default function MainBody({ jumpBackInPlaylist, forYouPlaylist }) {
  //   let { uniquelyyourPlaylist, goodMorningPlaylist } = SpotifyClient('https://spotify/place/stuff');

  return (
    <div className="main-header">
      <PlaylistCards />
      <span className="header-title">Good morning</span>

      <h1>Jump Back In</h1>
      <div className="main-playlist-section">
        <SmallCardCollection playlists={jumpBackInPlaylist} />
      </div>

      <h1>For You</h1>
      <div className="main-playlist-section">
        <SmallCardCollection playlists={forYouPlaylist} />
      </div>

      <div className="main-dashboard-section">
        <div className="header-title-2">Good afternoon</div>
        <div className="main-dashboard-section">
          {/* <MediumCard coverUrl={coverUrl} name={name} artists={artists} />
          <MediumCard coverUrl={coverUrl} name={name} artists={artists} />
          <MediumCard coverUrl={coverUrl} name={name} artists={artists} /> */}
        </div>
      </div>
    </div>
  );
}
