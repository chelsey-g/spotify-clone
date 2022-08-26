// import { useState } from "react"
import "./AlbumView.css";
import Track from "./Track";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
// import { BsThreeDots } from "react-icons/bs"
import { AiOutlineClockCircle } from "react-icons/ai";
// import { RiArrowRightSFill } from "react-icons/ri"
import MenuNav from "./MenuNav";

export default function AlbumView(props) {
  let { album, tracks } = props;
  // const [hidden, setHidden] = useState(true)

  // const handleClick = () => {
  //   setHidden(!hidden)
  // }

  if (!album || !tracks) {
    return "Loading...";
  }

  // get year from abum release date
  const year = album.release_date.split("-")[0];
  const duration = album.tracks.items.reduce((acc, curr) => {
    return acc + curr.duration_ms;
  }, 0);
  const duration_ms = duration / 1000;
  const duration_min = Math.floor(duration_ms / 60);
  const duration_sec = Math.floor(duration_ms % 60);

  return (
    <div className="album-info">
      <div className="album-header">
        <img
          alt="cover art"
          className="album-image"
          src={album.images[1].url}
        />
        <div className="album-text">
          <p>Album</p>
          <h1>{album.name}</h1>
          <div className="artist-album-info">
            <span className="artist-name">
              {album.artists.map((artist) => artist.name).join(", ")} •{" "}
            </span>
            <span className="album-year">{year} • </span>
            <span className="track-total">{album.total_tracks} songs, </span>
            <span className="album-time-total">
              {duration_min} min {duration_sec} sec
            </span>
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
              {props.tracks.map((item, index) => (
                <Track
                  data={item}
                  key={item.id}
                  album={album}
                  index={index + 1}
                />
              ))}
            </div>
          </div>
          <div className="album-cr">© 2013 Geffen Records</div>
        </div>
      </div>
    </div>
  );
}
