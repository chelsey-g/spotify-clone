import "./Track.css";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { RiArrowRightSFill } from "react-icons/ri";
import { startPlayback } from "../util/spotify";
import PropTypes from "prop-types";

export default function Track(props) {
  const [hidden, setHidden] = useState(true);

  let date = new Date(props.date_added);
  let dateFormat = date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const handleClick = () => {
    setHidden(!hidden);
  };

  const play = (uri) => {
    startPlayback(uri);
  };

  let duration = props.data.duration_ms / 1000;
  let duration_min = Math.floor(duration / 60);
  let duration_sec = Math.floor(duration % 60);
  duration_min = duration_min < 10 ? +duration_min : duration_min;
  duration_sec = duration_sec < 10 ? "0" + duration_sec : duration_sec;
  duration = duration_min + ":" + duration_sec;

  return (
    <div className="album-tracks-info" onClick={() => play(props.data.uri)}>
      <div className="album-track-number">{props.index}</div>
      <div className="album-art-track">{props.images}</div>
      <div className="album-track-name">
        {props.data.name}
        <span className="album-track-artist">{props.data.artist}</span>
        <div className="artist-name-track">{props.album.artists[0].name}</div>
      </div>
      <div className="album-name">{props.album.name}</div>
      <div className="likedsongs-dateadded">{dateFormat}</div>
      <div className="album-track-duration">{duration} </div>
      <div className="album-track-menu">
        <BsThreeDots onClick={handleClick} className="track-button" />
        {!hidden && (
          <nav className="track-menu album-track-menu-content">
            <a>Add to queue</a>
            <a>Go to song radio</a>
            <a>Go to artist</a>
            <a>Show credits</a>
            <a>Save to your Liked Songs</a>
            <a className="track-arrow-nav">
              Add to playlist
              <RiArrowRightSFill className="track-arrow" />
              <nav className="track-menu track-nav-cont">
                <a>Find a playlist</a>
                <a>Create a playlist</a>
                <a>My Playlist #2</a>
                <a>Liked from Radio</a>
              </nav>
            </a>
            <a className="track-share-arrow-nav">
              Share
              <RiArrowRightSFill className="track-share-arrow" />
              <nav className="track-menu track-share-arrow-nav-cont">
                <a>Copy Song Link</a>
                <a>Embed Track</a>
              </nav>
            </a>
            <a>Open in Desktop App</a>
          </nav>
        )}
      </div>
    </div>
  );
}

Track.propTypes = {
  data: PropTypes.object.isRequired,
  album: PropTypes.object.isRequired,
  date_added: PropTypes.string.isRequired,
};
