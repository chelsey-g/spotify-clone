import "./PlaylistCollectionView.css";
import UserMenuButton from "./UserMenuButton";
import LargeCard from "./LargeCard";
import LibraryTabNav from "./LibraryTabNav";
import LeftArrowButton from "./LeftArrowButton";
import RightArrowButton from "./RightArrowButton";
import MediumCardCollection from "./MediumCardCollection";

export default function PlaylistCollectionView(props) {
  let leadingCard = (
    <LargeCard playlistName="Liked Songs" likedSongs={props.likedSongs} />
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
