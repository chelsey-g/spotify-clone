import "./PlaylistCollectionView.css";
import UserMenuButton from "./UserMenuButton";
import LargeCard from "./LargeCard";
import LibraryTabNav from "./LibraryTabNav";
import LeftArrowButton from "./LeftArrowButton";
import RightArrowButton from "./RightArrowButton";
import { PropTypes } from "prop-types";

export default function PodcastCollectionView(props) {
  //   let leadingCard = (
  //     // <LargeCard playlistName="Liked Songs" likedSongs={props.likedSongs} />
  //   );

  return (
    <div className="library-view">
      <div className="library-view-header">
        <div className="playlist-arrows-nav"></div>
        <div className="playlist-tab-nav"></div>
      </div>
      <div className="library-view-title-header">Podcasts</div>
      <div className="playlist-view-content"></div>
    </div>
  );
}

PodcastCollectionView.PropTypes = {
  podcasts: PropTypes.array,
};
