import "./AlbumsCollectionView.css";
import UserMenuButton from "./UserMenuButton";
import LibraryTabNav from "./LibraryTabNav";
import LeftArrowButton from "./LeftArrowButton";
import RightArrowButton from "./RightArrowButton";
import { PropTypes } from "prop-types";
import MediumCardCollection from "./MediumCardCollection";

export default function AlbumsCollectionView(props) {
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
      <div className="library-view-title-header">Albums</div>
      <div className="playlist-view-content">
        <MediumCardCollection playlists={props.savedAlbums} />
      </div>
    </div>
  );
}
