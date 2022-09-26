import "./PodcastLargeCard.css";
import PropTypes from "prop-types";

export default function PodcastLargeCard(props) {
  if (!props) {
    return "Loading...";
  }

  return (
    <div className="podcast-large-card">
      <div className="podcast-largecard-info">
        <div className="podcast-largecard-title">Your Episodes</div>
        <span className="podcast-largecard-episodes">
          {props.episodes.length} episode
        </span>
      </div>
    </div>
  );
}

PodcastLargeCard.propTypes = {
  podcast: PropTypes.object.isRequired,
};
