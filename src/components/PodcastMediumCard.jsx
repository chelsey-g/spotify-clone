import "./PodcastMediumCard.css";
import PropTypes from "prop-types";

export default function PodcastMediumCard(props) {
  let { episodes } = props;

  if (!episodes) {
    return "Loading...";
  }

  return (
    <div className="medium-card">
      <div className="medium-card-header">
        <img
          className="podcast-img"
          src={props.episodes[0].show.images[0].url}
          alt="podcast art"
        />
      </div>
      <div className="podcast-name">{props.episodes[0].show.name}</div>
      <div className="podcast-artist">{props.episodes[0].show.publisher}</div>
    </div>
  );
}

PodcastMediumCard.propTypes = {
  episodes: PropTypes.array,
};
