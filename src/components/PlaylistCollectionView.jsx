import "./PlaylistCollectionView.css";
import UserMenuButton from "./UserMenuButton";
import { Link } from "react-router-dom";
import LargeCard from "./LargeCard";
// import MediumCardCollection from "./MediumCardCollection";

export default function LibraryView(props) {
  let { playlist } = props;

  if (!playlist) {
    return "Loading...";
  }

  return (
    <div className="library-view">
      <div className="library-view-tabs">
        <div className="library-playlist-tab">Playlists</div>
        <div className="library-podcast-tab">Podcasts</div>
        <div className="library-artist-tab">Artists</div>
        <div className="library-album-tab">Albums</div>
      </div>
      <div className="library-view-header">Playlists</div>
      <div className="library-view-content">
        <LargeCard />
        {/* <MediumCardCollection /> */}
      </div>
    </div>
  );
}

// page gets data
// page loads page view which is made of a bunch of components
// pass data into all the components

// presentational components
// container components
