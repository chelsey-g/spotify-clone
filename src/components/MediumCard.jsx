import "./MediumCard.css";
import PropTypes from "prop-types";
// import { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function MediumCard(props) {
  let { playlist } = props;
  // const [otherClasses, setOtherClasses] = useState("");

  // const handleClick = () => {
  //   if (otherClasses !== "") {
  //     setOtherClasses("");
  //   } else {
  //     setOtherClasses("card-highlighted");
  //   }
  // };

  if (!playlist) {
    return "Loading...";
  }

  return (
    <Link to={`/albums/${playlist.id}`}>
      <div className="medium-card">
        <div className="medium-card-header">
          <img className="playlist-img" src={playlist.images[1].url} alt="playlist art" />
          <AiFillPlayCircle
            color="#1DB954"
            size={50}
            className="play-btn"
          ></AiFillPlayCircle>
        </div>
        <div className="playlist-name">{playlist.name}</div>
        <div className="card-artist">{playlist.artists.map((artist) => artist.name).join(", ")}</div>
      </div>
    </Link>
  );
}

MediumCard.propTypes = {
  playlist: PropTypes.object.isRequired
};
