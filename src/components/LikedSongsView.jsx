import "./LikedSongsView.css";
import Track from "./Track";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ListItemSecondaryAction } from "@material-ui/core";

export default function LikedSongsView(props) {
  let { totalTracks, tracks, artistName } = props;

  if (!tracks) {
    return "Loading...";
  }

  return (
    <div className="album-info">
      <div className="album-header">
        <img
          alt="cover art"
          className="album-image"
          src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
        />
        <div className="album-text">
          <p>Playlist</p>
          <h1>Liked Songs</h1>
          <div className="artist-album-info">
            <img
              className="likedsongs-profpic"
              alt="profile picture"
              src="https://tinyurl.com/mwdzt52n"
            ></img>
            <span className="likedsongs-username">Chelsey Gowac •</span>
            <span className="likedsongs-track-total">{totalTracks} songs </span>
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
              {props.tracks.map((item, index) => (
                <Track
                  data={item.track}
                  key={item.id}
                  album={item.track.album}
                  date_added={item.added_at}
                  index={index + 1}
                  // art={item.images}
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
