import "./LargeCard.css";
import PropTypes from "prop-types";

export default function LargeCard(props) {
  if (!props) {
    return "Loading...";
  }

  return (
    <div className="large-card">
      <div className="track-info">
        {props.likedSongs.map((song) => (
          <span className="largecard-artistname">
            {song.track.artists[0].name}
            <span className="largecard-trackname">{song.track.name}</span> •
          </span>
        ))}
      </div>
      <div className="largecard-playlistinfo">Liked Songs</div>
      <div className="largecard-totaltracks">
        {props.likedSongs.length} liked songs
      </div>
    </div>
  );
}

LargeCard.propTypes = {
  playlist: PropTypes.object.isRequired,
};
