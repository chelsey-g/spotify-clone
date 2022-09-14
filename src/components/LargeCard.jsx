import "./LargeCard.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";

export default function LargeCard(props) {
  let { playlist } = props;

  if (playlist) {
    return "Loading...";
  }

  return (
    <div className="large-card">
      <div className="large-card-content-1">
        <div className="large-card-artist">Hello</div>
        {/* <div className="large-card-track-title">{playlist.title}</div> */}
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
