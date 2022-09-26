import PodcastMediumCard from "./PodcastMediumCard";
import "./PodcastCardCollection.css";
import PropTypes from "prop-types";

export default function PodcastCardCollection({
  episodes,
  leadingPodcastCard,
}) {
  return (
    <div className="playlists">
      {leadingPodcastCard}
      <PodcastMediumCard key={episodes.id} episodes={episodes} />
    </div>
  );
}

PodcastCardCollection.propTypes = {
  episodes: PropTypes.array,
  leadingPodcastCard: PropTypes.element,
};
