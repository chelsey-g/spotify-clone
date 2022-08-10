import "./MenuNav.css";
import { RiArrowRightSFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";

export default function MenuNav(props) {
  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!hidden);
  };

  return (
    <div className="menu-button">
      <BsThreeDots size={50} onClick={handleClick} />
      {!hidden && (
        <nav className="menu album-menu-content">
          <a>Go to artist radio</a>
          <a>Add to Your Library</a>
          <a className="playlist-arrow-nav">
            Add to playlist
            <RiArrowRightSFill className="playlist-arrow" />
            <nav className="menu playlist-arrow-nav-cont">
              <a>Find a playlist</a>
              <a>Create a playlist</a>
              <a>My Playlist #2</a>
              <a>Liked from Radio</a>
            </nav>
          </a>
          <a className="share-arrow-nav">
            Share
            <RiArrowRightSFill classname="share-arrow" />
            <nav className="menu share-arrow-nav-cont">
              <a>Copy Album Link</a>
              <a>Embed Album</a>
            </nav>
          </a>
          <a>Open in Desktop App</a>
        </nav>
      )}
    </div>
  );
}
