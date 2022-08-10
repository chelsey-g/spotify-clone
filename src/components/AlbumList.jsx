import "./AlbumList.css";
import Track from "./Track";
import { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { RiArrowRightSFill } from "react-icons/ri";
import MenuNav from "./MenuNav";

export default function AlbumList(props) {
  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!hidden);
  };

  return (
    <div className="album-info">
      <div className="album-header">
        <img
          className="album-image"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/In_Utero_%28Nirvana%29_album_cover.jpg/220px-In_Utero_%28Nirvana%29_album_cover.jpg"
        />
        <div className="album-text">
          <p>Album</p>
          <h1>In Utero - 20th Anniversary Remastered</h1>
          <div className="artist-album-info">
            <span className="artist-name">Nirvana • </span>
            <span className="album-year">1993 • </span>
            <span className="track-total">12 songs, </span>
            <span className="album-time-total">41 min 27 sec</span>
          </div>
        </div>
      </div>

      <div className="album-content">
        <div className="album-options">
          <div className="album-buttons">
            <span className="album-list-btn">
              <AiFillPlayCircle color="#1DB954" size={50} />
            </span>
            <span className="album-list-btn">
              <AiOutlineHeart size={50} />
            </span>
            <MenuNav className="album-list-btn" />
          </div>
        </div>

        <div className="tracks-list">
          <div className="tracks-header">
            <div className="track-number">#</div>
            <div className="track-title">TITLE</div>
            <div className="track-duration">
              <AiOutlineClockCircle color="#b3b3b3" size={20} />
            </div>

            <div className="album-tracks">
              {props.tracks.map((item) => (
                <Track data={item} key={item.number} />
              ))}
            </div>
          </div>
          <div className="album-cr">© 2013 Geffen Records</div>
        </div>
      </div>
    </div>
  );
}
