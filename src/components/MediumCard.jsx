import "./MediumCard.css";
import PropTypes from "prop-types";
import { useState } from "react";

export default function MediumCard({ coverUrl, name, artists }) {
  const [otherClasses, setOtherClasses] = useState("");

  const handleClick = () => {
    if (otherClasses !== "") {
      setOtherClasses("");
    } else {
      setOtherClasses("card-highlighted");
    }
  };

  return (
    <div className={`card ${otherClasses}`} onClick={handleClick}>
      <img className="playlist-img" src={coverUrl} />
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
