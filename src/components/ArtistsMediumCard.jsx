import "./ArtistsMediumCard.css";
import PropTypes from "prop-types";
import { AiFillPlayCircle } from "react-icons/ai";

export default function ArtistsMediumCard(props) {
  if (!props) {
    return "Loading, loser...";
  }

  let artistCoverArt = props.artist.images[1].url;

  return (
    <div className="artists-medium-card">
      <div className="artists-medium-card-header">
        <img
          className="artists-cover-img"
          src={artistCoverArt}
          alt="artist art"
        />
        <AiFillPlayCircle
          color="#1DB954"
          size={50}
          className="play-btn"
        ></AiFillPlayCircle>
      </div>
      <div className="artists-card-artist">{props.artist.name}</div>
      <div className="artists-card-type">Artist</div>
    </div>
  );
}

ArtistsMediumCard.propTypes = {
  artist: PropTypes.object.isRequired,
};
