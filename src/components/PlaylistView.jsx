import "./PlaylistView.css";
import Track from "./Track";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import MenuNav from "./MenuNav";
import PropTypes from "prop-types";

export default function PlaylistView(props) {
  let { playlist, tracks } = props;

  if (!playlist || !tracks) {
    return "Loading...";
  }

<<<<<<< HEAD
  // // TODO: learn more about this
  // let artists = playlist.tracks.items
  //   .map((item) => item.track.artists.map((artist) => artist.name))
  //   .flat()
  //   .join(", ");

  // get year from abum release date
  // const year = playlist.release_date.split("-")[0];

=======
>>>>>>> e692defc6626807944408be990c609dfa2e338ef
  function formatDuration(duration) {
    var seconds = Math.floor((duration / 1000) % 60);
    var minutes = Math.floor((duration / (1000 * 60)) % 60);
    var hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    var result = "";
    if (hours) {
      result += `${hours} hours `;
    }

    if (minutes) {
      result += `${minutes} mins `;
    }

    if (seconds) {
      result += `${seconds} secs`;
    }

    return result;
  }

  const duration_ms = playlist.tracks.items.reduce((acc, curr) => {
    return acc + curr.track.duration_ms;
  }, 0);

  let duration = formatDuration(duration_ms);

  return (
    <div className="album-info">
      <div className="album-header">
        <img
          alt="cover art"
          className="album-image"
          src={playlist.images[0].url}
        />
        <div className="playlist-album-text">
          <h3>Playlist</h3>
          <h1>{playlist.name}</h1>
          <p>
            This header is used for the description of the playlist
            <span className="and-more-link"> and more</span>
          </p>
          <div className="artist-album-info">
            <span className="playlist-creator">
              {playlist.owner.display_name} •
            </span>
            {/* TODO: look into the likes below */}
            <span className="playlist-likes">4,442,097 likes • </span>
            <span className="playlist-track-total">
              {playlist.tracks.total} songs •{" "}
            </span>
            <span className="album-time-total">{duration}</span>
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
          <div className="playlist-tracks-header">
            <div className="track-number">#</div>
            <div className="track-title">TITLE</div>
            <div className="plylist-album-title">ALBUM</div>
            <div className="date-added">DATE ADDED</div>
            <div className="track-duration">
              <AiOutlineClockCircle color="#b3b3b3" size={20} />
            </div>

            <div className="album-tracks">
              {props.tracks.items.map((item, index) => (
                <Track
                  data={item.track}
                  key={item.track.id}
                  album={item.track.album}
                  index={index + 1}
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

PlaylistView.propTypes = {
  playlist: PropTypes.object,
  tracks: PropTypes.object,
};
