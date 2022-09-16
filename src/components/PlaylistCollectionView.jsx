import "./PlaylistCollectionView.css";
import UserMenuButton from "./UserMenuButton";
import LargeCard from "./LargeCard";
import LibraryTabNav from "./LibraryTabNav";
import LeftArrowButton from "./LeftArrowButton";
import RightArrowButton from "./RightArrowButton";
import MediumCardCollection from "./MediumCardCollection";

export default function PlaylistCollectionView(props) {
  return (
    <div className="library-view">
      <div className="library-view-header">
        <div className="left-right-arrows">
          <LeftArrowButton />
          <RightArrowButton />
          <LibraryTabNav />
          <UserMenuButton />
        </div>
      </div>
      <div className="library-view-title-header">Playlists</div>
      <LargeCard playlistName="Liked Songs" likedSongs={props.likedSongs} />
      <MediumCardCollection playlists={props.playlists} />
    </div>
  );
}
