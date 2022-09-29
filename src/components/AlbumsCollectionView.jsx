import "./AlbumsCollectionView.css";
import UserMenuButton from "./UserMenuButton";
import LibraryTabNav from "./LibraryTabNav";
import LeftArrowButton from "./LeftArrowButton";
import RightArrowButton from "./RightArrowButton";
import { PropTypes } from "prop-types";

export default function AlbumCollectionView(props) {
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
      <div className="library-view-title-header">Artists</div>
      <div className="playlist-view-content"></div>
    </div>
  );
}

ArtistsCollectionView.propTypes = {
  followedArtists: PropTypes.array,
};
