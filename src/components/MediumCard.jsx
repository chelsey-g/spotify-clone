import "./MediumCard.css";
import PropTypes from "prop-types";
// import { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { PlayArrow } from "@material-ui/icons";

export default function MediumCard({ coverUrl, name, artists }) {
  // const [otherClasses, setOtherClasses] = useState("");

  // const handleClick = () => {
  //   if (otherClasses !== "") {
  //     setOtherClasses("");
  //   } else {
  //     setOtherClasses("card-highlighted");
  //   }
  // };

  return (
    <div className="medium-card">
      <div className="medium-card-header">
        <img className="playlist-img" src={coverUrl} />
        <AiFillPlayCircle
          color="#1DB954"
          size={50}
          className="play-btn"
        ></AiFillPlayCircle>
      </div>
      <div className="playlist-name">{name}</div>
      <div className="card-artist">{artists.join()}</div>
    </div>
  );
}

MediumCard.propTypes = {
  coverUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  artists: PropTypes.array.isRequired,
};
