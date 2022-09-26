import "./PodcastCollectionView.css";
import UserMenuButton from "./UserMenuButton";
import PodcastCardCollection from "./PodcastCardCollection";
import PodcastLargeCard from "./PodcastLargeCard";
import LibraryTabNav from "./LibraryTabNav";
import LeftArrowButton from "./LeftArrowButton";
import RightArrowButton from "./RightArrowButton";
import PropTypes from "prop-types";

export default function PodcastCollectionView(props) {
  let leadingPodcastCard = (
    <PodcastLargeCard podcastName="Your Episodes" episodes={props.episodes} />
  );

  return (
    <div className="library-view">
      <div className="library-view-header">
        <div className="playlist-arrows-nav">
          <LeftArrowButton />
          <RightArrowButton />
        </div>
        <div className="playlist-tab-nav">
          <LibraryTabNav />
        </div>
        <UserMenuButton />
      </div>
      <div className="library-view-title-header">Podcasts</div>
      <div className="podcast-card">
        <PodcastCardCollection
          episodes={props.episodes}
          leadingPodcastCard={leadingPodcastCard}
        />
      </div>
    </div>
  );
}

PodcastCollectionView.propTypes = {
  episodes: PropTypes.array,
};
