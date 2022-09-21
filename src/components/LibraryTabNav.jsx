import "./LibraryTabNav.css";
import { Link } from "react-router-dom";

export default function LibraryTabNav(props) {
  return (
    <div className="library-view-tabs">
      <div className="library-playlist-tab">Playlists</div>
      <div className="library-podcast-tab">
        <Link to="collection/podcasts">Podcasts</Link>
      </div>
      <div className="library-artist-tab">Artists</div>
      <div className="library-album-tab">Albums</div>
    </div>
  );
}
