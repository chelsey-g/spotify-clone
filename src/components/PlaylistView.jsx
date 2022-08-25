// import { useState } from "react"
import "./PlaylistView.css";
import Track from "./Track";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
// import { BsThreeDots } from "react-icons/bs"
import { AiOutlineClockCircle } from "react-icons/ai";
// import { RiArrowRightSFill } from "react-icons/ri"
import MenuNav from "./MenuNav";

export default function PlaylistView(props) {
  let { playlist, tracks } = props;

  if (!playlist || !tracks) {
    return "Loading...";
  }

  // TODO: learn more about this
  let artists = playlist.tracks.items
    .map((item) => item.track.artists.map((artist) => artist.name))
    .flat()
    .join(", ");

  // get year from abum release date
  // const year = playlist.release_date.split("-")[0];
  // const duration = playlist.tracks.items.reduce((acc, curr) => {
  //   return acc + curr.duration_ms;
  // }, 0);
  // const duration_ms = Math.floor(duration / 1000);
  // const duration_min = Math.floor(duration_ms / 1000);
  // const duration_sec = Math.floor(duration_ms / 1000) % 60;

  return (
    <div className="album-info">
      <div className="album-header">
        <img
          alt="cover art"
          className="album-image"
          src={playlist.images[0].url}
        />
        <div className="album-text">
          <h3>Playlist</h3>
          <h1>{playlist.name}</h1>
          {/* TODO: make this actually work... more complex */}
          <p>
            This header is used for the description of the playlist
            <span className="and-more-link"> and more</span>
          </p>
          {/* <h3>{artists}</h3> */}
          {/* <div dangerouslySetInnerHTML={{ __html: playlist.description }} /> */}
          <div className="artist-album-info">
            <span className="playlist-creator">
              {playlist.owner.display_name} •
            </span>
            {/* TODO: look into the likes below */}
            <span className="playlist-likes">4,442,097 likes • </span>
            <span className="track-total">{playlist.tracks.total} songs, </span>
            {/* TODO: ??? look into this */}
            {/* <span className="album-time-total">
              {duration_min} min {duration_sec} sec */}
            {/* </span> */}
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
            <div className="plylist-album-title">ALBUM</div>
            <div className="track-duration">
              <AiOutlineClockCircle color="#b3b3b3" size={20} />
            </div>

            <div className="album-tracks">
              {props.tracks.items.map((item) => (
                <Track
                  data={item.track}
                  key={item.track.id}
                  album={item.track.album}
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
