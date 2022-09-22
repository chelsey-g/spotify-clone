import "./PlaylistCollectionView.css";
import UserMenuButton from "./UserMenuButton";
import PlaylistLargeCard from "./PlaylistLargeCard";
import LibraryTabNav from "./LibraryTabNav";
import LeftArrowButton from "./LeftArrowButton";
import RightArrowButton from "./RightArrowButton";
import MediumCardCollection from "./MediumCardCollection";
import { PropTypes } from "prop-types";

export default function PlaylistCollectionView(props) {
  let leadingCard = (
    <PlaylistLargeCard
      playlistName="Liked Songs"
      likedSongs={props.likedSongs}
    />
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
      <div className="library-view-title-header">Playlists</div>
      <div className="playlist-view-content">
        <MediumCardCollection
          playlists={props.playlists}
          leadingCard={leadingCard}
        />
      </div>
    </div>
  );
}

PlaylistCollectionView.propTypes = {
  playlists: PropTypes.array,
  likedSongs: PropTypes.array,
};
