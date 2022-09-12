import "./LargeCard.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getLikedSongs } from "../util/spotify";

export default function LargeCard(props) {
  const [likedSongs, setLikedSongs] = useState(null);

  useEffect(() => {
    getLikedSongs()
      .then((data) => {
        console.log("data loaded");
        setLikedSongs(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!likedSongs) {
    return "Loading...";
  }

  return (
    <div className="large-card">
      <div className="large-card-content-1">
        <div className="large-card-artist">
          {likedSongs.items[0].track.artists[0].name}
        </div>
        <div className="large-card-track-title">
          {likedSongs.items[0].track.name} •
        </div>
        <div classname="large-card-content-2">
          <span className="large-card-playlist-title">Liked Songs</span>
          <span className="large-card-playlist-track-count">164 songs</span>
        </div>
      </div>
    </div>
  );
}

LargeCard.propTypes = {
  playlist: PropTypes.object.isRequired,
};
