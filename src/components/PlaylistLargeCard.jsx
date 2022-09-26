import "./PlaylistLargeCard.css";
import PropTypes from "prop-types";

export default function PlaylistLargeCard(props) {
  if (!props) {
    return "Loading...";
  }

  return (
    <div className="playlist-large-card">
      <div className="playlist-largecard-track-info">
        {props.likedSongs.map((song) => (
          <span className="playlist-largecard-artistname">
            {song.track.artists[0].name}
            <span className="playlist-largecard-trackname">
              {song.track.name}
            </span>{" "}
            •
          </span>
        ))}
      </div>
      <div className="playlist-largecard-playlistinfo">Liked Songs</div>
      <div className="playlist-largecard-totaltracks">
        {props.likedSongs.length} liked songs
      </div>
    </div>
  );
}

PlaylistLargeCard.propTypes = {
  playlist: PropTypes.object.isRequired,
};
