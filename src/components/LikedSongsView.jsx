// import { useState } from "react"
import "./LikedSongsView.css";
import Track from "./Track";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import MenuNav from "./MenuNav";

export default function LikedSongsView(props) {
  let { totalSongs, tracks } = props;

  if (!tracks) {
    return "Loading...";
  }

  // const year = album.release_date.split("-")[0];
  // const duration = album.tracks.items.reduce((acc, curr) => {
  //   return acc + curr.duration_ms;
  // }, 0);
  // const duration_ms = duration / 1000;
  // const duration_min = Math.floor(duration_ms / 60);
  // const duration_sec = Math.floor(duration_ms % 60);

  return (
    <div className="album-info">
      <div className="album-header">
        <img
          alt="cover art"
          className="album-image"
          src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
        />
        <div className="album-text">
          <p>Album</p>
          <h1>Liked Songs</h1>
          <div className="artist-album-info">
            {/* <span className="artist-name">
              {album.artists.map((artist) => artist.name).join(", ")} •{" "}
            </span> */}
            {/* <span className="album-year">{year} • </span> */}
            {/* <span className="track-total">
              {props.totalSongs.total} songs,{" "}
            </span> */}
            {/* <span className="album-time-total">
              {duration_min} min {duration_sec} sec
            </span> */}
          </div>
        </div>
      </div>

      <div className="album-content">
        <div className="album-options">
          <div className="album-buttons">
            <span className="album-list-btn">
              <AiFillPlayCircle color="#1DB954" size={60} />
            </span>
          </div>
        </div>

        <div className="tracks-list">
          <div className="likedsongs-tracks-header">
            <div className="track-number">#</div>
            <div className="track-title">TITLE</div>
            <div className="liked-songs-album">ALBUM</div>
            <div className="likedsongs-dateadded">DATE ADDED</div>
            <div className="track-duration">
              <AiOutlineClockCircle color="#b3b3b3" size={20} />
            </div>

            <div className="album-tracks">
              {props.tracks.map((item) => (
                <Track
                  data={item.track}
                  key={item.id}
                  album={item.track.album}
                  date_added={item.added_at}
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
